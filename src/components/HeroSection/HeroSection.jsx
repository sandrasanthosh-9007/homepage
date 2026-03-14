import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardVisibility, setCardVisibility] = useState([true, true, true, true, true]);
  const imageRef = useRef(null);
  const [circleSize, setCircleSize] = useState({ width: 0, height: 0 });

  const companyScenarios = [
    {
      id: 1,
      badge: "🚀 AI-Driven Transformation",
      title: "Accelerate Growth with",
      highlight: "Intelligent Automation",
      description: "Leverage our AI solutions to automate workflows, unlock insights from your data, and deliver personalized customer experiences that drive efficiency and innovation.",
      stats: [
        { value: "85%", label: "Efficiency Gain", icon: "lightning-charge" },
        { value: "24/7", label: "AI Support", icon: "robot" },
        { value: "10x", label: "Faster Insights", icon: "graph-up" },
      ],
      theme: "ai",
      image: "/images/hero/ai-automation.png"
    },
    {
      id: 2,
      badge: "📈 Data-Driven Marketing",
      title: "Dominate Your Market with",
      highlight: "Performance Marketing",
      description: "Our data-driven digital marketing strategies, from SEO and PPC to lead generation, are designed to attract high-quality customers and maximize your revenue.",
      stats: [
        { value: "300%", label: "ROI Increase", icon: "cash-stack" },
        { value: "50K+", label: "Leads Generated", icon: "person-badge" },
        { value: "24/7", label: "Campaign Tracking", icon: "bar-chart" },
      ],
      theme: "marketing",
      image: "/images/hero/performance-marketing.png"
    },
    {
      id: 3,
      badge: "⚙️ Streamlined Operations",
      title: "Optimize Your Business with",
      highlight: "Odoo ERP",
      description: "Implement and customize Odoo ERP to integrate sales, inventory, accounting, and HR into a single, seamless platform, eliminating silos and boosting productivity.",
      stats: [
        { value: "40%", label: "Operational Savings", icon: "piggy-bank" },
        { value: "99.9%", label: "Data Accuracy", icon: "check-circle" },
        { value: "50+", label: "Integrations", icon: "plug" },
      ],
      theme: "erp",
      image: "/images/hero/odoo-erp.png"
    },
    {
      id: 4,
      badge: "☁️ Seamless Data Migration",
      title: "Modernize Your Legacy with",
      highlight: "Secure Data Migration",
      description: "Ensure business continuity with our secure, zero-data-loss migration services. We handle database, cloud, and ERP data transfers with minimal downtime.",
      stats: [
        { value: "0", label: "Data Loss", icon: "shield-check" },
        { value: "100TB+", label: "Data Migrated", icon: "database" },
        { value: "<1hr", label: "Avg. Downtime", icon: "clock-history" },
      ],
      theme: "migration",
      image: "/images/hero/data-migration.png"
    },
    {
      id: 5,
      badge: "🛡️ Robust Infrastructure",
      title: "Secure Your Future with",
      highlight: "Cloud Infrastructure",
      description: "Build a high-performance, secure IT foundation with our server management, AWS/Azure expertise, and 24/7 monitoring to ensure uninterrupted business operations.",
      stats: [
        { value: "99.99%", label: "Uptime", icon: "cloud-check" },
        { value: "24/7", label: "Proactive Monitoring", icon: "eye" },
        { value: "60%", label: "Cost Reduction", icon: "graph-down" },
      ],
      theme: "infrastructure",
      image: "/images/hero/cloud-infrastructure.png"
    },
    {
      id: 6,
      badge: "🖥️ End-to-End IT Support",
      title: "Focus on Growth with",
      highlight: "Managed IT Services",
      description: "From IT consulting and cybersecurity to remote support, we provide comprehensive managed services that keep your technology running smoothly and securely.",
      stats: [
        { value: "<15m", label: "Response Time", icon: "stopwatch" },
        { value: "1000+", label: "Issues Resolved", icon: "wrench" },
        { value: "24/7", label: "Expert Support", icon: "headset" },
      ],
      theme: "support",
      image: "/images/hero/it-support.png"
    }
  ];

  useEffect(() => {
    // Rotate content every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companyScenarios.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [companyScenarios.length]);

  useEffect(() => {
    const visibilityInterval = setInterval(() => {
      setCardVisibility(prev => {
        const newState = [false, false, false, false, false];
        
        // Generate two different random indices (0-4)
        let firstIndex = Math.floor(Math.random() * 5);
        let secondIndex;
        
        // Make sure second index is different from first
        do {
          secondIndex = Math.floor(Math.random() * 5);
        } while (secondIndex === firstIndex);
        
        // Show two cards
        newState[firstIndex] = true;
        newState[secondIndex] = true;
        
        return newState;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(visibilityInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const contentVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const floatingCardVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (custom) => ({
      scale: 1,
      opacity: cardVisibility[custom] ? 1 : 0,
      y: [0, -10, 0],
      transition: {
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: custom * 0.3,
        },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: custom * 0.2,
        },
        opacity: {
          duration: 0.5
        }
      },
    }),
  };

  const currentScenario = companyScenarios[currentIndex];

  return (
    <motion.section
      className="hero-section full-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home"
    >
      <Container className="h-100">
        <motion.div
          className="h-100 d-flex align-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="align-items-center w-100 g-5">
            {/* Left Column - Image */}
            <Col
              xs={12}
              lg={6}
              className="hero-visual"
            >
              <motion.div
                className="position-relative w-100 h-100 d-flex justify-content-start align-items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Main Image Container */}
                <div className="hero-image-wrapper" ref={imageRef}>
                  <div 
                    className="hero-image-glow"
                    style={{ background: `radial-gradient(circle, #E67E22, transparent)` }}
                  ></div>
                  
                  {/* Main Image - Static (no animation) */}
                  <img
                    src="../src/assets/img.png"
                    alt="Hero Visual"
                    className="hero-image-static"
                  />
                </div>
              </motion.div>
            </Col>

            {/* Right Column - Content */}
            <Col
              xs={12}
              lg={6}
              className="hero-content text-center text-lg-start"
            >
              <AnimatePresence mode="wait" custom={currentIndex}>
                <motion.div
                  key={currentIndex}
                  custom={currentIndex}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 }
                  }}
                >
                  {/* Badge */}
                  <motion.div
                    className="hero-badge px-3 mb-4 d-flex justify-content-center justify-content-lg-start"
                    variants={itemVariants}
                  >
                    <motion.span
                      className="badge badge-custom px-3 py-2 rounded-pill"
                      style={{ backgroundColor: getThemeColor(currentScenario.theme, 0.1) }}
                      whileHover={{
                        boxShadow: `0 5px 15px ${getThemeColor(currentScenario.theme, 0.3)}`,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.i
                        className={`bi bi-${getBadgeIcon(currentScenario.theme)} me-2`}
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                      {currentScenario.badge}
                    </motion.span>
                  </motion.div>

                  {/* Main Heading */}
                  <motion.h1
                    className="hero-title display-1 fw-bold mb-4"
                    variants={itemVariants}
                  >
                    {currentScenario.title}{" "}
                    <motion.span
                      className="d-inline-block brand-highlight"
                      style={{ color: getThemeColor(currentScenario.theme) }}
                      whileHover={{
                        scale: 1.05,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.3 },
                      }}
                    >
                      {currentScenario.highlight}
                    </motion.span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    className="lead mb-5 hero-subtitle fs-5"
                    variants={itemVariants}
                  >
                    {currentScenario.description}
                  </motion.p>

                  {/* Dynamic Stats */}
                  <motion.div
                    className="hero-stats d-flex flex-wrap gap-3 gap-lg-4 justify-content-center justify-content-lg-start"
                    variants={itemVariants}
                  >
                    {currentScenario.stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="stat-item p-3 rounded-3"
                        whileHover={{
                          y: -5,
                          boxShadow: `0 10px 20px ${getThemeColor(currentScenario.theme, 0.15)}`,
                          borderColor: getThemeColor(currentScenario.theme),
                          transition: { duration: 0.2 },
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <motion.div
                          className="d-flex align-items-center gap-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          <motion.i
                            className={`bi bi-${stat.icon} fs-4 stat-icon`}
                            style={{ color: getThemeColor(currentScenario.theme) }}
                            animate={{
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          />
                          <div>
                            <h3 className="h2 fw-bold mb-0 stat-value" style={{ color: getThemeColor(currentScenario.theme) }}>
                              {stat.value}
                            </h3>
                            <p className="mb-0 stat-label">{stat.label}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Progress Indicator */}
                  <motion.div 
                    className="content-progress mt-4 d-flex justify-content-center justify-content-lg-start gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    {companyScenarios.map((_, index) => (
                      <motion.button
                        key={index}
                        className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
                        style={{
                          backgroundColor: index === currentIndex ? getThemeColor(currentScenario.theme) : '#e0e0e0'
                        }}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setCurrentIndex(index)}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </Col>
          </Row>
        </motion.div>
      </Container>

      {/* Background Decoration with dynamic color */}
      <motion.div
        className="hero-background"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="shape shape-1"
          style={{ background: `radial-gradient(circle, ${getThemeColor(currentScenario.theme, 0.3)}, ${getThemeColor(currentScenario.theme, 0.1)})` }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="shape shape-2"
          style={{ background: `radial-gradient(circle, ${getThemeColor(currentScenario.theme, 0.2)}, ${getThemeColor(currentScenario.theme, 0.05)})` }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </motion.section>
  );
};

// Helper function to get theme colors - ALL ORANGE VARIATIONS
const getThemeColor = (theme, opacity = 1) => {
  const colors = {
    ai: '#F39C12',        // Bright Orange
    marketing: '#E67E22',  // Carrot Orange
    erp: '#D35400',        // Pumpkin Orange
    migration: '#F5B041',  // Saffron Orange
    infrastructure: '#EB984E', // Soft Orange
    support: '#E67E22'      // Medium Orange
  };
  const color = colors[theme] || '#E67E22';
  if (opacity < 1) {
    return color + Math.round(opacity * 255).toString(16).padStart(2, '0');
  }
  return color;
};

// Helper function to get badge icons (using Bootstrap Icons)
const getBadgeIcon = (theme) => {
  const icons = {
    ai: 'cpu',
    marketing: 'graph-up',
    erp: 'grid-3x3-gap-fill',
    migration: 'arrow-left-right',
    infrastructure: 'hdd-stack',
    support: 'headset'
  };
  return icons[theme] || 'cpu';
};

export default HeroSection;