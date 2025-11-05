// ==========================================================
// File   : firebaseConfig.js
// Tujuan : Mengatur koneksi antara aplikasi web dengan
//           Firebase (Firestore Database)
// Desain  : Modular JavaScript (ES6) - mendukung import/export
// ==========================================================

// ----------------------------------------------------------
// 1️⃣ Import modul Firebase
// ----------------------------------------------------------
// Fungsi initializeApp digunakan untuk menginisialisasi aplikasi Firebase
// dengan konfigurasi khusus milik project kamu.
//
// Fungsi getFirestore digunakan untuk mengakses layanan
// Cloud Firestore (database NoSQL milik Firebase).
// ----------------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// ----------------------------------------------------------
// 2️⃣ Konfigurasi Firebase Project
// ----------------------------------------------------------
// Objek firebaseConfig berisi kunci dan pengenal unik yang
// menghubungkan aplikasi ini ke project Firebase milikmu.
//
// Kamu bisa menyalin data ini dari halaman Firebase Console
// di bagian “Project Settings” → “SDK setup and configuration”.
// ----------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyDcTeXr8DA6Fr7I4Yu6sOZYk94Xom_psbY", // API Key unik untuk otentikasi aplikasi
  authDomain: "input-nilai-mhs.firebaseapp.com", // Domain otentikasi Firebase
  projectId: "input-nilai-mhs", // ID unik project Firebase
  storageBucket: "input-nilai-mhs.firebasestorage.app", // Lokasi penyimpanan file di Firebase Storage
  messagingSenderId: "564529663108", // ID untuk pengiriman pesan (jika menggunakan FCM)
  appId: "1:564529663108:web:3fdf5eac202f646babc6d1", // ID unik aplikasi (web app)
  measurementId: "G-8QLR16VW0J", // ID untuk pelacakan analitik (opsional)
};

// ----------------------------------------------------------
// 3️⃣ Inisialisasi Firebase dan Firestore
// ----------------------------------------------------------
// initializeApp(firebaseConfig)
// → Membuat instance aplikasi Firebase berdasarkan konfigurasi di atas.
//
// getFirestore(app)
// → Mengambil instance Firestore agar bisa digunakan untuk
//   operasi database (seperti tambah data, baca data, hapus data, dsb).
// ----------------------------------------------------------
const app = initializeApp(firebaseConfig); // Inisialisasi Firebase App
const db = getFirestore(app); // Inisialisasi Database Firestore

// ----------------------------------------------------------
// 4️⃣ Ekspor Variabel db
// ----------------------------------------------------------
// Variabel db berisi koneksi aktif ke Firestore dan di-*export*
// agar bisa digunakan oleh file JavaScript lain.
//
// Contoh penggunaannya di file lain:
// import { db } from "./firebaseConfig.js";
// ----------------------------------------------------------
export { db };