document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const icon = header.querySelector('.icon');
    const isOpen = body.style.maxHeight && body.style.maxHeight !== "0px";

    // Close all
    document.querySelectorAll('.accordion-body').forEach(b => {
      b.style.maxHeight = null;
    });
    document.querySelectorAll('.accordion-header .icon').forEach(i => {
      i.textContent = '+';
    });

    // Toggle current
    if (!isOpen) {
      body.style.maxHeight = body.scrollHeight + "px";
      icon.textContent = '−';
    }
  });
});
});