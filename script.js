
document.addEventListener('DOMContentLoaded', function() {
    
    const swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    
    const loader = document.getElementById('loader');
    
    
    setTimeout(function() {
        loader.style.opacity = '0';
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500);
    }, 3000);

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .procedure-card, .timeline-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    
    document.querySelectorAll('.feature-card, .procedure-card, .timeline-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    
    const pulseButtons = function() {
        const buttons = document.querySelectorAll('.btn-accent');
        
        buttons.forEach(button => {
            setInterval(() => {
                button.classList.add('pulse');
                setTimeout(() => {
                    button.classList.remove('pulse');
                }, 1000);
            }, 5000);
        });
    };

    pulseButtons();
});


const style = document.createElement('style');
style.textContent = `
    .pulse {
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(243, 185, 95, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(243, 185, 95, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(243, 185, 95, 0);
        }
    }
    
    nav.scrolled {
        background-color: rgba(26, 46, 42, 0.95);
        backdrop-filter: blur(10px);
    }
`;
document.head.appendChild(style);
