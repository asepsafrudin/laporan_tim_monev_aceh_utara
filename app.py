import streamlit as st
import os
import json
import base64
import re
from PIL import Image, ImageOps

# --- PATH CONFIGURATION ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
# Target metadata is in a sibling folder
METADATA_PATH = os.path.join(DATA_DIR, "metadata_report_final.json")
STYLE_PATH = os.path.join(BASE_DIR, "style.css")

@st.cache_data(ttl=60)
def load_json_data(filename):
    path = os.path.join(DATA_DIR, filename)
    if os.path.exists(path):
        with open(path, 'r') as f:
            return json.load(f)
    return {}

@st.cache_data
def load_metadata():
    if os.path.exists(METADATA_PATH):
        try:
            with open(METADATA_PATH, 'r') as f:
                return json.load(f)
        except:
            return []
    return []

metadata = load_metadata()
indicatorData = load_json_data("indicators.json")
verifikasiData = load_json_data("verification.json")
kecamatanData = load_json_data("kecamatan.json")
teamData = load_json_data("team.json")
configData = load_json_data("config.json")
conclusionData = load_json_data("conclusion.json")

# Page Setting
st.set_page_config(
    page_title="Laporan Monev Aceh Utara 2026",
    page_icon="📋",
    layout="wide",
    initial_sidebar_state="collapsed"
)


def get_img_as_base64(file_path):
    try:
        with open(file_path, "rb") as f:
            data = f.read()
        return base64.b64encode(data).decode()
    except:
        return ""

# --- LOAD EXTERNAL ASSETS ---
def load_assets():
    # Load Google Fonts
    st.markdown("""
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700;800&family=IBM+Plex+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    """, unsafe_allow_html=True)
    
    # Load External CSS
    if os.path.exists(STYLE_PATH):
        with open(STYLE_PATH, "r") as f:
            st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

    img_kemendagri = get_img_as_base64(os.path.join(BASE_DIR, "images/kemendagri.png"))
    img_berakhlak = get_img_as_base64(os.path.join(BASE_DIR, "images/berakhlak.png"))

    # Injected Navigation Bar
    st.markdown(f"""
<div class="nav-bar">
<div class="nav-logo" style="display: flex; align-items: center; gap: 15px;">
<img src="data:image/png;base64,{img_kemendagri}" style="height: 45px; margin-bottom: 0;">
<div>
<div style="font-size: 0.9rem; font-weight: 700; line-height: 1.2;">Kementerian Dalam Negeri</div>
<div style="font-size: 0.7rem; font-weight: 400; opacity: 0.8; letter-spacing: 0.5px; margin-top: 2px; font-family: 'IBM Plex Sans', sans-serif;">Direktorat Jenderal Bina Pembangunan Daerah</div>
</div>
</div>
<div style="display: flex; align-items: center; gap: 20px;">
<div style="font-size: 0.6rem; color: #3b82f6; border: 1px solid #3b82f6; padding: 4px 10px; border-radius: 99px; font-weight: 700; letter-spacing: 1px;">LIVE FEED: 2026</div>
<img src="data:image/png;base64,{img_berakhlak}" style="height: 40px; margin-bottom: 0;">
</div>
</div>
""", unsafe_allow_html=True)

load_assets()

# --- HERO ---
h = configData.get("hero", {})
details = h.get("details", {})
st.markdown(f"""
<section class="hero" style="text-align: center; padding: 6rem 5% 4rem;">
<div style="background: rgba(59, 130, 246, 0.1); color: #3b82f6; padding: 6px 16px; border-radius: 99px; font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; display: inline-block; margin-bottom: 2rem;">{h.get('badge', 'INTERNAL ACCESS')}</div>
<h1 style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem;">{h.get('title', 'Laporan Monev')}</h1>
<p style="font-size: 1.25rem; color: #94a3b8; max-width: 900px; margin: 0 auto 3rem;">{h.get('subtitle', '')}</p>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 1000px; margin: 4rem auto 0; padding: 2rem; background: rgba(30, 41, 59, 0.5); border: 1px solid var(--border); border-radius: 20px;">
<div>
<div style="font-size: 0.7rem; font-weight: 800; color: #3b82f6; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 0.5rem;">Dasar Hukum</div>
<div style="font-size: 0.95rem; color: white; font-weight: 600;">{details.get('dasar_hukum', '-')}</div>
</div>
<div>
<div style="font-size: 0.7rem; font-weight: 800; color: #3b82f6; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 0.5rem;">Periode Pelaksanaan</div>
<div style="font-size: 0.95rem; color: white; font-weight: 600;">{details.get('periode', '-')}</div>
</div>
<div>
<div style="font-size: 0.7rem; font-weight: 800; color: #3b82f6; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 0.5rem;">Wilayah Fokus</div>
<div style="font-size: 0.95rem; color: white; font-weight: 600;">{details.get('wilayah', '-')}</div>
</div>
</div>
</section>
""", unsafe_allow_html=True)

