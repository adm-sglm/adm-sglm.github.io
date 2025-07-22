const toggleButton = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('open'); // ikon X'e dönüşsün
    mobileMenu.classList.toggle('open');   // menü açılsın/kapansın
  });