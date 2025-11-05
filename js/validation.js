// ============================================================
// File   : validation.js
// Tujuan : Menyediakan fungsi-fungsi validasi untuk form input
//           pada aplikasi Portal Akademik.
// Desain  : Modular JavaScript (ES6) agar dapat digunakan di berbagai file.
// ============================================================

// ------------------------------------------------------------
// 1️⃣ Fungsi: isNonEmpty()
// ------------------------------------------------------------
// Deskripsi:
//   Mengecek apakah suatu nilai string tidak kosong setelah di-trim.
//   Digunakan untuk memvalidasi input teks seperti NIM, nama, dan mata kuliah.
//
// Parameter:
//   - value (string): Nilai teks yang akan diperiksa.
//
// Return:
//   - true  → jika nilai bertipe string dan tidak kosong.
//   - false → jika nilai kosong, hanya berisi spasi, atau bukan string.
// ------------------------------------------------------------
export function isNonEmpty(value) {
  return typeof value === "string" && value.trim().length > 0;
}

// ------------------------------------------------------------
// 2️⃣ Fungsi: isValidNilai()
// ------------------------------------------------------------
// Deskripsi:
//   Memastikan bahwa input nilai berupa angka (number) dan berada dalam
//   rentang yang valid (0 sampai 100). Fungsi ini digunakan untuk
//   mencegah input nilai yang tidak logis.
//
// Parameter:
//   - v (any): Nilai yang diinput dari form (bisa berupa string atau number).
//
// Return:
//   - true  → jika nilai merupakan angka valid antara 0 dan 100.
//   - false → jika nilai bukan angka atau di luar rentang tersebut.
// ------------------------------------------------------------
export function isValidNilai(v) {
  const n = Number(v); // Konversi ke number
  return Number.isFinite(n) && n >= 0 && n <= 100;
}

// ------------------------------------------------------------
// 3️⃣ Fungsi: validateForm()
// ------------------------------------------------------------
// Deskripsi:
//   Melakukan validasi menyeluruh terhadap seluruh input form,
//   mencakup NIM, nama, mata kuliah, dan nilai.
//
// Parameter:
//   - obj (object): Objek berisi data form mahasiswa, misalnya:
//       {
//         nim: "701230001",
//         nama: "Ahmad Fauzan",
//         matakuliah: "Pemrograman Web",
//         nilai: 88
//       }
//
// Return:
//   - Object berisi dua properti:
//       {
//         ok: boolean,          // true jika semua validasi lolos
//         messages: string[]    // daftar pesan error (jika ada)
//       }
//
// Proses:
//   1. Mengecek setiap field menggunakan fungsi isNonEmpty() dan isValidNilai().
//   2. Jika ada kesalahan, menambahkan pesan ke array `messages`.
//   3. Mengembalikan hasil akhir validasi.
// ------------------------------------------------------------
export function validateForm(obj) {
  const messages = []; // Array untuk menyimpan pesan kesalahan

  // Validasi tiap field input
  if (!isNonEmpty(obj.nim)) messages.push("NIM harus diisi.");
  if (!isNonEmpty(obj.nama)) messages.push("Nama harus diisi.");
  if (!isNonEmpty(obj.matakuliah)) messages.push("Mata kuliah harus diisi.");
  if (!isValidNilai(obj.nilai))
    messages.push("Nilai harus angka antara 0 - 100.");

  // Jika tidak ada error (messages kosong), maka ok = true
  return { ok: messages.length === 0, messages };
}