# --- METRICS ---
m_list = configData.get("summary_metrics", [])
m_html = "".join([f"""
    <div class="m-card">
        <div class="m-val" style="color: {m.get('color', 'var(--primary)')};">{m['val']}</div>
        <div class="m-lab">{m['label']}</div>
    </div>""" for m in m_list])

st.markdown(f"""<div class="metrics-grid">{m_html}</div>""", unsafe_allow_html=True)

@st.dialog("Rincian Data", width="large")
def show_modal(data):
    st.markdown(f"# {data['title']}")
    st.markdown("<hr style='border: 1px solid rgba(255,255,255,0.1)'>", unsafe_allow_html=True)
    
    content = data['content']
    
    # Process [[img:path/to/image.ext]] tags
    def replace_img_tag(match):
        img_rel_path = match.group(1).strip()
        full_path = os.path.join(BASE_DIR, img_rel_path)
        b64_img = get_img_as_base64(full_path)
        if b64_img:
            # Determine mime type based on extension
            ext = os.path.splitext(full_path)[1].lower()
            mime = "image/png" if ext == ".png" else "image/jpeg"
            return f"""
            <div style="margin: 1rem 0; border-radius: 12px; overflow: hidden; border: 1px solid #334155;">
                <img src="data:{mime};base64,{b64_img}" style="width: 100%; display: block;" alt="Dokumentasi">
            </div>
            """
        return ""

    content = re.sub(r'\[\[img:(.*?)\]\]', replace_img_tag, content)
    
    # Check for legacy single image attachment
    if 'image' in data:
        img_path = os.path.join(BASE_DIR, data['image'])
        b64_img = get_img_as_base64(img_path)
        if b64_img:
            content += f"""
            <div style="margin-top: 1.5rem; border-radius: 12px; overflow: hidden; border: 1px solid #334155;">
                <img src="data:image/jpeg;base64,{b64_img}" style="width: 100%; display: block;">
                <div style="background: #1e293b; color: #94a3b8; font-size: 0.8rem; padding: 0.5rem 1rem; text-align: center;">
                    Dokumentasi Lapangan: {data['title']}
                </div>
            </div>
            """
            
    st.markdown(content, unsafe_allow_html=True)
    if st.button("Selesai & Tutup"):
        st.rerun()

