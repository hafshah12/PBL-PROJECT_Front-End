/* WashUp – Aplikasi Laundry Kiloan Sederhana */
'use strict';

/* ---------- Gambar / ikon (SVG inline) ---------- */
const P = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const IC = {
  dash: P('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
  users: P('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c1.8.6 3 2.3 3.5 5.2"/>'),
  tag: P('<path d="M12 3v18M16.5 7.5c-.8-1.2-2.4-2-4.5-2-2.6 0-4 1.2-4 2.9 0 4.2 9 1.9 9 6.2 0 1.8-1.7 3-4.5 3-2.3 0-4-.9-4.8-2.3"/>'),
  file: P('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
  search: P('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  chart: P('<path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-8"/>'),
  eye: P('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
  edit: P('<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/>'),
  trash: P('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'),
  plus: P('<path d="M12 5v14M5 12h14"/>'),
  // ikon layanan
  wash: P('<rect x="4" y="3" width="16" height="18" rx="3"/><circle cx="12" cy="13.5" r="4.5"/><path d="M9.8 13.5q1.1-1.3 2.2 0t2.2 0"/><circle cx="8" cy="6.5" r=".6" fill="currentColor"/>'),
  iron: P('<path d="M3 17h17a1 1 0 0 0 1-1c0-4-3-7-7-7H9a4 4 0 0 0-4 4z"/><path d="M3 20h18M9 13h5"/>'),
  bolt: P('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'),
  shirt: P('<path d="m8 3-5 3 2.5 4L8 9v12h8V9l2.5 1L21 6l-5-3a4 4 0 0 1-8 0z"/>')
};
const svcIcon = (n) => /express/i.test(n) ? IC.bolt : /setrika saja/i.test(n) ? IC.shirt : /setrika/i.test(n) ? IC.iron : IC.wash;

const LOGO = `<img src="logo.png" alt="WashUp Laundry">`;

const TIP_ART = `<svg viewBox="0 0 56 34"><circle cx="10" cy="22" r="8" fill="#fff" opacity=".25"/><circle cx="22" cy="12" r="5" fill="#fff" opacity=".35"/><circle cx="34" cy="24" r="6" fill="#fff" opacity=".2"/><path d="M42 8l2 4 4 .6-3 3 .7 4-3.7-2-3.7 2 .7-4-3-3 4-.6z" fill="#fff" opacity=".9"/></svg>`;

const HERO_ART = `<svg class="hero-art" viewBox="0 0 220 140" aria-hidden="true">
<ellipse cx="110" cy="128" rx="92" ry="9" fill="#dcebfb"/>
<rect x="62" y="22" width="96" height="104" rx="14" fill="#fff" stroke="#9fc8f2" stroke-width="3"/>
<rect x="62" y="22" width="96" height="24" rx="14" fill="#cfe5fb"/><rect x="62" y="36" width="96" height="10" fill="#cfe5fb"/>
<circle cx="78" cy="34" r="4" fill="#2f80d8"/><circle cx="92" cy="34" r="4" fill="#8cc4ff"/><rect x="118" y="30" width="30" height="8" rx="4" fill="#fff"/>
<circle cx="110" cy="84" r="33" fill="#e8f3ff" stroke="#9fc8f2" stroke-width="3"/>
<circle cx="110" cy="84" r="24" fill="#4a9aea"/>
<path d="M88 84q5.5-7 11 0t11 0 11 0 11 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
<circle cx="24" cy="56" r="9" fill="#e8f3ff" stroke="#9fc8f2" stroke-width="2"/><circle cx="38" cy="38" r="5" fill="#cfe5fb"/><circle cx="190" cy="48" r="8" fill="#e8f3ff" stroke="#9fc8f2" stroke-width="2"/><circle cx="200" cy="70" r="4" fill="#cfe5fb"/>
<path d="M170 128v-30h22v30z" fill="#2f80d8"/><path d="M174 98l7-9 7 9" fill="#8cc4ff"/>
</svg>`;

const EMPTY_ART = `<svg viewBox="0 0 140 110"><ellipse cx="70" cy="100" rx="52" ry="7" fill="#e3effb"/><rect x="34" y="28" width="72" height="66" rx="12" fill="#fff" stroke="#9fc8f2" stroke-width="3"/><circle cx="70" cy="62" r="19" fill="#e8f3ff" stroke="#9fc8f2" stroke-width="3"/><path d="M58 62q6-7 12 0t12 0" fill="none" stroke="#2f80d8" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="40" r="3" fill="#8cc4ff"/><circle cx="104" cy="22" r="6" fill="#cfe5fb"/><circle cx="116" cy="36" r="3" fill="#e8f3ff" stroke="#9fc8f2"/></svg>`;

/* ---------- Data ---------- */
const KEY = 'washup-data-v1';
const SEED = {
  pelanggan: [
    { id: 'CUS-001', nama: 'Asha', telp: '0812-3456-7890', alamat: 'Jl. Merdeka No. 12', tgl: '2025-05-12' },
    { id: 'CUS-002', nama: 'bila', telp: '0813-8876-5432', alamat: 'Jl. Melati No. 8', tgl: '2025-05-18' },
    { id: 'CUS-003', nama: 'darren', telp: '0856-1122-3344', alamat: 'Jl. Sudirman No. 21', tgl: '2025-05-22' },
    { id: 'CUS-004', nama: 'riski', telp: '0877-3322-0012', alamat: 'Jl. Kenanga No. 4', tgl: '2025-05-29' }
  ],
  layanan: [
    { id: 'SRV-001', nama: 'Cuci dan Kering', harga: 5000, waktu: '2 hari', desk: 'Layanan cuci, kemudian dikeringkan dengan mesin.' },
    { id: 'SRV-002', nama: 'Cuci dan Setrika', harga: 7000, waktu: '3 hari', desk: 'Laundry dicuci, dikeringkan, dan dilicinkan dengan rapi.' },
    { id: 'SRV-003', nama: 'Laundry Ekspres', harga: 10000, waktu: '1 hari', desk: 'Layanan prioritas dengan proses selesai di hari yang sama.' },
    { id: 'SRV-004', nama: 'Setrika Saja', harga: 4000, waktu: '2 hari', desk: 'Layanan setrika profesional untuk pakaian bersih.' }
  ],
  pesanan: [
    { kode: 'WU-250001', pelanggan: 'CUS-001', tgl: '2025-06-02', layanan: 'SRV-002', berat: 4, status: 'Sedang Dicuci' },
    { kode: 'WU-250002', pelanggan: 'CUS-002', tgl: '2025-06-02', layanan: 'SRV-003', berat: 3.5, status: 'Diterima' },
    { kode: 'WU-250003', pelanggan: 'CUS-003', tgl: '2025-06-01', layanan: 'SRV-001', berat: 6, status: 'Selesai' },
    { kode: 'WU-250004', pelanggan: 'CUS-004', tgl: '2025-05-31', layanan: 'SRV-004', berat: 2.5, status: 'Sudah Diambil' },
    { kode: 'WU-250005', pelanggan: 'CUS-001', tgl: '2025-05-30', layanan: 'SRV-001', berat: 5, status: 'Sudah Diambil' }
  ]
};
let db;
try { db = JSON.parse(localStorage.getItem(KEY)) || structuredClone(SEED); } catch { db = structuredClone(SEED); }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch {} };

const STATUS = ['Diterima', 'Sedang Dicuci', 'Selesai', 'Sudah Diambil'];
const sCls = { 'Diterima': 's-diterima', 'Sedang Dicuci': 's-dicuci', 'Selesai': 's-selesai', 'Sudah Diambil': 's-diambil' };

/* ---------- Helper ---------- */
const $ = (s, r = document) => r.querySelector(s);
const rp = (n) => 'IDR ' + Math.round(n).toLocaleString('id-ID');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const BLN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
const fmtTgl = (iso) => { const [y, m, d] = iso.split('-'); return `${d} ${BLN[+m - 1]} ${y}`; };
const getP = (id) => db.pelanggan.find((p) => p.id === id);
const getL = (id) => db.layanan.find((l) => l.id === id);
const total = (o) => (getL(o.layanan)?.harga || 0) * o.berat;
const initials = (n) => n.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
const nextId = (arr, key, prefix) => prefix + String(Math.max(0, ...arr.map((x) => +x[key].split('-')[1])) + 1).padStart(3, '0');
const toast = (m) => { const t = $('#toast'); t.textContent = m; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2200); };
const empty = (t, d) => `<div class="empty">${EMPTY_ART}<strong>${t}</strong>${d}</div>`;
const head = (crumb, title, sub, btn) => `<div class="page-head"><div><div class="crumb">${crumb}</div><h1>${title}</h1><p class="sub">${sub}</p></div>${btn || ''}</div>`;
const addBtn = (label, act) => `<button class="btn" data-act="${act}">${IC.plus.replace('<svg', '<svg width="16" height="16"')} ${label}</button>`;
const statusSel = (o) => `<select class="status ${sCls[o.status]}" data-status="${o.kode}" aria-label="Status ${o.kode}">${STATUS.map((s) => `<option ${s === o.status ? 'selected' : ''}>${s}</option>`).join('')}</select>`;
const badge = (s) => `<span class="badge ${sCls[s]}">${s}</span>`;
const ibtn = (icon, act, id, cls = '', label = '') => `<button class="icon-btn ${cls}" data-act="${act}" data-id="${id}" aria-label="${label}">${IC[icon]}</button>`;

/* ---------- Halaman ---------- */
const PAGES = {
  dasbor: { title: 'Dasbor', icon: 'dash', render: dasbor },
  pelanggan: { title: 'Pelanggan', icon: 'users', render: pelanggan },
  layanan: { title: 'Layanan Laundry', icon: 'tag', render: layanan },
  pesanan: { title: 'Pesanan Laundry', icon: 'file', render: pesanan },
  cari: { title: 'Cari Pesanan', icon: 'search', render: cari },
  laporan: { title: 'Laporan Pendapatan', icon: 'chart', render: laporan }
};

function dasbor() {
  const sorted = [...db.pesanan].sort((a, b) => b.tgl.localeCompare(a.tgl));
  const last = sorted[0]?.tgl;
  const hari = db.pesanan.filter((o) => o.tgl === last);
  const hariRev = hari.reduce((s, o) => s + total(o), 0);
  const hariKg = hari.reduce((s, o) => s + o.berat, 0);
  const hari7 = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'], v = [14000, 22000, 15000, 25000, 18000, 20000, 14000];
  const totalRev = db.pesanan.reduce((s, o) => s + total(o), 0);
  const cnt = (s) => db.pesanan.filter((o) => o.status === s).length;
  const stats = [
    ['users', db.pelanggan.length, 'Total Pelanggan', 'Pelanggan terdaftar', '+8,2%'],
    ['file', cnt('Diterima'), 'Pesanan Baru', 'Menunggu untuk dicuci', '+12,5%'],
    ['tag', cnt('Sedang Dicuci'), 'Sedang Dicuci', 'Sedang diproses', 'Live'],
    ['dash', cnt('Selesai'), 'Pesanan Selesai', 'Siap diambil', '+9,4%']
  ].map(([i, n, t, d, c]) => `<div class="card stat"><div class="stat-top"><span class="stat-ic">${IC[i]}</span><span class="chip">${c}</span></div><b>${n}</b><span>${t}</span><small>${d}</small></div>`).join('');
  return `
  <div class="welcome"><div>${head('Ringkasan operasional', 'Selamat pagi, Asha', 'Berikut aktivitas bisnis laundry Anda hari ini.')}</div>${HERO_ART}
    <button class="btn" data-act="new-order" style="align-self:flex-start">${IC.plus.replace('<svg', '<svg width="16" height="16"')} Buat Pesanan Baru</button></div>
  <div class="stats">${stats}</div>
  <div class="grid2">
    <div class="card card-pad"><div class="stat-top"><div><h3>Ringkasan pendapatan</h3><small>Pendapatan selama 7 hari terakhir</small></div><select class="mini"><option>7 hari terakhir</option></select></div>
      <small style="margin-top:8px">Pendapatan mingguan</small>
      <div style="display:flex;justify-content:space-between;align-items:baseline"><span class="big">${rp(totalRev)}</span><span class="up">↗ 18,2% dari minggu lalu</span></div>
      <div class="bars">${v.map((x, i) => `<div class="bar-col"><div class="bar-track"><div class="bar" style="height:${(x / 30000) * 100}%" title="${rp(x)}"></div></div><small>${hari7[i]}</small></div>`).join('')}</div></div>
    <div class="card today"><small>RINGKASAN HARI INI</small><div class="big">${rp(hariRev)}</div><small>Pendapatan yang diproses hari ini</small>
      <dl><div><span>Pesanan diterima</span><b>${hari.length}</b></div><div><span>Total laundry</span><b>${hariKg} kg</b></div><div><span>Rata-rata pesanan</span><b>${rp(hari.length ? hariRev / hari.length : 0)}</b></div></dl></div>
  </div>
  <div class="card"><div class="card-head"><div><h3>Pesanan terbaru</h3><small>Pesanan laundry terbaru dan progresnya saat ini</small></div><a class="link" href="#pesanan">Lihat semua pesanan →</a></div>
    ${orderTable(sorted.slice(0, 5), false)}</div>`;
}

function orderTable(list, del = true, detailBtn = false) {
  if (!list.length) return empty('Pesanan tidak ditemukan', 'Ubah kata kunci atau filter pencarian Anda.');
  return `<div class="table-wrap"><table><thead><tr><th>KODE PESANAN</th><th>PELANGGAN</th><th>TANGGAL PESANAN</th><th>LAYANAN</th><th>BERAT</th><th>TOTAL BIAYA</th><th>STATUS</th><th>AKSI</th></tr></thead><tbody>
  ${list.map((o) => `<tr><td><button class="code" data-act="detail-order" data-id="${o.kode}">${o.kode}</button></td><td><b>${esc(getP(o.pelanggan)?.nama || '-')}</b></td><td>${fmtTgl(o.tgl)}</td><td>${esc(getL(o.layanan)?.nama || '-')}</td><td>${o.berat} kg</td><td><b>${rp(total(o))}</b></td><td>${statusSel(o)}</td>
  <td><div class="actions">${ibtn('eye', 'detail-order', o.kode, '', 'Lihat detail')}${del ? ibtn('trash', 'del-order', o.kode, 'del', 'Hapus') : ''}</div></td></tr>`).join('')}</tbody></table></div>`;
}

function pelanggan(q = '') {
  const list = db.pelanggan.filter((p) => (p.nama + p.id + p.telp).toLowerCase().includes(q.toLowerCase()));
  return head('Kelola pelanggan', 'Pelanggan', 'Kelola profil dan informasi kontak pelanggan.', addBtn('Tambah Pelanggan', 'add-cus')) + `
  <div class="card"><div class="card-head"><label class="search">${IC.search}<input id="q" placeholder="Cari nama, nomor telepon, atau ID..." value="${esc(q)}"></label><span class="pill">${list.length} pelanggan</span></div>
  <div id="list">${cusTable(list)}</div></div>`;
}
function cusTable(list) {
  if (!list.length) return empty('Pelanggan tidak ditemukan', 'Coba kata kunci lain atau tambahkan pelanggan baru.');
  return `<div class="table-wrap"><table><thead><tr><th>ID PELANGGAN</th><th>NAMA PELANGGAN</th><th>NOMOR TELEPON</th><th>ALAMAT</th><th>TANGGAL PENDAFTARAN</th><th>AKSI</th></tr></thead><tbody>
  ${list.map((p) => `<tr><td><span class="code">${p.id}</span></td><td><div class="name-cell"><span class="avatar">${initials(p.nama)}</span>${esc(p.nama)}</div></td><td>${esc(p.telp)}</td><td>${esc(p.alamat)}</td><td>${fmtTgl(p.tgl)}</td>
  <td><div class="actions">${ibtn('eye', 'view-cus', p.id, '', 'Lihat')}${ibtn('edit', 'edit-cus', p.id, '', 'Ubah')}${ibtn('trash', 'del-cus', p.id, 'del', 'Hapus')}</div></td></tr>`).join('')}</tbody></table></div>`;
}

function layanan() {
  return head('Katalog layanan', 'Layanan Laundry', 'Atur pilihan layanan, harga, dan waktu pengerjaan.', addBtn('Tambah Layanan', 'add-svc')) + `
  <div class="card"><div class="card-head"><div><h3>Semua layanan</h3><small>Pengaturan harga per kilogram</small></div><span class="pill">${db.layanan.length} layanan aktif</span></div>
  ${db.layanan.length ? `<div class="table-wrap"><table><thead><tr><th>ID LAYANAN</th><th>NAMA LAYANAN</th><th>HARGA / KILOGRAM</th><th>WAKTU PENYELESAIAN</th><th>DESKRIPSI</th><th>AKSI</th></tr></thead><tbody>
  ${db.layanan.map((l) => `<tr><td><span class="code">${l.id}</span></td><td><div class="name-cell"><span class="svc-ic">${svcIcon(l.nama)}</span>${esc(l.nama)}</div></td><td><b style="color:var(--blue-d)">${rp(l.harga)}</b><small>per kg</small></td><td><span class="pill">${esc(l.waktu)}</span></td><td style="white-space:normal;color:var(--muted);min-width:220px">${esc(l.desk)}</td>
  <td><div class="actions">${ibtn('eye', 'view-svc', l.id, '', 'Lihat')}${ibtn('edit', 'edit-svc', l.id, '', 'Ubah')}${ibtn('trash', 'del-svc', l.id, 'del', 'Hapus')}</div></td></tr>`).join('')}</tbody></table></div>` : empty('Belum ada layanan', 'Tambahkan layanan pertama Anda.')}</div>`;
}

function pesanan() {
  const kg = db.pesanan.reduce((s, o) => s + o.berat, 0);
  return head('Operasional pesanan', 'Pesanan Laundry', 'Buat pesanan laundry baru dan pantau hingga selesai.', addBtn('Buat Pesanan Baru', 'new-order')) + `
  <div class="summary"><div class="mini-stat">Pesanan aktif <b>${db.pesanan.filter((o) => ['Diterima', 'Sedang Dicuci'].includes(o.status)).length}</b></div><div class="mini-stat">Siap diambil <b>${db.pesanan.filter((o) => o.status === 'Selesai').length}</b></div><div class="mini-stat">Total laundry <b>${kg} kg</b></div></div>
  <div class="card"><div class="card-head"><div><h3>Semua pesanan laundry</h3><small>Pilih kode pesanan untuk melihat detail lengkap</small></div></div>${orderTable(db.pesanan)}</div>`;
}

function cari(f = { q: '', s: '', a: '', b: '' }) {
  const res = filterOrders(f);
  return head('Pencarian pesanan cepat', 'Cari Pesanan', 'Temukan pesanan berdasarkan kode, pelanggan, status, atau tanggal.') + `
  <div class="card card-pad" style="margin-bottom:16px"><label class="search" style="max-width:none;margin-bottom:14px">${IC.search}<input id="fq" placeholder="Cari berdasarkan kode pesanan, nama pelanggan, atau layanan..." value="${esc(f.q)}"></label>
  <div class="filters"><div class="field"><label>Status pesanan</label><select id="fs"><option value="">Semua status</option>${STATUS.map((s) => `<option ${f.s === s ? 'selected' : ''}>${s}</option>`).join('')}</select></div>
  <div class="field"><label>Tanggal mulai</label><input type="date" id="fa" value="${f.a}"></div><div class="field"><label>Tanggal akhir</label><input type="date" id="fb" value="${f.b}"></div>
  <button class="btn" data-act="do-search">Cari</button><button class="btn ghost" data-act="reset-search">Atur Ulang</button></div></div>
  <div class="card"><div class="card-head"><div><h3>Hasil pencarian</h3><small>${res.length} pesanan ditemukan</small></div></div>${resultTable(res)}</div>`;
}
function filterOrders({ q, s, a, b }) {
  return db.pesanan.filter((o) => {
    const txt = (o.kode + (getP(o.pelanggan)?.nama || '') + (getL(o.layanan)?.nama || '')).toLowerCase();
    return txt.includes(q.toLowerCase()) && (!s || o.status === s) && (!a || o.tgl >= a) && (!b || o.tgl <= b);
  });
}
function resultTable(list) {
  if (!list.length) return empty('Pesanan tidak ditemukan', 'Ubah kata kunci atau filter pencarian Anda.');
  return `<div class="table-wrap"><table><thead><tr><th>KODE PESANAN</th><th>NAMA PELANGGAN</th><th>TANGGAL PESANAN</th><th>LAYANAN</th><th>BERAT</th><th>TOTAL BIAYA</th><th>STATUS</th><th>DETAIL</th></tr></thead><tbody>
  ${list.map((o) => `<tr><td><span class="code">${o.kode}</span></td><td><b>${esc(getP(o.pelanggan)?.nama || '-')}</b></td><td>${fmtTgl(o.tgl)}</td><td>${esc(getL(o.layanan)?.nama || '-')}</td><td>${o.berat} kg</td><td><b>${rp(total(o))}</b></td><td>${badge(o.status)}</td><td><button class="btn soft" data-act="detail-order" data-id="${o.kode}">${IC.eye.replace('<svg', '<svg width="15" height="15"')} Detail</button></td></tr>`).join('')}</tbody></table></div>`;
}

function laporan(f = { a: '', b: '', s: '' }) {
  const list = filterOrders({ q: '', ...f }).sort((x, y) => x.tgl.localeCompare(y.tgl));
  const rev = list.reduce((s, o) => s + total(o), 0), kg = list.reduce((s, o) => s + o.berat, 0);
  const byDate = {}; list.forEach((o) => (byDate[o.tgl] = (byDate[o.tgl] || 0) + total(o)));
  const days = Object.entries(byDate), max = Math.max(1, ...days.map(([, v]) => v));
  return head('Analisis bisnis', 'Laporan Pendapatan', 'Tinjau pendapatan, volume, dan kinerja pesanan untuk periode tertentu.') + `
  <div class="card card-pad" style="margin-bottom:16px"><div class="filters"><div class="field"><label>Tanggal mulai</label><input type="date" id="ra" value="${f.a}"></div><div class="field"><label>Tanggal akhir</label><input type="date" id="rb" value="${f.b}"></div>
  <div class="field"><label>Status pesanan</label><select id="rs"><option value="">Semua status</option>${STATUS.map((s) => `<option ${f.s === s ? 'selected' : ''}>${s}</option>`).join('')}</select></div>
  <button class="btn" data-act="do-report">Buat Laporan</button><button class="btn ghost" data-act="reset-report">Atur Ulang Filter</button></div></div>
  <div class="report-stats"><div class="card"><small>Total pesanan</small><b>${list.length}</b><small>Dalam periode terpilih</small></div><div class="card"><small>Total berat laundry</small><b>${kg} kg</b><small>Laundry yang diproses</small></div>
  <div class="card hl"><small>Total pendapatan</small><b>${rp(rev)}</b><small>Dari semua pesanan</small></div>
  <div class="card"><small>Pesanan berdasarkan status</small><div class="tags">${STATUS.map((s) => `<span class="badge ${sCls[s]}" title="${s}">${list.filter((o) => o.status === s).length}</span>`).join('')}</div><small style="margin-top:6px">Diterima · Dicuci · Selesai · Diambil</small></div></div>
  <div class="card card-pad" style="margin-bottom:16px"><h3>Pendapatan per tanggal</h3><small>Pendapatan harian untuk periode laporan terpilih</small>
  ${days.length ? `<div class="bars" style="height:170px">${days.map(([d, v]) => `<div class="bar-col"><small>${rp(v).replace('IDR ', '')}</small><div class="bar-track"><div class="bar" style="height:${(v / max) * 100}%"></div></div><small>${fmtTgl(d).slice(0, 6)}</small></div>`).join('')}</div>` : empty('Belum ada data', 'Ubah periode laporan.')}</div>
  <div class="card"><div class="card-head"><div><h3>Detail laporan</h3><small>${list.length} pesanan ditampilkan dalam laporan ini</small></div></div>${resultTable(list).replace(/<td><button class="btn soft".*?<\/button><\/td>/g, '').replace('<th>DETAIL</th>', '')}</div>`;
}

/* ---------- Modal ---------- */
function openModal(title, html) { $('#modalTitle').textContent = title; $('#modalBody').innerHTML = html; $('#modalBg').hidden = false; $('#modalBody input,#modalBody select')?.focus(); }
function closeModal() { $('#modalBg').hidden = true; }
const fld = (id, label, val = '', type = 'text', extra = '') => `<div class="field"><label for="${id}">${label}</label><input id="${id}" type="${type}" value="${esc(val)}" ${extra} required></div>`;
const formBtns = (ok = 'Simpan') => `<div class="modal-actions"><button type="button" class="btn ghost" data-act="close">Batal</button><button class="btn">${ok}</button></div>`;
const rows = (arr) => arr.map(([k, v]) => `<div class="detail-row"><span>${k}</span><b>${v}</b></div>`).join('');
const confirmDel = (title, msg, act, id) => openModal(title, `<p style="margin-bottom:16px">${msg}</p><div class="modal-actions"><button class="btn ghost" data-act="close">Batal</button><button class="btn danger" data-act="${act}" data-id="${id}">Hapus</button></div>`);

function cusForm(p = {}) {
  openModal(p.id ? 'Ubah pelanggan' : 'Tambah pelanggan', `<form id="f" data-kind="cus" data-id="${p.id || ''}">${fld('nama', 'Nama pelanggan', p.nama)}${fld('telp', 'Nomor telepon', p.telp, 'tel')}${fld('alamat', 'Alamat', p.alamat)}${formBtns()}</form>`);
}
function svcForm(l = {}) {
  openModal(l.id ? 'Ubah layanan' : 'Tambah layanan', `<form id="f" data-kind="svc" data-id="${l.id || ''}">${fld('nama', 'Nama layanan', l.nama)}${fld('harga', 'Harga per kg (IDR)', l.harga, 'number', 'min="500" step="500"')}${fld('waktu', 'Waktu penyelesaian', l.waktu || '2 hari')}<div class="field"><label for="desk">Deskripsi</label><textarea id="desk" rows="2">${esc(l.desk || '')}</textarea></div>${formBtns()}</form>`);
}
function orderForm() {
  if (!db.pelanggan.length || !db.layanan.length) return toast('Tambahkan pelanggan dan layanan terlebih dahulu.');
  openModal('Buat pesanan baru', `<form id="f" data-kind="order"><div class="field"><label for="pel">Pelanggan</label><select id="pel">${db.pelanggan.map((p) => `<option value="${p.id}">${esc(p.nama)}</option>`).join('')}</select></div>
  <div class="field"><label for="lay">Layanan</label><select id="lay">${db.layanan.map((l) => `<option value="${l.id}">${esc(l.nama)} – ${rp(l.harga)}/kg</option>`).join('')}</select></div>
  ${fld('berat', 'Berat (kg)', '', 'number', 'min="0.5" step="0.5"')}<p id="est" class="sub" style="margin-bottom:8px">Estimasi biaya: IDR 0</p>${formBtns('Buat pesanan')}</form>`);
  const upd = () => { $('#est').textContent = 'Estimasi biaya: ' + rp((getL($('#lay').value)?.harga || 0) * (+$('#berat').value || 0)); };
  ['#lay', '#berat'].forEach((s) => $(s).addEventListener('input', upd));
}

/* ---------- Event ---------- */
let searchF = { q: '', s: '', a: '', b: '' }, reportF = { a: '', b: '', s: '' };
const draw = () => { const k = location.hash.slice(1) in PAGES ? location.hash.slice(1) : 'dasbor'; const pg = PAGES[k];
  $('#view').innerHTML = pg.render(k === 'cari' ? searchF : k === 'laporan' ? reportF : undefined); $('#pageTitle').textContent = pg.title;
  document.title = pg.title + ' – WashUp'; $('#sidebar').classList.remove('open');
  document.querySelectorAll('#nav a').forEach((a) => a.classList.toggle('active', a.dataset.k === k)); };

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-act]'); if (!el) { if (e.target.id === 'modalBg') closeModal(); return; }
  const { act, id } = el.dataset;
  const A = {
    close: closeModal,
    'add-cus': () => cusForm(), 'edit-cus': () => cusForm(getP(id)),
    'view-cus': () => { const p = getP(id); const n = db.pesanan.filter((o) => o.pelanggan === id).length; openModal('Detail pelanggan', rows([['ID', p.id], ['Nama', esc(p.nama)], ['Telepon', esc(p.telp)], ['Alamat', esc(p.alamat)], ['Terdaftar', fmtTgl(p.tgl)], ['Jumlah pesanan', n]])); },
    'del-cus': () => confirmDel('Hapus pelanggan', `Hapus ${esc(getP(id).nama)}? Tindakan ini tidak dapat dibatalkan.`, 'do-del-cus', id),
    'do-del-cus': () => { db.pelanggan = db.pelanggan.filter((p) => p.id !== id); db.pesanan = db.pesanan.filter((o) => o.pelanggan !== id); done('Pelanggan dihapus'); },
    'add-svc': () => svcForm(), 'edit-svc': () => svcForm(getL(id)),
    'view-svc': () => { const l = getL(id); openModal('Detail layanan', rows([['ID', l.id], ['Nama', esc(l.nama)], ['Harga', rp(l.harga) + ' / kg'], ['Waktu', esc(l.waktu)], ['Deskripsi', esc(l.desk)]])); },
    'del-svc': () => confirmDel('Hapus layanan', `Hapus layanan ${esc(getL(id).nama)}?`, 'do-del-svc', id),
    'do-del-svc': () => { db.layanan = db.layanan.filter((l) => l.id !== id); db.pesanan = db.pesanan.filter((o) => o.layanan !== id); done('Layanan dihapus'); },
    'new-order': orderForm,
    'detail-order': () => { const o = db.pesanan.find((x) => x.kode === id); openModal('Detail pesanan ' + o.kode, rows([['Pelanggan', esc(getP(o.pelanggan)?.nama || '-')], ['Tanggal', fmtTgl(o.tgl)], ['Layanan', esc(getL(o.layanan)?.nama || '-')], ['Berat', o.berat + ' kg'], ['Total biaya', rp(total(o))], ['Status', badge(o.status)]])); },
    'del-order': () => confirmDel('Hapus pesanan', `Hapus pesanan ${id}?`, 'do-del-order', id),
    'do-del-order': () => { db.pesanan = db.pesanan.filter((o) => o.kode !== id); done('Pesanan dihapus'); },
    'do-search': () => { searchF = { q: $('#fq').value, s: $('#fs').value, a: $('#fa').value, b: $('#fb').value }; draw(); },
    'reset-search': () => { searchF = { q: '', s: '', a: '', b: '' }; draw(); },
    'do-report': () => { reportF = { a: $('#ra').value, b: $('#rb').value, s: $('#rs').value }; draw(); toast('Laporan diperbarui'); },
    'reset-report': () => { reportF = { a: '', b: '', s: '' }; draw(); }
  };
  A[act]?.();
});
function done(msg) { save(); closeModal(); draw(); toast(msg); }

