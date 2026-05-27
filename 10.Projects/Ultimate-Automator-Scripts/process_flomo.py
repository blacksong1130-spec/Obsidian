import os
import re
import shutil

flomo_dir = r"D:\iCloudDrive\.obsidian\IRP Management\flomo"
permanent_dir = r"D:\iCloudDrive\.obsidian\IRP Management\50.Knowledge\Permanent"
archives_dir = r"D:\iCloudDrive\.obsidian\IRP Management\60.Archives\2026"

os.makedirs(permanent_dir, exist_ok=True)
os.makedirs(archives_dir, exist_ok=True)

integrated = {}
linked = []
deleted = []

# Mappings
theme_map = {
    '茶': ('Tea-Reflections.md', permanent_dir),
    '他者': ('The-Other.md', permanent_dir),
    '宇宙生命': ('Universe-and-Life.md', permanent_dir),
    '父母': ('Family-Reflections.md', permanent_dir),
    '妈妈': ('Family-Reflections.md', permanent_dir),
    '亲人': ('Family-Reflections.md', permanent_dir),
    '电影': ('Movie-Reflections.md', permanent_dir),
    '紧急': ('Flomo-Tasks-Archive.md', archives_dir)
}

files = [f for f in os.listdir(flomo_dir) if f.endswith('.md')]

consolidated_content = {}

for f in files:
    filepath = os.path.join(flomo_dir, f)
    parts = f.replace('.md', '').split('_')
    
    date = parts[0] if len(parts) > 0 else 'Unknown'
    theme = parts[1] if len(parts) > 1 else 'None'
    snippet = parts[2] if len(parts) > 2 else ''
    
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read().strip()
    
    if theme in theme_map:
        target_file, target_dir = theme_map[theme]
        target_path = os.path.join(target_dir, target_file)
        
        if target_path not in consolidated_content:
            consolidated_content[target_path] = []
            
        entry = f'> [!quote] {date}\n{content}\n\n---\n'
        consolidated_content[target_path].append(entry)
        
        if target_file not in integrated:
            integrated[target_file] = []
        integrated[target_file].append(f)
        deleted.append(filepath)
        
    else:
        # Standalone notes
        actual_theme = theme
        if theme.lower() in ['hsbc', '汇丰']:
            actual_theme = 'HSBC'
            
        new_filename = f'{actual_theme} - {snippet}.md' if snippet else f'{actual_theme}.md'
        # sanitize filename
        new_filename = re.sub(r'[\\/*?:"<>|]', '', new_filename)
        if new_filename == '.md':
            new_filename = f'Standalone_{date}.md'
            
        new_filepath = os.path.join(permanent_dir, new_filename)
        
        # append backlink to content
        new_content = f'{content}\n\n[[{actual_theme}]]'
        
        with open(new_filepath, 'w', encoding='utf-8') as outfile:
            outfile.write(new_content)
            
        linked.append({'original': f, 'new': new_filename, 'theme': actual_theme})
        deleted.append(filepath)

# Write consolidated files
for target_path, entries in consolidated_content.items():
    mode = 'a' if os.path.exists(target_path) else 'w'
    with open(target_path, mode, encoding='utf-8') as outfile:
        if mode == 'a':
            outfile.write('\n\n')
        outfile.write('\n'.join(entries))

# Delete original files
for filepath in deleted:
    os.remove(filepath)

print('INTEGRATED:')
for k, v in integrated.items():
    print(f'{k}: {len(v)} files')
print('\nLINKED & MOVED:')
for item in linked:
    print(f"{item['original']} -> {item['new']} (Linked: [[{item['theme']}]])")
print(f'\nDELETED {len(deleted)} files from flomo/.')
