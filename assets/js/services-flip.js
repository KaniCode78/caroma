document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');

  cards.forEach(card => {
    // Click/tap en la tarjeta -> toggle
    card.addEventListener('click', (e) => {
      // Evita que un clic en un enlace del reverso
      // cierre la tarjeta inmediatamente
      if (e.target.closest('a')) return;

      card.classList.toggle('is-flipped');
    });
  });

  // Clic en cualquier lugar fuera de las tarjetas -> quitar flip
  document.addEventListener('click', (e) => {
    cards.forEach(card => {
      if (!card.contains(e.target)) {
        card.classList.remove('is-flipped');
      }
    });
  });
});