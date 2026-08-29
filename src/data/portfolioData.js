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
    { label: "Key Full-Stack Projects", value: "4+", accent: "from-emerald-400 to-teal-500" },
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
      id: "multivendor-ecommerce-platform",
      title: "Multi-Vendor E-Commerce Platform",
      category: "Full-Stack Application",
      shortDescription: "A scalable multi-vendor e-commerce platform with Razorpay UPI QR checkout, vendor order splitting, PyJWT RBAC security, and live sales analytics.",
      fullDescription: "Engineered a modular REST API platform using Python, FastAPI, and SQLite database. Features Razorpay payment gateway integration with interactive scannable UPI QR code modals, multi-vendor cart order orchestration with proportional commission splitting, and a PyJWT dual-token security architecture (Access/Refresh tokens, token blacklisting) for Admin, Vendor, and Customer portals.",
      technologies: ["Python", "FastAPI", "SQLite", "PyJWT", "Razorpay API", "Vanilla JS", "HTML5/CSS3"],
      githubUrl: "https://github.com/NikeshTarur0/multivendor-ecommerce-backend",
      demoUrl: "https://github.com/NikeshTarur0/multivendor-ecommerce-backend",
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
      id: "indian-exam-document-engine",
      title: "Indian Exam Document Processing Engine",
      category: "Python & Image Processing",
      shortDescription: "An automated image processing and compression engine ensuring candidate documents meet precise government recruiter constraints.",
      fullDescription: "Architected a server-side image processing backend utilizing Python and Pillow (PIL) for deep pixel resampling and dynamic scaling. Implemented an iterative binary-search compression algorithm that dynamically adjusts image quality and dimensions to meet strict government file size (KB) limits (UPSC, SSC, NEET) without visual degradation, paired with an HTML5 Canvas client layer deployed on Vercel.",
      technologies: ["Python", "Pillow (PIL)", "REST APIs", "MySQL", "HTML5 Canvas", "Vercel"],
      githubUrl: "https://github.com/NikeshTarur0/document-processing-engine",
      demoUrl: "https://github.com/NikeshTarur0/document-processing-engine",
      featured: true,
      visualType: "face-id",
      highlights: [
        "Python Pillow (PIL) deep pixel resampling and dynamic scaling engine",
        "Iterative binary-search compression guaranteeing exact government KB boundaries",
        "MySQL relational schema serving recruitment constraint rules (UPSC, SSC, NEET)",
        "Client-side HTML5 Canvas processing layer on Vercel reducing server compute load"
      ]
    },
    {
      id: "movie-booking-system",
      title: "Movie Ticket Booking System",
      category: "Fullstack Web App",
      shortDescription: "A movie ticket booking web application with movie seat management and online booking receipts.",
      fullDescription: "A full-featured web platform allowing users to browse upcoming movies, select showtimes, choose preferred theater seats interactively, and generate digital booking receipts. Built with Flask for backend routing and SQL for backend storage.",
      technologies: ["Python", "Flask", "MySQL", "HTML5/CSS3", "JavaScript"],
      githubUrl: "https://github.com/NikeshTarur0/movie-booking-system",
      demoUrl: "https://github.com/NikeshTarur0/movie-booking-system",
      featured: true,
      visualType: "movie-ui",
      highlights: [
        "Interactive movie seat selection map UI",
        "Admin panel for updating movie schedules & seat inventory",
        "User profile booking history and ticket invoice download",
        "Relational database schema for screens, seats, and bookings"
      ]
    },
    {
      id: "bookstore-management-system",
      title: "Bookstore Management System",
      category: "Enterprise Systems",
      shortDescription: "An enterprise bookstore management system built using .NET and MongoDB.",
      fullDescription: "An end-to-end management software solution for bookstore operations. Leverages .NET Core backend architecture and MongoDB document database for flexible catalog querying, inventory management, price tracking, sales transactions, and author metadata handling.",
      technologies: [".NET Core", "C#", "MongoDB", "ASP.NET Web API"],
      githubUrl: "https://github.com/NikeshTarur0/bookstore-management-system",
      demoUrl: "https://github.com/NikeshTarur0/bookstore-management-system",
      featured: true,
      visualType: "bookstore",
      highlights: [
        "MongoDB document aggregation for rapid searching",
        "Inventory stock alerts and restocking management",
        "Sales transactions ledger and financial metrics breakdown",
        "Clean layered architecture design pattern"
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
