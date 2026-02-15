# Laporan Monev Aceh Utara 2026
**Sistem Informasi Monitoring dan Evaluasi Pemulihan Pasca Bencana**

Aplikasi ini merupakan dashboard interaktif berbasis Streamlit yang dirancang untuk memantau perkembangan pemulihan di Kabupaten Aceh Utara. Sistem ini menggunakan arsitektur modular dengan pemisahan antara logika aplikasi, desain (CSS), dan data (JSON).

---

## 🚀 Application Workflow (Alur Kerja Aplikasi)

Alur kerja aplikasi dirancang untuk performa tinggi dan tampilan "Ultra Premium" yang responsif:

1.  **Konfigurasi Jalur (Path Configuration)**: 
    *   Aplikasi mendeteksi `$BASE_DIR` untuk memastikan akses file CSS, data JSON, dan metadata gambar bersifat absolut dan stabil.
2.  **Pemuatan Aset (Asset Loading)**:
    *   **External Fonts**: Memuat *Crimson Pro* (untuk tipografi elegan) dan *IBM Plex Sans* (untuk keterbacaan data).
    *   **Modular CSS**: Memisahkan gaya visual ke dalam `style.css` untuk manajemen UI yang lebih bersih.
    *   **Injected Navbar**: Menyuntikkan navigasi kustom di atas header default Streamlit.
3.  **Data Ingestion (Modulasi Data)**:
    *   Menggunakan fungsi `@st.cache_data` untuk memuat data dari `data/indicators.json`, `data/verification.json`, dan `data/kecamatan.json`.
    *   Membaca metadata geo-spasial dari `metadata_report_final.json` untuk galeri bukti visual.
4.  **Dynamic Rendering (Render Dinamis)**:
    *   Aplikasi melakukan looping pada dictionary data untuk membuat sistem grid otomatis (3 kolom).
    *   Setiap elemen (Indikator, Verifikasi, Kecamatan) dirender sebagai kartu interaktif dengan status unik.
5.  **Interaction Model (Sistem Modal)**:
    *   Menggunakan `@st.dialog` untuk menampilkan konten detail tanpa berpindah halaman, mempertahankan konteks visual pengguna.

---

## 📊 Data Presentation Workflow (Alur Presentasi Data)

Presentasi data diatur secara hierarkis mengikuti urutan menu strategis:

1.  **Dashboard Metrics**: 
    *   Penyajian data agregat di bagian atas (Hero) untuk memberikan *Quick Insight* mengenai jumlah pusat layanan, faskes rusak, dan tingkat urgensi wilayah.
2.  **Indikator Sektoral (Menu-Driven Order)**: 
    *   Data disusun berdasarkan urutan prioritas rekonstruksi:
        - I. Pemerintahan
        - II. Layanan Publik
        - III. Akses Darat
        - IV. Ekonomi
        - V. Sosial
        - VI. Indikator Dasar
        - VII. Normalisasi Sungai
3.  **Verifikasi Faktual (Kelompok Wilayah)**:
    *   Data temuan lapangan dikelompokkan berdasarkan **Kecamatan**. 
    *   Menggunakan *Visual Badging* (Border Merah/Amber) untuk menunjukkan tingkat keparahan objek (Kritis/Rusak Berat).
4.  **Eksplorasi Wilayah (Kecamatan Profile)**:
    *   Penyajian profil utuh per kecamatan yang mencakup dampak lintas sektor (Pendidikan, Ekonomi, Infrastruktur) dalam satu tampilan dialog komprehensif.
5.  **Bukti Visual Terverifikasi (Geo-Mapping)**:
    *   Galeri foto lapangan yang dapat difilter berdasarkan wilayah.
    *   Penyertaan metadata teknis (GPS, Nama Objek) untuk setiap foto guna memberikan validitas data 100%.

---

## 🛠️ Struktur Direktori Key
*   `app.py`: Logika utama dan layouting Streamlit.
*   `style.css`: Definisi desain premium (Glassmorphism, Dark Mode, Animasi).
*   `data/`: Folder penyimpanan sumber data JSON (Source of Truth).
*   `js/`: Scripts legacy (untuk referensi struktur data original).

---
*Powered by Digital Aceh Utara Research Team | 2026*
