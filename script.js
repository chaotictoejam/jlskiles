// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation items on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });

    // Update gradient colors based on scroll position
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // Update hero section gradient
    const hero = document.querySelector('#hero');
    if (hero) {
        const hue = (scrollPercent * 3.6) % 360; // Convert scroll percent to hue (0-360)
        hero.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 10%), hsl(${(hue + 30) % 360}, 70%, 15%))`;
    }

    // Update section headings gradient
    document.querySelectorAll('h2').forEach((heading, index) => {
        const hue = ((scrollPercent + (index * 30)) * 3.6) % 360;
        heading.style.background = `linear-gradient(45deg, hsl(${hue}, 70%, 50%), hsl(${(hue + 60) % 360}, 70%, 50%))`;
        heading.style.webkitBackgroundClip = 'text';
        heading.style.backgroundClip = 'text';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('#hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
}); 