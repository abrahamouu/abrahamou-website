export const profileImagePath = "/profile/profile.png";
export const resumeUrl = "/resume/AbrahamOuResumeMarch2026.pdf";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Memory Book", to: "/memory-book" },
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
    description: "A deeper look at my current role, previous work, and academic background.",
  },
  {
    title: "Projects",
    to: "/projects",
    description: "Selected technical work across embedded systems, architecture, and software.",
  },
  {
    title: "Memory Book",
    to: "/memory-book",
    description: "A lighter page for photos and moments I can keep adding over time.",
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
    tags: ["Python", "Sensors", "Automation"],
    href: null,
  },
  {
    title: "Client Personal Website",
    category: "Front-end delivery",
    summary:
      "Designed and built a personal site focused on clarity, presentation, and clean project storytelling.",
    detail:
      "Centered on polished layout, responsive behavior, and a concise presentation of academic and technical work.",
    image: "/projects/clientpersonalwebsite.png",
    tags: ["React", "UI", "Responsive"],
    href: null,
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
    items: ["Git", "VS Code", "FastAPI", "PostgreSQL", "SolidWorks", "Valgrind"],
  },
];

export const memoryBookIntro = {
  title: "A place for the personal side.",
  summary:
    "This page is set up as a simple memory book so I can keep adding photos and small moments over time.",
};

export const memoryBookEntries = [
  {
    title: "Current Snapshot",
    caption: "A simple portrait card to anchor the page for now.",
    image: profileImagePath,
    status: "Live",
  },
  {
    title: "Basketball",
    caption: "A slot for court photos, team moments, or pickup runs.",
    image: null,
    status: "Add photo later",
  },
  {
    title: "Gym",
    caption: "A place for training shots, routines, or progress photos.",
    image: null,
    status: "Add photo later",
  },
  {
    title: "Weekends",
    caption: "Space for beach days, travel, or casual memories outside work.",
    image: null,
    status: "Add photo later",
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
