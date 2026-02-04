document.querySelectorAll('[data-slider]').forEach(slider => {
  const slides = slider.querySelector('.slides');
  const slideItems = slider.querySelectorAll('.slide');
  const dotsWrap = slider.querySelector('.dots');
  const counter = slider.querySelector('.slide-counter');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');

  let index = 0;
  let startX = 0;
  let autoplay;

  // Create dots
  slideItems.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.onclick = () => goTo(i);
    dotsWrap.appendChild(dot);
  });

  const dots = dotsWrap.querySelectorAll('span');

  function update() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    slideItems.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slideItems[index].classList.add('active');
    dots[index].classList.add('active');
    counter.textContent = `${index + 1} / ${slideItems.length}`;
  }

  function goTo(i) {
    index = i;
    update();
  }

  slider.querySelector('.next').onclick = () => {
    index = (index + 1) % slideItems.length;
    update();
  };

  slider.querySelector('.prev').onclick = () => {
    index = (index - 1 + slideItems.length) % slideItems.length;
    update();
  };

  // Autoplay
  slider.addEventListener('mouseenter', () => clearInterval(autoplay));
  slider.addEventListener('mouseleave', startAuto);

  function startAuto() {
    if (slider.dataset.autoplay)
      autoplay = setInterval(() => slider.querySelector('.next').click(), 4000);
  }

  // Swipe gestures
  slider.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  slider.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) slider.querySelector('.next').click();
    if (endX - startX > 50) slider.querySelector('.prev').click();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') slider.querySelector('.next').click();
    if (e.key === 'ArrowLeft') slider.querySelector('.prev').click();
    if (e.key === 'Escape') lightbox.classList.remove('show');
  });

  // Lightbox click to open
  slideItems.forEach(slide => {
    slide.onclick = () => {
      lightboxImg.src = slide.querySelector('img').src;
      lightbox.classList.add('show');
    };
  });

  // Lightbox click to close
  lightbox.onclick = e => {
    if (e.target === lightbox) lightbox.classList.remove('show');
  };

  update();
  startAuto();
});
