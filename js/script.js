const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const indicator = document.querySelector('.indicator');

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



// carrusel 

const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const slideWidth = carouselSlide.children[0].clientWidth;

nextBtn.addEventListener('click', () => {
    if (counter >= carouselSlide.children.length - 1) return;
    counter++;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
});

// para ver si podemos Reiniciar el carrusel cuando llega al final
carouselSlide.addEventListener('transitionend', () => {
    if (carouselSlide.children[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselSlide.children.length - 2;
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
    if (carouselSlide.children[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselSlide.children.length - 2;
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
});