document.addEventListener('submit', (e) => {
  e.preventDefault(); const f = e.target, { kind, id } = f.dataset, v = (s) => $(s, f).value.trim();
  if (kind === 'cus') { const d = { nama: v('#nama'), telp: v('#telp'), alamat: v('#alamat') };
    if (id) Object.assign(getP(id), d); else db.pelanggan.push({ id: nextId(db.pelanggan, 'id', 'CUS-'), ...d, tgl: new Date().toISOString().slice(0, 10) }); done('Pelanggan disimpan'); }
  if (kind === 'svc') { const d = { nama: v('#nama'), harga: +v('#harga'), waktu: v('#waktu'), desk: v('#desk') };
    if (id) Object.assign(getL(id), d); else db.layanan.push({ id: nextId(db.layanan, 'id', 'SRV-'), ...d }); done('Layanan disimpan'); }
  if (kind === 'order') { const n = Math.max(250000, ...db.pesanan.map((o) => +o.kode.split('-')[1])) + 1;
    db.pesanan.unshift({ kode: 'WU-' + n, pelanggan: v('#pel'), layanan: v('#lay'), berat: +v('#berat'), tgl: new Date().toISOString().slice(0, 10), status: 'Diterima' }); done('Pesanan dibuat'); }
});
document.addEventListener('change', (e) => { const k = e.target.dataset.status; if (!k) return;
  db.pesanan.find((o) => o.kode === k).status = e.target.value; save(); toast('Status diperbarui'); draw(); });
document.addEventListener('input', (e) => { if (e.target.id === 'q') { const q = e.target.value; $('#list').innerHTML = cusTable(db.pelanggan.filter((p) => (p.nama + p.id + p.telp).toLowerCase().includes(q.toLowerCase()))); } });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); if (e.key === 'Enter' && e.target.id === 'fq') $('[data-act="do-search"]').click(); });

/* ---------- Init ---------- */
$('#brandLogo').innerHTML = LOGO; $('#tipIcon').innerHTML = TIP_ART;
$('#nav').innerHTML = Object.entries(PAGES).map(([k, p]) => `<a href="#${k}" data-k="${k}">${IC[p.icon]}${p.title}</a>`).join('');
$('#pageDate').textContent = new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
$('#menuBtn').onclick = () => $('#sidebar').classList.toggle('open');
$('#modalClose').onclick = closeModal;
window.addEventListener('hashchange', draw); draw();
