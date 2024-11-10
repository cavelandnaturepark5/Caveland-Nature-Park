
//DROPDOWN
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function(event) {
        event.preventDefault(); 
        const dropdown = toggle.parentElement; 
        dropdown.classList.toggle("active"); 
    });
});

// Optional: Close dropdown when clicking outside
document.addEventListener("click", function(event) {
    const isClickInside = dropdownToggles[0].parentElement.contains(event.target);
    if (!isClickInside) {
        dropdownToggles.forEach((toggle) => {
            const dropdown = toggle.parentElement;
            dropdown.classList.remove("active"); 
        });
    }
});
   

//HAMBURGER
    const hambuger = document.querySelector('.hambuger');
    const navMenu = document.querySelector('.nav-menu');
    
    hambuger.addEventListener("click", mobileMenu);
    
    function mobileMenu() {
      hambuger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
    
    const navLink = document.querySelectorAll('.nav-link');
    navLink.forEach((n) => n.addEventListener("click", closeMenu));
    
    function closeMenu() {
      hambuger.classList.remove("active");
      navMenu.classList.remove("active");
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
