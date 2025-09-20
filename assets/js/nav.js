document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle_btn");
  const toggleIcon = toggleBtn?.querySelector("i");
  const dropdown = document.querySelector(".dropdown_menu");
  const links = dropdown?.querySelectorAll("a");

  if (!toggleBtn || !dropdown || !toggleIcon) return;

  const open = () => {
    dropdown.classList.add("open");
    document.body.classList.add("no-scroll");
    toggleBtn.setAttribute("aria-expanded", "true");
    dropdown.setAttribute("aria-hidden", "false");
    toggleIcon.classList.replace("fa-bars", "fa-xmark");
  };

  const close = () => {
    dropdown.classList.remove("open");
    document.body.classList.remove("no-scroll");
    toggleBtn.setAttribute("aria-expanded", "false");
    dropdown.setAttribute("aria-hidden", "true");
    toggleIcon.classList.replace("fa-xmark", "fa-bars");
  };

  const toggle = () => (dropdown.classList.contains("open") ? close() : open());

  // Toggle click/keyboard
  toggleBtn.addEventListener("click", toggle);
  toggleBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });

  // Cerrar al navegar
  links?.forEach((a) => a.addEventListener("click", close));

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Reset al pasar a desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) close();
  });
});