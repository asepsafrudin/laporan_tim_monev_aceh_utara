import streamlit as st
import os
from data_streamlit import indicatorData, verifikasiData, kecamatanData

# Page Setting
st.set_page_config(
    page_title="Laporan Monev Aceh Utara 2026",
    page_icon="📋",
    layout="wide",
)

# Load CSS
def load_css():
    css_path = os.path.join(os.path.dirname(__file__), 'css', 'style.css')
    if os.path.exists(css_path):
        with open(css_path) as f:
            st.markdown(f'<style>{f.read()}</style>', unsafe_allow_html=True)

load_css()

# Custom CSS for Streamlit UI integration
st.markdown("""
<style>
    .stApp {
        background-color: var(--bg-light);
    }
    .main .block-container {
        padding: 0;
        max-width: 100%;
    }
    header {
        visibility: hidden;
    }
    #MainMenu {
        visibility: visible;
    }
    footer {
        visibility: hidden;
    }
    /* Simple modal/dialog override */
    div[data-testid="stDialog"] div[role="dialog"] {
        border-radius: 32px;
        padding: 2rem;
    }
</style>
""", unsafe_allow_html=True)

# Hero Section
st.markdown("""
<section class="hero">
    <div class="hero-container">
        <div class="hero-badge">BNPB • KEMENDAGRI • ACEH UTARA</div>
        <h1>Laporan Monitoring & Evaluasi</h1>
        <p class="hero-subtitle">Rehabilitasi dan Rekonstruksi Pascabencana Banjir Kabupaten Aceh Utara - Periode 2026</p>
        <div class="hero-meta">
            <div class="meta-item">
                <div class="meta-label">STATUS DATA</div>
                <div class="meta-value">Februari 2026</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">WILAYAH</div>
                <div class="meta-value">27 Kecamatan</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">LEVEL KRITIS</div>
                <div class="meta-value">TINGGI</div>
            </div>
        </div>
    </div>
</section>
""", unsafe_allow_html=True)

# Dashboard Metrics
st.markdown("""
<div class="dashboard-grid">
    <div class="dashboard-card">
        <div class="dash-number">287</div>
        <div class="dash-label">Kantor Pemerintahan Terdampak</div>
    </div>
    <div class="dashboard-card">
        <div class="dash-number">11</div>
        <div class="dash-label">Fasilitas Kesehatan Rusak</div>
    </div>
    <div class="dashboard-card">
        <div class="dash-number">104</div>
        <div class="dash-label">KM Jalan Provinsi Rusak</div>
    </div>
    <div class="dashboard-card">
        <div class="dash-number">3</div>
        <div class="dash-label">Desa Hilang/Hanyut Total</div>
    </div>
</div>
""", unsafe_allow_html=True)

# Main Content
st.write("") # Spacer

@st.dialog("Detail Temuan", width="large")
def show_modal(data):
    st.markdown(f"## {data['title']}")
    st.markdown(data['content'], unsafe_allow_html=True)
    if st.button("Tutup"):
        st.rerun()

# --- 1. SEKTOR PEMULIHAN ---
st.markdown("""
<section id="indikator" class="section">
    <div class="section-header">
        <div class="section-badge">INVENTARISASI REHABILITASI</div>
        <h2 class="section-title">Indikator Pemulihan Sektor</h2>
        <p class="section-description">Monitoring progres dan kendala pada 7 sektor utama pemulihan pascabencana.</p>
    </div>
</section>
""", unsafe_allow_html=True)

cols = st.columns(3)
indicators = list(indicatorData.keys())
for i, key in enumerate(indicators):
    with cols[i % 3]:
        data = indicatorData[key]
        st.markdown(f"""
        <div style="background: white; padding: 2.5rem 1.5rem; border-radius: 20px; border: 1px solid #e2e8f0; text-align: center; height: 250px; display: flex; flex-direction: column; justify-content: space-between;">
            <div style="font-size: 1.2rem; font-weight: 700; color: #0f1724;">{data['title']}</div>
        </div>
        """, unsafe_allow_html=True)
        if st.button(f"Lihat Detail {data['title'][:15]}...", key=f"btn_{key}"):
            show_modal(data)

# --- 2. VERIFIKASI LAPANGAN ---
st.markdown("""
<section id="verifikasi" class="section" style="background: #f8fafc;">
    <div class="section-header">
        <div class="section-badge" style="background: #ef4444;">FIELD VERIFICATION</div>
        <h2 class="section-title">Hasil Verifikasi Lapangan</h2>
        <p class="section-description">Data faktual hasil kunjungan tim monev di titik-titik kritis terdampak.</p>
    </div>
</section>
""", unsafe_allow_html=True)

v_cols = st.columns(2)
v_keys = list(verifikasiData.keys())
for i, key in enumerate(v_keys):
    with v_cols[i % 2]:
        v_data = verifikasiData[key]
        st.markdown(f"""
        <div style="background: white; padding: 2rem; border-radius: 16px; border-left: 5px solid #ef4444; margin-bottom: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="color: #ef4444; font-weight: 700; font-size: 0.8rem; margin-bottom: 0.5rem;">{v_data.get('status', 'URGEN')}</div>
            <h4 style="margin: 0; font-size: 1.1rem; color: #0f1724;">{v_data['title']}</h4>
        </div>
        """, unsafe_allow_html=True)
        if st.button(f"Cek Temuan: {key}", key=f"vbtn_{key}"):
            show_modal(v_data)

# --- 3. DOKUMENTASI VISUAL ---
st.markdown("""
<section id="dokumentasi" class="section">
    <div class="section-header">
        <div class="section-badge">BUKTI LAPANGAN</div>
        <h2 class="section-title">Dokumentasi Visual</h2>
    </div>
</section>
""", unsafe_allow_html=True)

img_path = "assets/images/gallery/aceh_utara_flood_damage.png"
if os.path.exists(img_path):
    col1, col2 = st.columns([1, 1])
    with col1:
        st.image(img_path, caption="Kerusakan Banjir Aceh Utara 2026", use_container_width=True)
    with col2:
        st.markdown("""
        ### Kondisi Aktual
        Foto di samping menunjukkan dampak banjir lumpur parah yang menghanyutkan sebagian pemukiman dan memutus akses infrastruktur.
        
        **Lokasi:** Kab. Aceh Utara
        **Prioritas:** Kritikal
        """)

# Footer
st.markdown("""
<div style="background: #0f1724; color: white; padding: 4rem 2rem; text-align: center; margin-top: 5rem;">
    <div style="font-family: 'Crimson Pro', serif; font-size: 1.5rem; margin-bottom: 1rem;">Laporan Monev Aceh Utara 2026</div>
    <div style="opacity: 0.6; font-size: 0.9rem;">
        &copy; 2026 Tim Monitoring Rehabilitasi Pasca Bencana. All Rights Reserved.
    </div>
</div>
""", unsafe_allow_html=True)
