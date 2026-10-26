export const profileImagePath = "/profile/profile.png";
export const homeProfileImagePath = "/profile/abraham-ou-portrait-1600.webp";
// Keep these sources aligned with the preload in index.html.
export const homeProfileImageSrcSet = `/profile/abraham-ou-portrait-800.webp 1x, ${homeProfileImagePath} 2x`;
export const resumeUrl = "/resume/AbrahamOuResumeMarch2026.pdf";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const heroContent = {
  eyebrow: "Abraham Ou // Embedded Software Engineer",
  title: "I build reliable software for embedded and networked systems.",
  intro:
    "Currently an Embedded Software Engineer at TP-Link Systems with previous backend experience at Homigo and an EECS background from UC Irvine.",
};

export const quickFacts = [
  "TP-Link Systems",
  "Embedded Software",
  "Networking",
  "UC Irvine EECS",
];

export const profileCard = {
  role: "Embedded Software Engineer",
  company: "TP-Link Systems",
  location: "Irvine, California",
  note: "Focused on clean implementation, reliable system behavior, and straightforward product execution.",
};

export const homePreviewLinks = [
  {
    title: "Experience",
    to: "/experience",
    description:
      "A deeper look at my current role, previous work, and academic background.",
  },
  {
    title: "Projects",
    to: "/projects",
    description:
      "Selected technical work across embedded systems, architecture, and software.",
  },
  {
    title: "Contact",
    to: "/contact",
    description: "Links, contact details, and a quick way to reach out.",
  },
];

export const experienceItems = [
  {
    label: "Current",
    title: "Embedded Software Engineer",
    company: "TP-Link Systems",
    period: "Present",
    summary:
      "Build embedded software for networking products with an emphasis on reliability, maintainability, and system-level clarity.",
    highlights: [
      "Work close to system behavior and product constraints.",
      "Prioritize stable implementation and readable code.",
      "Focus on software that needs to hold up in production.",
    ],
    tags: ["Embedded software", "Networking", "Systems"],
  },
  {
    label: "Previous",
    title: "Back-End Engineer",
    company: "Homigo",
    period: "Past",
    summary:
      "Worked on backend implementation and delivery across product requirements, architecture, and practical scaling needs.",
    highlights: [
      "Supported backend development around real product workflows.",
      "Contributed to practical architecture and scalable implementation.",
      "Balanced delivery speed with maintainable structure.",
    ],
    tags: ["Backend", "APIs", "Product delivery"],
  },
  {
    label: "Education",
    title: "Electrical Engineering and Computer Science",
    company: "University of California, Irvine",
    period: "2022 - 2026",
    summary:
      "Built a foundation across embedded systems, computer architecture, systems programming, and full project delivery.",
    highlights: [
      "Worked across Verilog, C, embedded systems, and full-stack implementation.",
      "Developed a systems-first approach to debugging and design.",
      "Balanced technical depth with presentation and teamwork.",
    ],
    tags: ["EECS", "Architecture", "Embedded systems"],
  },
];

export const projectItems = [
  {
    title: "Rovera",
    category: "Embedded + control",
    summary:
      "A real-time rover platform for telemetry, movement control, and wireless experimentation through a clean web interface.",
    detail:
      "Built across embedded hardware, communication, backend services, and front-end control workflows.",
    image: "/projects/project5.png",
    illustration: "rovera",
    tags: ["Telemetry", "Wireless", "Realtime"],
    href: "https://roverauci.vercel.app",
  },
  {
    title: "MIPS Pipelined Processor",
    category: "Computer architecture",
    summary:
      "Designed a 5-stage pipelined processor in Verilog with hazard detection, forwarding, and validation through simulation.",
    detail:
      "Focused on pipeline behavior, control flow, and correct handling of structural and data hazards.",
    image: "/projects/project2.png",
    illustration: "processor",
    tags: ["Verilog", "Architecture", "Simulation"],
    href: null,
  },
  {
    title: "MovieLab",
    category: "Systems programming",
    summary:
      "Built a C-based video processing tool with image filters, frame operations, and memory-conscious implementation.",
    detail:
      "Covered YUV/RGB processing, runtime behavior, and low-level memory handling with attention to correctness.",
    image: "/projects/project3.png",
    illustration: "movielab",
    tags: ["C", "Systems", "Valgrind"],
    href: null,
  },
  {
    title: "Autonomous Rover",
    category: "Embedded robotics",
    summary:
      "Integrated object detection, IR path tracing, and custom electronics into an embedded robotics build.",
    detail:
      "Combined sensing, motion behavior, and physical system constraints into a functional rover platform.",
    image: "/projects/project4.png",
    illustration: "rover",
    tags: ["Embedded", "Sensors", "Robotics"],
    href: null,
  },
  {
    title: "Building Management System",
    category: "IoT automation",
    summary:
      "Built a sensor-driven system for HVAC and lighting automation with real-time responsiveness.",
    detail:
      "Used live data and multithreaded logic to connect embedded behavior to practical building automation.",
    image: "/projects/project1.png",
    illustration: "building",
    tags: ["Python", "Sensors", "Automation"],
    href: null,
  },
  {
    title: "Chess",
    category: "Game development",
    summary: "A chess game project developed for EECS 22L.",
    illustration: "chess",
    tags: ["Chess", "Coursework", "EECS 22L"],
    href: "https://github.com/abrahamouu/chess",
    linkLabel: "View on GitHub",
  },
  {
    title: "AI Maze Pathfinding",
    category: "AI + search",
    summary:
      "Implemented depth-first, breadth-first, uniform-cost, and A* search to guide a Cat-Man agent through maze environments.",
    detail:
      "An EECS 118 group project exploring graph traversal, priority queues, path costs, and heuristic search in Python.",
    illustration: "maze",
    tags: ["Python", "A*", "Graph search"],
    href: "https://github.com/abrahamouu/EECS118GroupProject",
    linkLabel: "View on GitHub",
  },
  {
    title: "SQL Database Platform",
    category: "Databases + backend",
    summary:
      "Built a Python command-line application that translates user commands into SQL to manage an agent platform backed by MySQL.",
    detail:
      "An EECS 116 project covering relational schemas, CSV imports, record management, and queries across users, models, and services.",
    illustration: "database",
    tags: ["Python", "MySQL", "Relational data"],
    href: "https://github.com/abrahamouu/EECS116FinalProject",
    linkLabel: "View on GitHub",
  },
  {
    title: "Calculator GUI",
    category: "Desktop applications",
    summary:
      "A Java Swing calculator with a desktop interface for arithmetic and scientific operations.",
    detail:
      "Uses reusable event handlers for number buttons, with support for decimals, square roots, and logarithms.",
    illustration: "calculator",
    tags: ["Java", "Swing", "Event handling"],
    href: "https://github.com/abrahamouu/calculatorGUI",
    linkLabel: "View on GitHub",
  },
  {
    title: "Aphrodite Poker",
    category: "Networked games",
    summary:
      "A poker game in C with socket-based client/server communication and a GTK graphical interface.",
    detail:
      "Implements betting rounds, player actions, and hand evaluation, from pairs through royal flushes.",
    illustration: "poker",
    tags: ["C", "TCP sockets", "GTK"],
    href: "https://github.com/abrahamouu/aprodite_poker_game",
    linkLabel: "View on GitHub",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C", "C++", "Python", "JavaScript", "Verilog"],
  },
  {
    title: "Focus",
    items: [
      "Embedded software",
      "Networking",
      "Computer architecture",
      "Systems programming",
      "Backend APIs",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "VS Code",
      "FastAPI",
      "PostgreSQL",
      "SolidWorks",
      "Valgrind",
    ],
  },
];

export const contactLinks = [
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
    value: "Irvine, California",
    href: null,
  },
  {
    label: "Resume",
    value: "Open PDF",
    href: resumeUrl,
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
    label: "Email",
    href: "mailto:abrahamou2018@gmail.com",
  },
];
