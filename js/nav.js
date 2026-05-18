const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle menu + swap hamburger icon
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.textContent = menu.classList.contains('active') ? '✕' : '☰';
});

/* Mobile submenu toggle */
document.querySelectorAll('.has-submenu > a').forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {

            const href = this.getAttribute('href');
            const hasPage = href && href !== '#';
            const submenu = this.nextElementSibling;
            const isOpen = submenu.classList.contains('active');

            if (hasPage && isOpen) {
                // Submenu already open - navigate to the page
                menu.classList.remove('active');
                hamburger.textContent = '☰';
                return;
            }

            // First tap - toggle submenu open/closed
            e.preventDefault();

            document.querySelectorAll('.submenu.active').forEach(openSubmenu => {
                openSubmenu.classList.remove('active');
            });

            if (!isOpen) {
                submenu.classList.add('active');
            }
        }
    });
});

/* Close submenus and mobile menu when clicking a regular menu item */
document.querySelectorAll('.menu a:not(.has-submenu > a)').forEach(item => {
    item.addEventListener('click', function() {
        if (window.innerWidth <= 1024) {
            document.querySelectorAll('.submenu.active').forEach(openSubmenu => {
                openSubmenu.classList.remove('active');
            });
            menu.classList.remove('active');
            hamburger.textContent = '☰';
        }
    });
});