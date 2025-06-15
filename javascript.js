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


const observer2 = new IntersectionObserver((enteries) =>{    
    enteries.forEach((entry) =>{    
        console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    }else{  
        entry.target.classList.remove('show');
    }
    });
    
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer2.observe(el));

