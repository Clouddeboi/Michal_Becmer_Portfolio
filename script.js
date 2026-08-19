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
        summary: "I’m a passionate Game Developer and DKIT graduate with a strong foundation in C++ and game programming. I enjoy building engaging gameplay systems and interactive experiences that combine creativity, technical problem-solving, and technology. I’m always looking to learn, experiment, and create polished games.",
        aboutMe: `
            <p>I’m a passionate and motivated Game Developer with a strong foundation in C++ and game programming, and a graduate of Dundalk Institute of Technology (DKIT), Ireland. I’m particularly interested in designing and developing interactive experiences that combine creativity, technical problem-solving, and engaging gameplay.</p>
            <br>
            <p>With a strong focus on programming and systems development, I enjoy building robust, scalable gameplay systems and exploring the technical side of game development. I’m driven by a desire to continuously learn, experiment with new technologies, and create polished experiences that bring creative ideas to life..</p>
        `,
        resumeLink: "assets/resume/Michal_Becmer_CV.pdf"
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
        shortDesc: "This simulation leverages modern OpenGL and C++ to visualize the gravitational effects of a stellar-mass black hole, complete with an accretion disk, gravitational lensing effects, realistic planet models and a dynamic skybox.",
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
            { text: "View Repository", url: "https://github.com/Clouddeboi/BlackHoleSimulationOpenGL", icon: "fab fa-github", style: "btn-outline" },
            { text: "Download Project", url: "https://clouddeboi.itch.io/black-home-simulation-c-opengl", icon: "fas fa-gamepad", style: "btn-primary" }
        ],
        writeup: [
            {
                heading: "Overview",
                text: "A real time C++/OpenGL simulation using custom compute shaders to model light transport around a stellar-mass black hole. Accurately renders gravitational lensing, relativistic Doppler shifts, and spacetime curvature."
            },
            {
                heading: "Core Features",
                text: `
                    <ul>
                        <li><strong>GPU Raytracing:</strong> Custom compute shader using RK4 numerical integration (2000+ steps/ray through curved spacetime).</li>
                        <li><strong>Physical Black Hole Model:</strong> 5-solar-mass Schwarzschild black hole with exact event horizon and photon sphere rendering.</li>
                        <li><strong>Relativistic Accretion Disk:</strong>
                            <ul>
                                <li>Relativistic Doppler shift and beaming (<em>v</em> = 0.75<em>c</em>)</li>
                                <li>Gravitational redshift calculations</li>
                                <li>Procedural tiled smoke texture with dynamic black hole shadows</li>
                                <li>Lambertian shading with specular highlights</li>
                            </ul>
                        </li>
                        <li><strong>Gravitational Lensing:</strong> Real-time skybox warping via Schwarzschild metric integration.</li>
                        <li><strong>Planetary Rendering:</strong> Earth and Mars rendered with equirectangular mapping and Lambertian lighting.</li>
                        <li><strong>3D Spacetime Grid:</strong> Procedurally generated gravitational well grid (<em>y</em> = -depth/<em>r</em>).</li>
                        <li><strong>Free-Fly Camera:</strong> WASD + mouse controls with speed modifiers.</li>
                    </ul>
                `
            },
            {
                heading: "Technical Stack",
                text: `
                    <ul>
                        <li><strong>Language & Graphics API:</strong> C++14 | OpenGL 4.5 Core (GLAD loader) | GLFW 3 | GLM</li>
                        <li><strong>Architecture:</strong> Modular design with <code>ShaderManager</code>, <code>TextureManager</code>, and <code>DebugOverlay</code></li>
                        <li><strong>Rendering Pipeline:</strong> Compute shader &rarr; Fullscreen quad blit &rarr; Screen</li>
                    </ul>
                `
            },
            {
                heading: "Graphics Pipeline Architecture",
                text: `
                    <p>Uses a deferred compute-based raytracing pipeline tailored for general relativity calculations:</p>

                    <h5 style="color: var(--accent-cyan); margin-top: 1rem; margin-bottom: 0.5rem;">Rendering Flow</h5>
                    <ul>
                        <li><strong>1. Compute Pass (<code>geodesic.comp</code>):</strong> Casts 1 ray/pixel, integrates through spacetime via RK4 (up to 2000 steps), tests intersections (event horizon, disk, planets), samples lensed skybox cubemap, and outputs HDR color to an <code>RGBA32F</code> texture.</li>
                        <li><strong>2. Blit Pass (<code>blit.frag</code>):</strong> Renders HDR texture onto a fullscreen quad with tone mapping.</li>
                        <li><strong>3. Optional Grid Pass:</strong> Renders the 3D gravitational well line grid with depth testing disabled.</li>
                    </ul>

                    <h5 style="color: var(--accent-cyan); margin-top: 1rem; margin-bottom: 0.5rem;">Data Flow & Memory Bindings</h5>
                    <ul>
                        <li><strong>UBO Binding 0:</strong> Camera matrices (view, projection, inverse)</li>
                        <li><strong>UBO Binding 1:</strong> Black hole parameters (position, Schwarzschild radius)</li>
                        <li><strong>UBO Binding 2:</strong> Accretion disk properties</li>
                        <li><strong>UBO Binding 4:</strong> Dynamic time value</li>
                        <li><strong>SSBO Binding 7:</strong> Planet array (positions, radii, textures)</li>
                    </ul>
                `
            },
            {
                heading: "Technical Challenges",
                text: `
                    <ul>
                        <li><strong>Relativistic Accretion Disk Rendering</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Material at 0.75c requires realistic Doppler blueshift/redshift and relativistic beaming.</li>
                                <li><strong>Solution:</strong> Calculated Doppler factor <em>D = &gamma;(1 - &beta; cos &theta;)</em> (&beta; = 0.75) per intersection for color shifting and beaming, combined with gravitational redshift &radic;(1 - r<sub>s</sub>/r).</li>
                            </ul>
                        </li>
                        <li><strong>Multi-Pass Disk &amp; Einstein Rings</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Light looping around the photon sphere creates higher-order images (Einstein rings).</li>
                                <li><strong>Solution:</strong> Implemented a <code>diskAccum</code> system tracking multiple disk intersections per ray with exponential weight decay (<code>pow(0.5, diskHits)</code>).</li>
                            </ul>
                        </li>
                        <li><strong>Performance Optimization (UBOs/SSBOs)</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Per-frame uniform transfers were bottlenecking CPU-GPU bandwidth.</li>
                                <li><strong>Solution:</strong> Grouped static/frequent uniforms into UBOs (bindings 0–4) and dynamic planet data into an SSBO, reducing per-frame uploads from ~500 bytes to delta updates.</li>
                            </ul>
                        </li>
                        <li><strong>Real Physics Unit Scaling</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Real Schwarzschild radius (~14.8km for 5 M<sub>&odot;</sub>) created numerical scale issues in OpenGL space.</li>
                                <li><strong>Solution:</strong> Computed true metric in meters using real constants (<code>kGravitationalConstant</code>, <code>kSpeedOfLight</code>), then applied a simulation scale factor (0.0001016) for rendering.</li>
                            </ul>
                        </li>
                    </ul>
                `
            },
            {
                heading: "Lessons Learned",
                text: `
                    <ul>
                        <li><strong>Real-Time Physics Trade-offs:</strong> Prioritized visual relativistic phenomena (lensing, Doppler shift) using Schwarzschild metrics over computationally prohibitive Kerr frame-dragging calculations to maintain 60 FPS.</li>
                        <li><strong>Compute Architecture:</strong> Shifted from traditional vertex/fragment pipelines to per-pixel physics, processing 921,600 independent rays simultaneously (1280&times;720 resolution).</li>
                        <li><strong>GPU Debugging:</strong> Developed visual debugging techniques (color-coding ray integration steps, rendering collision hitboxes, live UBO overlays).</li>
                        <li><strong>Memory Layout Alignment:</strong> Managed strict <code>std140</code> UBO alignment rules (e.g., adding explicit <code>_pad</code> variables to match 16-byte GPU boundary rules in <code>PlanetBlock</code>).</li>
                        <li><strong>Resource Management:</strong> Combined modern C++ ownership patterns (smart pointers for <code>m_renderer</code>, <code>m_camera</code>, <code>m_grid</code>) with manual RAII cleanup for raw OpenGL handles.</li>
                    </ul>
                `
            },
            {
                heading: "Visual & Technical Highlights",
                text: `
                    <ul>
                        <li><strong>Physically Grounded:</strong> Asymmetry, redshift gradients, and Einstein rings emerge naturally from solving light transport equations rather than post-processing bloom/distortion hacks.</li>
                        <li><strong>High Throughput:</strong> Processes ~1.8 billion integration steps per frame (1280&times;720 pixels &times; 2000 steps) via GPU SIMD execution.</li>
                        <li><strong>Clean Architecture:</strong> Dynamic planet SSBO allows adding objects without shader recompilation, and code includes full derivations for physical constants and workgroup sizing.</li>
                    </ul>
                `
            }
        ],
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
        links: [{ text: "View Source", url: "https://github.com/Clouddeboi/EPS_Girls_Plan_PLAN_2025", icon: "fab fa-github", style: "btn-outline" }],
        writeup: [
            {
                heading: "Overview",
                text: `
                    <p><strong>Girl's Plan</strong> is a Unity 6 educational board/party game developed for <strong>PLAN International Belgium</strong>. Designed as a local, shared-screen experience, players explore gender-equality topics through interactive gameplay rather than static educational lessons.</p>

                    <h5 style="color: var(--accent-cyan); margin-top: 1.25rem; margin-bottom: 0.5rem;">Scene & Gameplay Architecture</h5>
                    <ul>
                        <li><strong>Explicit Build Scene Flow:</strong> <code>PLANIntroBranding</code> &rarr; <code>CBDIntroBranding</code> &rarr; <code>MainMenu</code> &rarr; <code>GameScene</code> &rarr; <code>Credits</code>.</li>
                        <li><strong>Mario Party-Style Core Loop:</strong>
                            <ul>
                                <li><strong>Character Selection:</strong> 2–4 players select unique characters and ready up via <code>PlayerManager</code>.</li>
                                <li><strong>Board Progression:</strong> Active player rolls (<code>TurnManager</code>), navigates across a 46-space board path, and triggers space events via downward raycasts (<code>PlayerRaycast</code> + <code>SpaceEvent</code>).</li>
                                <li><strong>Event Dispatching:</strong> <code>EventManager</code> routes board tiles to Positive Feedback Panels, Negative Scenario/Quiz Panels, Random 2-Player Minigames (<code>MinigameManager</code>), or the final Victory Podium.</li>
                            </ul>
                        </li>
                        <li><strong>Pass-and-Play Local Co-Op:</strong> Designed for shared local play on one device. While 2–4 players progress on the main board, minigames transition into competitive 2-player matchups between the active player and a randomly chosen opponent.</li>
                        <li><strong>Mouse-First Interaction:</strong> UI button-driven controls and touch/click checks via <code>Input.GetMouseButtonDown(0)</code> ensure low-friction accessibility for mixed-skill players.</li>
                    </ul>

                    <h5 style="color: var(--accent-cyan); margin-top: 1.25rem; margin-bottom: 0.5rem;">Content Pipeline & Localization</h5>
                    <ul>
                        <li><strong>Data-Driven Event Architecture:</strong> Event pools and minigame prefabs are modularly configured in scene data. Anti-repetition logic automatically removes drawn events from pools (<code>eventPool.RemoveAt(index)</code>).</li>
                        <li><strong>Educational Progression:</strong> Age-segmented content categories (<code>SpaceSection.Child/Teen/Adult</code>) map directly to specialized scenario pools.</li>
                        <li><strong>Lean Localization Pipeline:</strong> Centralized translation assets (<code>English.txt</code>, <code>Dutch.txt</code>, <code>French.txt</code>) bound via <code>translationName</code> keys. Reusable <code>LanguagePanel</code> manages <code>LeanLocalization.currentLanguage</code> switching with persistent preference saving.</li>
                    </ul>
                `
            },
            {
                heading: "Technical Challenges",
                text: `
                    <ul>
                        <li><strong>Orchestrating Turn Flow with Asynchronous Event Gameplay</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Coordinating deterministic board turn order with asynchronous coroutines, UI panels, victory conditions, and minigame transitions.</li>
                                <li><strong>Solution:</strong> Implemented central manager-level lifecycle state gates (<code>TurnManager.EventStarted/EventCompleted</code>, <code>EventManager.isEventInProgress</code>) paired with coroutine sequencing to guarantee non-overlapping, state-safe turn flow across all modes.</li>
                            </ul>
                        </li>
                        <li><strong>Building Scalable Educational Content Delivery</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Delivering a high volume of branching scenario content across multiple age brackets without hardcoding individual UI cases.</li>
                                <li><strong>Solution:</strong> Built <code>NegativeEvent</code> as a generic controller handling prefab slide decks (<code>panelSlides</code>) and answer-validation buttons, fed dynamically by section-specific pools (<code>Child/Teen/Adult</code>).</li>
                            </ul>
                        </li>
                        <li><strong>Supporting Variable Local Co-Op & Competitive Minigames</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Managing 2–4 board players while keeping minigame systems modular and scope-bounded.</li>
                                <li><strong>Solution:</strong> Enforced unique character picks, ready-state gating, and dynamic player spawning on the board, paired with a <code>BaseMinigameLogic</code> abstraction that selects a random active opponent (<code>GetRandomOpponent</code>) for 2-player minigame sessions.</li>
                            </ul>
                        </li>
                        <li><strong>Designing Accessibility-First Mouse Interactions</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Creating intuitive, low-barrier control schemes for shared local play across varied skill levels.</li>
                                <li><strong>Solution:</strong> Developed clean UI button flows, screen-point hit detection for click mechanics, visual countdowns, hover states, and audio-visual feedback loops.</li>
                            </ul>
                        </li>
                        <li><strong>Shipping Multilingual Educational Content at Scale</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Maintaining long-form scenario and UI text consistency across English, Dutch, and French.</li>
                                <li><strong>Solution:</strong> Integrated LeanLocalization with key-based bindings (<code>translationName</code>) across UI components and prefabs, supported by dynamic runtime language switching.</li>
                            </ul>
                        </li>
                    </ul>
                `
            },
            {
                heading: "Lessons Learned",
                text: `
                    <ul>
                        <li><strong>Centralized Event Lifecycles Are Crucial:</strong> Hybrid board/minigame architectures rely on strict "event-in-progress" state locks and explicit start/end hooks to maintain gameplay determinism.</li>
                        <li><strong>Data-Driven Content Outscales Scripted Logic:</strong> Decoupling educational content (prefabs, translation keys, pool arrays) from execution logic allows rapid iteration and seamless content expansion.</li>
                        <li><strong>Local Multiplayer Is a UX Challenge:</strong> Pass-and-play board flow combined with 2-player minigames provides an optimal balance between inclusive group play and manageable code complexity.</li>
                        <li><strong>Localization Requires Validation Tooling:</strong> Production pipelines require automated missing-key and translation-completeness checks prior to content locks.</li>
                        <li><strong>Architectural Decoupling for Long-Term Scale:</strong> While singletons and runtime lookups enable fast prototyping, shifting to dependency injection/service references reduces coupling as game scope grows.</li>
                    </ul>
                `
            },
            {
                heading: "Portfolio Highlights",
                text: `
                    <ul>
                        <li><strong>Complete Board-Party Game Loop:</strong> Delivered an event-driven turn loop with asynchronous event state gating in Unity 6.</li>
                        <li><strong>Data-Driven Scenario System:</strong> Engineered scalable content pipelines handling branching scenarios, quizzes, and age-based progression.</li>
                        <li><strong>Local Co-Op Architecture:</strong> Implemented 2–4 player pass-and-play board flow with dynamic spawning and modular 2-player minigame wiring.</li>
                        <li><strong>Production Localization Pipeline:</strong> Integrated LeanLocalization supporting runtime switching across English, Dutch, and French.</li>
                        <li><strong>Accessible Interaction UX:</strong> Designed a mouse-first, UI-driven control scheme tailored for shared-screen educational gameplay.</li>
                        <li><strong>Modular Minigame System:</strong> Created extensible minigame architecture using a <code>BaseMinigameLogic</code> foundation.</li>
                        <li><strong>Real-Client Production Delivery:</strong> Successfully handled branding, educational goals, and audience constraints for PLAN International.</li>
                    </ul>
                `
            }
        ]
    },
    // {
    //     id: "project-casinoknight",
    //     title: "Casino Knight",
    //     subtitle: "A procedural roguelike dungeon crawler",
    //     shortDesc: "This simulation leverages modern OpenGL and C++ to visualize the gravitational effects of a stellar-mass black hole, complete with an accretion disk, gravitational lensing effects, realistic planet models and a dynamic skybox. .",
    //     thumbnail: "assets/gifs/BlackHoleProject/BH_Cover.gif",
    //     mainGif: "../assets/gifs/BlackHoleProject/BH_Cover.gif",
    //     screenshots: [
    //         "../assets/screenshots/BHProjectSS/BlackholeCover.png",
    //         "../assets/screenshots/BHProjectSS/2DSim.png",
    //         "../assets/screenshots/BHProjectSS/Early3DAttempts.png"
    //     ],
    //     tags: ["Unity", "C#", "Steam Release", "Game Jam"],
    //     details: {
    //         Engine: "Unity",
    //         Language: "C#",
    //         Platform: "PC (Windows)",
    //         TeamSize: "Solo",
    //         DevTime: "2 Months",
    //         Role: "Lead Programmer",
    //         Status: "Released (Itch.io + Steam)",
    //         Genre: "Roguelike Dungeon Crawler"
    //     },
    //     links: [
    //         { text: "View Repository", url: "#", icon: "fab fa-github", style: "btn-outline" },
    //         { text: "Play Game", url: "#", icon: "fas fa-gamepad", style: "btn-primary" }
    //     ],
    //     writeup: [
    //         {
    //             heading: "Overview",
    //             text: "Project Omega started as a game jam entry that evolved into a 6-month capstone project. The goal was to create a fluid, momentum-based shooter inspired by Titanfall." // <!-- PLACEHOLDER -->
    //         },
    //         {
    //             heading: "Technical Challenges (AI Systems)",
    //             text: "To make the enemies challenging in a high-mobility environment, I developed a custom utility-based AI system in C++. The AI dynamically evaluates player velocity and trajectory to predict movement and coordinate flanking maneuvers." // <!-- PLACEHOLDER -->
    //         },
    //         {
    //             heading: "Lessons Learned",
    //             text: "Balancing C++ performance with Blueprint flexibility for the designers was crucial. I learned how to architect native classes that expose intuitive variables to the editor." // <!-- PLACEHOLDER -->
    //         }
    //     ]
    // },
    {
        id: "project-sfmlagario",
        title: "SFML Agario",
        subtitle: "UDP Networked Agario clone",
        shortDesc: "Designed and developed a multiplayer Agar.io clone in C++, featuring a UDP client-server architecture and SFML for graphics, input, and game rendering.",
        thumbnail: "assets/gifs/SFMLAgarioProject/SFML_Agario.gif",
        mainGif: "../assets/gifs/SFMLAgarioProject/SFML_Agario.gif",
        screenshots: [
            "../assets/screenshots/SFMLAgarioProjectSS/SFML_Agario_Server.png"
        ],
        tags: ["SFML", "C++", "UDP", "Network", "Multiplayer"],
        details: {
            Engine: "None",
            Language: "C++",
            Platform: "PC (Windows)",
            TeamSize: "Solo",
            DevTime: "1 Week",
            Role: "Solo Programmer",
            Status: "Complete",
            Genre: ".IO Game"
        },
        links: [
            { text: "View Repository", url: "https://github.com/Clouddeboi/MDP_CA3", icon: "fab fa-github", style: "btn-outline" }
        ],
        writeup: [
            {
                heading: "Overview",
                text: `
                    <p>This project is a real-time multiplayer game inspired by Agar.io, built from scratch in C++ using <strong>SFML 2.6</strong> for rendering/audio and <strong>raw Berkeley sockets</strong> for non-blocking UDP networking. Players control circular cells in a 5,000×5,000 arena, eating objects and other players to grow, or spending size to execute a high-speed dash (2.2× speed).</p>

                    <h5 style="color: var(--accent-cyan); margin-top: 1.25rem; margin-bottom: 0.5rem;">Architecture & Engine Separation</h5>
                    <ul>
                        <li><strong>RoboCatSFML (Shared Engine):</strong> Common networking base, bit-stream serialization, game object representations, spatial math, input tracking, and timing.</li>
                        <li><strong>RoboCatSFMLClient (Client App):</strong> SFML rendering pipeline (dynamic <code>sf::View</code> camera follow), audio channel pooling, user input processing, client-side prediction, and reconciliation.</li>
                        <li><strong>RoboCatSFMLServer (Headless Server):</strong> Authoritative game logic, non-blocking UDP listener, client proxy session management, spawn math, and replication engine.</li>
                    </ul>

                    <h5 style="color: var(--accent-cyan); margin-top: 1.25rem; margin-bottom: 0.5rem;">Communication & Synchronization Flow</h5>
                    <ul>
                        <li><strong>Non-Blocking Handshake:</strong> Client issues <code>HELO</code> packets every second; headless server responds with <code>WLCM</code>, assigns a Player ID, and spawns the entity.</li>
                        <li><strong>Input Pipeline (~30 Hz):</strong> Clients log moves into a <code>MoveList</code> and send <code>INPT</code> packets containing the last 3 moves redundantly to mitigate packet loss without TCP overhead.</li>
                        <li><strong>Authoritative Simulation & Tick:</strong> Server processes raw move inputs, executes physics and collision math, marks state dirty (<code>ECRS_Pose</code>, <code>ECRS_Size</code>), and broadcasts updates via 100 ms heartbeat or dirty-state triggers.</li>
                        <li><strong>SFML Integration:</strong> SFML is strictly client-side—handling window management, pooled <code>sf::Sound</code> audio playback, streaming <code>sf::Music</code>, and font/sprite rendering.</li>
                    </ul>
                `
            },
            {
                heading: "Technical Challenges",
                text: `
                    <ul>
                        <li><strong>Custom Bit-Level Binary Serialization</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Packing game state efficiently over UDP to avoid byte-aligned bandwidth waste.</li>
                                <li><strong>Implementation:</strong> Built <code>OutputMemoryBitStream</code> and <code>InputMemoryBitStream</code> capable of writing arbitrary bit-widths across byte boundaries. Compacted quaternions to 49 bits, direction vectors to 2-bit signed values, and booleans to single bits.</li>
                            </ul>
                        </li>
                        <li><strong>Delivery Notification & Selective Reliability over UDP</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Ensuring critical lifecycle events (object creation/destruction) arrive safely without introducing overall TCP latency.</li>
                                <li><strong>Implementation:</strong> Developed <code>DeliveryNotificationManager</code> using sequence numbers, batched <code>AckRange</code> payloads, and in-flight tracking. Failed <code>Create</code>/<code>Destroy</code> packets are retried automatically, while lost position updates simply re-flag dirty bits for the next tick under a 1,200-byte UDP payload limit.</li>
                            </ul>
                        </li>
                        <li><strong>Client-Side Prediction & RTT Dead Reckoning</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Eliminating movement latency and visual jitter across 33 ms network tick intervals.</li>
                                <li><strong>Implementation:</strong> Local client predicts movement instantly, replaying unconfirmed moves from <code>MoveList</code> upon receiving server state corrections. Remote players are extrapolated using 2-bit velocity directions and interpolated over measured round-trip time (RTT).</li>
                            </ul>
                        </li>
                        <li><strong>Server-Authoritative Spawn Math & Network Conditioning</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Preventing spawn-stacking in circular boundaries and testing adverse network conditions during development.</li>
                                <li><strong>Implementation:</strong> Used uniform polar radial distribution (<code>√r</code>) with safety-radius checks (<code>IsSpawnPositionClear</code>). Built an in-engine simulated network layer capable of runtime packet drops and latency queuing.</li>
                            </ul>
                        </li>
                    </ul>
                `
            },
            {
                heading: "Lessons Learned",
                text: `
                    <ul>
                        <li><strong>Category-Specific Reliability Over TCP:</strong> Games do not need global packet reliability. Critical lifecycle events require retry logic, whereas transient state updates are loss-tolerant.</li>
                        <li><strong>Server Authority Requires Own Simulation:</strong> Authoritative networking means running simulation logic server-side from raw inputs, rather than trusting client-reported positions.</li>
                        <li><strong>Move Lists Act as Reconciliation Buffers:</strong> Local prediction depends on maintaining an unconfirmed input queue that is pruned only when explicit server ACKs arrive.</li>
                        <li><strong>Domain-Aware Bit Packing Saves Bandwidth:</strong> Tailoring serialization types to actual input domains (e.g., 2-bit axis state) drastically minimizes overall packet payloads.</li>
                        <li><strong>Decouple Network Ticks from Render Loops:</strong> Isolating network transmit rates (33 ms / 100 ms heartbeats) from framerates ensures stable, predictable network bandwidth usage.</li>
                    </ul>
                `
            },
            {
                heading: "Portfolio Highlights",
                text: `
                    <ul>
                        <li><strong>Custom UDP Network Stack:</strong> Hand-crafted non-blocking client/server architecture built directly on raw Berkeley Sockets (<code>sendto</code>/<code>recvfrom</code>).</li>
                        <li><strong>Bit-Stream Serialization Engine:</strong> Custom bit-level memory streams supporting dirty-state bitmasks and compressed primitive types.</li>
                        <li><strong>Custom Delivery Notification System:</strong> Built-in ACK sequence tracking, range compression, and selective state-retransmission over UDP.</li>
                        <li><strong>Client-Side Prediction & Reconciliation:</strong> Local move-list replay and RTT-scaled dead reckoning for remote entity interpolation.</li>
                        <li><strong>Headless Server Architecture:</strong> Completely isolated game logic server operating independently from SFML rendering dependencies.</li>
                        <li><strong>Development Network Simulator:</strong> Built-in latency simulation queues and packet-loss triggers for stress testing under poor connectivity.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: "project-solas",
        title: "Solas",
        subtitle: "An Action adventure",
        shortDesc: "Solas is a stylisied, semi top-down 3d action-adventure, hack and slash game, where the player takes on the role of Solus — a small doll-like creation made to fight through the darkness and return light to the world.",
        thumbnail: "assets/gifs/SolasProject/Solas_Light_Regen_Gif.gif",
        mainGif: "../assets/screenshots/SolasProjectSS/FollowGif.gif",
        screenshots: [
            "../assets/screenshots/SolasProjectSS/Patrolling.gif",
            "../assets/screenshots/SolasProjectSS/Wind.gif",
            "../assets/screenshots/SolasProjectSS/Barrier.gif"
        ],
        tags: ["Unreal Engine 5", "Blueprints", "College Project", "Team"],
        details: {
            Engine: "Unreal Engine 5",
            Language: "UE5 Blueprints",
            Platform: "PC (Windows)",
            TeamSize: "6",
            DevTime: "10 Months",
            Role: "Lead Programmer + Lead Niagara Effects Artist",
            Status: "Released (Itch.io)",
            Genre: "Action-Adventure"
        },
        links: [
            { text: "Download Game", url: "#", icon: "fas fa-gamepad", style: "btn-primary" }
        ],
        writeup: [
            {
                heading: "Overview",
                text: `
                    <p>Served as both <strong>Lead Programmer</strong> and <strong>Lead Niagara Artist</strong> for an Unreal Engine 5.6.1 action-adventure title, architecting core gameplay mechanics, enemy AI, combat mechanics, save/load systems, and real-time visual effects using Blueprints and Niagara.</p>

                    <h5 style="color: var(--accent-cyan); margin-top: 1.25rem; margin-bottom: 0.5rem;">Core Gameplay & AI Systems</h5>
                    <ul>
                        <li><strong>Third-Person Player Controller:</strong> Customized UE's Third Person system with environmental camera collision, rotation constraints, context-sensitive player orientation, combat dashes, and full controller/KBM input mapping.</li>
                        <li><strong>Modular AI Architecture:</strong> Built a scalable <code>Behavior Tree</code> and <code>Blackboard</code> framework driving patrolling, chasing, attacking, and perception (sight, sound, damage reaction) across diverse enemies (Villager, Mothman). Included spline-based patrol route tools for designers.</li>
                        <li><strong>Combat & Lock-On System:</strong> Implemented melee collision detection, charged spell projectiles, and a target lock-on tracker with visual HUD indicators and manual-aim overrides. Integrated <code>AnimNotifies</code> for frame-accurate damage windows.</li>
                        <li><strong>Checkpoint Save/Load System:</strong> Built state serialization capturing player transform, health, and environmental light levels across map checkpoints.</li>
                    </ul>

                    <h5 style="color: var(--accent-cyan); margin-top: 1.25rem; margin-bottom: 0.5rem;">Niagara Visual Effects (VFX)</h5>
                    <ul>
                        <li><strong>Dynamic Environmental FX:</strong> Created a custom mesh-based dynamic wind system with animated materials, dissolving smoke systems, embers, dust, and atmospheric fog.</li>
                        <li><strong>Gameplay & Combat FX:</strong> Designed multi-layered magical barriers using animated energy materials, projectile trails, hit impacts, and ambient spell effects.</li>
                    </ul>
                `
            },
            {
                heading: "Technical Challenges",
                text: `
                    <ul>
                        <li><strong>Unity to Unreal Engine Migration & Architecture</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Transitioning to Unreal's workflow while avoiding monolithic, unmaintainable Blueprint code inspired by isolated single-feature tutorials.</li>
                                <li><strong>Solution:</strong> Engineered clean, event-driven Blueprint architecture with decoupled system boundaries, abstracted managers, and reusable component pools.</li>
                            </ul>
                        </li>
                        <li><strong>Diversion VCS Binary Locking Bottlenecks</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Strict binary file locking in Diversion prevented concurrent editing of key Blueprint assets, causing integration delays.</li>
                                <li><strong>Solution:</strong> Established clear team asset ownership protocols and modularized Blueprint responsibilities to eliminate file overlap.</li>
                            </ul>
                        </li>
                        <li><strong>Niagara Real-Time Performance Budgeting</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Heavy combat particle counts, overdraw, and layered emitters causing framerate drops during intense sequences.</li>
                                <li><strong>Solution:</strong> Reduced unnecessary particle bounds, simplified shader material complexity, tuned emitter parameters, and modularized assets for runtime scalability.</li>
                            </ul>
                        </li>
                        <li><strong>AnimNotify & FX Timing Synchronization</strong>
                            <ul>
                                <li><strong>Challenge:</strong> Tightly coupling combat visual feedback with exact gameplay hitboxes and animation frames.</li>
                                <li><strong>Solution:</strong> Leveraged custom <code>AnimNotifies</code> to trigger frame-accurate Niagara spawns directly synchronized with damage detection logic.</li>
                            </ul>
                        </li>
                    </ul>
                `
            },
            {
                heading: "Lessons Learned",
                text: `
                    <ul>
                        <li><strong>Scalable Architecture Over Hacks:</strong> Abstracting systems into modular Blueprint components and Behavior Trees saves massive refactoring effort as game scope grows.</li>
                        <li><strong>Binary Asset Discipline:</strong> Engine assets that cannot be easily merged require strict communication and decoupled architecture to maintain workflow speed in team environments.</li>
                        <li><strong>VFX Budget Management:</strong> High visual fidelity must be balanced with overdraw control, particle bounds, and shader optimization early in the production pipeline.</li>
                        <li><strong>Cross-Discipline Integration:</strong> Combining programming, AI behavior, animation timing, and technical VFX yields a significantly more cohesive and responsive gameplay loop.</li>
                    </ul>
                `
            },
            {
                heading: "Portfolio Highlights",
                text: `
                    <ul>
                        <li><strong>Dual Technical Leadership:</strong> Directed both core gameplay programming and real-time Niagara VFX art in Unreal Engine 5.6.1.</li>
                        <li><strong>Behavior Tree AI Framework:</strong> Reusable AI perception and spline-patrol system powering multiple distinct enemy archetypes.</li>
                        <li><strong>Animation-Driven Combat Engine:</strong> Precision melee collision, charged projectile spells, lock-on targeting, and frame-accurate hit notifications.</li>
                        <li><strong>Custom Niagara FX Suite:</strong> Production-ready dynamic wind system, layered energy barriers, and optimized combat impact effects.</li>
                        <li><strong>Persistent State Checkpoints:</strong> Robust save/load system serializing transform data, health, and environmental lighting state.</li>
                    </ul>
                `
            }
        ]
    },
    // {
    //     id: "project-misc",
    //     title: "Small project Collection",
    //     subtitle: "Game Jams, College projects, etc.",
    //     shortDesc: "This simulation leverages modern OpenGL and C++ to visualize the gravitational effects of a stellar-mass black hole, complete with an accretion disk, gravitational lensing effects, realistic planet models and a dynamic skybox. .",
    //     thumbnail: "assets/gifs/BlackHoleProject/BH_Cover.gif",
    //     mainGif: "../assets/gifs/BlackHoleProject/BH_Cover.gif",
    //     screenshots: [
    //         "../assets/screenshots/BHProjectSS/BlackholeCover.png",
    //         "../assets/screenshots/BHProjectSS/2DSim.png",
    //         "../assets/screenshots/BHProjectSS/Early3DAttempts.png"
    //     ],
    //     tags: ["Unreal Engine 5", "Blueprints", "College Project", "Team"],
    //     details: {
    //         Engine: "Unreal Engine 5",
    //         Language: "Blueprints",
    //         Platform: "PC (Windows)",
    //         TeamSize: "6",
    //         DevTime: "10 Months",
    //         Role: "Lead Programmer",
    //         Status: "Released (Itch.io)",
    //         Genre: "Action-Adventure"
    //     },
    //     links: [
    //         { text: "View Repository", url: "#", icon: "fab fa-github", style: "btn-outline" },
    //         { text: "Play Game", url: "#", icon: "fas fa-gamepad", style: "btn-primary" }
    //     ],
    //     writeup: [
    //         {
    //             heading: "Overview",
    //             text: "Project Omega started as a game jam entry that evolved into a 6-month capstone project. The goal was to create a fluid, momentum-based shooter inspired by Titanfall." // <!-- PLACEHOLDER -->
    //         },
    //         {
    //             heading: "Technical Challenges (AI Systems)",
    //             text: "To make the enemies challenging in a high-mobility environment, I developed a custom utility-based AI system in C++. The AI dynamically evaluates player velocity and trajectory to predict movement and coordinate flanking maneuvers." // <!-- PLACEHOLDER -->
    //         },
    //         {
    //             heading: "Lessons Learned",
    //             text: "Balancing C++ performance with Blueprint flexibility for the designers was crucial. I learned how to architect native classes that expose intuitive variables to the editor." // <!-- PLACEHOLDER -->
    //         }
    //     ]
    // }
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
    writeupContainer.innerHTML = "";
    project.writeup.forEach(section => {
        writeupContainer.insertAdjacentHTML("beforeend", `
            <div class="writeup-section">
                <h4>${section.heading}</h4>
                <div>${section.text}</div>
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