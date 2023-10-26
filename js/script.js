const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const indicator = document.querySelector('.indicator');
const portfolioScroll = document.querySelector('.portfolio-scroll');
const dots = document.querySelectorAll('.dot');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navList.querySelectorAll('a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
            indicator.style.width = `${a.offsetWidth}px`;
            indicator.style.left = `${a.offsetLeft}px`;
        }
    });
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        portfolioScroll.scrollTo({
            left: index * portfolioScroll.offsetWidth,
            behavior: 'smooth'
        });

        // Activa el punto seleccionado y desactiva los demás
        dots.forEach(dot => dot.classList.remove('active'));
        dot.classList.add('active');
    });
});

// scroll por el porfolio
portfolioScroll.addEventListener('scroll', () => {
    const currentIndex = Math.floor(portfolioScroll.scrollLeft / portfolioScroll.offsetWidth);
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
});
