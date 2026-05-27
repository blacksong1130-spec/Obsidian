import matplotlib.pyplot as plt
import numpy as np
import os

output_dir = '20.Projects/IRP/IRP展览/Overleaf_Images'
os.makedirs(output_dir, exist_ok=True)

# Global settings for academic style
plt.rcParams.update({
    'font.family': 'sans-serif',
    'font.size': 14,
    'axes.labelsize': 16,
    'axes.titlesize': 18,
    'xtick.labelsize': 14,
    'ytick.labelsize': 14,
    'figure.autolayout': True,
    'axes.spines.top': False,
    'axes.spines.right': False
})

def save_fig(fig, filename):
    png_path = os.path.join(output_dir, f'{filename}.png')
    fig.savefig(png_path, dpi=600, bbox_inches='tight', transparent=False, facecolor='white')

# Chart 1: App Retention
fig, ax = plt.subplots(figsize=(10, 6))
days = ['Day 1', 'Day 7', 'Day 14', 'Day 28', 'Day 30']
retention = [26, 15, 8, 10, 3]
ax.plot(days, retention, marker='D', markersize=10, color='#F4664A', linewidth=3)
for i, v in enumerate(retention):
    ax.text(i, v + 1.5, f'{v}%', ha='center', va='bottom', color='#333', fontweight='bold')
ax.set_ylim(0, 35)
ax.set_ylabel('Retention Rate (%)', labelpad=15)
ax.set_title('Health & Fitness App Retention Curve (%)', pad=20)
ax.grid(axis='y', linestyle='--', alpha=0.7)
save_fig(fig, 'Chart_1_App_Retention')
plt.close(fig)

# Chart 2: CGM Market Transformation
fig, ax = plt.subplots(figsize=(10, 6))
years = ['2024', '2025', '2026', '2027', '2028', '2030', '2034']
market = [370.7, 433.3, 506.6, 592.2, 692.2, 945.9, 1765.5]
ax.plot(years, market, marker='o', markersize=8, color='#5B8FF9', linewidth=3)
for i, v in enumerate(market):
    ax.text(i, v + 70, f'${v}', ha='center', va='bottom', color='#333', fontsize=12, fontweight='bold')
ax.set_ylabel('Market Size (USD Millions)', labelpad=15)
ax.set_title('OTC CGM Market Transformation', pad=20)
ax.grid(axis='y', linestyle='--', alpha=0.7)
ax.set_ylim(0, 2000)
save_fig(fig, 'Chart_2_CGM_Market')
plt.close(fig)

# Chart 3: UK Clinical Trends
fig, ax = plt.subplots(figsize=(8, 6))
years_ed = ['2013/14', '2015/16', '2020/21']
admissions = [2868, 13200, 24300]
bars = ax.bar(years_ed, admissions, color='#F4664A', width=0.5)
for bar in bars:
    yval = bar.get_height()
    ax.text(bar.get_x() + bar.get_width()/2, yval + 500, f'{yval:,}', ha='center', va='bottom', color='#000', fontweight='bold')
ax.set_ylabel('NHS Inpatient Admissions', labelpad=15)
ax.set_title('NHS Hospital Admissions for Eating Disorders', pad=20)
ax.set_ylim(0, 28000)
save_fig(fig, 'Chart_3_UK_Eating_Disorders')
plt.close(fig)

# Chart 4: Protective Effect of IE
fig, ax = plt.subplots(figsize=(8, 6))
measures = ['Baseline IE +1', 'Growth IE +1']
reductions = [74, 71]
bars = ax.bar(measures, reductions, color='#30BF78', width=0.4)
for bar in bars:
    yval = bar.get_height()
    ax.text(bar.get_x() + bar.get_width()/2, yval + 1.5, f'{yval}%', ha='center', va='bottom', color='#000', fontweight='bold')
ax.set_ylabel('Risk Reduction (%)', labelpad=15)
ax.set_title('Protective Effect of Intuitive Eating', pad=20)
ax.set_ylim(0, 85)
save_fig(fig, 'Chart_4_Intuitive_Eating_Protection')
plt.close(fig)

# Chart 5: Krukow x COOP
fig, ax = plt.subplots(figsize=(8, 6))
metrics = ['CO2 Reduction', 'Eco-Sales', 'Waste Reduction']
values = [14, 25, 60]
bars = ax.bar(metrics, values, color='#30BF78', width=0.5)
for bar in bars:
    yval = bar.get_height()
    ax.text(bar.get_x() + bar.get_width()/2, yval + 1.5, f'{yval}%', ha='center', va='bottom', color='#000', fontweight='bold')
ax.set_ylabel('Improvement (%)', labelpad=15)
ax.set_title('COOP × Krukow Results', pad=20)
ax.set_ylim(0, 70)
save_fig(fig, 'Chart_5_Krukow_COOP_Results')
plt.close(fig)

print('Ultra-HD Charts successfully generated (600 DPI)!')