// ============================================================
// File   : js/lihatData.js
// Tujuan : Mengambil data mahasiswa dari Firestore dan
//          menampilkannya ke tabel pada halaman lihat-data.html
// ============================================================

// ------------------------------------------------------------
// 1️⃣ Import fungsi dari module lain
// ------------------------------------------------------------
// getAllData() → Mengambil semua data dari Firestore (dataService.js)
// renderTableData() → Menampilkan data ke tabel HTML (uiHandler.js)
import { getAllData } from "./dataService.js";
import { renderTableData } from "./uiHandler.js";

// ------------------------------------------------------------
// 2️⃣ Event DOMContentLoaded
// ------------------------------------------------------------
// Event ini dijalankan secara otomatis ketika seluruh elemen HTML
// sudah selesai dimuat (tanpa menunggu gambar & stylesheet).
//
// Tujuan: Agar tabel baru diisi data setelah HTML siap digunakan.
// ------------------------------------------------------------
window.addEventListener("DOMContentLoaded", async () => {
  try {
    // --------------------------------------------------------
    // 3️⃣ Ambil semua data mahasiswa dari database Firestore
    // Data yang diambil berupa array objek mahasiswa
    // contoh: [{nim:"70123", nama:"Dewi", matakuliah:"RPL", nilai:90}, ...]
    // --------------------------------------------------------
    const data = await getAllData();

    // --------------------------------------------------------
    // 4️⃣ Tampilkan data ke tabel menggunakan fungsi UI handler
    // Fungsi ini akan mengisi <tbody id="dataTable">
    // dengan baris-baris data yang valid
    // --------------------------------------------------------
    renderTableData(data);
  } catch (error) {
    // --------------------------------------------------------
    // 5️⃣ Penanganan error apabila koneksi Firebase gagal
    // --------------------------------------------------------
    console.error("Gagal mengambil data:", error);
  }
});