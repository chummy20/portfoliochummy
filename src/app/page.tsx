// app/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import Image from "next/image";
import profile from '@/app/assets/zoro.webp';
import { motion, AnimatePresence, useScroll, useSpring , easeInOut} from "framer-motion";
import { 
  Github, Linkedin, Mail, Code, Server, Monitor, 
  Cpu, Database, Zap, Shield, Layout, Globe, Heart,
  Calendar, Award, MapPin, ExternalLink, ChevronRight,
  Code2, Binary, Network, Workflow, Star, TrendingUp,
  Users, Clock, CheckCircle, ArrowRight, Download
} from "lucide-react";

const SKILLS = [
  { name: "HTML", level: 95, icon: <Layout size={20} /> },
  { name: "CSS", level: 92, icon: <Layout size={20} /> },
  { name: "JavaScript", level: 90, icon: <Code2 size={20} /> },
  { name: "React", level: 88, icon: <Code2 size={20} /> },
  { name: "Next.js", level: 85, icon: <Globe size={20} /> },
  { name: "Bootstrap", level: 90, icon: <Layout size={20} /> },
  { name: "PHP", level: 80, icon: <Code2 size={20} /> },
  { name: "Laravel", level: 82, icon: <Workflow size={20} /> },
  { name: "MySQL", level: 78, icon: <Database size={20} /> },
  { name: "Git", level: 88, icon: <Github size={20} /> },
  { name: "REST APIs", level: 85, icon: <Network size={20} /> },
  { name: "Problem Solving", level: 90, icon: <Binary size={20} /> },
];

const PROJECTS = [
  {
    title: "Ecommerce Web App",
    desc: "Full-stack ecommerce platform with product catalog, shopping cart, user authentication, and admin dashboard. Implemented secure payment processing and inventory management.",
    status: "Ongoing",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&crop=center",
    tags: ["Next.js", "Laravel", "Stripe", "MySQL"],
    link: "#",
    stats: { users: "2.5K+", uptime: "99.9%" }
  },
  {
    title: "Gambling Web App",
    desc: "Complete gambling platform with various betting options, wallet system, real-time updates, and comprehensive admin tools. Focus on security and fair play algorithms.",
    status: "Complete",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center",
    tags: ["React", "Laravel", "MySQL", "WebSockets"],
    link: "#",
    stats: { users: "5K+", uptime: "99.8%" }
  },
  {
    title: "Hotel Booking Website",
    desc: "Responsive hotel booking platform with room availability checking, booking flows, payment integration, and rooms management system for administrators.",
    status: "Ongoing",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop&crop=center",
    tags: ["Next.js", "Bootstrap", "Stripe", "Mapbox"],
    link: "#",
    stats: { users: "1.2K+", uptime: "99.7%" }
  },
  {
    title: "Demo Payment System",
    desc: "Simulated payment processing system for testing transaction flows. Includes send/receive money functionality, transaction history, and mock banking integrations.",
    status: "Ongoing",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&crop=center",
    tags: ["PHP", "REST APIs", "MySQL", "JWT"],
    link: "#",
    stats: { users: "800+", uptime: "99.9%" }
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2024 - Present",
    description: "Building responsive web applications for clients across various industries. Specializing in React, Next.js, and Laravel development with focus on user experience and performance optimization.",
    icon: <Code size={20} />,
    achievements: ["3+ Projects Delivered", "Client Satisfaction: 90%", "Average Rating: 3.5/5"]
  },
  {
    role: "Full Stack Developer",
    company: "Spektralsoft Company.",
    period: "Present",
    description: "Developed user interfaces, implemented design systems, and optimized web performance. Worked on backend using PHP",
    icon: <Monitor size={20} />,
    achievements: ["Performance Improved 40%", "Component Library Created", "Team of 5 Developers"]
  },
];

const STATS = [
  { label: "Projects Completed", value: "7+", icon: <CheckCircle size={24} /> },
  { label: "Happy Clients", value: "5+", icon: <Users size={24} /> },
  { label: "Years Experience", value: "3+", icon: <Clock size={24} /> },
  { label: "Success Rate", value: "80%", icon: <TrendingUp size={24} /> },
];

