// ============================================================
// File   : js/main.js
// Tujuan : Menangani proses input data dari form dan mengirim
//          data tersebut ke database Firebase Firestore.
// Desain : Modular ES6 → menggunakan import/export
// ============================================================

// ------------------------------------------------------------
// 1️⃣ Import fungsi addData dari dataService.js
// ------------------------------------------------------------
// addData() adalah fungsi yang bertugas menyimpan data ke Firestore.
import { addData } from "./dataService.js";

// ------------------------------------------------------------
// 2️⃣ Ambil elemen form dari halaman HTML
// ------------------------------------------------------------
// id="nilaiForm" berada pada file index.html
// sehingga kita dapat menambahkan event listener ke form tersebut.
const form = document.getElementById("nilaiForm");

// ------------------------------------------------------------
// 3️⃣ Event Listener: submit form
// ------------------------------------------------------------
// Event ini akan berjalan ketika tombol "Simpan Data" ditekan.
//
// Fungsi menggunakan async agar dapat menunggu proses pengiriman data
// ke Firestore tanpa membuat halaman freeze.
// ------------------------------------------------------------
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Mencegah halaman reload otomatis

  // ----------------------------------------------------------
  // 4️⃣ Ambil nilai input dari form
  // ----------------------------------------------------------
  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const matakuliah = document.getElementById("matakuliah").value;
  const nilai = parseFloat(document.getElementById("nilai").value);

  // ----------------------------------------------------------
  // 5️⃣ Validasi sederhana
  // ----------------------------------------------------------
  // Mengecek apakah semua kolom terisi dan nilai benar-benar angka.
  // Jika tidak valid → hentikan proses & tampilkan pesan.
  if (!nama || !nim || !matakuliah || isNaN(nilai)) {
    alert("⚠️ Semua kolom harus diisi dengan benar!");
    return;
  }

  // ----------------------------------------------------------
  // 6️⃣ Kirim data ke Firebase
  // ----------------------------------------------------------
  try {
    // Memanggil fungsi addData() dengan object data mahasiswa
    await addData({ nama, nim, matakuliah, nilai });

    // Beri feedback ke user bahwa data berhasil tersimpan
    alert("✅ Data berhasil disimpan!");

    // Reset form ke keadaan awal
    form.reset();
  } catch (error) {
    // Jika terjadi error saat mengirim data
    console.error("Gagal menyimpan data:", error);
    alert("❌ Terjadi kesalahan saat menyimpan data.");
  }
});