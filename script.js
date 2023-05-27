// Mengambil semua elemen navbar
const navItems = document.querySelectorAll('.navbar-nav .nav-link');

// Mengatur event click pada setiap elemen navbar
navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Menghapus kelas 'active' dari semua elemen navbar
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        // Menambahkan kelas 'active' pada elemen yang diklik
        this.classList.add('active');
    });
});
