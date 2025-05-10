// testimonials slider
const logos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png'
  ];
  
  const logoTrack = document.getElementById('logoTrack');
  
  // Duplicate logo set for seamless loop
  for (let i = 0; i < 10; i++) {
    logos.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Logo ${index + 1}`;
      img.className = 'logo-img';
      logoTrack.appendChild(img);
    });
  }
  
  // navbar
  document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('distributionDropdown');
    const toggle = dropdown.querySelector('.dropdown-toggle');

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  });




  