# --- SECTIONS ---
# --- SECTIONS ---
def render_sector(title, desc, data_dict, prefix=""):
    st.markdown(f"""
    <div style='padding: 0 5%; margin-top: 4rem;'>
        <h2 class='s-title'>{title}</h2>
        <p class='s-desc'>{desc}</p>
    </div>
    """, unsafe_allow_html=True)
    
    keys = list(data_dict.keys())
    with st.container():
        for i in range(0, len(keys), 3):
            cols = st.columns(3, gap="large")
            for j in range(3):
                if i + j < len(keys):
                    k = keys[i + j]
                    d = data_dict[k]
                    metrics_data = {
                        "pemerintahan": "🏛️",
                        "layanan-publik": "🏥",
                        "akses-darat": "🛣️",
                        "ekonomi": "🏪",
                        "sosial": "👥",
                        "indikator-dasar": "🔌",
                        "normalisasi-sungai": "🌊"
                    }
                    icon = metrics_data.get(k, "📊")
                    
                    # Values are now loaded directly from indicatorData (data_dict)
                    val = d.get('val', '-')
                    label = d.get('label', 'Data Mentah')
                    sub = d.get('sub', 'Baseline Sektoral')
                    
                    with cols[j]:
                        st.markdown(f"""
<div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 24px; padding: 2.5rem 2rem; height: 340px; display: flex; flex-direction: column; transition: 0.3s; margin-bottom: 20px; position: relative; overflow: hidden;">
    <div style="font-size: 2rem; margin-bottom: 1rem;">{icon}</div>
    <div style="font-family: 'Crimson Pro', serif; font-size: 1.5rem; font-weight: 800; color: white; line-height: 1.2; margin-bottom: 1.5rem;">{d['title']}</div>
    <div style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
        <div style="font-size: 2rem; font-weight: 800; color: var(--primary); margin-bottom: 0.2rem;">{val}</div>
        <div style="font-size: 0.8rem; font-weight: 700; color: white; text-transform: uppercase; letter-spacing: 1px;">{label}</div>
        <div style="font-size: 0.75rem; color: #64748b; margin-top: 0.2rem;">{sub}</div>
    </div>
</div>""", unsafe_allow_html=True)
                        if st.button("Lihat Rincian Data →", key=f"{prefix}_{k}", use_container_width=True):
                            show_modal(d)

# --- 1. TIM MONITORING & EVALUASI ---
st.markdown("""
<div style='padding: 0 5%; margin-top: 6rem;'>
    <h2 class='s-title'>Tim Monitoring & Evaluasi</h2>
    <p class='s-desc'>Personel ahli yang ditugaskan melakukan verifikasi fisik dan validasi data administrasi di lokasi bencana.</p>
</div>
""", unsafe_allow_html=True)

with st.container():
    t_cols = st.columns(len(teamData) if teamData else 4, gap="medium")
    for idx, member in enumerate(teamData):
        with t_cols[idx]:
            st.markdown(f"""
            <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 20px; padding: 2rem 1.5rem; text-align: center; height: 220px; display: flex; flex-direction: column; justify-content: center;">
                <div style="color: #3b82f6; font-weight: 800; font-size: 0.7rem; letter-spacing: 1px; margin-bottom: 0.5rem;">{member['role']}</div>
                <div style="font-family: 'Crimson Pro', serif; font-size: 1.3rem; font-weight: 800; color: white; margin-bottom: 0.5rem; line-height: 1.2;">{member['name']}</div>
                <div style="color: #64748b; font-size: 0.85rem; line-height: 1.4;">{member['sub']}</div>
            </div>
            """, unsafe_allow_html=True)

render_sector("Data Sektoral 7 Indikator", "Data mentah berbasis sektor yang menjadi baseline analisis monitoring dan evaluasi. <br/>Klik pada setiap kartu indikator untuk melihat detail lengkap.", indicatorData, "ind")


# --- 2. EKSPLORASI WILAYAH ---
st.markdown("""
<div style='padding: 0 5%; margin-top: 6rem;'>
    <h2 class='s-title'>Eksplorasi Wilayah</h2>
    <p class='s-desc'>Laporan komprehensif profil pemulihan untuk setiap kecamatan terdampak.</p>
</div>
""", unsafe_allow_html=True)

with st.container():
    k_keys = list(kecamatanData.keys())
    for i in range(0, len(k_keys), 3):
        cols = st.columns(3, gap="large")
        for j in range(3):
            if i + j < len(k_keys):
                k = k_keys[i + j]
                d = kecamatanData[k]
                with cols[j]:
                    st.markdown(f"""
                    <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 24px; padding: 2.5rem 2rem; height: 320px; display: flex; flex-direction: column; transition: 0.3s; margin-bottom: 20px;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem;">
                             <span style="background: {'#ef4444' if d['priority'] == 'KRITIS' else '#f59e0b'}; color: white; padding: 4px 12px; border-radius: 6px; font-size: 0.7rem; font-weight: 800;">{d['priority']}</span>
                             <span style="font-size: 1.5rem;">&#128205;</span>
                        </div>
                        <h4 style="font-family: 'Crimson Pro', serif; font-size: 1.5rem; font-weight: 800; color: white; margin-bottom: 0.75rem;">{d['title']}</h4>
                        <p style="color: #64748b; font-size: 0.9rem; line-height: 1.5;">{d['subtitle']}</p>
                    </div>
                    """, unsafe_allow_html=True)
                    if st.button("Eksplorasi Wilayah ➔", key=f"kec_btn_{k}", use_container_width=True):
                        show_modal(d)


