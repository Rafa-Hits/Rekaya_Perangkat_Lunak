// ===========================================================
// File   : js/dataService.js
// Tujuan : Menyediakan fungsi layanan (service) untuk
//          berinteraksi dengan database Firestore.
//           - Tambah data mahasiswa
//           - Ambil semua data mahasiswa
// ===========================================================

// -----------------------------------------------------------
// 1️⃣ Import modul dan koneksi database dari firebaseConfig.js
// -----------------------------------------------------------
// File ini mengambil variabel `db` yang sudah diinisialisasi
// di firebaseConfig.js agar dapat digunakan untuk operasi CRUD.
import { db } from "./firebaseConfig.js";

// -----------------------------------------------------------
// 2️⃣ Import fungsi dari Firebase Firestore SDK
// -----------------------------------------------------------
// collection()  → Mengacu pada koleksi (tabel) di Firestore.
// addDoc()      → Menambahkan dokumen baru ke dalam koleksi.
// getDocs()     → Mengambil seluruh dokumen dari koleksi.
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// -----------------------------------------------------------
// 3️⃣ Referensi Koleksi Firestore
// -----------------------------------------------------------
// `colRef` digunakan untuk menunjuk koleksi bernama "mahasiswa"
// di dalam database Firestore. Semua operasi data dilakukan
// terhadap koleksi ini.
const colRef = collection(db, "mahasiswa");

// -----------------------------------------------------------
// 4️⃣ Fungsi addData()
// -----------------------------------------------------------
// Tujuan : Menambahkan data mahasiswa baru ke koleksi Firestore.
// Parameter :
//   - mahasiswa (objek) → berisi data seperti nama, nim, matakuliah, nilai.
// Proses :
//   - Fungsi ini asinkron (async) karena melibatkan proses jaringan.
//   - Menggunakan addDoc() untuk menyimpan data ke Firestore.
// -----------------------------------------------------------
async function addData(mahasiswa) {
  await addDoc(colRef, mahasiswa); // Tambah dokumen baru ke Firestore
}

// -----------------------------------------------------------
// 5️⃣ Fungsi getAllData()
// -----------------------------------------------------------
// Tujuan : Mengambil semua data mahasiswa dari koleksi "mahasiswa".
// Proses :
//   1. Memanggil getDocs(colRef) untuk mengambil semua dokumen.
//   2. Mengubah hasil snapshot Firestore menjadi array JavaScript.
//   3. Mengembalikan array objek dengan format:
//        [
//          { id: "abc123", nama: "...", nim: "...", matakuliah: "...", nilai: 90 },
//          ...
//        ]
// -----------------------------------------------------------
async function getAllData() {
  const snapshot = await getDocs(colRef); // Ambil semua dokumen
  return snapshot.docs.map((doc) => ({
    id: doc.id, // ID dokumen unik yang diberikan oleh Firestore
    ...doc.data(), // Menyebarkan isi data dokumen ke dalam objek JavaScript
  }));
}

// -----------------------------------------------------------
// 6️⃣ Ekspor Fungsi
// -----------------------------------------------------------
// Ekspor kedua fungsi agar dapat digunakan di modul lain,
// misalnya :
//   - main.js       → untuk menyimpan data input form.
//   - lihatData.js  → untuk membaca & menampilkan data ke tabel.
// -----------------------------------------------------------
export { addData, getAllData };