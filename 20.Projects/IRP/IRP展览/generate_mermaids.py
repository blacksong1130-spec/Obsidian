import os
import subprocess

output_dir = '20.Projects/IRP/IRP展览/Overleaf_Images'
diagrams = [
    'Strategic_Logic_Chain',
    'Disciplinary_Map',
    'Dual_Track_Methodology',
    'Project_Plan'
]

for diag in diagrams:
    mmd_file = f'20.Projects/IRP/IRP展览/{diag}.mmd'
    png_file = os.path.join(output_dir, f'{diag}.png')
    
    print(f'Generating Ultra-HD PNG for {diag}...')
    # Use -s 4 for 4x resolution, -b white for a solid white background (not transparent)
    subprocess.run(['npx', '-y', '@mermaid-js/mermaid-cli', '-i', mmd_file, '-o', png_file, '-s', '4', '-b', 'white'], check=True, shell=True)

print('All Mermaid diagrams successfully converted to Ultra-HD PNG!')