// Interactive Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Create floating particles
    createParticles();
    
    // Skill items interaction
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', function() {
            const skill = this.getAttribute('data-skill');
            showSkillInfo(skill);
        });
    });
    
    // Project card interaction
    const projectCard = document.querySelector('.interactive-card');
    if (projectCard) {
        projectCard.addEventListener('click', function() {
            alert('🚀 5G Coverage Prediction Project\n\nThis project involves:\n• Machine Learning Algorithms\n• Data Analysis\n• 5G Network Optimization\n• Python Implementation');
        });
    }
    
    // Form validation with animations
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            if (name && email) {
                showSuccessMessage(name);
                form.reset();
            } else {
                showErrorMessage();
            }
        });
    }
    
    // Smooth scrolling with easing
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Add scroll animation to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('scroll-animate');
        observer.observe(section);
    });
});

// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #f39c12;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Show skill information
function showSkillInfo(skill) {
    const skillInfo = {
        'HTML': '🌐 Markup language for web structure',
        'CSS': '🎨 Styling language for web design',
        'JAVASCRIPT': '⚡ Programming language for interactivity',
        'PYTHON': '🐍 Versatile programming language',
        'EXCEL': '📊 Spreadsheet application for data analysis',
        'POWER BI': '📈 Business intelligence tool'
    };
    
    alert(`${skill}\n\n${skillInfo[skill] || 'Professional skill'}`);
}

// Success message animation
function showSuccessMessage(name) {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #f39c12, #e67e22);
        color: white;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 1.2rem;
        z-index: 1000;
        animation: slideIn 0.5s ease;
    `;
    message.textContent = `✅ Thank you ${name}! Message sent successfully!`;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Error message animation
function showErrorMessage() {
    const inputs = document.querySelectorAll('input[required]');
    inputs.forEach(input => {
        if (!input.value) {
            input.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                input.style.animation = '';
            }, 500);
        }
    });
    
    // Add shake animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        @keyframes slideIn {
            from { transform: translate(-50%, -50%) scale(0); }
            to { transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(style);
}

console.log("🚀 Interactive portfolio loaded successfully!");