document.addEventListener('DOMContentLoaded', () => {
  const navBtns = Array.from(document.querySelectorAll('.nav-btn'));
  let currentIndex = 0;

  function activateTab(btn, index) {
    if (btn.classList.contains('active') && index === currentIndex) {
      const scan = btn.querySelector('.scan-line');
      if (scan) {
        scan.style.animation = 'none';
        void scan.offsetWidth;
        scan.style.animation = '';
      }
      return;
    }

    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentIndex = index;

    const scan = btn.querySelector('.scan-line');
    if (scan) {
      scan.style.animation = 'none';
      void scan.offsetWidth;
      scan.style.animation = '';
    }
  }

  navBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      activateTab(btn, index);
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % navBtns.length;
      activateTab(navBtns[nextIndex], nextIndex);
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + navBtns.length) % navBtns.length;
      activateTab(navBtns[prevIndex], prevIndex);
    }
  });

  const initialActive = document.querySelector('.nav-btn.active') || navBtns[0];
  if (initialActive) {
    const initIdx = navBtns.indexOf(initialActive);
    activateTab(initialActive, initIdx !== -1 ? initIdx : 0);
  }
});
