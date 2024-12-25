document.getElementById("hamburger").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
});

document.getElementById("offers-link").addEventListener("click", function(event) {
    event.preventDefault();
    const dropdown = document.getElementById("offers-dropdown");
    dropdown.classList.toggle("show");
    const isShown = dropdown.classList.contains("show");

    const bookingMenu = document.querySelector('li:contains("Booking")');
    const contactMenu = document.querySelector('li#contact');
    if (isShown) {
        bookingMenu.style.display = 'none';
    } else {
        bookingMenu.style.display = 'block';
    }
});



function changePhoto(photo) {
  document.getElementById('bigPhoto').src = photo;
}

//ACCORDION ABOUT
    var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionIHeading');

    for (i = 0; i < accHD.length; i++) {
      accHD[i].addEventListener('click', toggleItem, false);
    }

    function toggleItem() {
      var itemClass = this.parentNode.className;
      for (var i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
      }
      if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
      }
    }
    

//OPEN MODAL
      
    document.getElementById("openModal").addEventListener("click", function() {
        document.getElementById("termsModal").style.display = "block";
    });

    document.querySelector(".close-button").addEventListener("click", function() {
        document.getElementById("termsModal").style.display = "none";
    });

    window.addEventListener("click", function(event) {
        const modal = document.getElementById("termsModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

//ADVENTURES

    document.addEventListener('DOMContentLoaded', function() {
        const activities = document.querySelectorAll('.activity');
        const tabs = document.querySelectorAll('.tab-links span');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const target = this.getAttribute('data-target');

                activities.forEach(activity => {
                    activity.style.display = (activity.id === target) ? 'block' : 'none';
                });
                tabs.forEach(tab => tab.classList.remove('active'));
                this.classList.add('active');
            });
        });
        document.querySelector('#skywalking').style.display = 'block';
    });

//CONTACT
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
    }

    function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
    }

    inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
    });

    //SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
      
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Get the target position
            const startPosition = window.scrollY; // Get the current scroll position
            const distance = targetPosition - startPosition; // Calculate the distance to scroll
            const duration = 500; // Set duration for the scroll (in milliseconds)
            let startTime = null;
      
            // Animation function
            function animation(currentTime) {
              if (startTime === null) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const run = ease(timeElapsed, startPosition, distance, duration); // Calculate the current position
              window.scrollTo(0, run); // Scroll to the current position
      
              if (timeElapsed < duration) requestAnimationFrame(animation); // Continue the animation
            }
      
            // Easing function for a smoother effect
            function ease(t, b, c, d) {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
            }
      
            requestAnimationFrame(animation); // Start the animation
          }
        });
      });