// ============================================================
// File   : js/uiHandler.js
// Tujuan : Menangani proses tampilan (UI) untuk tabel data mahasiswa
//          seperti menampilkan data ke tabel dan menangani kondisi kosong.
// ============================================================

/**
 * renderTableData()
 * -----------------------------------------------------------
 * Fungsi untuk menampilkan data mahasiswa ke dalam tabel HTML.
 *
 * Parameter:
 *   @param {Array} dataArray - Array objek berisi data mahasiswa,
 *     contoh: [
 *       {nim:"70123", nama:"Dewi", matakuliah:"RPL", nilai:90},
 *       ...
 *     ]
 *
 * Proses:
 *   1. Mengambil elemen <tbody> dari tabel.
 *   2. Menghapus konten tabel sebelumnya (jika ada).
 *   3. Jika data kosong → menampilkan pesan "Tidak ada data".
 *   4. Loop data dan hanya menampilkan data yang valid (tidak undefined).
 *   5. Menampilkan nomor urut berdasarkan jumlah data valid.
 *   6. Jika ada data tapi semuanya invalid → menampilkan pesan khusus.
 *
 * Return:
 *   Tidak mengembalikan apa pun. Fungsi ini langsung mengubah tampilan DOM.
 * -----------------------------------------------------------
 */
function renderTableData(dataArray) {
  const tableBody = document.getElementById("dataTable"); // Target tabel
  tableBody.innerHTML = ""; // Reset / Hapus isi tabel sebelum render ulang

  // 1️⃣ Jika data benar-benar kosong
  if (!dataArray || dataArray.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted">
          Tidak ada data ditemukan
        </td>
      </tr>`;
    return; // Hentikan proses
  }

  let validCount = 0; // Counter nomor urut data valid

  // 2️⃣ Loop seluruh data
  dataArray.forEach((item) => {
    // Hanya tampilkan baris jika semua field penting terisi
    const isValid =
      item.nim &&
      item.nama &&
      item.matakuliah &&
      item.nilai !== undefined &&
      item.nilai !== null;

    if (isValid) {
      validCount++; // Tambah nomor urut
      const row = `
        <tr>
          <td>${validCount}</td>
          <td>${item.nim}</td>
          <td>${item.nama}</td>
          <td>${item.matakuliah}</td>
          <td>${item.nilai}</td>
        </tr>
      `;
      tableBody.innerHTML += row; // Tambahkan baris ke tabel
    }
  });

  // 3️⃣ Jika ada data tapi semuanya invalid
  if (validCount === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted">
          Tidak ada data valid untuk ditampilkan
        </td>
      </tr>`;
  }
}

// -----------------------------------------------------------
// 4️⃣ Ekspor fungsi agar dapat digunakan oleh file lain
//    seperti lihatData.js
// -----------------------------------------------------------
export { renderTableData };
