export const profileImagePath = "/profile/profile.png";
export const resumeUrl = "/resume/AbrahamOuResumeMarch2026.pdf";

export const quickStats = [
  { value: "UC Irvine", label: "Computer Engineering" },
  { value: "6 Builds", label: "Featured Projects" },
  { value: "Edge to Web", label: "Full System Thinking" },
];

export const focusAreas = [
  "Embedded systems",
  "Robotics",
  "Backend architecture",
  "Product-minded UI",
];

export const bootLines = [
  "ABRAHAM_OS BIOS v2.6 initialized",
  "Checking display controller .......... OK",
  "Loading app /about ................... READY",
  "Loading app /experience .............. READY",
  "Loading app /skills .................. READY",
  "Loading app /projects ................ READY",
  "Loading app /resume .................. READY",
  "Loading app /contact ................. READY",
  "Loading app /links ................... READY",
  "Desktop services online .............. READY",
  "Portfolio desktop available. Welcome in.",
];

export const aboutContent = {
  heading: "Hardware instincts. Software finish.",
  summary:
    "I enjoy projects that start with a messy technical challenge and end with something tangible, elegant, and useful.",
  paragraphs: [
    "I've designed everything from an IoT building management system that automates HVAC and lighting using live sensor data, to a five-stage pipelined MIPS processor in Verilog, to an autonomous UGV with live telemetry and software-defined radio control.",
    "Whether I'm tuning embedded code, building APIs, or shaping the front end for a project demo, I care about systems that feel deliberate from end to end and hold up outside the classroom.",
  ],
  cards: [
    {
      title: "Product-minded engineering",
      description:
        "I care about architecture, performance, and how the final experience actually feels to use.",
    },
    {
      title: "Embedded and hardware fluency",
      description:
        "I like working close to the metal, especially when sensors, controls, and firmware need to coordinate cleanly.",
    },
    {
      title: "Strong ownership",
      description:
        "I enjoy taking projects from concept through debugging, iteration, and the final polished presentation.",
    },
  ],
};

export const experiences = [
  {
    company: "Homigo Inc.",
    role: "Backend Developer (Lead)",
    period: "Dec 2025 - Present",
    website: "https://homigoapp.io",
    featured: true,
    summary:
      "Leading backend architecture for a production marketplace, with ownership across APIs, data modeling, payments, and performance.",
    tags: ["REST APIs", "PostgreSQL", "Stripe Connect", "Performance"],
    stats: [
      { value: "75%", label: "Dashboard latency reduction" },
      { value: "Live", label: "Marketplace backend ownership" },
    ],
    highlights: [
      "Designed and implemented RESTful APIs for authentication, job lifecycle, bidding, and scheduling to support end-to-end marketplace workflows.",
      "Reduced dashboard latency by 75% by consolidating multi-query client requests into a single endpoint and removing redundant database calls.",
      "Architected relational PostgreSQL schemas and query patterns that improved query performance and readability across multi-tab consumer dashboards.",
      "Built a Stripe Connect escrow flow with webhook-driven state transitions to ensure atomic payment handling and payout reliability.",
      "Led backend system design decisions across API contracts, data modeling, and performance optimization in a cross-functional team.",
    ],
  },
  {
    company: "Rovera",
    role: "Lead Software Engineer",
    period: "Aug 2025 - Mar 2026",
    website: "https://roverauci.vercel.app",
    featured: false,
    summary:
      "Built the software backbone for an SDR-enabled rover platform spanning embedded hardware, backend infrastructure, and real-time UI.",
    tags: ["FastAPI", "Supabase", "React/Next.js", "SDR"],
    stats: [
      { value: "85%", label: "Decode accuracy under noise" },
      { value: "Full stack", label: "Embedded to frontend" },
    ],
    highlights: [
      "Led end-to-end development of a wireless research rover platform integrating PlutoSDR, Raspberry Pi, GPS, and IMU for real-time navigation and communication.",
      "Designed a custom navigation algorithm combining GPS and heading data for autonomous waypoint tracking and movement control.",
      "Engineered a digital communication pipeline that improved decoding accuracy from 55% to 85% under noisy channel conditions.",
      "Built backend infrastructure with FastAPI and Supabase, then paired it with a React/Next.js frontend for live telemetry and command workflows.",
    ],
  },
];

