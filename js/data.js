// Modal content data
export const indicatorData = {
    'pemerintahan': {
        title: 'I. Pemerintahan',
        content: `
                    <div style="background: rgba(196, 30, 58, 0.05); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-red); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                            <span style="background: var(--accent-red); color: white; padding: 0.5rem 1.25rem; border-radius: 6px; font-size: 0.9rem; font-weight: 600;">SEBAGIAN BESAR TERGANGGU</span>
                        </div>
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1rem; font-size: 1.2rem;">Rusak Berat:</h4>
                        <ul style="margin-left: 1.5rem; line-height: 2; color: var(--text-secondary); font-size: 1rem;">
                            <li><strong>11 Dinas Terendam Banjir:</strong> Dinas PUPR, Dinas PRKP, DLHK, Badan Kesbangpol, Disdukcapil, Dinas Kesehatan, Dinas Perpustakaan dan Arsip, Disporaparekraf, Dinsos P3A, Dinas PK, dan BPBD</li>
                            <li><strong>2 Kecamatan Rusak Parah:</strong> Muara Batu dan Langkahan</li>
                            <li><strong>17 Kantor Camat Terendam Banjir:</strong> Dewantara, Kuta Makmur, Simpang Keuramat, Samudera, Meurah Mulia, Syamtalira Aron, Nibong, Tanah Luas, Matangkuli, Pirak Timu, Lapang, Tanah Pasir, Lhoksukon, Baktiya, Baktiya Barat, Seunuddon, dan Tanah Jambo Aye</li>
                            <li><strong>3 Kantor Geuchik Hilang Total:</strong> Riseh Teungoh, Leubok Pusaka, dan Bantahyan</li>
                            <li><strong>54 Kantor Rusak Berat</strong></li>
                            <li><strong>213 Kantor Rusak Ringan</strong></li>
                        </ul>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem;">
                        <div style="text-align: center; padding: 2rem; background: rgba(196, 30, 58, 0.1); border-radius: 12px;">
                            <div style="font-size: 3rem; font-weight: 700; color: var(--accent-red); margin-bottom: 0.5rem;">287</div>
                            <div style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 600;">Total Unit Terdampak</div>
                        </div>
                        <div style="text-align: center; padding: 2rem; background: rgba(196, 30, 58, 0.1); border-radius: 12px;">
                            <div style="font-size: 3rem; font-weight: 700; color: var(--accent-red); margin-bottom: 0.5rem;">3</div>
                            <div style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 600;">Kantor Geuchik Hilang</div>
                        </div>
                        <div style="text-align: center; padding: 2rem; background: rgba(196, 30, 58, 0.1); border-radius: 12px;">
                            <div style="font-size: 3rem; font-weight: 700; color: var(--accent-red); margin-bottom: 0.5rem;">17</div>
                            <div style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 600;">Kantor Camat Terendam</div>
                        </div>
                    </div>
                `
    },
    'layanan-publik': {
        title: 'II. Layanan Publik',
        content: `
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏥 Fasilitas Kesehatan</h4>
                            <div style="margin-bottom: 2rem;">
                                <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.75rem; font-size: 1.05rem;">Rumah Sakit (Rusak Berat):</div>
                                <div style="color: var(--text-secondary); padding-left: 1.5rem; line-height: 1.8;">• RS. Prima Inti Medika</div>
                            </div>
                            <div style="margin-bottom: 2rem;">
                                <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.75rem; font-size: 1.05rem;">Puskesmas:</div>
                                <div style="color: var(--text-secondary); padding-left: 1.5rem; line-height: 1.8;">
                                    • Sebagian besar melakukan pelayanan di IGD (meubeler dan elektronik rusak berat)<br><br>
                                    • <strong style="color: var(--accent-red);">2 Puskesmas Belum Berfungsi:</strong><br>
                                    &nbsp;&nbsp;- Puskesmas Simpang Tiga<br>
                                    &nbsp;&nbsp;- Puskesmas Langkahan
                                </div>
                            </div>
                            <div style="padding: 1.25rem; background: rgba(45, 122, 62, 0.1); border-radius: 8px; border-left: 4px solid var(--accent-green);">
                                <div style="font-weight: 600; color: var(--accent-green); font-size: 1.05rem;">✓ Klinik: Sudah Berjalan Normal</div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🎓 Sarana Pendidikan</h4>
                            <div style="display: grid; gap: 1.5rem; font-size: 1rem;">
                                <div>
                                    <strong style="color: var(--accent-red);">PAUD (Rusak Berat - 5 Unit):</strong>
                                    <div style="color: var(--text-secondary); padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
                                        • SPS Ar Rahmah<br>
                                        • Kelompok Belajar Semai Benih<br>
                                        • TK Satu Atap SDN 11 Tanah Jambo Aye<br>
                                        • TK Liwaul Hamdi<br>
                                        • Kelompok Belajar Al Hijrah
                                    </div>
                                </div>
                                <div>
                                    <strong style="color: var(--accent-red);">SD (Rusak Berat - 2 Unit):</strong>
                                    <div style="color: var(--text-secondary); padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
                                        • SDN 18 Tanah Jambo Aye<br>
                                        • SDN 4 Tanah Jambo Aye
                                    </div>
                                </div>
                                <div>
                                    <strong style="color: var(--accent-red);">Madrasah & Ponpes (Rusak Berat - 4 Unit):</strong>
                                    <div style="color: var(--text-secondary); padding-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
                                        • MIN 1 Muara Batu<br>
                                        • MIN 33 Tanah Jambo Aye<br>
                                        • MAN 1 Tanah Jambo Aye<br>
                                        • MIN 18 Langkahan
                                    </div>
                                </div>
                            </div>
                            <div style="margin-top: 1.5rem; padding: 1.25rem; background: rgba(45, 122, 62, 0.1); border-radius: 8px; border-left: 4px solid var(--accent-green);">
                                <div style="font-weight: 600; color: var(--accent-green); font-size: 1.05rem;">✓ TK, SMP, SMA/SMK: Sudah Berjalan Normal</div>
                            </div>
                        </div>
                    </div>
                `
    },
    'akses-darat': {
        title: 'III. Akses Darat (Infrastruktur Transportasi)',
        content: `
                    <div style="display: grid; gap: 2rem;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                            <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-left: 4px solid var(--accent-red);">
                                <div style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1rem; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <span style="font-size: 1.5rem;">🛣️</span> Jalan Nasional
                                </div>
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px;">
                                    <div style="font-weight: 600; color: var(--accent-red); margin-bottom: 0.5rem;">STATUS: RUSAK BERAT</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Ruas: Krueng Mane sampai dengan Panton Labu/Batas Aceh</div>
                                </div>
                            </div>

                            <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-left: 4px solid var(--accent-red);">
                                <div style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1rem; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <span style="font-size: 1.5rem;">🛣️</span> Jalan Provinsi
                                </div>
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px;">
                                    <div style="font-weight: 600; color: var(--accent-red); margin-bottom: 0.5rem;">STATUS: RUSAK BERAT</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">
                                        • Jumlah Ruas: <strong>4 Ruas</strong><br>
                                        • Total Panjang: <strong style="color: var(--accent-red); font-size: 1.3rem;">104,42 KM</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="background: rgba(217, 119, 6, 0.1); padding: 2rem; border-radius: 12px; border: 3px solid var(--accent-amber);">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                <span style="font-size: 2rem;">⚠️</span>
                                <h4 style="font-weight: 700; color: var(--accent-amber); font-size: 1.3rem;">Data Belum Lengkap dari Pemda</h4>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem;">
                                <div style="background: white; padding: 1.5rem; border-radius: 8px;">
                                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">🛣️ Jalan Kabupaten/Kota</div>
                                    <div style="color: var(--text-secondary);">Pemda belum mengirimkan data kerusakan</div>
                                </div>
                                <div style="background: white; padding: 1.5rem; border-radius: 8px;">
                                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">🛣️ Jalan Desa</div>
                                    <div style="color: var(--text-secondary);">Pemda belum mengirimkan data kerusakan</div>
                                </div>
                            </div>
                            <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-top: 1.5rem;">
                                <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">🌉 Jembatan</div>
                                <div style="color: var(--text-secondary);">Pemda belum mengirimkan data kerusakan</div>
                            </div>
                        </div>
                    </div>
                `
    },
    'ekonomi': {
        title: 'IV. Ekonomi (Aktivitas Perdagangan)',
        content: `
                    <div style="display: grid; gap: 2rem;">
                        <div>
                            <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                                <span>🏪</span> Pasar Rusak Berat (2 Unit)
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 2rem; border-radius: 12px; border-left: 4px solid var(--accent-red);">
                                    <div style="font-weight: 700; font-size: 1.1rem; color: var(--primary-dark); margin-bottom: 0.75rem;">Pasar Riseh Teungoh</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Status: Hanyut total, masih tertimbun lumpur tebal dan dipenuhi tenda pengungsian</div>
                                </div>
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 2rem; border-radius: 12px; border-left: 4px solid var(--accent-red);">
                                    <div style="font-weight: 700; font-size: 1.1rem; color: var(--primary-dark); margin-bottom: 0.75rem;">Pasar Krueng Aji</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Status: Kerusakan struktural parah</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                                <span>🏪</span> Pasar Rusak Sedang (2 Unit)
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                                <div style="background: rgba(217, 119, 6, 0.05); padding: 2rem; border-radius: 12px; border-left: 4px solid var(--accent-amber);">
                                    <div style="font-weight: 700; font-size: 1.1rem; color: var(--primary-dark);">Panton Labu</div>
                                </div>
                                <div style="background: rgba(217, 119, 6, 0.05); padding: 2rem; border-radius: 12px; border-left: 4px solid var(--accent-amber);">
                                    <div style="font-weight: 700; font-size: 1.1rem; color: var(--primary-dark);">Bungkah</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style="font-weight: 700; color: var(--accent-green); margin-bottom: 1rem; font-size: 1.3rem; display: flex; align-items: center; gap: 0.5rem;">
                                <span>🏪</span> Pasar Rusak Ringan (5 Unit)
                            </div>
                            <div style="background: rgba(45, 122, 62, 0.05); padding: 2rem; border-radius: 12px; border-left: 4px solid var(--accent-green);">
                                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; color: var(--text-secondary); line-height: 1.8;">
                                    <div>• Pasar Lhoksukon</div>
                                    <div>• Pasar Keude Matang Kuli</div>
                                    <div>• Pasar Keude Blangjrun</div>
                                    <div>• Pasar Keude Amplah</div>
                                    <div>• Pasar Keude Krueng Mane</div>
                                </div>
                            </div>
                        </div>

                        <div style="background: rgba(45, 122, 62, 0.1); padding: 2rem; border-radius: 12px; border-left: 4px solid var(--accent-green);">
                            <div style="font-weight: 700; color: var(--accent-green); margin-bottom: 1rem; font-size: 1.2rem;">✓ Status Operasional Normal:</div>
                            <div style="display: grid; gap: 0.75rem; color: var(--text-secondary); font-size: 1rem;">
                                <div>• <strong>Toko-toko:</strong> Sudah Beroperasional</div>
                                <div>• <strong>Hotel/Penginapan:</strong> Sudah Beroperasional</div>
                                <div>• <strong>Restoran/Warung/Kafe:</strong> Pemda belum mengirim data jumlah unit rusak</div>
                            </div>
                        </div>
                    </div>
                `
    },
    'sosial': {
        title: 'V. Sosial',
        content: `
                    <div style="display: grid; gap: 2rem;">
                        <div style="background: white; padding: 3rem; border-radius: 12px; box-shadow: var(--shadow-soft); text-align: center;">
                            <div style="font-size: 4rem; margin-bottom: 1.5rem;">🕌</div>
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1rem; font-size: 1.5rem;">Rumah Ibadah</h4>
                            <div style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.7;">
                                Data kerusakan rumah ibadah (masjid, musholla, meunasah) masih dalam proses identifikasi dan kompilasi oleh Pemerintah Daerah
                            </div>
                        </div>

                        <div style="background: rgba(217, 119, 6, 0.1); padding: 3rem; border-radius: 12px; border: 3px solid var(--accent-amber);">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; justify-content: center;">
                                <span style="font-size: 3rem;">⚠️</span>
                                <h4 style="font-weight: 700; color: var(--accent-amber); font-size: 1.5rem;">Kelompok Rentan</h4>
                            </div>
                            <div style="background: white; padding: 2rem; border-radius: 8px;">
                                <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 1rem; font-size: 1.1rem;">STATUS: Butuh Perbaikan</div>
                                <div style="color: var(--text-secondary); line-height: 1.8; font-size: 1rem;">
                                    Kelompok rentan (lansia, disabilitas, ibu hamil/menyusui, anak-anak) memerlukan perhatian khusus dalam program rehabilitasi dan rekonstruksi. Data detail mengenai jumlah dan lokasi kelompok rentan sedang dikompilasi untuk program bantuan yang lebih tepat sasaran.
                                </div>
                            </div>
                        </div>

                        <div style="background: rgba(44, 72, 117, 0.05); padding: 2rem; border-radius: 12px; border-left: 4px solid var(--primary-blue);">
                            <div style="font-weight: 700; color: var(--primary-blue); margin-bottom: 1rem; font-size: 1.2rem;">ℹ️ Catatan Penting:</div>
                            <div style="color: var(--text-secondary); line-height: 1.8;">
                                Sektor sosial memerlukan perhatian khusus karena dampaknya yang berkelanjutan terhadap kesejahteraan masyarakat. Pendataan yang akurat sangat diperlukan untuk merancang program pemulihan yang inklusif dan berkelanjutan.
                            </div>
                        </div>
                    </div>
                `
    },
    'indikator-dasar': {
        title: 'VI. Indikator Dasar (Utilitas & Infrastruktur Pendukung)',
        content: `
                    <div style="display: grid; gap: 2rem;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                            <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-left: 4px solid var(--accent-green);">
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                    <span style="font-size: 2.5rem;">⛽</span>
                                    <div>
                                        <div style="font-weight: 700; color: var(--primary-dark); font-size: 1.2rem;">SPBU</div>
                                        <div style="color: var(--accent-green); font-weight: 600; font-size: 0.9rem;">✓ SUDAH BERJALAN LANCAR</div>
                                    </div>
                                </div>
                                <div style="background: rgba(45, 122, 62, 0.1); padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Seluruh SPBU di wilayah terdampak sudah beroperasi normal. Pasokan BBM untuk kebutuhan masyarakat dan kendaraan operasional terpenuhi.</div>
                                </div>
                            </div>

                            <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-left: 4px solid var(--accent-green);">
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                    <span style="font-size: 2.5rem;">📡</span>
                                    <div>
                                        <div style="font-weight: 700; color: var(--primary-dark); font-size: 1.2rem;">Internet</div>
                                        <div style="color: var(--accent-green); font-weight: 600; font-size: 0.9rem;">✓ SUDAH BERJALAN</div>
                                    </div>
                                </div>
                                <div style="background: rgba(45, 122, 62, 0.1); padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Koneksi internet sudah pulih di sebagian besar wilayah. Namun masih terdapat kendala sinyal di beberapa lokasi tertentu.</div>
                                </div>
                            </div>
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                            <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-left: 4px solid var(--accent-amber);">
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                    <span style="font-size: 2.5rem;">💡</span>
                                    <div>
                                        <div style="font-weight: 700; color: var(--primary-dark); font-size: 1.2rem;">Listrik (PLN)</div>
                                        <div style="color: var(--accent-amber); font-weight: 600; font-size: 0.9rem;">⚠️ SEBAGIAN BELUM MENYALA</div>
                                    </div>
                                </div>
                                <div style="background: rgba(217, 119, 6, 0.1); padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                                    <div style="color: var(--text-secondary); line-height: 1.7;"><strong>Status:</strong> Masih ada desa-desa yang listriknya belum menyala. Perbaikan jaringan distribusi masih berlangsung di beberapa lokasi terpencil.</div>
                                </div>
                            </div>

                            <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-left: 4px solid var(--accent-amber);">
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                    <span style="font-size: 2.5rem;">💧</span>
                                    <div>
                                        <div style="font-weight: 700; color: var(--primary-dark); font-size: 1.2rem;">PDAM (Air Bersih)</div>
                                        <div style="color: var(--accent-amber); font-weight: 600; font-size: 0.9rem;">⚠️ BELUM BERFUNGSI</div>
                                    </div>
                                </div>
                                <div style="background: rgba(217, 119, 6, 0.1); padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                                    <div style="color: var(--text-secondary); line-height: 1.7;"><strong>Status:</strong> Jaringan PDAM belum berfungsi. Pemda belum mengirimkan data lengkap mengenai kerusakan infrastruktur dan timeline perbaikan.</div>
                                </div>
                            </div>
                        </div>

                        <div style="background: rgba(100, 116, 139, 0.1); padding: 2rem; border-radius: 12px; border-left: 4px solid var(--text-secondary);">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                <span style="font-size: 2.5rem;">🔥</span>
                                <div>
                                    <div style="font-weight: 700; color: var(--primary-dark); font-size: 1.2rem;">Gas LPG</div>
                                    <div style="color: var(--text-secondary); font-weight: 600; font-size: 0.9rem;">— DATA TIDAK TERSEDIA</div>
                                </div>
                            </div>
                            <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                                <div style="color: var(--text-secondary); line-height: 1.7;">Pemda belum mengirimkan informasi mengenai ketersediaan dan distribusi gas LPG di wilayah terdampak.</div>
                            </div>
                        </div>
                    </div>
                `
    },
    'normalisasi-sungai': {
        title: 'VII. Normalisasi Sungai',
        content: `
                    <div style="text-align: center; padding: 3rem;">
                        <div style="font-size: 6rem; margin-bottom: 2rem;">⛔</div>
                        <div style="font-size: 3rem; font-weight: 700; color: var(--accent-red); margin-bottom: 1rem;">BELUM BERJALAN</div>
                        <div style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 3rem;">Program normalisasi sungai belum dimulai pelaksanaannya</div>
                    </div>

                    <div style="background: rgba(196, 30, 58, 0.05); padding: 3rem; border-radius: 12px; border: 3px solid var(--accent-red); margin-bottom: 2rem;">
                        <h4 style="font-weight: 700; color: var(--accent-red); margin-bottom: 1.5rem; font-size: 1.5rem; text-align: center;">⚠️ DAMPAK KRITIS</h4>
                        <div style="display: grid; gap: 1.5rem;">
                            <div style="background: white; padding: 2rem; border-radius: 8px;">
                                <div style="font-weight: 700; color: var(--primary-dark); margin-bottom: 0.75rem; font-size: 1.1rem;">🌊 Risiko Banjir Susulan</div>
                                <div style="color: var(--text-secondary); line-height: 1.8;">Tanpa normalisasi, sungai yang masih penuh sedimen akan meluap kembali pada musim hujan, mengancam wilayah yang sama atau bahkan lebih luas.</div>
                            </div>
                            <div style="background: white; padding: 2rem; border-radius: 8px;">
                                <div style="font-weight: 700; color: var(--primary-dark); margin-bottom: 0.75rem; font-size: 1.1rem;">🏗️ Ancaman Infrastruktur yang Sudah Diperbaiki</div>
                                <div style="color: var(--text-secondary); line-height: 1.8;">Seluruh hasil rekonstruksi bangunan fisik (kantor pemerintahan, sekolah, puskesmas, jalan) berisiko rusak kembali jika banjir susulan terjadi.</div>
                            </div>
                            <div style="background: white; padding: 2rem; border-radius: 8px;">
                                <div style="font-weight: 700; color: var(--primary-dark); margin-bottom: 0.75rem; font-size: 1.1rem;">🌾 Sedimentasi Lahan Pertanian</div>
                                <div style="color: var(--text-secondary); line-height: 1.8;">Endapan lumpur terus menumpuk di lahan sawah dan permukiman, memperburuk kondisi di wilayah hilir dan mengurangi lahan produktif.</div>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-blue) 100%); padding: 3rem; border-radius: 12px; color: white; text-align: center;">
                        <h4 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.5rem;">🚨 URGENSI TINDAKAN</h4>
                        <div style="font-size: 1.1rem; line-height: 1.8; opacity: 0.95; max-width: 800px; margin: 0 auto;">
                            Normalisasi sungai adalah <strong>KUNCI KEBERLANJUTAN</strong> seluruh hasil rehabilitasi. Koordinasi lintas sektor (Kementerian PUPR, BNPB, Pemda) harus segera dilakukan untuk memulai pengerjaan fisik normalisasi sungai sebelum musim hujan tiba.
                        </div>
                        <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px; backdrop-filter: blur(10px);">
                            <div style="font-weight: 700; font-size: 1.2rem; margin-bottom: 0.5rem;">Target Ideal:</div>
                            <div style="font-size: 1.1rem;">Dimulai dalam <strong>90 hari</strong> ke depan</div>
                        </div>
                    </div>
                `
    }
};

