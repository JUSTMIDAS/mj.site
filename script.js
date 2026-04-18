// ============================================
// INITIALIZATION & DOM LOAD HELPERS
// ============================================

// Ensure elements are visible on page load
function showAllElements() {
    const elements = document.querySelectorAll(
        '.nav-menu, .text, .section-about, .section-projects, .project-card, .section-contact, .skills-section, .services-section, .icon, .timeline-section, .timeline-item, .service-category'
    );
    elements.forEach(el => {
        if (!el.classList.contains('visible')) {
            el.classList.add('visible');
        }
    });

    document.querySelectorAll('h4, h2, p, img, .phone-booth').forEach(el => {
        if (!el.classList.contains('visible')) {
            el.classList.add('visible');
        }
    });
}





function initPage() {
    showAllElements();
    populateSkillsGrids();
    displayRecent();
    if (document.querySelector('#all-projects-list')) {
        renderAllProjects();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}

// Trigger scroll event for dynamic content
setTimeout(() => {
    window.dispatchEvent(new Event('scroll')); 
}, 150);


// ============================================
// SKILLS VIEW TOGGLE & GRID POPULATION
// ============================================

function toggleSkillsView(view) {
    const carouselViews = document.querySelectorAll('.carousel-view');
    const gridViews = document.querySelectorAll('.grid-view');
    const buttons = document.querySelectorAll('.view-toggle-btn');

    carouselViews.forEach(el => el.classList.toggle('hidden', view !== 'carousel'));
    gridViews.forEach(el => el.classList.toggle('hidden', view !== 'grid'));

    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
}



function populateSkillsGrids() {
    const carousel1 = document.getElementById('skillsCarousel');
    const carousel2 = document.getElementById('skillsCarousel2');
    const grid1 = document.getElementById('skillsGrid');
    const grid2 = document.getElementById('skillsGrid2');

    // Meticulously copy the content from the carousel to the grid
    if (carousel1 && grid1) {
        grid1.innerHTML = carousel1.innerHTML;
    }

    if (carousel2 && grid2) {
        grid2.innerHTML = carousel2.innerHTML;
    }
}



// ============================================
// ANIMATED TEXT & ICONS
// ============================================

// Animated letters in hero section
const letters = document.querySelectorAll('#animatedText span');
if (letters.length > 0) {
    letters.forEach(letter => {
        letter.addEventListener('click', () => {
            letter.classList.add('squish');
            setTimeout(() => {
                letter.classList.remove('squish');
            }, 300);
        });
    });
}

// Question mark animation
const questionMark = document.querySelector('.question-mark');
if (questionMark) {
    questionMark.classList.add('shake');
}

// Floating icons animation
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    const duration = Math.random() * 5 + 5;
    const xMove = (Math.random() - 0.5) * 50;
    const yMove = (Math.random() - 0.5) * 50;
    icon.style.setProperty('--duration', `${duration}s`);
    icon.style.setProperty('--x-move', `${xMove}px`);
    icon.style.setProperty('--y-move', `${yMove}px`);
    icon.classList.add('floating');
});


// ============================================
// NAVIGATION & THEME
// ============================================

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}


function iconDisable(status) {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        // If status is 'visible', we want to DISABLE (add class)
        if (status === 'visible') {
            icon.classList.add('disabled');
        } 
        // If status is 'hidden', we want to ENABLE (remove class)
        else if (status === 'hidden') {
            icon.classList.remove('disabled');
        }
    });
}

// Theme toggle (light/dark mode)
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.querySelector('.theme-toggle i').classList.toggle('fa-moon', !isDark);
    document.querySelector('.theme-toggle i').classList.toggle('fa-sun', isDark);
}

// Load saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('.theme-toggle i').classList.replace('fa-moon', 'fa-sun');
}


// ============================================
// PROJECT CONTROLS
// ============================================

// Toggle project view layout
function toggleProjects(view) {
    const projectContainer = document.querySelector('.project-card-container');
    projectContainer.classList.remove('hidden', 'normal', 'list', 'grid');
    if (view !== 'hide') {
        projectContainer.classList.add(view);
    } else {
        projectContainer.classList.add('hidden');
    }
    window.dispatchEvent(new Event('scroll'));
}

function setProjectCategory(category) {
    document.querySelectorAll('.project-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });

    document.querySelectorAll('.project-card').forEach(card => {
        const cardCategory = card.dataset.category || 'all';
        card.style.display = category === 'all' || cardCategory === category ? 'block' : 'none';
    });
}

const myProjects = [
    {
        title: "IRON PULSE",
        description: "A fitness website showcasing workout plan and gym equipment",
        tech: "html,tailwind,expressjs,javascript",
        category: "web",
        date: "2026-10-20",
        image: "projectfolder/ironpulse.png",
        url: "https://justmidas.github.io/ironpulse-/",
        host: "Vercel",
        stackText: "html, css, tailwind, expressjs, javascript"
    },
    {
        title: "Fitness Tracker",
        description: "A mobile-responsive fitness app for logging workouts and tracking progress.",
        tech: "react,nodejs,mongodb",
        category: "web",
        date: "2020-09-10",
        image: "projectfolder/naahla.png",
        url: "https://example.com/demo9",
        host: "Netlify",
        stackText: "React, Node.js, MongoDB, Chart.js"
    },
    {
        title: "shop it",
        description: "An e-commerce platform for online shopping with cart and payment integration.",
        tech: "react,nodejs,mongodb",
        category: "design",
        date: "2021-09-10",
        image: "projectfolder/ironpulse.png",
                url: "https://example.com/demo9",

        host: "Netlify",
        stackText: "React, Node.js, MongoDB, Chart.js"
    },
    {
        title: "Promo Video Suite",
        description: "A video editing showcase for promotional content and short brand films.",
        tech: "premiere,aftereffects,video",
        category: "video",
        date: "2024-12-05",
        image: "projectfolder/naahla.png",
        url: "https://example.com/demo-video",
        host: "Vimeo",
        stackText: "Adobe Premiere, After Effects, Motion Graphics"
    },
    {
        title: "Brand Collateral Pack",
        description: "A Photoshop-driven design project for brand identity and marketing assets.",
        tech: "photoshop,illustrator,design",
        category: "photoshop",
        date: "2025-03-18",
        image: "projectfolder/ironpulse.png",
        url: "https://example.com/demo-design",
        host: "Behance",
        stackText: "Adobe Photoshop, Adobe Illustrator, Brand Design"
    },
    {
        title: "naahla",
        description: "A portfolio website for a designer with interactive galleries.",
        tech: "react,tailwind,mongodb",
        category: "web",
        date: "2026-01-14",
        image: "projectfolder/naahla.png",
        url: "https://naahla.vercel.app/",
        host: "Vercel",
        stackText: "React, Node.js, MongoDB, Chart.js"
    }


];




function renderAllProjects() {
    const grid = document.getElementById('all-projects-list');
    if (!grid) return;

    grid.innerHTML = "";

    myProjects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-tech', proj.tech);
        card.setAttribute('data-date', proj.date);
        card.setAttribute('data-category', proj.category || 'web');
        card.innerHTML = `
            <img src="${proj.image}" alt="${proj.title}" loading="lazy">
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <p class="tech-stack"> <strong>Tech Stack:</strong> ${proj.stackText}</p>
           
            <div class="project-card-actions">
                <a href="${proj.url}" class="demo-link" target="_blank" rel="noopener noreferrer">View Live/ Demo</a>
                <!-- <button type="button" class="case-study-link" onclick="showCaseStudy('${proj.title}')">Read Case Study</button> -->
            </div>
        `;
        grid.appendChild(card);
    });
}









// recnt project  load 
function displayRecent() {
    console.log("displayRecent function triggered!");
    
    const list = document.getElementById('recent-projects-list');
    if (!list) {
        console.error("Could not find the element with ID 'recent-projects-list'");
        return;
    }

    if (typeof myProjects === 'undefined' || !Array.isArray(myProjects)) {
        console.error("The myProjects array is missing or invalid!");
        return;
    }

    // Sort and slice
    const recent = [...myProjects]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 2);

    console.log("Recent projects found:", recent.length, recent);

    list.innerHTML = ""; 

    recent.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-tech', proj.tech || '');
        card.setAttribute('data-date', proj.date);
        
        // Ensure image path is correct
        const imageSrc = proj.image.startsWith('http') ? proj.image : proj.image;
        
        card.innerHTML = `
            <div class="project-link">
                <img src="${imageSrc}" alt="${proj.title}" loading="lazy" onerror="this.src='IMG_2040.png'">
                <h3>${proj.title}</h3>
                <p>${proj.description}</p>
                <a href="${proj.url}" class="demo-link" target="_blank">View Live/ Demo</a>
            </div>
        `;
        list.appendChild(card);
    });
    
    // Trigger scroll to apply visibility classes
    window.dispatchEvent(new Event('scroll'));
}

// Ensures the DOM is fully loaded before running
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayRecent);
} else {
    displayRecent();
}











// Filter projects by technology
function filterProjects(tech) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const techs = card.dataset.tech.split(',');
        if (tech === 'all' || techs.includes(tech)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    window.dispatchEvent(new Event('scroll'));
}

