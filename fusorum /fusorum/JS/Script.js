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

  const images = document.querySelectorAll('.slider img');
let current = 0;

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

images[current].classList.add('active');
setInterval(showNextImage, 10000); // Change every 3 seconds

  