# --- KESIMPULAN ---
st.markdown(f"""
<div style='padding: 0 5%; margin-top: 6rem;'>
    <h2 class='s-title'>{conclusionData.get('title', 'Kesimpulan')}</h2>
</div>
""", unsafe_allow_html=True)

with st.container():
    st.markdown(f"""
    <div style="background: rgba(30, 41, 59, 0.5); border: 1px solid var(--border); border-radius: 24px; padding: 4rem; margin: 0 5%; line-height: 1.8; color: #cbd5e1; font-size: 1.1rem;">
        {conclusionData.get('content', '')}
    </div>
    """, unsafe_allow_html=True)

# --- GALLERY ---
st.markdown("<div style='padding: 6rem 5% 2rem;'><h2 class='s-title'>Bukti Visual Lapangan</h2><p class='s-desc'>Dokumentasi geografis terverifikasi untuk setiap wilayah terdampak.</p></div>", unsafe_allow_html=True)

if metadata:
    kec_groups = {}
    for entry in metadata:
        kec = entry.get('kecamatan', 'Lainnya')
        if kec not in kec_groups: kec_groups[kec] = []
        kec_groups[kec].append(entry)
    
    with st.container(border=False):
        col1, col2 = st.columns([1, 2])
        with col1:
            selected_kec = st.selectbox("Wilayah Kecamatan:", ["Seluruh Wilayah"] + sorted(list(kec_groups.keys())))
    
    st.write("<br/>", unsafe_allow_html=True)
    
    display_data = []
    if selected_kec == "Seluruh Wilayah":
        for k in sorted(kec_groups.keys()): display_data.extend(kec_groups[k][:2])
    else:
        display_data = kec_groups[selected_kec]

    if display_data:
        for i in range(0, len(display_data[:24]), 4):
            img_cols = st.columns(4)
            for j in range(4):
                if i + j < len(display_data):
                    item = display_data[i + j]
                    label = item.get('recon_data', {}).get('matched_r3p_item', item.get('manual_object_name', 'Objek Terdeteksi'))
                    with img_cols[j]:
                        try:
                            img_obj = Image.open(item['file_path'])
                            img_obj = ImageOps.exif_transpose(img_obj)
                            st.image(img_obj, use_container_width=True)
                        except:
                            st.image(item['file_path'], use_container_width=True)
                        st.caption(f"📍 {label}")
                        with st.expander("Geo-Metadata"):
                            st.json({"Kec": item.get('kecamatan'), "GPS": item.get('gps')})

# --- PENUTUP ---
c = configData.get("closing", {})
if c:
    st.markdown(f"""
    <div style='padding: 0 5%; margin-top: 8rem; text-align: center;'>
        <h2 class='s-title'>{c.get('title', 'Penutup')}</h2>
        <div style="max-width: 800px; margin: 3rem auto; line-height: 2; color: #94a3b8; font-size: 1.1rem; font-style: italic; font-family: 'Crimson Pro', serif;">
            "{c.get('content', '')}"
        </div>
    </div>
    """, unsafe_allow_html=True)

# --- FOOTER ---
f = configData.get("footer", {})
p_html = "".join([f'<span style="font-size: 0.6rem; letter-spacing: 2px;">{p}</span>' for p in f.get("partners", [])])
st.markdown(f"""
<div style="background: rgba(2, 6, 23, 1); padding: 8rem 5%; text-align: center; border-top: 1px solid var(--border); margin-top: 8rem;">
    <div style="font-family: 'Crimson Pro', serif; font-size: 2rem; font-weight: 800; color: white; margin-bottom: 1rem;">{f.get('title', '')}</div>
    <p style="color: #64748b; font-size: 0.9rem;">{f.get('powered_by', '')}</p>
    <div style="display: flex; justify-content: center; gap: 30px; margin-top: 3rem; opacity: 0.3;">
        {p_html}
    </div>
</div>
""", unsafe_allow_html=True)