// Verifikasi lapangan data
export const verifikasiData = {
    'sawang-pasar': {
        title: 'Kec. Sawang - Pasar Krueng Haji & Riseh Teungoh',
        status: 'LUMPUH TOTAL / HILANG',
        content: `
                    <div style="background: rgba(196, 30, 58, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-red); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🏪</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-red);">STATUS: LUMPUH TOTAL / HILANG</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Objek: Pasar Krueng Haji & Pasar Riseh Teungoh</div>
                            </div>
                        </div>
                    </div>

                    <div style="display: grid; gap: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">📋 Temuan Lapangan Detail</h4>
                            
                            <div style="margin-bottom: 2rem;">
                                <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 1rem; font-size: 1.1rem;">1. Pasar Riseh Teungoh:</div>
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px;">
                                    <ul style="margin-left: 1.5rem; line-height: 2; color: var(--text-secondary);">
                                        <li><strong style="color: var(--accent-red);">Status: HILANG TOTAL</strong> - Pasar hanyut terbawa banjir lumpur</li>
                                        <li>Kantor Gampong Riseh Teungoh ikut hilang/musnah</li>
                                        <li>Masjid utama di lokasi yang sama hilang</li>
                                        <li>Seluruh aktivitas administrasi dialihkan sementara ke Masjid di lokasi lain</li>
                                        <li>Area pasar kini dipenuhi tenda pengungsian</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 1rem; font-size: 1.1rem;">2. Pasar Krueng Haji:</div>
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px;">
                                    <ul style="margin-left: 1.5rem; line-height: 2; color: var(--text-secondary);">
                                        <li><strong style="color: var(--accent-red);">Status: RUSAK BERAT</strong></li>
                                        <li>Bangunan masih berdiri namun kerusakan struktural parah</li>
                                        <li>Area pasar tertimbun lumpur tebal</li>
                                        <li>Aktivitas ekonomi lumpuh total</li>
                                        <li>Pedagang terpaksa berhenti beroperasi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">💼 Dampak Ekonomi & Sosial</h4>
                            <div style="display: grid; gap: 1rem;">
                                <div style="padding: 1rem; background: rgba(196, 30, 58, 0.05); border-radius: 8px;">
                                    <strong style="color: var(--accent-red);">Aktivitas Ekonomi:</strong> <span style="color: var(--text-secondary);">Perdagangan lokal lumpuh total, masyarakat kesulitan akses kebutuhan pokok</span>
                                </div>
                                <div style="padding: 1rem; background: rgba(196, 30, 58, 0.05); border-radius: 8px;">
                                    <strong style="color: var(--accent-red);">Mata Pencaharian:</strong> <span style="color: var(--text-secondary);">Pedagang pasar kehilangan sumber pendapatan utama</span>
                                </div>
                                <div style="padding: 1rem; background: rgba(196, 30, 58, 0.05); border-radius: 8px;">
                                    <strong style="color: var(--accent-red);">Pengungsian:</strong> <span style="color: var(--text-secondary);">Tenda pengungsian masih memenuhi area pasar</span>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--primary-blue);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">📊 Sumber Data & Validasi</h4>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div style="padding: 1.5rem; background: rgba(44, 72, 117, 0.05); border-radius: 8px; text-align: center;">
                                    <div style="font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">Verifikasi Lapangan</div>
                                    <div style="color: var(--text-secondary); font-size: 0.9rem;">Tim Monev (10-14 Feb 2026)</div>
                                </div>
                                <div style="padding: 1.5rem; background: rgba(44, 72, 117, 0.05); border-radius: 8px; text-align: center;">
                                    <div style="font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">Data R3P 2026</div>
                                    <div style="color: var(--text-secondary); font-size: 0.9rem;">Cross-check Administrasi</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, var(--accent-red), #941526); padding: 2.5rem; border-radius: 12px; color: white; margin-top: 2rem;">
                        <div style="text-align: center;">
                            <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem;">🚨 REKOMENDASI URGEN</div>
                            <div style="font-size: 1.1rem; line-height: 1.7; opacity: 0.95;">
                                Diperlukan <strong>PEMBANGUNAN PASAR DARURAT</strong> untuk memulihkan aktivitas ekonomi masyarakat sambil menunggu rekonstruksi permanen. Revisi status di R3P 2026 dari "Rusak Berat" menjadi <strong>"HILANG TOTAL"</strong> untuk Pasar Riseh Teungoh.
                            </div>
                        </div>
                    </div>
                `
    },
    'sawang-infrastruktur': {
        title: 'Kec. Sawang - Infrastruktur & Lahan Pertanian',
        status: 'HILANG / PUTUS',
        content: `
                    <div style="background: rgba(196, 30, 58, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-red); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🌉</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-red);">STATUS: HILANG / PUTUS</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Infrastruktur Transportasi & Pertanian</div>
                            </div>
                        </div>
                    </div>

                    <div style="display: grid; gap: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🌉 Infrastruktur Transportasi</h4>
                            <div style="display: grid; gap: 1.5rem;">
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.75rem;">Jembatan Penghubung: HILANG TOTAL</div>
                                    <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--text-secondary);">
                                        <li>Jembatan hanyut terbawa banjir lumpur</li>
                                        <li>Menghubungkan desa-desa utama di Kec. Sawang</li>
                                        <li>Akses kendaraan terputus total</li>
                                        <li>Masyarakat harus memutar jauh atau menggunakan perahu</li>
                                    </ul>
                                </div>

                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.75rem;">Jalan Utama: PATAH/PUTUS</div>
                                    <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--text-secondary);">
                                        <li>Jalan utama mengalami patahan dan putus di beberapa titik</li>
                                        <li>Material jalan hanyut terbawa arus</li>
                                        <li>Mobilitas warga dan distribusi logistik terhambat berat</li>
                                        <li>Kendaraan darurat sulit masuk</li>
                                    </ul>
                                </div>

                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.75rem;">Pemukiman Warga: 12 RUMAH HANYUT</div>
                                    <div style="color: var(--text-secondary); line-height: 1.8;">
                                        Berdasarkan Data R3P 2026: 12 rumah warga hanyut total beserta fasilitas sanitasi. Keluarga terpaksa mengungsi ke lokasi aman.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🌾 Lahan Pertanian & Irigasi</h4>
                            <div style="display: grid; gap: 1.5rem;">
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.75rem;">Lahan Sawah: HILANG/TERTUTUP MATERIAL</div>
                                    <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--text-secondary);">
                                        <li>Bentang lahan sawah di Sawang <strong>HILANG</strong></li>
                                        <li>Tertutup material batuan dan lumpur tebal (hingga 1-2 meter)</li>
                                        <li>Sedimentasi massif mengubah topografi lahan</li>
                                        <li>Tidak dapat langsung digunakan untuk pertanian</li>
                                        <li>Memerlukan pengerukan dan reklamasi lahan besar-besaran</li>
                                    </ul>
                                </div>

                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.75rem;">Bendung Irigasi: RUSAK TOTAL</div>
                                    <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--text-secondary);">
                                        <li>Bendung irigasi rusak total akibat banjir (Data R3P 2026)</li>
                                        <li>Sistem pengairan sawah lumpuh</li>
                                        <li>Petani tidak bisa mengaliri sawah</li>
                                        <li>Memerlukan pembangunan ulang sistem irigasi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">💰 Dampak Ekonomi Pertanian</h4>
                            <div style="display: grid; gap: 1rem;">
                                <div style="padding: 1.5rem; background: rgba(217, 119, 6, 0.05); border-radius: 8px;">
                                    <strong style="color: var(--accent-amber);">Produktivitas Pertanian:</strong>
                                    <div style="color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.7;">
                                        Sektor pertanian di Kec. Sawang <strong>TERHENTI TOTAL</strong>. Petani kehilangan lahan garapan dan sumber pendapatan utama.
                                    </div>
                                </div>
                                <div style="padding: 1.5rem; background: rgba(217, 119, 6, 0.05); border-radius: 8px;">
                                    <strong style="color: var(--accent-amber);">Ketahanan Pangan:</strong>
                                    <div style="color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.7;">
                                        Produksi pangan lokal terancam. Masyarakat bergantung pada pasokan dari luar wilayah.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--primary-blue);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">📊 Sumber Data</h4>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div style="padding: 1.5rem; background: rgba(44, 72, 117, 0.05); border-radius: 8px; text-align: center;">
                                    <div style="font-weight: 700; color: var(--primary-blue);">Verifikasi Lapangan</div>
                                    <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.5rem;">Tim Monev</div>
                                </div>
                                <div style="padding: 1.5rem; background: rgba(44, 72, 117, 0.05); border-radius: 8px; text-align: center;">
                                    <div style="font-weight: 700; color: var(--primary-blue);">Data R3P 2026</div>
                                    <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.5rem;">Cross-validation</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, var(--accent-red), #941526); padding: 2.5rem; border-radius: 12px; color: white; margin-top: 2rem;">
                        <div style="text-align: center; margin-bottom: 2rem;">
                            <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem;">🔧 PAKET REHABILITASI MENYELURUH</div>
                        </div>
                        <div style="display: grid; gap: 1rem;">
                            <div style="padding: 1rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px;">
                                <strong>1. Pembangunan Jembatan Darurat/Permanen</strong> - Prioritas akses transportasi
                            </div>
                            <div style="padding: 1rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px;">
                                <strong>2. Perbaikan Jalan Utama</strong> - Pemadatan dan pengaspalan ulang
                            </div>
                            <div style="padding: 1rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px;">
                                <strong>3. Reklamasi Lahan Pertanian</strong> - Pengerukan lumpur dan material batuan
                            </div>
                            <div style="padding: 1rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px;">
                                <strong>4. Pembangunan Ulang Bendung Irigasi</strong> - Sistem pengairan modern
                            </div>
                            <div style="padding: 1rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px;">
                                <strong>5. Relokasi & Pembangunan Rumah</strong> - 12 rumah yang hanyut
                            </div>
                        </div>
                    </div>
                `
    },
    'langkahan-kantor': {
        title: 'Kec. Langkahan - Gampong Leubok Pusaka',
        status: 'RUSAK BERAT',
        content: `
                    <div style="background: rgba(196, 30, 58, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-red); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🏛️</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-red);">STATUS: RUSAK BERAT</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Kantor PKK & Kantor Geuchik Leubok Pusaka</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem;">📋 Temuan Lapangan</h4>
                        <div style="color: var(--text-secondary); line-height: 1.8;">
                            Kedua kantor tertimbun lumpur pekat setinggi 50-80 cm. Seluruh meubeler, dokumen gampong, dan peralatan kantor PKK rusak berat. Memerlukan pembersihan skala besar dan pengadaan meubeler baru.
                        </div>
                    </div>
                `
    },
    'tanah-luas-sekolah': {
        title: 'Kec. Tanah Luas - SDN 4 & SMAN 1',
        status: 'KENDALA FISIK',
        content: `
                    <div style="background: rgba(217, 119, 6, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-amber); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🏫</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-amber);">STATUS: KENDALA STRUKTURAL</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Fasilitas Pendidikan</div>
                            </div>
                        </div>
                    </div>
                    <div style="display: grid; gap: 1.5rem;">
                        <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--accent-red);">⚠️ SDN 4: Tanah Ambles</h4>
                            <p style="color: var(--text-secondary); line-height: 1.7;">Ditemukan penurunan tanah (ambles) pada salah satu ruang kelas yang membahayakan keselamatan penggunanya.</p>
                        </div>
                        <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--accent-amber);">🚧 SMAN 1: Pagar Roboh</h4>
                            <p style="color: var(--text-secondary); line-height: 1.7;">Pagar sekolah roboh sepanjang 50 meter akibat hantaman arus air dan material banjir.</p>
                        </div>
                    </div>
                `
    },
    'tanah-luas-perpustakaan': {
        title: 'Kec. Tanah Luas - Perpustakaan SMAN 1',
        status: 'RUSAK TOTAL',
        content: `
                    <div style="background: rgba(196, 30, 58, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-red); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">📚</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-red);">STATUS: RUSAK TOTAL</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Koleksi Buku & Media Pembelajaran</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem;">📋 Temuan Lapangan</h4>
                        <p style="color: var(--text-secondary); line-height: 1.8;">Seluruh koleksi buku perpustakaan terendam lumpur banjir dan tidak dapat diselamatkan sama sekali. Rak buku kayu juga mengalami pelapukan dan kerusakan struktural.</p>
                    </div>
                `
    },
    'tanah-jambo-aye-man': {
        title: 'Kec. Tanah Jambo Aye - MAN 1 & Kantor Camat',
        status: 'PEMBERSIHAN',
        content: `
                    <div style="background: rgba(59, 130, 246, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--primary-blue); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🕌</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary-blue);">STATUS: TAHAP PEMBERSIHAN</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Fasilitas Pendidikan & Kantor Pemerintah</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft);">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem;">📋 Status Terkini</h4>
                        <p style="color: var(--text-secondary); line-height: 1.8;">Tim di lapangan sedang fokus pada pembersihan sisa material lumpur dan tumpukan kayu yang terbawa banjir ke area perkantoran dan sekolah.</p>
                    </div>
                `
    },
    'muara-batu-kantor': {
        title: 'Kec. Muara Batu - Kantor Camat',
        status: 'DARURAT',
        content: `
                    <div style="background: rgba(196, 30, 58, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-red); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🏛️</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-red);">STATUS: DARURAT / AKSES TERPUTUS</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Kantor Kecamatan Muara Batu</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem;">📋 Temuan Lapangan</h4>
                        <ul style="color: var(--text-secondary); line-height: 2; margin-left: 1.5rem;">
                            <li>Akses masuk ke gedung kantor tertimbun lumpur tebal yang menyulitkan mobilitas</li>
                            <li>Pagar keliling kantor roboh di banyak titik</li>
                            <li>Halaman kantor masih digenangi sisa lumpur banjir</li>
                        </ul>
                    </div>
                `
    },
    'samudera-kantor': {
        title: 'Kec. Samudera - Kantor Camat',
        status: 'DARURAT',
        content: `
                    <div style="background: rgba(196, 30, 58, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-red); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🪑</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-red);">STATUS: DARURAT / KERJA LESEHAN</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Layanan Administasikan Kecamatan Samudera</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem;">📋 Temuan Lapangan</h4>
                        <p style="color: var(--text-secondary); line-height: 1.8;">Seluruh kursi dan meja layanan rusak berat tak dapat digunakan. Staf kecamatan terpaksa memberikan pelayanan administrasi secara lesehan menggunakan tikar seadanya. Halaman kantor juga masih tertutup lumpur licin.</p>
                    </div>
                `
    },
    'simpang-keuramat-gedung': {
        title: 'Kec. Simpang Keuramat - Gedung Pertemuan',
        status: 'AMBLES',
        content: `
                    <div style="background: rgba(217, 119, 6, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-amber); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🏢</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-amber);">STATUS: LANTAI AMBLES</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Gedung Pertemuan Kecamatan</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft);">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem;">📋 Temuan Lapangan</h4>
                        <p style="color: var(--text-secondary); line-height: 1.8;">Struktur lantai gedung pertemuan mengalami penurunan signifikan (ambles) di area tengah. Kondisi diperparah dengan adanya rembesan air bersih dari pipa yang bocor di bawah lantai.</p>
                    </div>
                `
    },
    'nibong-kantor': {
        title: 'Kec. Nibong - Kantor Camat',
        status: 'ARSIP RUSAK',
        content: `
                    <div style="background: rgba(217, 119, 6, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-amber); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">📁</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-amber);">STATUS: KERUSAKAN ASET & ARSIP</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Kantor Kecamatan Nibong</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem;">📋 Temuan Lapangan</h4>
                        <p style="color: var(--text-secondary); line-height: 1.8;">Gedung fisik relatif aman, namun banjir merusak seluruh arsip fisik penting, dokumen kependudukan, serta meubeler kantor (meja, lemari arsip). Memerlukan program digitalisasi arsip mendesak.</p>
                    </div>
                `
    },
    'tanah-pasir-sps': {
        title: 'Kec. Tanah Pasir - SPS Ar Rahmah',
        status: 'BEROPERASI',
        content: `
                    <div style="background: rgba(16, 185, 129, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-green); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🎠</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-green);">STATUS: BEROPERASI (KENDALA ASET)</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Satuan PAUD Sejenis (SPS) Ar Rahmah</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft);">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem;">📋 Temuan Lapangan</h4>
                        <p style="color: var(--text-secondary); line-height: 1.8;">Kegiatan belajar mengajar sudah dimulai kembali, namun seluruh alat permainan luar ruangan (outdoor play equipment) berkarat and rusak akibat rendaman air banjir yang lama.</p>
                    </div>
                `
    },
    'pirak-timu-kantor': {
        title: 'Kec. Pirak Timu - Kantor Camat',
        status: 'NORMAL',
        content: `
                    <div style="background: rgba(16, 185, 129, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-green); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">✨</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-green);">STATUS: NORMAL / PULIH</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Pusat Layanan Kecamatan Pirak Timu</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft);">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem;">📋 Status Terkini</h4>
                        <p style="color: var(--text-secondary); line-height: 1.8;">Kantor camat telah selesai direnovasi pasca banjir. Saat ini terdapat 8 jenis layanan publik yang sudah aktif dan berjalan lancar tanpa kendala berarti.</p>
                    </div>
                `
    },
    'nisam-igd': {
        title: 'Kec. Nisam - Puskesmas & Kantor',
        status: 'NORMAL',
        content: `
                    <div style="background: rgba(16, 185, 129, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-green); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🏥</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-green);">STATUS: BEROPERASI PENUH</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Kantor & IGD Puskesmas Nisam</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft);">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem;">📋 Status Terkini</h4>
                        <p style="color: var(--text-secondary); line-height: 1.8;">Seluruh area gedung telah dibersihkan total dari sisa banjir. Pelayanan di IGD dan ruang administrasi sudah beroperasi 100% melayani masyarakat.</p>
                    </div>
                `
    },
    'baktiya-barat-rumah-dinas': {
        title: 'Kec. Baktiya Barat - Rumah Dinas Camat',
        status: 'RUSAK BERAT',
        content: `
                    <div style="background: rgba(196, 30, 58, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-red); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🏠</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-red);">STATUS: RUSAK BERAT</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Rumah Dinas Camat Baktiya Barat</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem;">📋 Temuan Lapangan</h4>
                        <p style="color: var(--text-secondary); line-height: 1.8;">Rumah dinas mengalami kerusakan struktural parah pada bagian plafon and dinding akibat banjir. Hingga saat ini belum ada tindakan perbaikan fisik di lokasi tersebut.</p>
                    </div>
                `
    }
};

