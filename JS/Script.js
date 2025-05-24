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

const row1 = document.querySelector('.clients-row--1');
const row2 = document.querySelector('.clients-row--2');
const wrapper = document.querySelector('.clients-wrapper');

function handleScroll() {
  const rect = wrapper.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // If section is within viewport
  if (rect.top < windowHeight && rect.bottom > 0) {
    const scrollPercent = 1 - rect.top / windowHeight;

    // Clamp between 0 and 1
    const clamped = Math.max(0, Math.min(1, scrollPercent));

    const offset = clamped * 100; // Adjust scroll strength
    row1.style.transform = `translateX(${offset}px)`;
    row2.style.transform = `translateX(-${offset}px)`;
  }
}

window.addEventListener('scroll', () => {
  window.requestAnimationFrame(handleScroll);
});

// Trigger on load too
window.addEventListener('load', handleScroll);



// Contact Form

const othersCheckbox = document.getElementById('othersIndustry');
const otherIndustryInput = document.getElementById('otherIndustryInput');

othersCheckbox.addEventListener('change', () => {
  otherIndustryInput.style.display = othersCheckbox.checked ? 'block' : 'none';
});



// Check Every Field are Filled and Show Alert //

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const submitBtn = form.querySelector(".submit-btn");
  const othersCheckbox = document.getElementById("othersIndustry");
  const otherIndustryInputDiv = document.getElementById("otherIndustryInput");
  const otherIndustryInput = otherIndustryInputDiv.querySelector("input");

  // Show/hide 'Others' input field
  othersCheckbox.addEventListener("change", () => {
    otherIndustryInputDiv.style.display = othersCheckbox.checked ? "block" : "none";
  });

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent actual submission

    // Clear previous errors
    form.querySelectorAll(".error-msg").forEach(el => el.remove());

    let hasError = false;

    function showError(input, message) {
      const error = document.createElement("div");
      error.className = "error-msg";
      error.style.color = "red";
      error.style.fontSize = "13px";
      error.style.marginTop = "5px";
      error.innerText = message;
      input.parentNode.appendChild(error);
      hasError = true;
    }

    const fullName = document.getElementById("fullName");
    if (!fullName.value.trim()) showError(fullName, "Full Name is required");

    const email = document.getElementById("email");
    if (!email.value.trim()) showError(email, "Email is required");

    const mobile = document.getElementById("mobile");
    if (!mobile.value.trim()) showError(mobile, "Mobile number is required");

    // Industry checkboxes
    const industryCheckboxes = [
      document.getElementById("retail"),
      document.getElementById("distribution"),
      document.getElementById("manufacturing"),
      othersCheckbox
    ];

    const industrySelected = industryCheckboxes.some(box => box.checked);
    if (!industrySelected) {
      showError(form.querySelector(".industry-options"), "Please select at least one industry");
    }

    // If "Others" selected, validate the input
    if (othersCheckbox.checked && !otherIndustryInput.value.trim()) {
      showError(otherIndustryInput, "Please specify your industry");
    }

    const verticals = document.getElementById("verticals");
    if (!verticals.value || verticals.value === "Others") {
      showError(verticals, "Please select a vertical");
    }

    const specify = document.getElementById("specify");
    if (!specify.value.trim()) showError(specify, "Please provide details about your vertical");

    if (!hasError) {
      alert("Form submitted successfully!");
      form.reset();
      otherIndustryInputDiv.style.display = "none";
    }
  });
});




function sendMessage() {
  const input = document.getElementById('userInput');
  const userText = input.value.trim();
  if (userText === '') return;

  showUserMessage(userText);
  input.value = '';
  botReply(userText);
}

function handleOption(option) {
  showUserMessage(option);
  botReply(option);
}

function showUserMessage(message) {
  const chatBox = document.getElementById('chatBox');
  const userMessage = document.createElement('div');
  userMessage.className = 'user-message';
  userMessage.innerText = message;
  chatBox.appendChild(userMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(input) {
  const chatBox = document.getElementById('chatBox');
  const botMessage = document.createElement('div');
  botMessage.className = 'bot-message';

  const response = getBotResponse(input);
  botMessage.innerText = response;
  chatBox.appendChild(botMessage);

  // If it's the initial or general message, show options again
  if (input.toLowerCase().includes('hi') || input.toLowerCase().includes('help')) {
    const options = document.createElement('div');
    options.className = 'bot-options';
    options.innerHTML = `
      <button onclick="handleOption('Pricing')">Pricing</button>
      <button onclick="handleOption('Services')">Services</button>
      <button onclick="handleOption('Contact')">Contact</button>
    `;
    chatBox.appendChild(options);
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes('pricing')) {
    return "Our pricing starts at $99/month. Would you like a detailed quote?";
  } else if (input.includes('services')) {
    return "We offer web development, app development, and UI/UX design.";
  } else if (input.includes('contact')) {
    return "You can contact us at support@example.com or call 123-456-7890.";
  } else {
    return "I'm here to help! Ask me about Pricing, Services, or Contact.";
  }
}

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

// process section
gsap.registerPlugin(ScrollTrigger);

// LEFT BANNERS: slower appearance
gsap.utils.toArray(".process-left .banner").forEach((el, i) => {
  gsap.fromTo(el,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
      duration: 1.2, // slower
      ease: "power3.out",
      delay: i * 0.3  // more staggered
    }
  );
});

// RIGHT TIMELINE STEPS: slower appearance
gsap.utils.toArray(".step").forEach((step, i) => {
  gsap.fromTo(step,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: step,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
      duration: 1.2,
      ease: "power3.out",
      delay: i * 0.3
    }
  );
});

// CTA Button: slower fade in
gsap.fromTo(".cta-button",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".cta-button",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
    duration: 1.2,
    ease: "power3.out"
  }
);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });












