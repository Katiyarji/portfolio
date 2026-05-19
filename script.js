
        // Smooth scrolling & active nav highlight
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                // update active class
                document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // contact form simple alert (demo)
        const form = document.getElementById('contactForm');
        if(form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for reaching out, Richa will get back to you soon!');
                form.reset();
            });
        }

        // scroll spy for active nav
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if(pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').substring(1);
                if(href === current) {
                    link.classList.add('active');
                }
            });
        });
    