// Kecamatan data for transformation results
export const kecamatanData = {
    'sawang': {
        title: 'Kecamatan Sawang',
        priority: 'KRITIS',
        subtitle: 'Gampong Riseh Teungoh - Status Hilang/Hanyut',
        content: `
                    <div style="background: rgba(196, 30, 58, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-red); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                            <span style="font-size: 3rem;">⛔</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-red);">STATUS: HILANG/LUMPUH TOTAL</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Prioritas Penanganan: KRITIS</div>
                            </div>
                        </div>
                    </div>

                    <div style="display: grid; gap: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏛️ Pemerintahan & Sosial</h4>
                            <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                                <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.5rem;">Kantor Geuchik Riseh Teungoh: HILANG TOTAL</div>
                                <div style="color: var(--text-secondary); line-height: 1.7;">Kantor Gampong hanyut terbawa banjir lumpur. Seluruh aktivitas administrasi dialihkan sementara ke Masjid di lokasi lain.</div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏪 Ekonomi</h4>
                            <div style="display: grid; gap: 1rem;">
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px;">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.5rem;">1. Pasar Riseh Teungoh: RUSAK BERAT</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Pasar hanyut total dan masih tertimbun lumpur tebal. Area pasar kini dipenuhi tenda pengungsian. Aktivitas ekonomi lumpuh total.</div>
                                </div>
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px;">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.5rem;">2. Pasar Krueng Aji: RUSAK BERAT</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Kerusakan struktural parah akibat banjir lumpur.</div>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🎓 Pendidikan</h4>
                            <div style="display: grid; gap: 1rem;">
                                <div style="padding: 1rem; background: rgba(217, 119, 6, 0.05); border-radius: 8px;">
                                    <strong style="color: var(--accent-amber);">• SPS Ar Rahmah:</strong> <span style="color: var(--text-secondary);">Rusak Berat - Alat permainan anak berkarat akibat rendaman air berkepanjangan</span>
                                </div>
                                <div style="padding: 1rem; background: rgba(217, 119, 6, 0.05); border-radius: 8px;">
                                    <strong style="color: var(--accent-amber);">• Kelompok Belajar Semai Benih:</strong> <span style="color: var(--text-secondary);">Rusak Berat</span>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🌉 Infrastruktur</h4>
                            <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px;">
                                <ul style="margin-left: 1.5rem; line-height: 2; color: var(--text-secondary);">
                                    <li>Jembatan penghubung hilang</li>
                                    <li>Akses jalan utama patah/putus</li>
                                    <li>12 rumah warga hanyut total (Data R3P 2026)</li>
                                    <li>Fasilitas sanitasi musnah</li>
                                </ul>
                            </div>
                        </div>

                        <div style="background: rgba(196, 30, 58, 0.05); padding: 2rem; border-radius: 12px; border: 3px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--accent-red); margin-bottom: 1rem; font-size: 1.3rem; text-align: center;">🌾 Dampak Pertanian</h4>
                            <div style="background: white; padding: 1.5rem; border-radius: 8px;">
                                <div style="color: var(--text-secondary); line-height: 1.8;">
                                    Bentang lahan sawah di Sawang <strong style="color: var(--accent-red);">HILANG</strong> akibat sedimentasi lumpur tebal dan kerusakan bendung irigasi (Data R3P 2026). Produktivitas pertanian terhenti total.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, var(--accent-red), #941526); padding: 2.5rem; border-radius: 12px; color: white; text-align: center; margin-top: 2rem;">
                        <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem;">⚠️ REKOMENDASI URGEN</div>
                        <div style="font-size: 1.1rem; line-height: 1.7; opacity: 0.95;">
                            Diperlukan <strong>REVISI DATA R3P 2026</strong> dari status "Rusak Berat" menjadi <strong>"HILANG TOTAL"</strong> untuk alokasi anggaran dan program rehabilitasi yang tepat sasaran.
                        </div>
                    </div>
                `
    },
    'langkahan': {
        title: 'Kecamatan Langkahan',
        priority: 'KRITIS',
        subtitle: 'Kantor Rusak Parah - Layanan Kesehatan Lumpuh',
        content: `
                    <div style="background: rgba(196, 30, 58, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-red); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                            <span style="font-size: 3rem;">⛔</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-red);">STATUS: KRITIS</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Prioritas Penanganan: KRITIS</div>
                            </div>
                        </div>
                    </div>

                    <div style="display: grid; gap: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏛️ Pemerintahan</h4>
                            <div style="display: grid; gap: 1rem;">
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px;">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.5rem;">Kantor Camat: RUSAK PARAH</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Kerusakan struktural dan operasional akibat banjir. Aktivitas administrasi terganggu berat.</div>
                                </div>
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px;">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.5rem;">Kantor Geuchik Leubok Pusaka: HILANG TOTAL</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Kantor gampong hanyut terbawa banjir. Memerlukan pembangunan dari nol.</div>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏥 Layanan Publik - Kesehatan</h4>
                            <div style="background: rgba(196, 30, 58, 0.1); padding: 2rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">
                                <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 1rem; font-size: 1.2rem;">Puskesmas Langkahan: BELUM BERFUNGSI</div>
                                <div style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
                                    Puskesmas mengalami kerusakan berat dan belum dapat melayani masyarakat. Masyarakat harus ke puskesmas lain atau rumah sakit untuk mendapat pelayanan kesehatan.
                                </div>
                                <div style="padding: 1rem; background: white; border-radius: 6px;">
                                    <strong style="color: var(--accent-red);">Dampak:</strong>
                                    <ul style="margin-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8; color: var(--text-secondary);">
                                        <li>Akses kesehatan masyarakat terhambat</li>
                                        <li>Jarak tempuh ke fasilitas kesehatan terdekat jauh</li>
                                        <li>Potensi keterlambatan penanganan kasus darurat</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🎓 Pendidikan</h4>
                            <div style="background: rgba(217, 119, 6, 0.05); padding: 1.5rem; border-radius: 8px;">
                                <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 0.5rem;">MIN 18 Langkahan: RUSAK BERAT</div>
                                <div style="color: var(--text-secondary); line-height: 1.7;">Madrasah mengalami kerusakan fisik dan peralatan pembelajaran. Memerlukan rehabilitasi menyeluruh.</div>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, var(--accent-red), #941526); padding: 2.5rem; border-radius: 12px; color: white; margin-top: 2rem;">
                        <div style="text-align: center; margin-bottom: 1.5rem;">
                            <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem;">🚨 PRIORITAS UTAMA</div>
                        </div>
                        <div style="display: grid; gap: 1rem; font-size: 1.05rem; line-height: 1.7;">
                            <div style="padding: 1rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px;">
                                <strong>1. Pemulihan Puskesmas Langkahan</strong> - Layanan kesehatan esensial harus segera dipulihkan
                            </div>
                            <div style="padding: 1rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px;">
                                <strong>2. Rehabilitasi Kantor Camat</strong> - Pemulihan fungsi administrasi pemerintahan
                            </div>
                            <div style="padding: 1rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px;">
                                <strong>3. Pembangunan Kantor Geuchik Baru</strong> - Pembangunan dari nol di lokasi aman
                            </div>
                        </div>
                    </div>
                `
    },
    'muara-batu': {
        title: 'Kecamatan Muara Batu',
        priority: 'TINGGI',
        subtitle: 'Kantor Rusak Parah - Akses Terputus Lumpur',
        content: `
                    <div style="background: rgba(217, 119, 6, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-amber); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">⚠️</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-amber);">STATUS: PRIORITAS TINGGI</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Penanganan: Dipercepat</div>
                            </div>
                        </div>
                    </div>

                    <div style="display: grid; gap: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏛️ Pemerintahan</h4>
                            <div style="display: grid; gap: 1rem;">
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px;">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.5rem;">Kantor Camat: RUSAK PARAH</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1rem;">Kondisi kritis berdasarkan temuan lapangan:</div>
                                    <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--text-secondary);">
                                        <li>Akses masuk terputus lumpur</li>
                                        <li>Pagar banyak yang rubuh</li>
                                        <li>Mobilitas pegawai dan masyarakat terhambat</li>
                                    </ul>
                                </div>
                                <div style="background: rgba(196, 30, 58, 0.05); padding: 1.5rem; border-radius: 8px;">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.5rem;">Kantor Geuchik Bantahyan: HILANG TOTAL</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Kantor gampong hanyut terbawa banjir. Memerlukan pembangunan ulang.</div>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏪 Ekonomi</h4>
                            <div style="display: grid; gap: 1rem;">
                                <div style="padding: 1.5rem; background: rgba(217, 119, 6, 0.05); border-radius: 8px; border-left: 4px solid var(--accent-amber);">
                                    <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 0.5rem;">1. Pasar Panton Labu: RUSAK SEDANG</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Kerusakan struktural sedang. Masih dapat beroperasi dengan perbaikan.</div>
                                </div>
                                <div style="padding: 1.5rem; background: rgba(217, 119, 6, 0.05); border-radius: 8px; border-left: 4px solid var(--accent-amber);">
                                    <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 0.5rem;">2. Pasar Bungkah: RUSAK SEDANG</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Kerusakan parsial. Aktivitas perdagangan berlangsung terbatas.</div>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🎓 Pendidikan</h4>
                            <div style="background: rgba(217, 119, 6, 0.05); padding: 1.5rem; border-radius: 8px;">
                                <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 0.5rem;">MIN 1 Muara Batu: RUSAK BERAT</div>
                                <div style="color: var(--text-secondary); line-height: 1.7;">Kerusakan pada bangunan dan fasilitas pembelajaran. Memerlukan rehabilitasi komprehensif.</div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-green);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🛣️ Infrastruktur</h4>
                            <div style="background: rgba(45, 122, 62, 0.05); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-green);">
                                <div style="font-weight: 700; color: var(--accent-green); margin-bottom: 0.5rem;">Titik Awal Jalan Nasional: Krueng Mane</div>
                                <div style="color: var(--text-secondary); line-height: 1.7;">Ruas jalan nasional dimulai dari Krueng Mane dengan status kerusakan berat akibat banjir.</div>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, var(--accent-amber), #b35d05); padding: 2.5rem; border-radius: 12px; color: white; margin-top: 2rem;">
                        <div style="text-align: center;">
                            <div style="font-size: 1.6rem; font-weight: 700; margin-bottom: 1rem;">🔧 KEBUTUHAN MENDESAK</div>
                            <div style="font-size: 1.1rem; line-height: 1.7; opacity: 0.95;">
                                Pembersihan akses jalan dari lumpur dan perbaikan pagar kantor camat harus dilakukan segera untuk memulihkan mobilitas dan fungsi administrasi pemerintahan.
                            </div>
                        </div>
                    </div>
                `
    },
    'tanah-jambo-aye': {
        title: 'Kecamatan Tanah Jambo Aye',
        priority: 'TINGGI',
        subtitle: 'Fokus Pendidikan - 7 Unit Rusak Berat',
        content: `
                    <div style="background: rgba(217, 119, 6, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--accent-amber); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🎓</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-amber);">FOKUS: SEKTOR PENDIDIKAN</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">7 Unit Pendidikan Rusak Berat</div>
                            </div>
                        </div>
                    </div>

                    <div style="display: grid; gap: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--primary-blue);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏛️ Pemerintahan</h4>
                            <div style="background: rgba(44, 72, 117, 0.05); padding: 1.5rem; border-radius: 8px;">
                                <div style="font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">Kantor Camat: TERENDAM BANJIR</div>
                                <div style="color: var(--text-secondary); line-height: 1.7;">Kantor terendam banjir namun masih dapat beroperasi dengan keterbatasan. Memerlukan pembersihan dan perbaikan.</div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🎓 Pendidikan - RUSAK BERAT (7 Unit)</h4>
                            
                            <div style="margin-bottom: 1.5rem;">
                                <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 1rem; font-size: 1.1rem;">PAUD (3 Unit):</div>
                                <div style="display: grid; gap: 0.75rem;">
                                    <div style="padding: 1rem; background: rgba(196, 30, 58, 0.05); border-radius: 8px;">
                                        <strong>1. TK Satu Atap SDN 11 Tanah Jambo Aye</strong>
                                    </div>
                                    <div style="padding: 1rem; background: rgba(196, 30, 58, 0.05); border-radius: 8px;">
                                        <strong>2. TK Liwaul Hamdi</strong>
                                    </div>
                                    <div style="padding: 1rem; background: rgba(196, 30, 58, 0.05); border-radius: 8px;">
                                        <strong>3. Kelompok Belajar Al Hijrah</strong>
                                    </div>
                                </div>
                            </div>

                            <div style="margin-bottom: 1.5rem;">
                                <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 1rem; font-size: 1.1rem;">Sekolah Dasar (2 Unit):</div>
                                <div style="display: grid; gap: 0.75rem;">
                                    <div style="padding: 1rem; background: rgba(196, 30, 58, 0.05); border-radius: 8px;">
                                        <strong>4. SDN 18 Tanah Jambo Aye</strong>
                                    </div>
                                    <div style="padding: 1rem; background: rgba(196, 30, 58, 0.05); border-radius: 8px;">
                                        <strong>5. SDN 4 Tanah Jambo Aye</strong>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 1rem; font-size: 1.1rem;">Madrasah (2 Unit):</div>
                                <div style="display: grid; gap: 0.75rem;">
                                    <div style="padding: 1rem; background: rgba(196, 30, 58, 0.05); border-radius: 8px;">
                                        <strong>6. MIN 33 Tanah Jambo Aye</strong>
                                    </div>
                                    <div style="padding: 1rem; background: rgba(196, 30, 58, 0.05); border-radius: 8px;">
                                        <strong>7. MAN 1 Tanah Jambo Aye</strong>
                                    </div>
                                </div>
                            </div>

                            <div style="margin-top: 1.5rem; padding: 1.5rem; background: rgba(196, 30, 58, 0.1); border-radius: 8px; border-left: 4px solid var(--accent-red);">
                                <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.75rem;">Dampak pada Sektor Pendidikan:</div>
                                <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--text-secondary);">
                                    <li>Proses belajar mengajar terganggu signifikan</li>
                                    <li>Fasilitas pembelajaran rusak dan tidak memadai</li>
                                    <li>Akses pendidikan bagi anak usia dini hingga menengah terancam</li>
                                    <li>Memerlukan rehabilitasi menyeluruh dan prioritas tinggi</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, var(--accent-amber), #b35d05); padding: 2.5rem; border-radius: 12px; color: white; margin-top: 2rem;">
                        <div style="text-align: center;">
                            <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem;">🎯 PRIORITAS REHABILITASI</div>
                            <div style="font-size: 1.1rem; line-height: 1.7; opacity: 0.95; max-width: 800px; margin: 0 auto;">
                                Kecamatan Tanah Jambo Aye memerlukan <strong>PRIORITAS KHUSUS</strong> dalam rehabilitasi sektor pendidikan. Dengan 7 unit rusak berat, ini adalah salah satu wilayah dengan dampak pendidikan terbesar. Pemulihan harus dipercepat untuk memastikan hak pendidikan anak tidak terganggu lebih lama.
                            </div>
                        </div>
                    </div>
                `
    },
    'simpang-keuramat': {
        title: 'Kecamatan Simpang Keuramat',
        priority: 'SEDANG',
        subtitle: 'Puskesmas Belum Fungsi - Gedung Ambles',
        content: `
                    <div style="background: rgba(44, 72, 117, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--primary-blue); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🏥</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary-blue);">FOKUS: LAYANAN KESEHATAN & ANOMALI STRUKTUR</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Prioritas: Sedang</div>
                            </div>
                        </div>
                    </div>

                    <div style="display: grid; gap: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--primary-blue);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏛️ Pemerintahan</h4>
                            <div style="background: rgba(44, 72, 117, 0.05); padding: 1.5rem; border-radius: 8px;">
                                <div style="font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">Kantor Camat: TERENDAM BANJIR</div>
                                <div style="color: var(--text-secondary); line-height: 1.7;">Kantor camat terendam banjir. Operasional berjalan dengan keterbatasan.</div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-red);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏥 Layanan Kesehatan</h4>
                            <div style="background: rgba(196, 30, 58, 0.1); padding: 2rem; border-radius: 8px; border-left: 4px solid var(--accent-red);">
                                <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 1rem; font-size: 1.2rem;">Puskesmas Simpang Tiga: BELUM BERFUNGSI</div>
                                <div style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
                                    Puskesmas mengalami kerusakan dan belum dapat melayani masyarakat. Akses kesehatan masyarakat Kec. Simpang Keuramat terganggu signifikan.
                                </div>
                                <div style="padding: 1rem; background: white; border-radius: 6px;">
                                    <strong style="color: var(--accent-red);">Status:</strong> Memerlukan rehabilitasi segera untuk memulihkan layanan kesehatan dasar
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏢 Infrastruktur Bangunan</h4>
                            <div style="background: rgba(217, 119, 6, 0.1); padding: 2rem; border-radius: 8px; border-left: 4px solid var(--accent-amber);">
                                <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 1rem; font-size: 1.2rem;">⚠️ Gedung Pertemuan Simpang Keuramat: ANOMALI STRUKTURAL</div>
                                <div style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
                                    <strong style="color: var(--accent-red);">Temuan Lapangan:</strong> Kondisi lantai turun/ambles
                                </div>
                                <div style="padding: 1.5rem; background: white; border-radius: 6px;">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.75rem;">🚨 URGENSI:</div>
                                    <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--text-secondary);">
                                        <li><strong>Inspeksi struktur segera</strong> oleh ahli geoteknik</li>
                                        <li>Risiko keselamatan pengguna gedung</li>
                                        <li>Potensi kerusakan struktural jangka panjang</li>
                                        <li>Perlu kajian kelayakan dan tindakan mitigasi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, var(--primary-blue), #1a2332); padding: 2.5rem; border-radius: 12px; color: white; margin-top: 2rem;">
                        <div style="text-align: center;">
                            <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem;">🔍 REKOMENDASI TEKNIS</div>
                            <div style="font-size: 1.1rem; line-height: 1.7; opacity: 0.95;">
                                Diperlukan <strong>INSPEKSI STRUKTUR MENDESAK</strong> untuk gedung dengan indikasi tanah ambles. Target: dalam 30 hari. Sementara itu, Puskesmas Simpang Tiga harus segera direhabilitasi untuk memulihkan akses kesehatan masyarakat.
                            </div>
                        </div>
                    </div>
                `
    },
    'tanah-luas': {
        title: 'Kecamatan Tanah Luas',
        priority: 'SEDANG',
        subtitle: 'Anomali Struktural - Aset Kantor Rusak',
        content: `
                    <div style="background: rgba(44, 72, 117, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--primary-blue); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">🏫</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary-blue);">FOKUS: ANOMALI STRUKTUR & ASET PERKANTORAN</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Prioritas: Sedang</div>
                            </div>
                        </div>
                    </div>

                    <div style="display: grid; gap: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--primary-blue);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏛️ Pemerintahan</h4>
                            <div style="display: grid; gap: 1rem;">
                                <div style="background: rgba(44, 72, 117, 0.05); padding: 1.5rem; border-radius: 8px;">
                                    <div style="font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">Kantor Camat: TERENDAM BANJIR</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Kantor camat terendam banjir. Operasional terganggu namun masih berfungsi.</div>
                                </div>
                                <div style="background: rgba(217, 119, 6, 0.05); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-amber);">
                                    <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 0.5rem;">⚠️ KUA Tanah Luas: ASET RUSAK TOTAL</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1rem;">
                                        <strong>Temuan Lapangan:</strong> Pegawai bekerja menggunakan perangkat pribadi (laptop/meja) karena aset kantor rusak total.
                                    </div>
                                    <div style="padding: 1rem; background: white; border-radius: 6px;">
                                        <strong style="color: var(--accent-amber);">Dampak:</strong>
                                        <ul style="margin-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8; color: var(--text-secondary);">
                                            <li>Produktivitas pegawai terhambat</li>
                                            <li>Tidak profesional secara administrasi</li>
                                            <li>Pelayanan publik tidak optimal</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🎓 Pendidikan - Anomali Struktural</h4>
                            <div style="background: rgba(217, 119, 6, 0.1); padding: 2rem; border-radius: 8px; border-left: 4px solid var(--accent-amber);">
                                <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 1rem; font-size: 1.2rem;">⚠️ SDN 4 Tanah Luas: PENURUNAN TANAH (AMBLES)</div>
                                <div style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
                                    <strong style="color: var(--accent-red);">Temuan Lapangan:</strong> Terjadi penurunan tanah (ambles) di salah satu ruang kelas
                                </div>
                                <div style="padding: 1.5rem; background: white; border-radius: 6px;">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.75rem;">🚨 URGENSI TINGGI:</div>
                                    <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--text-secondary);">
                                        <li><strong>Inspeksi struktur mendesak</strong> oleh ahli geoteknik</li>
                                        <li>Risiko keselamatan siswa dan guru</li>
                                        <li>Potensi kerusakan struktural progresif</li>
                                        <li>Ruang kelas harus segera ditutup sementara</li>
                                        <li>Perlu kajian kelayakan dan solusi teknis</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-green);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏪 Ekonomi</h4>
                            <div style="display: grid; gap: 1rem;">
                                <div style="padding: 1rem; background: rgba(45, 122, 62, 0.05); border-radius: 8px;">
                                    <div style="font-weight: 600; color: var(--accent-green); margin-bottom: 0.5rem;">Pasar Keude Blangjrun: RUSAK RINGAN</div>
                                    <div style="color: var(--text-secondary);">Sudah beroperasi normal</div>
                                </div>
                                <div style="padding: 1rem; background: rgba(45, 122, 62, 0.05); border-radius: 8px;">
                                    <div style="font-weight: 600; color: var(--accent-green); margin-bottom: 0.5rem;">Pasar Keude Krueng Mane: RUSAK RINGAN</div>
                                    <div style="color: var(--text-secondary);">Sudah beroperasi normal</div>
                                </div>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">📡 Kendala Operasional</h4>
                            <div style="background: rgba(217, 119, 6, 0.05); padding: 1.5rem; border-radius: 8px;">
                                <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 0.5rem;">SMAN 1 Tanah Luas: Gangguan Sinyal</div>
                                <div style="color: var(--text-secondary); line-height: 1.7;">Gangguan sinyal komunikasi (Telkomsel) menghambat proses administrasi sekolah. Perlu koordinasi dengan provider telekomunikasi.</div>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, var(--primary-blue), #1a2332); padding: 2.5rem; border-radius: 12px; color: white; margin-top: 2rem;">
                        <div style="text-align: center; margin-bottom: 2rem;">
                            <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem;">📋 PAKET PRIORITAS</div>
                        </div>
                        <div style="display: grid; gap: 1rem; font-size: 1.05rem;">
                            <div style="padding: 1rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px;">
                                <strong>1. Inspeksi Struktur SDN 4</strong> - Target 30 hari, untuk keselamatan siswa
                            </div>
                            <div style="padding: 1rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px;">
                                <strong>2. Pengadaan Aset KUA</strong> - Target 60 hari, laptop, meja, lemari arsip
                            </div>
                            <div style="padding: 1rem; background: rgba(255, 255, 255, 0.15); border-radius: 8px;">
                                <strong>3. Koordinasi Provider Telkomsel</strong> - Perbaikan sinyal SMAN 1
                            </div>
                        </div>
                    </div>
                `
    },
    'kecamatan-lainnya': {
        title: 'Kecamatan Lainnya (14 Kecamatan)',
        priority: 'SEDANG',
        subtitle: 'Status Terendam - Operasional Terganggu',
        content: `
                    <div style="background: rgba(44, 72, 117, 0.1); padding: 2rem; border-radius: 12px; border-left: 5px solid var(--primary-blue); margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 3rem;">📍</span>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary-blue);">14 KECAMATAN - STATUS TERENDAM</div>
                                <div style="color: var(--text-secondary); font-size: 1rem;">Kantor Camat Terendam Banjir</div>
                            </div>
                        </div>
                    </div>

                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-medium); margin-bottom: 2rem;">
                        <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem; text-align: center;">Daftar Kecamatan Terdampak</h4>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                            ${['Dewantara', 'Kuta Makmur', 'Samudera', 'Meurah Mulia', 'Syamtalira Aron', 'Nibong', 'Pirak Timu', 'Lapang', 'Tanah Pasir', 'Lhoksukon', 'Baktiya', 'Baktiya Barat', 'Seunuddon', 'Matangkuli'].map(name => `
                                <div style="padding: 1rem; background: rgba(44, 72, 117, 0.05); border-radius: 8px; border-left: 3px solid var(--primary-blue);">
                                    <strong style="color: var(--primary-dark);">Kec. ${name}</strong>
                                    <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.25rem;">Kantor Camat: Terendam</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div style="display: grid; gap: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--primary-blue);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">🏛️ Status Pemerintahan</h4>
                            <div style="background: rgba(44, 72, 117, 0.05); padding: 2rem; border-radius: 8px;">
                                <div style="font-weight: 700; color: var(--primary-blue); margin-bottom: 1rem; font-size: 1.1rem;">Kondisi Umum:</div>
                                <ul style="margin-left: 1.5rem; line-height: 1.8; color: var(--text-secondary);">
                                    <li><strong>14 Kantor Camat</strong> terendam banjir</li>
                                    <li>Operasional berjalan dengan keterbatasan</li>
                                    <li>Memerlukan pembersihan dan perbaikan minor</li>
                                    <li>Prioritas lebih rendah dibanding kecamatan kritis</li>
                                </ul>
                            </div>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow-soft); border-top: 4px solid var(--accent-amber);">
                            <h4 style="font-weight: 700; color: var(--primary-dark); margin-bottom: 1.5rem; font-size: 1.3rem;">📌 Catatan Khusus per Kecamatan</h4>
                            <div style="display: grid; gap: 1.5rem;">
                                <div style="padding: 1.5rem; background: rgba(196, 30, 58, 0.05); border-radius: 8px; border-left: 4px solid var(--accent-red);">
                                    <div style="font-weight: 700; color: var(--accent-red); margin-bottom: 0.75rem;">🏛️ Kec. Samudera:</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Pelayanan dilakukan secara <strong>lesehan</strong> karena kondisi kantor tidak memadai. Halaman masih berlumpur.</div>
                                </div>

                                <div style="padding: 1.5rem; background: rgba(217, 119, 6, 0.05); border-radius: 8px; border-left: 4px solid var(--accent-amber);">
                                    <div style="font-weight: 700; color: var(--accent-amber); margin-bottom: 0.75rem;">📁 Kec. Nibong:</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Gedung fisik aman, namun <strong>seluruh arsip, dokumen, dan meubeler</strong> (meja/lemari) rusak berat. Perlu pengadaan meubeler dan sistem arsip digital.</div>
                                </div>

                                <div style="padding: 1.5rem; background: rgba(45, 122, 62, 0.05); border-radius: 8px; border-left: 4px solid var(--accent-green);">
                                    <div style="font-weight: 700; color: var(--accent-green); margin-bottom: 0.75rem;">🏪 Kec. Lhoksukon:</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Pasar Lhoksukon rusak ringan, sudah beroperasi normal.</div>
                                </div>

                                <div style="padding: 1.5rem; background: rgba(45, 122, 62, 0.05); border-radius: 8px; border-left: 4px solid var(--accent-green);">
                                    <div style="font-weight: 700; color: var(--accent-green); margin-bottom: 0.75rem;">🏪 Kec. Matangkuli:</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;">Pasar Keude Matang Kuli rusak ringan, sudah beroperasi normal.</div>
                                </div>

                                <div style="padding: 1.5rem; background: rgba(45, 122, 62, 0.05); border-radius: 8px; border-left: 4px solid var(--accent-green);">
                                    <div style="font-weight: 700; color: var(--accent-green); margin-bottom: 0.75rem;">🏥 Kec. Nisam:</div>
                                    <div style="color: var(--text-secondary); line-height: 1.7;"><strong>IGD Puskesmas Nisam</strong> sudah bersih total dan beroperasi penuh - contoh pemulihan sukses.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, var(--primary-blue), #1a2332); padding: 2.5rem; border-radius: 12px; color: white; margin-top: 2rem;">
                        <div style="text-align: center;">
                            <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem;">🔄 STRATEGI PEMULIHAN</div>
                            <div style="font-size: 1.1rem; line-height: 1.7; opacity: 0.95; max-width: 800px; margin: 0 auto;">
                                Ke-14 kecamatan ini memerlukan <strong>PEMBERSIHAN DAN PERBAIKAN STANDAR</strong>. Prioritas lebih rendah dibanding kecamatan kritis, namun tetap perlu penanganan sistematis. Fokus: pembersihan lumpur, perbaikan minor, dan pengadaan aset untuk kecamatan dengan kerusakan dokumen/meubeler seperti Nibong.
                            </div>
                        </div>
                    </div>
                `
    }
};
