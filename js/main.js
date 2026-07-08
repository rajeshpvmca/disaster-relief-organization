document.addEventListener("DOMContentLoaded", function() {
    // Load Header
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load header');
            return response.text();
        })
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.outerHTML = data;
                
                // Set active class based on current page
                const currentPath = window.location.pathname.split('/').pop() || 'index.html';
                const navLinks = document.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === currentPath) {
                        link.classList.add('active', 'text-success', 'fw-bold', 'border-bottom', 'border-2', 'border-success');
                        link.classList.remove('text-secondary', 'text-dark', 'fw-medium');
                    } else {
                        link.classList.remove('active', 'text-success', 'border-bottom', 'border-2', 'border-success', 'text-dark', 'fw-medium');
                        link.classList.add('text-secondary');
                    }
                });
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load footer');
            return response.text();
        })
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.outerHTML = data;
            }
        })
        .catch(error => console.error('Error loading footer:', error));

    // Initialize AOS after a short delay to ensure elements are loaded
    setTimeout(() => {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'slide',
                once: true,
                offset: 50
            });
        }
    }, 500);
});
