// -------------------------------------------NavBar-----------------------------------------
const header = document.getElementById("navbar");
    const sidebar = document.getElementById("mobileSidebar");
    const overlay = document.getElementById("blurOverlay");
    const body = document.body;

    window.addEventListener("scroll", () => {
      header.classList.toggle("shrink", window.scrollY > 30);
    });

    function toggleSidebar() {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
      body.classList.toggle("no-scroll");
    }

    function toggleSidebarDropdown(event) {
      event.preventDefault();
      document.getElementById("sidebarDropdown").classList.toggle("active");
    }


// -------------------------------------------Animate Number-----------------------------------------
const counters = document.querySelectorAll("span[data-target]");
    let animated = false;

    function animateCounters() {
      if (animated) return;
      animated = true;

      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const suffix = counter.getAttribute("data-suffix") || "";
        let count = 0;

        const speed = 20; // Lower is slower (ms delay between steps)
        const steps = 100; // Total steps in animation
        const increment = target / steps;

        function update() {
          count += increment;
          if (count < target) {
            counter.innerText = `${Math.floor(count)}${suffix}`;
            setTimeout(update, speed);
          } else {
            counter.innerText = `${target}${suffix}`;
          }
        }

        update();
      });
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(document.getElementById("stats"));


// -------------------------------------------Ripple Effect-----------------------------------------


  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });



// -------------------------------------------Animations CSS-----------------------------------------


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
  });






      function selectPlan(planName) {
        localStorage.setItem("chosenPlan", planName);
        window.location.href = "form.html"; // change path if needed
      }








      

    const animatedParagraphs = document.querySelectorAll(".animated-text");

    const observer3 = new IntersectionObserver((entries, observer3) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const paragraph = entry.target;
          const text = paragraph.textContent.trim();
          const words = text.split(" ");
          paragraph.innerHTML = ""; // Clear original text

          words.forEach((word, index) => {
            const span = document.createElement("span");
            span.innerHTML = word + "&nbsp;";
            span.className = "word";
            span.style.animationDelay = `${index * 0.15}s`;
            paragraph.appendChild(span);
          });

          observer3.unobserve(paragraph); // Only animate once
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% is in view
    });

    animatedParagraphs.forEach(p => observer3.observe(p));












const images = [
  "profile-1.jpg",
  "profile-2.jpg",
  "profile-1.jpg",
  "profile-2.jpg",
  "profile-1.jpg",
  "profile-2.jpg",
  "profile-1.jpg",
  "profile-2.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = images[index];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeSlide(n) {
  currentIndex = (currentIndex + n + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

