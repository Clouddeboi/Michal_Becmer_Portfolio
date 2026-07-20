/* ==========================================================================
   PORTFOLIO CONFIGURATION (EDIT THIS TO CUSTOMIZE YOUR SITE)
   ========================================================================== */
const config = {
    personalInfo: {
        name: "Michal Becmer", 
        title: "Gameplay Programmer",
        email: "michalcloud2003@gmail.com",
        location: "Dundalk, Ireland",
        interests: "Gameplay programming, Physics, Simulations",
        summary: "I build responsive, high-performance game mechanics and scalable systems. Passionate about bringing creative visions to life through clean architecture and optimized code.",
        aboutMe: `
            <p>Hello! I am a passionate game developer with a strong foundation in C++ and C#. Over the past few years, I've dedicated myself to understanding engine architectures and crafting satisfying game feel.</p>
            <br>
            <p>I enjoy solving complex technical challenges, whether that means optimizing a custom physics routine or architecting an AI state machine. When I'm not coding, I'm usually participating in game jams or dissecting the mechanics of my favorite indie games.</p>
        `,
        resumeLink: "assets/resume/placeholder-cv.pdf"
    },
    socials: [
        { name: "GitHub", icon: "fab fa-github", url: "https://github.com/Clouddeboi" },
        { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/michal-becmer-68a104286/?trk=public-profile-join-page" },
        { name: "itch.io", icon: "fab fa-itch-io", url: "https://clouddeboi.itch.io/" },
        { name: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/_michal_2003/" }
    ],
    skills: {
        "Programming": ["C++", "C#", "Python", "SFML"],
        "Game Engines": ["Unity", "Unreal Engine 5"],
        "Graphics & Math": ["HLSL/GLSL", "Physics", "Render Pipelines"],
        "Tools & Misc": ["Git/GitHub"]
    },
    education: [
        {
            degree: "BSc Computing in Games Development",
            institution: "Dundalk Institute of Technology",
            year: "2022 - 2026"
        }
    ]
};

/* ==========================================================================
   PROJECTS DATABASE
   Add new objects to this array to automatically expand your portfolio.
   ========================================================================== */
const projects = [
    {
        id: "project-BH",
        title: "Black Hole Simulation",
        subtitle: "Realtime black hole graphics simulation",
        shortDesc: "This simulation leverages modern OpenGL and C++ to visualize the gravitational effects of a stellar-mass black hole, complete with an accretion disk, gravitational lensing effects, realistic planet models and a dynamic skybox. .",
        thumbnail: "assets/gifs/BlackHoleProject/BH_Cover.gif",
        mainGif: "../assets/gifs/BlackHoleProject/BH_Cover.gif",
        screenshots: [
            "../assets/screenshots/BHProjectSS/BlackholeCover.png",
            "../assets/screenshots/BHProjectSS/2DSim.png",
            "../assets/screenshots/BHProjectSS/Early3DAttempts.png"
        ],
        tags: ["OpenGl", "C++"],
        details: {
            Engine: "None",
            Language: "C++",
            Platform: "PC (Windows)",
            TeamSize: "Solo",
            DevTime: "2 Months",
            Role: "Lead Programmer",
            Status: "Released (Itch.io)",
            Genre: "Simulation"
        },
        links: [
            { text: "View Repository", url: "#", icon: "fab fa-github", style: "btn-outline" },
            { text: "Play Game", url: "#", icon: "fas fa-gamepad", style: "btn-primary" }
        ],
        writeup: [
            {
                heading: "Overview",
                text: "Project Omega started as a game jam entry that evolved into a 6-month capstone project. The goal was to create a fluid, momentum-based shooter inspired by Titanfall." // <!-- PLACEHOLDER -->
            },
            {
                heading: "Technical Challenges (AI Systems)",
                text: "To make the enemies challenging in a high-mobility environment, I developed a custom utility-based AI system in C++. The AI dynamically evaluates player velocity and trajectory to predict movement and coordinate flanking maneuvers." // <!-- PLACEHOLDER -->
            },
            {
                heading: "Lessons Learned",
                text: "Balancing C++ performance with Blueprint flexibility for the designers was crucial. I learned how to architect native classes that expose intuitive variables to the editor." // <!-- PLACEHOLDER -->
            }
        ]
    },
    
    {
        id: "project-girlsplan",
        title: "Girls Plan",
        subtitle: "Educational Game for Womens Rights",
        shortDesc: "This educational game was developed in collaboration with Plan International Belgium to raise awareness about girls' rights. Designed for children aged 10 to 14.",
        thumbnail: "assets/gifs/GirlsPlanProject/GirlsPlanGameplay.gif",
        mainGif: "../assets/gifs/GirlsPlanProject/GirlsPlanGameplay.gif",
        screenshots: [
            "../assets/screenshots/GirlsPlanProjectSS/InGameSS.jpg", 
            "../assets/screenshots/GirlsPlanProjectSS/CharacterSelect.jpg",
            "../assets/screenshots/GirlsPlanProjectSS/QuestionSlide.jpg"
        ],
        tags: ["Unity", "C#", "Team", "Stakeholders"],
        details: { Engine: "Unity", Language: "C#", Platform: "PC", TeamSize: "6", DevTime: "5 Months", Role: "Lead Programmer", Status: "Complete", Genre: "Educational Board Game" },
        links: [{ text: "View Source", url: "#", icon: "fab fa-github", style: "btn-outline" }],
        writeup: [
            { heading: "Overview", text: "" },
            { heading: "Working with stakeholders", text: "" }
        ]
    },
    {
        id: "project-casinoknight",
        title: "Casino Knight",
        subtitle: "A procedural roguelike dungeon crawler",
        shortDesc: "This simulation leverages modern OpenGL and C++ to visualize the gravitational effects of a stellar-mass black hole, complete with an accretion disk, gravitational lensing effects, realistic planet models and a dynamic skybox. .",
        thumbnail: "assets/gifs/BlackHoleProject/BH_Cover.gif",
        mainGif: "../assets/gifs/BlackHoleProject/BH_Cover.gif",
        screenshots: [
            "../assets/screenshots/BHProjectSS/BlackholeCover.png",
            "../assets/screenshots/BHProjectSS/2DSim.png",
            "../assets/screenshots/BHProjectSS/Early3DAttempts.png"
        ],
        tags: ["Unity", "C#", "Steam Release", "Game Jam"],
        details: {
            Engine: "Unity",
            Language: "C#",
            Platform: "PC (Windows)",
            TeamSize: "Solo",
            DevTime: "2 Months",
            Role: "Lead Programmer",
            Status: "Released (Itch.io + Steam)",
            Genre: "Roguelike Dungeon Crawler"
        },
        links: [
            { text: "View Repository", url: "#", icon: "fab fa-github", style: "btn-outline" },
            { text: "Play Game", url: "#", icon: "fas fa-gamepad", style: "btn-primary" }
        ],
        writeup: [
            {
                heading: "Overview",
                text: "Project Omega started as a game jam entry that evolved into a 6-month capstone project. The goal was to create a fluid, momentum-based shooter inspired by Titanfall." // <!-- PLACEHOLDER -->
            },
            {
                heading: "Technical Challenges (AI Systems)",
                text: "To make the enemies challenging in a high-mobility environment, I developed a custom utility-based AI system in C++. The AI dynamically evaluates player velocity and trajectory to predict movement and coordinate flanking maneuvers." // <!-- PLACEHOLDER -->
            },
            {
                heading: "Lessons Learned",
                text: "Balancing C++ performance with Blueprint flexibility for the designers was crucial. I learned how to architect native classes that expose intuitive variables to the editor." // <!-- PLACEHOLDER -->
            }
        ]
    },
    {
        id: "project-sfmlagario",
        title: "SFML Agario",
        subtitle: "UDP Networked Agario clone",
        shortDesc: "Designed and developed a multiplayer Agar.io clone in C++, featuring a UDP client-server architecture and SFML for graphics, input, and game rendering.",
        thumbnail: "assets/gifs/SFMLAgarioProject/SFML_Agario.gif",
        mainGif: "../assets/gifs/BlackHoleProject/BH_Cover.gif",
        screenshots: [
            "../assets/screenshots/BHProjectSS/BlackholeCover.png",
            "../assets/screenshots/BHProjectSS/2DSim.png",
            "../assets/screenshots/BHProjectSS/Early3DAttempts.png"
        ],
        tags: ["SFML", "C++", "UDP", "Network", "Multiplayer"],
        details: {
            Engine: "None",
            Language: "C++",
            Platform: "PC (Windows)",
            TeamSize: "Solo",
            DevTime: "1 Week",
            Role: "Solo Programmer",
            Status: "Released (Itch.io)",
            Genre: ".IO Game"
        },
        links: [
            { text: "View Repository", url: "#", icon: "fab fa-github", style: "btn-outline" },
            { text: "Play Game", url: "#", icon: "fas fa-gamepad", style: "btn-primary" }
        ],
        writeup: [
            {
                heading: "Overview",
                text: "Project Omega started as a game jam entry that evolved into a 6-month capstone project. The goal was to create a fluid, momentum-based shooter inspired by Titanfall." // <!-- PLACEHOLDER -->
            },
            {
                heading: "Technical Challenges (AI Systems)",
                text: "To make the enemies challenging in a high-mobility environment, I developed a custom utility-based AI system in C++. The AI dynamically evaluates player velocity and trajectory to predict movement and coordinate flanking maneuvers." // <!-- PLACEHOLDER -->
            },
            {
                heading: "Lessons Learned",
                text: "Balancing C++ performance with Blueprint flexibility for the designers was crucial. I learned how to architect native classes that expose intuitive variables to the editor." // <!-- PLACEHOLDER -->
            }
        ]
    },
    {
        id: "project-solas",
        title: "Solas",
        subtitle: "An Action adventure",
        shortDesc: "This simulation leverages modern OpenGL and C++ to visualize the gravitational effects of a stellar-mass black hole, complete with an accretion disk, gravitational lensing effects, realistic planet models and a dynamic skybox. .",
        thumbnail: "assets/gifs/SolasProject/Solas_Light_Regen_Gif.gif",
        mainGif: "../assets/gifs/BlackHoleProject/BH_Cover.gif",
        screenshots: [
            "../assets/screenshots/BHProjectSS/BlackholeCover.png",
            "../assets/screenshots/BHProjectSS/2DSim.png",
            "../assets/screenshots/BHProjectSS/Early3DAttempts.png"
        ],
        tags: ["Unreal Engine 5", "Blueprints", "College Project", "Team"],
        details: {
            Engine: "Unreal Engine 5",
            Language: "Blueprints",
            Platform: "PC (Windows)",
            TeamSize: "6",
            DevTime: "10 Months",
            Role: "Lead Programmer",
            Status: "Released (Itch.io)",
            Genre: "Action-Adventure"
        },
        links: [
            { text: "View Repository", url: "#", icon: "fab fa-github", style: "btn-outline" },
            { text: "Play Game", url: "#", icon: "fas fa-gamepad", style: "btn-primary" }
        ],
        writeup: [
            {
                heading: "Overview",
                text: "Project Omega started as a game jam entry that evolved into a 6-month capstone project. The goal was to create a fluid, momentum-based shooter inspired by Titanfall." // <!-- PLACEHOLDER -->
            },
            {
                heading: "Technical Challenges (AI Systems)",
                text: "To make the enemies challenging in a high-mobility environment, I developed a custom utility-based AI system in C++. The AI dynamically evaluates player velocity and trajectory to predict movement and coordinate flanking maneuvers." // <!-- PLACEHOLDER -->
            },
            {
                heading: "Lessons Learned",
                text: "Balancing C++ performance with Blueprint flexibility for the designers was crucial. I learned how to architect native classes that expose intuitive variables to the editor." // <!-- PLACEHOLDER -->
            }
        ]
    },
    {
        id: "project-misc",
        title: "Small project Collection",
        subtitle: "Game Jams, College projects, etc.",
        shortDesc: "This simulation leverages modern OpenGL and C++ to visualize the gravitational effects of a stellar-mass black hole, complete with an accretion disk, gravitational lensing effects, realistic planet models and a dynamic skybox. .",
        thumbnail: "assets/gifs/BlackHoleProject/BH_Cover.gif",
        mainGif: "../assets/gifs/BlackHoleProject/BH_Cover.gif",
        screenshots: [
            "../assets/screenshots/BHProjectSS/BlackholeCover.png",
            "../assets/screenshots/BHProjectSS/2DSim.png",
            "../assets/screenshots/BHProjectSS/Early3DAttempts.png"
        ],
        tags: ["Unreal Engine 5", "Blueprints", "College Project", "Team"],
        details: {
            Engine: "Unreal Engine 5",
            Language: "Blueprints",
            Platform: "PC (Windows)",
            TeamSize: "6",
            DevTime: "10 Months",
            Role: "Lead Programmer",
            Status: "Released (Itch.io)",
            Genre: "Action-Adventure"
        },
        links: [
            { text: "View Repository", url: "#", icon: "fab fa-github", style: "btn-outline" },
            { text: "Play Game", url: "#", icon: "fas fa-gamepad", style: "btn-primary" }
        ],
        writeup: [
            {
                heading: "Overview",
                text: "Project Omega started as a game jam entry that evolved into a 6-month capstone project. The goal was to create a fluid, momentum-based shooter inspired by Titanfall." // <!-- PLACEHOLDER -->
            },
            {
                heading: "Technical Challenges (AI Systems)",
                text: "To make the enemies challenging in a high-mobility environment, I developed a custom utility-based AI system in C++. The AI dynamically evaluates player velocity and trajectory to predict movement and coordinate flanking maneuvers." // <!-- PLACEHOLDER -->
            },
            {
                heading: "Lessons Learned",
                text: "Balancing C++ performance with Blueprint flexibility for the designers was crucial. I learned how to architect native classes that expose intuitive variables to the editor." // <!-- PLACEHOLDER -->
            }
        ]
    }
];

/* ==========================================================================
   INITIALIZATION & ROUTING
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Populate persistent nav globally
    populateNav();
    
    // Safely update footer if it exists on the page
    const currentYearEl = document.getElementById("current-year");
    const footerNameEl = document.getElementById("footer-name");
    
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    if (footerNameEl) {
        footerNameEl.textContent = config.personalInfo.name;
    }

    // Route based on page
    if (document.getElementById("projects-grid")) {
        initHomePage();
    } else if (document.getElementById("proj-title")) {
        initProjectPage();
    }

    setupInteractions();
});

/* ==========================================================================
   HOMEPAGE LOGIC
   ========================================================================== */
function initHomePage() {
    // 1. Populate Hero
    document.getElementById("hero-name").textContent = config.personalInfo.name;
    document.getElementById("hero-title").textContent = config.personalInfo.title;
    document.getElementById("hero-summary").textContent = config.personalInfo.summary;
    document.getElementById("hero-location").innerHTML = `<i class="fas fa-map-marker-alt"></i> ${config.personalInfo.location}`;
    document.getElementById("hero-interests").innerHTML = `<i class="fas fa-gamepad"></i> ${config.personalInfo.interests}`;
    
    // Copy Email functionality
    const emailBtn = document.getElementById("copy-email-btn");
    emailBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(config.personalInfo.email);
        const originalText = emailBtn.innerHTML;
        emailBtn.innerHTML = `<i class="fas fa-check"></i> Copied!`;
        setTimeout(() => emailBtn.innerHTML = originalText, 2000);
    });

    // 2. Populate Projects Grid
    const grid = document.getElementById("projects-grid");
    projects.forEach(proj => {
        const tagsHtml = proj.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
        const card = `
            <div class="project-card glass">
                <div class="card-img-wrapper">
                    <img src="${proj.thumbnail}" alt="${proj.title}" loading="lazy">
                </div>
                <div class="card-content">
                    <h3>${proj.title}</h3>
                    <div class="card-subtitle">${proj.subtitle}</div>
                    <p class="card-desc">${proj.shortDesc}</p>
                    <div class="tech-tags">${tagsHtml}</div>
                    <a href="projects/project.html?id=${proj.id}" class="btn btn-outline" style="margin-top:auto;">Read More</a>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML("beforeend", card);
    });

    // 3. Populate Skills
    const skillsGrid = document.getElementById("skills-grid");
    for (const [category, skillsList] of Object.entries(config.skills)) {
        const badges = skillsList.map(skill => `<span class="skill-badge">${skill}</span>`).join("");
        const group = `
            <div class="skills-group">
                <h4>${category}</h4>
                <div class="skill-badges">${badges}</div>
            </div>
        `;
        skillsGrid.insertAdjacentHTML("beforeend", group);
    }

    // 4. Populate Education
    const eduTimeline = document.getElementById("education-timeline");
    config.education.forEach(edu => {
        const item = `
            <div class="timeline-item">
                <span class="timeline-date">${edu.year}</span>
                <h4 class="timeline-title">${edu.degree}</h4>
                <p class="timeline-inst">${edu.institution}</p>
            </div>
        `;
        eduTimeline.insertAdjacentHTML("beforeend", item);
    });

    // 5. Populate About Me
    document.getElementById("about-content").innerHTML = config.personalInfo.aboutMe;
}

/* ==========================================================================
   PROJECT PAGE LOGIC
   ========================================================================== */
function initProjectPage() {
    // Get project ID from URL (e.g. ?id=project-omega)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        document.getElementById("proj-title").textContent = "Project Not Found";
        return;
    }

    // Header & Media
    document.getElementById("proj-title").textContent = project.title;
    document.getElementById("proj-subtitle").textContent = project.subtitle;
    document.getElementById("proj-main-gif").src = project.mainGif;

    // About & Links
    document.getElementById("proj-about-text").textContent = project.shortDesc;
    const linksContainer = document.getElementById("proj-links");
    project.links.forEach(link => {
        linksContainer.insertAdjacentHTML("beforeend", `<a href="${link.url}" target="_blank" class="btn ${link.style}"><i class="${link.icon}"></i> ${link.text}</a> `);
    });

    // Info Grid
    const infoList = document.getElementById("proj-info-list");
    for (const [key, value] of Object.entries(project.details)) {
        // Add spaces to PascalCase keys (TeamSize -> Team Size)
        const label = key.replace(/([A-Z])/g, ' $1').trim();
        infoList.insertAdjacentHTML("beforeend", `<li><span class="info-label">${label}</span> <span>${value}</span></li>`);
    }

    // Detailed Write-up
    const writeupContainer = document.getElementById("proj-writeup");
    project.writeup.forEach(section => {
        writeupContainer.insertAdjacentHTML("beforeend", `
            <div class="writeup-section">
                <h4>${section.heading}</h4>
                <p>${section.text}</p>
            </div>
        `);
    });

    // Carousel Logic
    const track = document.getElementById("proj-carousel");
    project.screenshots.forEach(src => {
        track.insertAdjacentHTML("beforeend", `<li class="carousel-slide"><img src="${src}" alt="Screenshot" class="lightbox-trigger" loading="lazy"></li>`);
    });
    setupCarousel(track);
}

/* ==========================================================================
   SHARED UI INTERACTIONS
   ========================================================================== */
function populateNav() {
    const navName = document.getElementById("nav-name");
    if (navName) {
        // Only override the text if we are on the homepage. 
        // On the project page, we want it to stay "Back to Portfolio"
        if (document.getElementById("projects-grid")) {
            navName.textContent = config.personalInfo.name;
        }
    }

    const navCv = document.getElementById("nav-cv");
    if (navCv) {
        navCv.href = config.personalInfo.resumeLink;
    }
    
    const socialsContainer = document.getElementById("nav-socials-container");
    if (socialsContainer) {
        config.socials.forEach(social => {
            socialsContainer.insertAdjacentHTML("beforeend", `<a href="${social.url}" target="_blank" aria-label="${social.name}"><i class="${social.icon}"></i></a>`);
        });
    }
}

function setupInteractions() {
    // Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Smooth Scroll & Active Nav Highlighting (Homepage only)
    if (document.getElementById("projects-grid")) {
        const sections = document.querySelectorAll("section");
        const navItems = document.querySelectorAll(".nav-link");

        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 100) {
                    current = section.getAttribute("id");
                }
            });
            navItems.forEach(item => {
                item.classList.remove("active");
                if (item.getAttribute("href").includes(current)) {
                    item.classList.add("active");
                }
            });
        });
    }

    // Fade-in Observer
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));

    // Back to Top Button
    const backBtn = document.getElementById("back-to-top");
    if (backBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) backBtn.classList.add("show");
            else backBtn.classList.remove("show");
        });
        backBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Lightbox Logic
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.querySelector(".close-lightbox");

    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("lightbox-trigger")) {
            lightboxImg.src = e.target.src;
            lightbox.classList.add("show");
        }
    });

    closeLightbox.addEventListener("click", () => lightbox.classList.remove("show"));
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) lightbox.classList.remove("show");
    });
}

function setupCarousel(track) {
    if (!track) return;
    const slides = Array.from(track.children);
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    // Simple touch swipe support
    let startX = 0;
    track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    track.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) nextBtn.click(); // Swipe left
        if (endX - startX > 50) prevBtn.click(); // Swipe right
    });
}