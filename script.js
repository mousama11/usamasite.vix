// Initialize Vanta.js Waves Background
VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x0,
    shininess: 50,
    waveHeight: 15,
    waveSpeed: 0.5,
    zoom: 0.8
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
gsap.utils.toArray(".section-3d").forEach((section, i) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        y: 150,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });
});

// Animate project cards individually
gsap.utils.toArray(".project-card-3d").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
        ease: "back.out(1.7)"
    });
});

// Enhanced Mobile Menu Functionality
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    mobileMenuButton.classList.toggle('active');
    document.body.classList.toggle('menu-open');

    // Toggle between hamburger and close icon
    const icon = mobileMenuButton.querySelector('i');
    if (mobileMenuButton.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuButton.classList.remove('active');
    document.body.classList.remove('menu-open');

    // Ensure hamburger icon is shown
    const icon = mobileMenuButton.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');

    // Smooth scroll to section after menu closes
    setTimeout(() => {
        if (window.location.hash) {
            const target = document.querySelector(window.location.hash);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    }, 400);
}

mobileMenuButton.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

// Close menu when clicking on links
document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu when clicking on backdrop
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        toggleMobileMenu();
    }
});

// Enhanced Sticky Header
const nav = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    // Show/hide based on scroll direction
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down
        nav.classList.remove('scrolled');
    } else {
        // Scrolling up
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    lastScrollY = window.scrollY;
});

// Initialize with correct state
if (window.scrollY > 20) {
    nav.classList.add('scrolled');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Skip mobile menu links (they have their own handler)
    if (anchor.classList.contains('mobile-menu-link')) return;

    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    gsap.to(".floating-3d", {
        x: (x - 0.5) * 30,
        y: (y - 0.5) * 30,
        duration: 2,
        ease: "power1.out"
    });

    gsap.to(".project-card-3d", {
        x: (x - 0.5) * 20,
        y: (y - 0.5) * 20,
        duration: 2,
        ease: "power1.out"
    });
});

// Window resize handler
window.addEventListener('resize', () => {
    VANTA.WAVES.resize();
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.validation-message').forEach(el => el.textContent = '');
    
    // Validate form
    let isValid = true;
    
    if (!this.name.value.trim()) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    
    if (!this.email.value.trim()) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(this.email.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    if (this.phone.value && !/^[0-9]{10,15}$/.test(this.phone.value)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number (10-15 digits)';
        isValid = false;
    }
    
    if (!this.message.value.trim()) {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Get submit button
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <span class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
        </span>
    `;
    
    // Prepare email parameters
    const templateParams = {
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value || 'Not provided',
        message: this.message.value
    };
    
    // Send email
    emailjs.send('service_jpvm62p', 'template_dnim65e', templateParams)
        .then(() => {
            // Success message
            const successDiv = document.createElement('div');
            successDiv.className = 'mt-4 p-4 bg-green-100 text-green-700 rounded';
            successDiv.textContent = 'Message sent successfully!';
            this.parentNode.insertBefore(successDiv, this.nextSibling);
            
            // Remove message after 5 seconds
            setTimeout(() => successDiv.remove(), 5000);
            
            // Reset form
            this.reset();
        })
        .catch((error) => {
            // Error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'mt-4 p-4 bg-red-100 text-red-700 rounded';
            errorDiv.textContent = 'Failed to send message. Please try again later.';
            this.parentNode.insertBefore(errorDiv, this.nextSibling);
            
            // Remove message after 5 seconds
            setTimeout(() => errorDiv.remove(), 5000);
            
            console.error('Email send error:', error);
        })
        .finally(() => {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        });
});