// Sort projects by criteria
let sortOrder = 'asc';
function sortProjects(criteria) {
    const projectContainer = document.querySelector('.project-card-container');
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

    projectCards.sort((a, b) => {
        const valueA = a.dataset[criteria];
        const valueB = b.dataset[criteria];
        return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    projectContainer.innerHTML = '';
    projectCards.forEach(card => projectContainer.appendChild(card));
    window.dispatchEvent(new Event('scroll'));
}

// ============================================
// SKILLS CAROUSEL
// ============================================

// Handle each .skills-scroll independently so both SKILLS and ADDITIONAL SKILLS work
const skillsSections = document.querySelectorAll('.skills-section');
skillsSections.forEach(section => {
    const skillsScrolls = section.querySelectorAll('.skills-scroll');

    skillsScrolls.forEach(skillsScroll => {
        const skillCards = skillsScroll.querySelectorAll('.skill-card');
        if (!skillCards || skillCards.length === 0) return;

        let scrollPosition = 0;
        let isPaused = false;
        let isDragging = false;
        let startX = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        const totalWidth = Array.from(skillCards).reduce((acc, card) => acc + card.offsetWidth + 32, 0);

        // Duplicate content for infinite scroll (only once)
        skillsScroll.innerHTML += skillsScroll.innerHTML;

        // Auto-scroll animation (scoped per skills-scroll)
        function animateSkills() {
            if (!isPaused && !isDragging) {
                scrollPosition -= 1;
                if (Math.abs(scrollPosition) >= totalWidth / 2) {
                    scrollPosition = 0;
                }
                currentTranslate = scrollPosition;
                skillsScroll.style.transform = `translateX(${currentTranslate}px)`;
            }
            requestAnimationFrame(animateSkills);
        }

        requestAnimationFrame(animateSkills);

        // Pause on card click
        skillCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('clicked');
                isPaused = card.classList.contains('clicked');
            });
        });

        // Mouse/touch drag handlers
        skillsScroll.addEventListener('mousedown', startDragging);
        skillsScroll.addEventListener('touchstart', startDragging, { passive: true });
        skillsScroll.addEventListener('mousemove', drag);
        skillsScroll.addEventListener('touchmove', drag, { passive: true });
        skillsScroll.addEventListener('mouseup', stopDragging);
        skillsScroll.addEventListener('touchend', stopDragging);
        skillsScroll.addEventListener('mouseleave', stopDragging);

        function startDragging(e) {
            isDragging = true;
            isPaused = true;
            startX = e.type.includes('mouse') ? e.pageX : (e.touches && e.touches[0] ? e.touches[0].pageX : 0);
            prevTranslate = currentTranslate;
        }

        function drag(e) {
            if (isDragging) {
                const currentX = e.type.includes('mouse') ? e.pageX : (e.touches && e.touches[0] ? e.touches[0].pageX : 0);
                const deltaX = currentX - startX;
                currentTranslate = prevTranslate + deltaX;

                if (currentTranslate > 0) currentTranslate = 0;
                if (Math.abs(currentTranslate) > totalWidth / 2) currentTranslate = -(totalWidth / 2);

                skillsScroll.style.transform = `translateX(${currentTranslate}px)`;
            }
        }

        function stopDragging() {
            isDragging = false;
            isPaused = Array.from(skillCards).some(card => card.classList.contains('clicked'));
            scrollPosition = currentTranslate;
        }

        // Make section titles and cards visible when in viewport
        window.addEventListener('scroll', () => {
            const skillsRect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (skillsRect.top < windowHeight - 100) {
                section.querySelectorAll('.section-title, .section-heading, .skill-card, .cv-button').forEach(element => {
                    element.classList.add('visible');
                });
            } else if (window.pageYOffset < lastScrollTop) {
                section.querySelectorAll('.section-title, .section-heading, .skill-card, .cv-button').forEach(element => {
                    element.classList.remove('visible');
                });
            }
        });
    });
});

// ============================================
// CASE STUDIES
// ============================================

