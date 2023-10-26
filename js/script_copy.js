window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);

      //change logo
      var logo = document.querySelector(".brand img");
      if (window.scrollY>0) {
          logo.setAttribute('src', 'image/white.png');
      }else{
          logo.setAttribute('src', 'image/blue.png');
      }

  });

  //javascript for responsive navigation sidebar menu
  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
  });

  // scroll y porfolio 
const portfolioScroll = document.querySelector('.portfolio-scroll');
const dots = document.querySelectorAll('.dot');


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

// Asegúrate de que los puntos sean activados cuando haces scroll por el porfolio
portfolioScroll.addEventListener('scroll', () => {
    const currentIndex = Math.floor(portfolioScroll.scrollLeft / portfolioScroll.offsetWidth);
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
});