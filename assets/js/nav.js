const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}


// carrousel


  const track = document.querySelector('.carrusel-track');
  let scrollAmount = 0;

  function autoScroll() {
    if (scrollAmount <= track.scrollWidth - track.clientWidth) {
      track.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      scrollAmount += 260; // ancho imagen + gap
    } else {
      scrollAmount = 0;
    }
  }

  setInterval(autoScroll, 3000); // cada 3 segundosDa