function showCaseStudy(projectTitle) {
    const modal = document.querySelector('#caseStudyModal');
    const content = document.querySelector('#caseStudyContent');

    const details = {
        'E-Commerce Platform': {
            problem: "Low conversion rates on mobile devices due to slow image loading.",
            solution: "Implemented lazy-loading and WebP image compression, reducing load time by 60%.",
            hurdle: "Integrating secure payment gateways with complex tax calculations."
        },
        'Task Management App': {
            problem: "Real-time updates were causing excessive server load.",
            solution: "Optimized WebSocket emissions and implemented Redis for state caching.",
            hurdle: "Maintaining data synchronization across multiple concurrent users."
        },
        'Portfolio Website': {
            problem: "Static content led to poor user engagement.",
            solution: "Added interactive animations and dynamic content loading.",
            hurdle: "Ensuring cross-browser compatibility for animations."
        },
        'Social Media Dashboard': {
            problem: "Inefficient API calls leading to slow data retrieval.",
            solution: "Implemented caching and optimized query structures.",
            hurdle: "Handling rate limits from social media APIs."
        },
        'Weather App': {
            problem: "Inaccurate forecasts due to API limitations.",
            solution: "Integrated multiple weather APIs for better accuracy.",
            hurdle: "Parsing and normalizing data from different sources."
        },
        'Blog Platform': {
            problem: "Poor SEO performance affecting visibility.",
            solution: "Implemented meta tags, sitemaps, and optimized content structure.",
            hurdle: "Balancing user experience with SEO requirements."
        },
        'Chat Application': {
            problem: "High latency in message delivery.",
            solution: "Upgraded to WebSocket for real-time communication.",
            hurdle: "Managing connection stability and fallbacks."
        },
        'Inventory Management System': {
            problem: "Manual data entry errors causing discrepancies.",
            solution: "Automated data import and validation processes.",
            hurdle: "Integrating with existing legacy systems."
        },
        'Fitness Tracker': {
            problem: "Battery drain from constant tracking.",
            solution: "Optimized algorithms for efficient data collection.",
            hurdle: "Ensuring accuracy while reducing power consumption."
        },
        'Event Booking System': {
            problem: "Concurrent bookings leading to overbooking.",
            solution: "Implemented transaction locks and queue management.",
            hurdle: "Handling high traffic during peak booking times."
        }
    };

    const data = details[projectTitle] || { problem: "N/A", solution: "N/A", hurdle: "N/A" };

    content.innerHTML = `
        <h2>Case Study: ${projectTitle}</h2>
        <div class="case-study-grid">
            <div class="case-study-box">
                <h4><i class="fas fa-exclamation-triangle"></i> The Problem</h4>
                <p>${data.problem}</p>
            </div>
            <div class="case-study-box">
                <h4><i class="fas fa-check-circle"></i> The Solution</h4>
                <p>${data.solution}</p>
            </div>
        </div>
        <div class="case-study-box" style="margin-top:20px; border-left-color: #e74c3c;">
            <h4><i class="fas fa-mountain"></i> The Technical Hurdle</h4>
            <p>${data.hurdle}</p>
        </div>
    `;

    modal.classList.add('active');
}


// ============================================
// POPUP HANDLERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Case study modal close
    const closeCaseStudyBtn = document.querySelector('#closeCaseStudy');
    if (closeCaseStudyBtn) {
        closeCaseStudyBtn.addEventListener('click', () => {
            document.querySelector('#caseStudyModal').classList.remove('active');
        });
    }

    // Contact popup handlers
    const phoneButton = document.querySelector('#phoneButton');
    const contactPopup = document.querySelector('#contactPopup');
    const closePopupBtn = document.querySelector('.contact-popup .close-popup');

    // Floating phone button opens centered popup
    if (phoneButton && contactPopup) {
        phoneButton.addEventListener('click', () => {
            contactPopup.classList.add('active');
            history.replaceState(null, '', '#contact');
        });
    }

    // Open contact popup when `#contact` links are clicked (do not modify URL hash)
    document.querySelectorAll('a[href="#contact"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (contactPopup) {
                contactPopup.classList.add('active');
            }
        });
    });

    // If page loaded with #contact hash, open popup
    if (location.hash === '#contact' && contactPopup) {
        contactPopup.classList.add('active');
    }

    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            contactPopup.classList.remove('active');
        });
    }

    // Close popup when clicking outside
    if (contactPopup) {
        contactPopup.addEventListener('click', (e) => {
            if (e.target === contactPopup) {
                contactPopup.classList.remove('active');
            }
        });
    }
});


// ============================================
// SERVICES TAB SWITCHING
// ============================================

function switchTab(event, tabId) {
    event.preventDefault();

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked button and corresponding content
    event.target.closest('.tab-button').classList.add('active');
    document.getElementById(tabId).classList.add('active');

    // Animate service categories
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.querySelectorAll('.service-category').forEach((category, idx) => {
            category.classList.remove('visible');
            setTimeout(() => {
                category.classList.add('visible');
            }, idx * 150);
        });
    }
}


