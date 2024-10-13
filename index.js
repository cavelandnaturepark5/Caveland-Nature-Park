document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            // Prevent default anchor behavior (jumping to "#")
            e.preventDefault();
            
            // Close any other open dropdowns
            const otherDropdowns = document.querySelectorAll('.dropdown.show');
            otherDropdowns.forEach(drop => {
                if (drop !== e.target.nextElementSibling) {
                    drop.classList.remove('show');
                }
            });

            // Toggle the current dropdown
            const dropdown = e.target.nextElementSibling;
            dropdown.classList.toggle('show');
        });
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', (e) => {
        if (!e.target.matches('.dropdown-toggle') && !e.target.closest('.dropdown')) {
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(drop => {
                drop.classList.remove('show');
            });
        }
    });
});

    


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking Successful for ' + document.getElementById('people').value + ' people!');
});



document.querySelector('.cta').addEventListener('click', function() {
    alert('Booked!');
});

document.querySelector('.phone-button').addEventListener('click', function() {
    alert('Call: Phone Number');
});