export default function Page() {
  const fullText = "I build secure, fast, and eye-catching web applications.";
  const [typed, setTyped] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
     
    let i = 0;
    const handle = setInterval(() => {
      setTyped((t) => fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(handle);
    }, 50);
    return () => clearInterval(handle);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };
  
  const fadeUp = { 
    hidden: { opacity: 0, y: 30 }, 
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: easeInOut }
    } 
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }
    }
  };

  return (
    <>
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: #6366f1;
          transform-origin: 0%;
          z-index: 9999;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.25, 0.4, 0.25, 1);
          border: 1px solid #e5e7eb;
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          border-color: #6366f1;
        }
        
        .skill-progress {
          height: 8px;
          border-radius: 10px;
          background: #f3f4f6;
          overflow: hidden;
          position: relative;
        }
        
        .skill-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 10px;
          position: relative;
        }
        
        .skill-progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .btn-primary-custom {
          background: #6366f1;
          border: none;
          color: white;
          padding: 12px 32px;
          border-radius: 12px;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        
        .btn-primary-custom:hover {
          background: #5b5bd6;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
          color: white;
        }
        
        .btn-secondary-custom {
          background: white;
          border: 2px solid #6366f1;
          color: #6366f1;
          padding: 10px 30px;
          border-radius: 12px;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        
        .btn-secondary-custom:hover {
          background: #6366f1;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.2);
        }
        
        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 15px;
          background: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          color: #6b7280;
        }
        
        .social-icon:hover {
          transform: translateY(-3px) rotate(5deg);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          color: #6366f1;
          border-color: #6366f1;
          text-decoration: none;
        }
        
        .profile-image {
          width: 280px;
          height: 280px;
          border-radius: 20px;
          object-fit: cover;
          border: 4px solid white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .section-badge {
          background: #ede9fe;
          color: #7c3aed;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
        }
        
        .project-image {
          height: 200px;
          object-fit: cover;
          border-radius: 15px 15px 0 0;
          transition: all 0.4s ease;
        }
        
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        
        .tag-badge {
          background: #f0f9ff;
          color: #0284c7;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          margin: 2px;
          display: inline-block;
        }
        
        .stat-card {
          background: white;
          border-radius: 20px;
          padding: 30px 20px;
          text-align: center;
          border: 1px solid #f3f4f6;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .timeline-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #6366f1;
          position: absolute;
          left: 0;
          top: 8px;
        }
        
        .timeline-line {
          position: absolute;
          left: 9px;
          top: 28px;
          bottom: -30px;
          width: 2px;
          background: #e5e7eb;
        }
        
        .experience-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          margin-left: 40px;
          border: 1px solid #f3f4f6;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .experience-card:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          transform: translateX(5px);
        }
        
        .form-control-custom {
          border: 2px solid #f3f4f6;
          border-radius: 12px;
          padding: 15px;
          background: white;
          transition: all 0.3s ease;
        }
        
        .form-control-custom:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }
        
        .nav-link-custom {
          color: #6b7280;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .nav-link-custom:hover {
          background: #f9fafb;
          color: #6366f1;
        }
        
        .navbar-custom {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #f3f4f6;
        }
        
        @media (max-width: 768px) {
          .profile-image {
            width: 200px;
            height: 200px;
          }
          
          .display-4 {
            font-size: 2rem;
          }
          
          .btn-primary-custom,
          .btn-secondary-custom {
            padding: 10px 20px;
            font-size: 14px;
          }
          
          .stat-card {
            padding: 20px 15px;
          }
        }
        
        .blinking-cursor {
          animation: blink 1s infinite;
          color: #6366f1;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>

      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />

      <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#fafbfc" }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg fixed-top py-3 navbar-custom">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#" style={{ color: "#6366f1", fontWeight: 700 }}>
              <Code2 size={28} className="me-2" />
              <span>Mukete Roland</span>
            </a>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navCollapse">
              <ul className="navbar-nav ms-auto align-items-lg-center">
                <li className="nav-item"><a className="nav-link nav-link-custom" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link nav-link-custom" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link nav-link-custom" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link nav-link-custom" href="#experience">Experience</a></li>
                <li className="nav-item"><a className="nav-link nav-link-custom" href="#contact">Contact</a></li>
                <li className="nav-item ms-3">
                  <a className="btn btn-primary-custom" href="#contact">
                    <Mail size={16} /> Hire Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-5 mt-5" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" }}>
          <div className="container">
            <div className="row align-items-center gy-5">
              <div className="col-lg-7">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="section-badge">
                    <Star size={16} /> Available for freelance
                  </div>
                  
                  <h1 className="display-4 fw-bold mb-3" style={{ color: "#1f2937", lineHeight: 1.2 }}>
                    Full Stack Developer
                  </h1>
                  
                  <p className="lead mb-4" style={{ color: "#6366f1", fontWeight: 500, minHeight: '60px' }}>
                    {typed}<span className="blinking-cursor">|</span>
                  </p>

                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <motion.a 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary-custom" 
                      href="#projects"
                    >
                      <Code size={18} /> View Projects
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary-custom" 
                      href="#contact"
                    >
                      <Download size={18} /> Download CV
                    </motion.a>
                  </div>

                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <div className="d-flex gap-3">
                      <motion.a 
                        whileHover={{ scale: 1.1 }} 
                        className="social-icon" 
                        href="https://github.com/" 
                        target="_blank"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }} 
                        className="social-icon" 
                        href="https://linkedin.com/" 
                        target="_blank"
                      >
                        <Linkedin size={20} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }} 
                        className="social-icon" 
                        href="mailto:chummycursive79@gmail.com"
                      >
                        <Mail size={20} />
                      </motion.a>
                    </div>
                    
                    <div className="text-muted small d-flex align-items-center">
                      <MapPin size={16} className="me-2" style={{ color: "#6366f1" }} />
                      Cameroon • Remote Available
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="col-lg-5 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    alt="Developer Profile"
                    src={profile}
                    className="profile-image mb-4 rounded shadow-lg"
                    width={300}
                    height={200}
                  />
                  <div className="text-center">
                    <div className="d-flex align-items-center justify-content-center mb-2">
                      <Zap size={16} className="me-2" style={{ color: "#6366f1" }} />
                      <span className="text-muted small">Building the future, one line at a time</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-5">
          <div className="container">
            <motion.div 
              className="row g-4"
              initial="hidden"
              whileInView="show"
              variants={container}
              viewport={{ once: true }}
            >
              {STATS.map((stat, idx) => (
                <motion.div key={stat.label} className="col-md-3 col-6" variants={fadeUp}>
                  <div className="stat-card">
                    <div className="mb-3" style={{ color: "#6366f1" }}>
                      {stat.icon}
                    </div>
                    <h3 className="fw-bold mb-1" style={{ color: "#1f2937" }}>{stat.value}</h3>
                    <p className="text-muted small mb-0">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-5" style={{ background: "white" }}>
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={container}
              viewport={{ once: true }}
            >
              <div className="text-center mb-5">
                <div className="section-badge">
                  <Code size={16} /> About Me
                </div>
                <h2 className="fw-bold mb-3" style={{ color: "#1f2937" }}>Passionate Full Stack Developer</h2>
              </div>
              
              <div className="row mb-5">
                <div className="col-lg-8 mx-auto text-center">
                  <motion.p variants={fadeUp} className="lead text-muted mb-4">
                    I'm a passionate full-stack developer with expertise in building modern web applications. 
                    With a strong foundation in both frontend and backend technologies, I create seamless, 
                    responsive, and secure digital experiences.
                  </motion.p>
                  <motion.p variants={fadeUp} className="text-muted">
                    My approach combines technical expertise with an eye for design to deliver solutions 
                    that not only function flawlessly but also provide exceptional user experiences. 
                    I believe in writing clean, maintainable code and following best practices.
                  </motion.p>
                </div>
              </div>

              <div className="row g-4">
                <motion.div className="col-lg-4" variants={fadeUp}>
                  <div className="card-hover h-100 p-4 rounded-3" style={{ background: "white" }}>
                    <div className="mb-3">
                      <div className="social-icon mb-3" style={{ background: "#f0f9ff" }}>
                        <Monitor size={24} style={{ color: "#0284c7" }} />
                      </div>
                      <h5 className="fw-bold" style={{ color: "#1f2937" }}>Frontend Development</h5>
                    </div>
                    <p className="text-muted small">
                      Creating responsive, pixel-perfect UIs with modern frameworks like React and Next.js. 
                      Focus on performance, accessibility, and smooth user experiences.
                    </p>
                  </div>
                </motion.div>

                <motion.div className="col-lg-4" variants={fadeUp}>
                  <div className="card-hover h-100 p-4 rounded-3" style={{ background: "white" }}>
                    <div className="mb-3">
                      <div className="social-icon mb-3" style={{ background: "#f0fdf4" }}>
                        <Server size={24} style={{ color: "#16a34a" }} />
                      </div>
                      <h5 className="fw-bold" style={{ color: "#1f2937" }}>Backend & APIs</h5>
                    </div>
                    <p className="text-muted small">
                      Building robust server-side applications, RESTful APIs, database architecture, 
                      and authentication systems with Laravel and PHP.
                    </p>
                  </div>
                </motion.div>

                <motion.div className="col-lg-4" variants={fadeUp}>
                  <div className="card-hover h-100 p-4 rounded-3" style={{ background: "white" }}>
                    <div className="mb-3">
                      <div className="social-icon mb-3" style={{ background: "#fef3c7" }}>
                        <Zap size={24} style={{ color: "#d97706" }} />
                      </div>
                      <h5 className="fw-bold" style={{ color: "#1f2937" }}>Performance & Tools</h5>
                    </div>
                    <p className="text-muted small">
                      Implementing optimization strategies, testing frameworks, 
                      and deployment processes for reliable and efficient development.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <div className="section-badge">
                <Cpu size={16} /> Technical Skills
              </div>
              <h2 className="fw-bold" style={{ color: "#1f2937" }}>Technologies I Work With</h2>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div className="row g-4">
                  {SKILLS.map((skill, idx) => (
                    <motion.div 
                      key={skill.name} 
                      className="col-md-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="card-hover p-4 rounded-3" style={{ background: "white" }}>
                        <div className="d-flex align-items-center mb-3">
                          <div className="me-3" style={{ color: "#6366f1" }}>
                            {skill.icon}
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <h6 className="mb-0 fw-bold" style={{ color: "#1f2937" }}>{skill.name}</h6>
                              <span className="small text-muted">{skill.level}%</span>
                            </div>
                            <div className="skill-progress">
                              <motion.div
                                className="skill-progress-fill"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card-hover p-4 rounded-3 h-100" style={{ background: "white" }}>
                  <div className="mb-4">
                    <Award size={24} className="mb-3" style={{ color: "#6366f1" }} />
                    <h5 className="fw-bold" style={{ color: "#1f2937" }}>Technical Expertise</h5>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-start">
                      <CheckCircle size={16} className="me-2 mt-1 flex-shrink-0" style={{ color: "#16a34a" }} />
                      <span className="small text-muted">Database design and optimization</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <CheckCircle size={16} className="me-2 mt-1 flex-shrink-0" style={{ color: "#16a34a" }} />
                      <span className="small text-muted">Performance optimization and security</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4">
                    <a className="btn-primary-custom me-2" href="#projects">
                      <ArrowRight size={16} /> View Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-5" style={{ background: "white" }}>
          <div className="container">
            <div className="text-center mb-5">
              <div className="section-badge">
                <Clock size={16} /> Experience
              </div>
              <h2 className="fw-bold" style={{ color: "#1f2937" }}>Professional Journey</h2>
            </div>
            
            <div className="row">
              <div className="col-lg-10 mx-auto">
                {EXPERIENCE.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    className="position-relative mb-5"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-dot"></div>
                    {idx !== EXPERIENCE.length - 1 && <div className="timeline-line"></div>}
                    
                    <div className="experience-card">
                      <div className="d-flex align-items-start mb-3">
                        <div className="social-icon me-3" style={{ background: "#f0f9ff" }}>
                          {exp.icon}
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fw-bold mb-1" style={{ color: "#1f2937" }}>{exp.role}</h5>
                          <div className="d-flex flex-wrap align-items-center text-muted small mb-2">
                            <span className="me-3">{exp.company}</span>
                            <div className="d-flex align-items-center">
                              <Calendar size={14} className="me-1" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted mb-3">{exp.description}</p>
                      
                      <div className="d-flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <span key={i} className="tag-badge">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <div className="section-badge">
                <Code size={16} /> Portfolio
              </div>
              <h2 className="fw-bold" style={{ color: "#1f2937" }}>Featured Projects</h2>
              <p className="text-muted">Here are some of my recent works that showcase my skills</p>
            </div>

            <motion.div 
              className="row g-4"
              initial="hidden"
              whileInView="show"
              variants={container}
              viewport={{ once: true }}
            >
              {PROJECTS.map((project, i) => (
                <motion.div key={project.title} className="col-lg-6" variants={fadeUp}>
                  <div className="card-hover project-card h-100 rounded-3 overflow-hidden" style={{ background: "white" }}>
                    <div className="overflow-hidden">
                      <img src={project.img} alt={project.title} className="project-image w-100" />
                    </div>
                    
                    <div className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <h5 className="fw-bold mb-0" style={{ color: "#1f2937" }}>{project.title}</h5>
                        <span className={`badge rounded-pill ${project.status === "Complete" ? "bg-success" : "bg-warning text-dark"}`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-muted small mb-3">{project.desc}</p>
                      
                      <div className="d-flex justify-content-between align-items-center mb-3 small text-muted">
                        <div className="d-flex align-items-center">
                          <Users size={14} className="me-1" />
                          {project.stats.users}
                        </div>
                        <div className="d-flex align-items-center">
                          <TrendingUp size={14} className="me-1" />
                          {project.stats.uptime}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag-badge me-1 mb-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="d-flex gap-2">
                        <motion.a 
                          whileHover={{ scale: 1.02 }}
                          className="btn-primary-custom flex-grow-1 justify-content-center" 
                          href={project.link}
                        >
                          <ExternalLink size={16} /> Live Demo
                        </motion.a>
                        <motion.a 
                          whileHover={{ scale: 1.02 }}
                          className="btn-secondary-custom" 
                          href="#"
                        >
                          <Github size={16} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5" style={{ background: "white" }}>
          <div className="container">
            <div className="text-center mb-5">
              <div className="section-badge">
                <Mail size={16} /> Contact
              </div>
              <h2 className="fw-bold" style={{ color: "#1f2937" }}>Let's Work Together</h2>
              <p className="text-muted">Ready to start your project? Let's discuss how we can bring your ideas to life.</p>
            </div>

            <div className="row g-5">
              <div className="col-lg-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="h-100 d-flex flex-column justify-content-center">
                    <h4 className="fw-bold mb-4 text-center" style={{ color: "#1f2937" }}>Get in Touch</h4>
                    <p className="text-muted mb-4">
                      I'm always interested in hearing about new projects and opportunities. 
                      Whether you're a startup looking to build your MVP or an established company 
                      needing to enhance your web presence, let's discuss how we can work together.
                    </p>
                    
                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="social-icon me-3" style={{ background: "#f0f9ff" }}>
                          <Mail size={18} style={{ color: "#0284c7" }} />
                        </div>
                        <div>
                          <div className="fw-semibold" style={{ color: "#1f2937" }}>Email</div>
                          <div className="small text-muted">chummycursive79@gmail.com</div>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <div className="social-icon me-3" style={{ background: "#f0fdf4" }}>
                          <MapPin size={18} style={{ color: "#16a34a" }} />
                        </div>
                        <div>
                          <div className="fw-semibold" style={{ color: "#1f2937" }}>Location</div>
                          <div className="small text-muted">Cameroon (Remote Available)</div>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <div className="social-icon me-3" style={{ background: "#fef3c7" }}>
                          <Clock size={18} style={{ color: "#d97706" }} />
                        </div>
                        <div>
                          <div className="fw-semibold" style={{ color: "#1f2937" }}>Response Time</div>
                          <div className="small text-muted">Usually within 24 hours</div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <motion.a 
                        whileHover={{ scale: 1.1 }} 
                        className="social-icon" 
                        href="https://github.com/" 
                        target="_blank"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }} 
                        className="social-icon" 
                        href="https://linkedin.com/" 
                        target="_blank"
                      >
                        <Linkedin size={20} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }} 
                        className="social-icon" 
                        href="mailto:chummycursive79@gmail.com"
                      >
                        <Mail size={20} />
                      </motion.a>
                    </div>
                   
                  </div>
                   <div className="text-center"><a className="btn btn-primary" href="mailto:chummycursive79@gmail.com">Email me</a></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-5" style={{ background: "#f8fafc", borderTop: "1px solid #e5e7eb" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3 mb-md-0">
                  <Code2 size={24} className="me-2" style={{ color: "#6366f1" }} />
                  <span className="fw-bold" style={{ color: "#1f2937" }}>Mukete Roland</span>
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="small text-muted d-flex align-items-center justify-content-md-end">
                  <span>© {new Date().getFullYear()} Built with</span>
                  <Heart size={14} className="mx-1" style={{ color: "#ef4444" }} />
                  <span>using Next.js & Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
                  