// ============================================
// SCROLL ANIMATIONS & VISIBILITY
// ============================================

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Nav menu animation
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        const navRect = navMenu.getBoundingClientRect();
        if (navRect.top < windowHeight - 100) {
            navMenu.classList.add('visible');
            navMenu.querySelectorAll('.nav-logo, .nav-links a').forEach(element => {
                element.classList.add('visible');
            });
        } else if (scrollTop < lastScrollTop) {
            navMenu.classList.remove('visible');
            navMenu.querySelectorAll('.nav-logo, .nav-links a').forEach(element => {
                element.classList.remove('visible');
            });
        }
    }

    // Icons animation
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        const iconRect = icon.getBoundingClientRect();
        if (iconRect.top < windowHeight - 100) {
            icon.classList.add('visible');
        } else if (scrollTop < lastScrollTop) {
            icon.classList.remove('visible');
        }
    });

    // Text animation
    const textElement = document.querySelector('.text');
    if (textElement) {
        const textRect = textElement.getBoundingClientRect();
        if (textRect.top < windowHeight - 100) {
            textElement.classList.add('visible');
        } else if (scrollTop < lastScrollTop) {
            textElement.classList.remove('visible');
        }
    }

    // About section animation
    const aboutSection = document.querySelector('.section-about');
    if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        if (aboutRect.top < windowHeight - 100) {
            aboutSection.classList.add('visible');
            aboutSection.querySelectorAll('h4, h2, img, p').forEach(element => {
                element.classList.add('visible');
            });
        } else if (scrollTop < lastScrollTop) {
            aboutSection.classList.remove('visible');
            aboutSection.querySelectorAll('h4, h2, img, p').forEach(element => {
                element.classList.remove('visible');
            });
        }
    }

    // Projects section animation
    const projectsSection = document.querySelector('.section-projects');
    if (projectsSection) {
        const projectsRect = projectsSection.getBoundingClientRect();
        if (projectsRect.top < windowHeight - 100) {
            projectsSection.classList.add('visible');
            projectsSection.querySelectorAll('h4, h2').forEach(element => {
                element.classList.add('visible');
            });
        } else if (scrollTop < lastScrollTop) {
            projectsSection.classList.remove('visible');
            projectsSection.querySelectorAll('h4, h2').forEach(element => {
                element.classList.remove('visible');
            });
        }
    }

    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < windowHeight - 100) {
            card.classList.add('visible');
            card.querySelectorAll('img, h3, p, a').forEach(element => {
                element.classList.add('visible');
            });
            
        } else if (scrollTop < lastScrollTop) {
            card.classList.remove('visible');
            card.querySelectorAll('img, h3, p, a').forEach(element => {
                element.classList.remove('visible');
            });
        }
    });

    // Contact section animation
    const contactSection = document.querySelector('.section-contact');
    if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        if (contactRect.top < windowHeight - 100) {
            contactSection.classList.add('visible');
            contactSection.querySelectorAll('h4, h2, .phone-booth').forEach(element => {
                element.classList.add('visible');
            });
        } else if (scrollTop < lastScrollTop) {
            contactSection.classList.remove('visible');
            contactSection.querySelectorAll('h4, h2, .phone-booth').forEach(element => {
                element.classList.remove('visible');
            });
        }
    }

    // Timeline sections animation
    const educationSection = document.querySelector('#education');
    if (educationSection) {
        const educationRect = educationSection.getBoundingClientRect();
        if (educationRect.top < windowHeight - 100) {
            educationSection.classList.add('visible');
            educationSection.querySelectorAll('h2, h1').forEach(el => el.classList.add('visible'));
            educationSection.querySelectorAll('.timeline-item').forEach((item, index) => {
                setTimeout(() => item.classList.add('visible'), index * 150);
            });
        }
    }

    const workSection = document.querySelector('#work-history');
    if (workSection) {
        const workRect = workSection.getBoundingClientRect();
        if (workRect.top < windowHeight - 100) {
            workSection.classList.add('visible');
            workSection.querySelectorAll('h2, h1').forEach(el => el.classList.add('visible'));
            workSection.querySelectorAll('.timeline-item').forEach((item, index) => {
                setTimeout(() => item.classList.add('visible'), index * 150);
            });
        }
    }

    // Services section animation
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
        const servicesRect = servicesSection.getBoundingClientRect();
        if (servicesRect.top < windowHeight - 100) {
            servicesSection.classList.add('visible');
            servicesSection.querySelectorAll('.section-title, .section-heading').forEach(el => el.classList.add('visible'));
            servicesSection.querySelectorAll('.service-category').forEach((category, index) => {
                setTimeout(() => category.classList.add('visible'), index * 200);
            });
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Trigger scroll on load
window.dispatchEvent(new Event('scroll'));