export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 50 },
      { name: "React", level: 25 },
      { name: "Tailwind CSS", level: 25 },
      { name: "Next.js", level: 25 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Python", level: 75 },
      { name: "C", level: 75 },
      { name: "C++", level: 50 },
      { name: "Java", level: 50 },
      { name: "Node.js", level: 30 },
      { name: "PostgreSQL", level: 30 },
    ],
  },
  {
    id: "hardware",
    label: "Hardware",
    skills: [
      { name: "VHDL", level: 50 },
      { name: "Verilog", level: 70 },
    ],
  },
  {
    id: "design",
    label: "Design",
    skills: [
      { name: "Cadence Virtuoso", level: 50 },
      { name: "OrCAD", level: 50 },
      { name: "LTSpice/PSpice", level: 50 },
      { name: "Solidworks", level: 50 },
      { name: "AutoDesk Inventor", level: 50 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git/GitHub", level: 70 },
      { name: "Figma", level: 50 },
      { name: "VS Code", level: 80 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Rovera | Real-Time TCP-Controlled UGV Platform",
    description:
      "Rovera is a high-speed, sensor-driven micro-rover system that uses TCP socket communication to enable reliable real-time control, telemetry streaming, and autonomous navigation experimentation.",
    image: "/projects/project5.png",
    tags: ["React", "Tailwind CSS", "API"],
    demoUrl: "https://roverauci.vercel.app",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Client Personal Website",
    description:
      "A professional personal website that showcases academic achievements, research interests, and projects to support college and graduate school applications.",
    image: "/projects/clientpersonalwebsite.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Embedded System | Building Management System",
    description:
      "An IoT-based Building Management System in Python that automates HVAC and lighting using sensor data and multithreading for real-time responsiveness.",
    image: "/projects/project1.png",
    tags: ["Python", "Multi-Threading", "API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "MIPS Pipelined Processor",
    description:
      "Designed and implemented a 5-stage pipelined MIPS processor in Verilog, including hazard detection and forwarding units to handle structural, data, and control hazards.",
    image: "/projects/project2.png",
    tags: ["Verilog", "Hazard Control", "Unit Testing"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Movie Lab Video Processing (C/C++)",
    description:
      "Developed a C/C++ video processing tool that applied image filters, color conversions, and frame transformations to enhance and analyze YUV-format movies.",
    image: "/projects/project3.png",
    tags: ["C/C++", "YUV->RGB", "Algorithms"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Autonomous Robot with Object Detection",
    description:
      "Built an autonomous rover in Arduino with object detection and path-tracing capabilities using PixyCam vision and infrared sensors.",
    image: "/projects/project4.png",
    tags: ["Arduino", "Self-Navigation", "Embedded Systems"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const contactItems = [
  {
    label: "Email",
    value: "abrahamou2018@gmail.com",
    href: "mailto:abrahamou2018@gmail.com",
  },
  {
    label: "Phone",
    value: "+1 (626) 482-4787",
    href: "tel:+16264824787",
  },
  {
    label: "Location",
    value: "Irvine, CA, United States",
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abrahamou/",
  },
  {
    label: "GitHub",
    href: "https://github.com/abrahamouu",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/abrahamouu/",
  },
  {
    label: "Email",
    href: "mailto:abrahamou2018@gmail.com",
  },
];

export const externalLinks = [
  {
    label: "Resume PDF",
    href: resumeUrl,
    description: "Open current resume",
  },
  {
    label: "GitHub",
    href: "https://github.com/abrahamouu",
    description: "Public repositories and builds",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abrahamou/",
    description: "Professional profile",
  },
  {
    label: "Homigo",
    href: "https://homigoapp.io",
    description: "Marketplace backend work",
  },
  {
    label: "Rovera",
    href: "https://roverauci.vercel.app",
    description: "Real-time UGV project",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/abrahamouu/",
    description: "More of my current world",
  },
];
