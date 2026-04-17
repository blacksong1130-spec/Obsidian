import os
import hashlib

def deduplicate_flomo(directory):
    files = [f for f in os.listdir(directory) if f.endswith('.md')]
    content_hashes = {}
    duplicates = []
    
    for f in files:
        filepath = os.path.join(directory, f)
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as file:
            content = file.read().strip()
            # Flomo notes might have tags or something, let's just hash the whole file
            # or maybe just the content ignoring the title.
            content_hash = hashlib.md5(content.encode('utf-8')).hexdigest()
            
            if content_hash in content_hashes:
                duplicates.append(filepath)
            else:
                content_hashes[content_hash] = filepath
                
    for dup in duplicates:
        os.remove(dup)
        
    print(f"Removed {len(duplicates)} duplicate notes.")

if __name__ == "__main__":
    flomo_dir = r"D:\iCloudDrive\.obsidian\IRP Management\flomo"
    deduplicate_flomo(flomo_dir)
