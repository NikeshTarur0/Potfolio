export const portfolioData = {
  personalInfo: {
    name: "Nikesh Tarur",
    title: "Software & Python Developer",
    greeting: "Hi, I'm Nikesh Tarur 👋",
    location: "Ahmedabad, Gujarat, India",
    email: "nikeshtarur2006@gmail.com",
    phone: "+91 9586687637",
    web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY", // Free instant email key from web3forms.com
    github: "https://github.com/NikeshTarur0",
    linkedin: "https://www.linkedin.com/in/nikeshtarur/",
    resumeUrl: "/Nikesh_Tarur_Python_Developer_Resume.pdf",
    resumes: [
      {
        title: "Python Developer Resume",
        role: "Python Backend & Web Developer",
        url: "/Nikesh_Tarur_Python_Developer_Resume.pdf",
        filename: "Nikesh_Tarur_Python_Developer_Resume.pdf",
        badge: "Python, FastAPI, PIL, REST APIs, MySQL",
        accent: "from-python-blue to-sky-500"
      },
      {
        title: ".NET Developer Resume",
        role: "C# & .NET Core Developer",
        url: "/Nikesh_Tarur_DotNet_Developer_Resume.pdf",
        filename: "Nikesh_Tarur_DotNet_Developer_Resume.pdf",
        badge: "C#, .NET Core, ASP.NET MVC, Blazor, Web API",
        accent: "from-purple-500 to-indigo-600"
      }
    ],
    shortBio: "Recent BCA graduate skilled in Python, C#, .NET, FastAPI, React.js, REST APIs, MySQL, and MongoDB. Passionate about building scalable web platforms, image processing engines, and enterprise systems.",
    aboutBio: "I am a recent Bachelor of Computer Application (BCA) graduate from Gujarat Technological University. I specialize in building full-stack web applications, backend APIs, image processing algorithms, and database-driven solutions using Python, FastAPI, C#, .NET Core, React.js, and SQL/NoSQL databases. I am currently seeking an entry-level Software, Python, or .NET Developer role where I can contribute to innovative projects and grow professionally.",
    availability: "Open to Entry-Level & Internship Roles"
  },
  
  stats: [
    { label: "BCA CGPA", value: "7.15", accent: "from-sky-400 to-blue-600" },
    { label: "Graduation Year", value: "2026", accent: "from-yellow-400 to-amber-500" },
    { label: "GitHub Repositories", value: "6+", accent: "from-emerald-400 to-teal-500" },
    { label: "Core Technologies", value: "12+", accent: "from-indigo-400 to-purple-500" }
  ],

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ],

  skillCategories: [
    {
      title: "Programming Languages",
      icon: "Code2",
      description: "Core programming languages for application logic and backend engineering",
      skills: [
        { name: "Python", icon: "Snake", level: "Advanced", badge: "Primary" },
        { name: "C#", icon: "Cpu", level: "Advanced", badge: ".NET" },
        { name: "JavaScript", icon: "FileCode2", level: "Intermediate", badge: "Web" },
        { name: "PHP", icon: "FileCode", level: "Intermediate", badge: "Backend" }
      ]
    },
    {
      title: "Frameworks & .NET Tech",
      icon: "Server",
      description: "Web & API frameworks for scalable microservices and web applications",
      skills: [
        { name: "FastAPI", icon: "Zap", level: "Advanced", badge: "Async REST APIs" },
        { name: ".NET / ASP.NET Core", icon: "Layers", level: "Advanced", badge: "Enterprise" },
        { name: "ASP.NET MVC & Blazor", icon: "Cpu", level: "Intermediate", badge: "Fullstack" },
        { name: "React.js", icon: "FileCode2", level: "Intermediate", badge: "Frontend UI" },
        { name: "Flask", icon: "FlaskConical", level: "Intermediate", badge: "Web Services" }
      ]
    },
    {
      title: "Databases",
      icon: "Database",
      description: "Data modeling, query optimization, and persistent storage",
      skills: [
        { name: "MySQL", icon: "HardDrive", level: "Advanced", badge: "Relational SQL" },
        { name: "MongoDB", icon: "Boxes", level: "Intermediate", badge: "NoSQL Documents" },
        { name: "SQLite", icon: "FileSpreadsheet", level: "Advanced", badge: "Embedded SQL" }
      ]
    },
    {
      title: "Tools & Libraries",
      icon: "Wrench",
      description: "Developer tooling, version control, image pipelines, and payment APIs",
      skills: [
        { name: "Git & GitHub", icon: "Github", level: "Advanced", badge: "VCS" },
        { name: "VS Code", icon: "Terminal", level: "Advanced", badge: "IDE" },
        { name: "Pillow (PIL)", icon: "Image", level: "Advanced", badge: "Image Processing" },
        { name: "Razorpay API", icon: "CreditCard", level: "Intermediate", badge: "Payments / UPI QR" }
      ]
    }
  ],

  projects: [
    {
      id: "vyapaarflow-india-msme",
      title: "VyapaarFlow – AI OS for Indian MSMEs",
      category: "JavaScript & AI",
      shortDescription: "The AI Operating System for Indian MSMEs featuring automated billing, UPI payments, Khata digital ledger, inventory management, and customer credit intelligence.",
      fullDescription: "An AI-powered operating system for Indian micro, small, and medium enterprises (MSMEs). Features automated invoice billing, instant UPI QR code integration, digital Khata ledger, real-time inventory tracking, and intelligent customer credit risk scoring.",
      technologies: ["JavaScript", "AI Intelligence", "UPI Integration", "Node.js", "HTML5/CSS3"],
      githubUrl: "https://github.com/NikeshTarur0/vyapaarflow-india-msme",
      hasLiveDemo: false,
      featured: true,
      visualType: "vyapaarflow",
      highlights: [
        "AI Customer Credit Intelligence & credit risk scoring engine",
        "Automated billing, invoicing, and digital Khata ledger system",
        "Seamless UPI payment integration with instant QR generation",
        "Real-time inventory management and low-stock alerts"
      ]
    },
    {
      id: "exams-photo-resizer",
      title: "Exams Photo Resizer Engine",
      category: "Image Processing & Web",
      shortDescription: "Automated image & signature processing tool ensuring government recruitment exam candidate photos meet strict KB, DPI & dimension limits (UPSC, SSC, NEET, IBPS).",
      fullDescription: "An automated web application and image processing engine designed to compress, resize, and optimize candidate photographs and signatures according to strict government recruitment guidelines (KB boundaries, aspect ratio, DPI) without quality loss.",
      technologies: ["HTML5 Canvas", "JavaScript", "Image Processing", "CSS3", "Vercel"],
      githubUrl: "https://github.com/NikeshTarur0/exams-photo-resizer",
      demoUrl: "https://nikeshtarur0.github.io/exams-photo-resizer/",
      hasLiveDemo: true,
      featured: true,
      visualType: "face-id",
      highlights: [
        "Iterative compression ensuring exact government KB boundaries",
        "Presets for UPSC, SSC, NEET, IBPS, and state board recruitment exams",
        "Real-time client-side HTML5 Canvas pixel resampling",
        "Instant interactive preview, cropping, and one-click download"
      ]
    },
    {
      id: "chess-app",
      title: "Offline Chess App (Stockfish AI)",
      category: "TypeScript & Mobile",
      shortDescription: "Full-featured offline Chess app for iOS, Android & Web built with React Native, Expo, TypeScript, Stockfish AI engine, and Zustand.",
      fullDescription: "A feature-packed cross-platform offline chess application. Integrates Stockfish AI engine for configurable bot difficulty levels, Zustand for reactive state management, move analysis, and board customization.",
      technologies: ["TypeScript", "React Native", "Expo", "Stockfish AI", "Zustand"],
      githubUrl: "https://github.com/NikeshTarur0/Chess",
      hasLiveDemo: false,
      featured: true,
      visualType: "chess",
      highlights: [
        "Integrated Stockfish AI engine with multi-level difficulty settings",
        "Cross-platform support for iOS, Android, and Web via React Native & Expo",
        "State management using Zustand and move notation history",
        "Offline local 2-player mode and interactive board animations"
      ]
    },
    {
      id: "multivendor-ecommerce-platform",
      title: "Multi-Vendor E-Commerce Platform",
      category: "Python & Backend",
      shortDescription: "A scalable multi-vendor e-commerce platform with Razorpay UPI QR checkout, vendor order splitting, PyJWT RBAC security, and live sales analytics.",
      fullDescription: "Engineered a modular REST API platform using Python, FastAPI, and SQLite database. Features Razorpay payment gateway integration with interactive scannable UPI QR code modals, multi-vendor cart order orchestration with 10% commission engine, and PyJWT security.",
      technologies: ["Python", "FastAPI", "SQLite", "PyJWT", "Razorpay API"],
      githubUrl: "https://github.com/NikeshTarur0/Multi-Vendor-E-Commerce-Platform",
      hasLiveDemo: false,
      featured: true,
      visualType: "api-backend",
      highlights: [
        "Seamless Razorpay API Integration with scannable UPI QR code modal & VPA checkout",
        "Complex Order Orchestration processing multi-vendor carts with 10% commission engine",
        "Robust RBAC-driven PyJWT authentication with token blacklisting & permission scopes",
        "Interactive Glassmorphism Single Page Application (SPA) with real-time sales analytics"
      ]
    },
    {
      id: "movie-booking-system",
      title: "Movie Ticket Booking System",
      category: "Python & Web",
      shortDescription: "A movie ticket booking web application with interactive seat selection, showtime scheduling, and digital receipts.",
      fullDescription: "A full-featured web platform allowing users to browse upcoming movies, select showtimes, choose preferred theater seats interactively, and generate digital booking receipts. Built with Flask for backend routing and SQL for storage.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "MySQL"],
      githubUrl: "https://github.com/NikeshTarur0/movie-booking-system.",
      hasLiveDemo: false,
      featured: true,
      visualType: "movie-ui",
      highlights: [
        "Interactive movie seat selection map UI",
        "Admin panel for updating movie schedules & seat inventory",
        "User profile booking history and ticket invoice generation",
        "Relational database schema for screens, seats, and bookings"
      ]
    },
    {
      id: "booker",
      title: "Booker – Reservation Web App",
      category: "Full-Stack & Web",
      shortDescription: "A clean, responsive web application for online booking operations, slot scheduling, and user reservations.",
      fullDescription: "A modern reservation and booking management system built using HTML5, CSS3, and JavaScript. Designed for high responsiveness, intuitive layout, calendar slot selection, and streamlined user interactions.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/NikeshTarur0/booker",
      hasLiveDemo: false,
      featured: true,
      visualType: "booker",
      highlights: [
        "Clean, modern reservation interface with responsive layout",
        "Interactive booking slot selection and calendar workflow",
        "Lightweight client-side performance and optimized UX",
        "Modular code structure adhering to standard web principles"
      ]
    }
  ],

  experience: [
    {
      role: "Bachelor of Computer Application (BCA)",
      type: "Degree Education",
      company: "Gujarat Technological University",
      period: "2023 – 2026",
      location: "Ahmedabad, Gujarat",
      description: "Academic specialization in Software Engineering, Data Structures & Algorithms, Object-Oriented Programming, Database Management (MySQL, MongoDB), and Web Application Development. Graduated with 7.15 CGPA.",
      keyAchievements: [
        "CGPA: 7.15 / 10.0",
        "Engineered Full-Stack Multi-Vendor E-Commerce Platform and Image Processing Engine as capstone projects.",
        "Mastered C#, .NET, Python, JavaScript, React.js, REST APIs, MySQL, and MongoDB."
      ]
    },
    {
      role: "12th GSEB (Higher Secondary)",
      type: "High School Education",
      company: "Gujarat Secondary and Higher Secondary Education Board",
      period: "2023",
      location: "Gujarat, India",
      description: "Completed Higher Secondary Education with focus on academic fundamentals and mathematics.",
      keyAchievements: [
        "Scored 60% in Higher Secondary Board Examination."
      ]
    },
    {
      role: "10th GSEB (Secondary Education)",
      type: "Secondary School Education",
      company: "Gujarat Secondary and Higher Secondary Education Board",
      period: "2021",
      location: "Gujarat, India",
      description: "Completed Secondary School Examination with solid foundation in science and mathematics.",
      keyAchievements: [
        "Scored 62% in Secondary Board Examination."
      ]
    }
  ],

  codeSnippet: {
    filename: "app/main.py",
    language: "python",
    code: `from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Nikesh Tarur - Software Developer API v1.0")

class CandidateProfile(BaseModel):
    name: str = "Nikesh Tarur"
    degree: str = "BCA (Gujarat Technological University)"
    location: str = "Ahmedabad, Gujarat"
    tech_stack: List[str] = ["Python", "FastAPI", "C#", ".NET Core", "React.js", "MySQL", "MongoDB"]
    email: str = "nikeshtarur2006@gmail.com"
    status: str = "Seeking Entry-Level Software / .NET / Python Developer Role"

@app.get("/api/v1/developer", response_model=CandidateProfile)
async def get_candidate_info():
    """Retrieve Nikesh Tarur's verified qualification metadata."""
    return CandidateProfile()

@app.post("/api/v1/contact")
async def send_inquiry(message: dict):
    return {
        "status": 200,
        "message": "Thank you! Nikesh will get back to you promptly.",
        "contact": "nikeshtarur2006@gmail.com"
    }`
  }
};
