// Mengambil elemen dari HTML
const cursorGlow = document.querySelector('.cursor-glow');
const welcomeScreen = document.getElementById('welcome-screen');
const btnMasuk = document.getElementById('btn-masuk');

/* --- FUNGSI 1: GERAKAN CAHAYA KURSOR (GLOBAL) --- */
// Fungsi ini bekerja di seluruh jendela, termasuk saat layar selamat datang aktif
window.addEventListener('mousemove', (e) => {
    // Pastikan elemen cursorGlow ada sebelum mencoba menggerakkannya
    if (cursorGlow) {
        // Menggerakkan cahaya (dikurangi 50 agar kursor pas di tengah)
        cursorGlow.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    }
});

/* --- FUNGSI 2: TOMBOL MASUK KLIK --- */
btnMasuk.addEventListener('click', function() {
    // Menyembunyikan layar selamat datang saat diklik
    welcomeScreen.classList.add('sembunyi');
});
// Mendengarkan instruksi 'klik' pada tombol masuk
btnMasuk.addEventListener('click', function() {
    // Menambahkan kelas 'sembunyi' dari CSS untuk memicu animasi fade-out saat tombol diklik
    welcomeScreen.classList.add('sembunyi');
});

// Mendeteksi setiap pergerakan mouse di halaman web
window.addEventListener('mousemove', (e) => {
    // Menggerakkan elemen cahaya mengikuti koordinat mouse
    cursorGlow.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
});

/* --- FITUR BARU: SHORTCUT KEYBOARD UNTUK VIDEO --- */

// Memilih elemen video dari HTML
const video = document.querySelector('.portfolio-video');

// Mendeteksi setiap kali ada tombol keyboard yang ditekan
window.addEventListener('keydown', (e) => {
    
    // 1. Tombol 'Space' (Spasi) untuk Play/Pause
    if (e.code === 'Space') {
        e.preventDefault(); // Mencegah halaman web scroll ke bawah saat spasi ditekan
        
        // Jika video sedang berhenti (pause), maka putar (play). Jika sebaliknya, hentikan.
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    // 2. Tombol 'F' atau 'f' untuk Fullscreen (Layar Penuh)
    if (e.key === 'f' || e.key === 'F') {
        // Cek apakah saat ini TIDAK dalam mode fullscreen
        if (!document.fullscreenElement) {
            // Buat video menjadi fullscreen
            video.requestFullscreen().catch(err => {
                console.log("Gagal memuat layar penuh:", err);
            });
        } else {
            // Jika sudah fullscreen, kembalikan ke ukuran semula
            document.exitFullscreen();
        }
    }

    // 3. Tombol 'Escape' (Esc) untuk Keluar Fullscreen
    if (e.key === 'Escape') {
        // Cek apakah saat ini SEDANG dalam mode fullscreen
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
});

/* --- FUNGSI MODAL (POP-UP) SERTIFIKAT --- */
const modal = document.getElementById('sertifikat-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalDesc = document.getElementById('modal-desc');

// Fungsi untuk membuka pop-up dan mengisi data sertifikat
function bukaModal(imgSrc, title, date, desc) {
    modal.style.display = "flex"; // Menampilkan kotak pop-up
    modalImg.src = imgSrc; // Mengganti gambar
    modalTitle.innerText = title; // Mengganti judul
    modalDate.innerText = "Tanggal Lulus: " + date; // Mengganti tanggal
    modalDesc.innerText = desc; // Mengganti deskripsi
}

// Fungsi untuk menutup pop-up
function tutupModal() {
    modal.style.display = "none";
}

// Fitur tambahan: Menutup pop-up jika pengguna mengklik area luar kotak (hitam transparan)
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        tutupModal();
    }
});