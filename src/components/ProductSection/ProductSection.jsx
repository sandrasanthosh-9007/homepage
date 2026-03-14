import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductSection.css';

const ProductSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const sliderRef = useRef(null);


  const products = [
    {
      id: 1,
      name: 'Connektplus',
      category: 'Digital Networking',
      description: 'A digital platform for individuals and businesses to showcase profiles and modernize networking.',
      color: '#F39C12',
      icon: '📇',
      image: '/images/products/connektplus.png'
    },
    {
      id: 2,
      name: 'MotoSells',
      category: 'Vehicle Dealership Management',
      description: 'A dedicated mobile app for vehicle dealers to register shops, add vehicles, and manage stock on the go.',
      color: '#E67E22',
      icon: '🚗',
      image: '/images/products/motosells.png'
    },
    {
      id: 3,
      name: 'Clevebiz',
      category: 'All-in-One Business Suite',
      description: 'An all-in-one CRM, HR, and project management tool to run your entire operations from start to finish.',
      color: '#D35400',
      icon: '💼',
      image: '/images/products/clevebiz.png'
    },
    {
      id: 4,
      name: 'DocMind360',
      category: 'AI Document Assistant',
      description: 'An enterprise-grade, AI-powered knowledge and document intelligence platform for your entire organization.',
      color: '#F5B041',
      icon: '📄',
      image: '/images/products/docmind360.png'
    },
    {
      id: 5,
      name: 'E-Commerce Platform',
      category: 'Enterprise Retail',
      description: 'An advanced, enterprise-grade e-commerce platform built for supermarkets, hypermarkets, and multi-branch retail networks.',
      color: '#EB984E',
      icon: '🛒',
      image: '/images/products/ecommerce.png'
    },
    {
      id: 6,
      name: 'Dineeas',
      category: 'Restaurant Digital Ordering',
      description: 'A QR-based web application that allows dine-in customers to view digital menus and place orders from their smartphone.',
      color: '#E67E22',
      icon: '🍽️',
      image: '/images/products/dineeas.png'
    },
    {
      id: 7,
      name: 'Salon Management',
      category: 'Beauty & Wellness',
      description: 'A centralized digital booking platform for streamlined appointment scheduling and salon operations.',
      color: '#F39C12',
      icon: '💇',
      image: '/images/products/salon.png'
    },
    {
      id: 8,
      name: 'Asset Tracker',
      category: 'Asset Management',
      description: 'A centralized SaaS platform for organizations to easily track, manage, and monitor all physical and digital assets.',
      color: '#D35400',
      icon: '📦',
      image: '/images/products/asset-tracker.png'
    },
    {
      id: 9,
      name: 'Rentigo',
      category: 'Rental Management',
      description: 'A comprehensive platform for managing rental properties, bookings, and payments.',
      color: '#F5B041',
      icon: '🏠',
      image: '/images/products/rentigo.png'
    },
    {
      id: 10,
      name: 'FoodieSpot',
      category: 'Food Delivery',
      description: 'A multi-platform food ordering system for restaurants and food businesses.',
      color: '#EB984E',
      icon: '🍔',
      image: '/images/products/foodiespot.png'
    },
    {
      id: 11,
      name: 'ATS (Applicant Tracking System)',
      category: 'Recruitment',
      description: 'An AI-powered recruitment platform that automatically screens and verifies candidate resumes against job requirements.',
      color: '#E67E22',
      icon: '👥',
      image: '/images/products/ats.png'
    },
    {
      id: 12,
      name: 'LMS (Learning Management System)',
      category: 'Education',
      description: 'A comprehensive, web-based digital learning platform with centralized access to a wide library of online courses.',
      color: '#F39C12',
      icon: '📚',
      image: '/images/products/lms.png'
    },
    {
      id: 13,
      name: 'Qylia',
      category: 'Multi-Modal AI Chatbot',
      description: 'A smart, multi-modal AI chatbot platform that revolutionizes customer engagement using advanced Natural Language Processing.',
      color: '#D35400',
      icon: '🤖',
      image: '/images/products/qylia.png'
    },
    {
      id: 14,
      name: 'WhatsApp Bot',
      category: 'Conversational AI',
      description: 'A powerful conversational assistant that connects to WhatsApp, handling inquiries, automating workflows, and broadcasting updates.',
      color: '#F5B041',
      icon: '💬',
      image: '/images/products/whatsapp-bot.png'
    }
  ];

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [products.length]);

  // Handle image error
  const handleImageError = (productId) => {
    setImageErrors(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  // Slider navigation functions
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Get current product
  const currentProduct = products[currentIndex];
  const hasImageError = imageErrors[currentProduct.id];

  // Render image or placeholder
  const renderProductImage = () => {
    if (hasImageError) {
      return (
        <div className="product-image-placeholder">
          <div className="placeholder-icon-large">
            {currentProduct.icon}
          </div>
        </div>
      );
    } else {
      return (
        <img 
          src={currentProduct.image}
          alt={currentProduct.name}
          className="product-display-image"
          onError={() => handleImageError(currentProduct.id)}
          loading="lazy"
        />
      );
    }
  };

  return (
    <motion.section 
      className="products-showcase-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <motion.div 
          className="section-header text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="section-badge mb-4" variants={itemVariants}>
            <span className="badge-pill">
              <span className="badge-dot"></span>
              Our Products
            </span>
          </motion.div>

          <motion.h2 className="section-title mb-3" variants={itemVariants}>
            Innovative <span className="highlight">Solutions</span> for Every Business Need
          </motion.h2>

          <motion.p className="section-description mb-5" variants={itemVariants}>
            Discover our comprehensive suite of 14 cutting-edge products designed to transform your business operations
          </motion.p>
        </motion.div>

        {/* Main Slider Container */}
        <div className="product-slider-container" ref={sliderRef}>
          <motion.div 
            className="slider-wrapper"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Navigation Buttons */}
            <motion.button 
              className="slider-nav-btn prev" 
              onClick={prevSlide}
              whileHover={{ scale: 1.1, backgroundColor: '#E67E22', color: '#ffffff' }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
              aria-label="Previous product"
            >
              <i className="bi bi-chevron-left"></i>
            </motion.button>
            
            <motion.button 
              className="slider-nav-btn next" 
              onClick={nextSlide}
              whileHover={{ scale: 1.1, backgroundColor: '#E67E22', color: '#ffffff' }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
              aria-label="Next product"
            >
              <i className="bi bi-chevron-right"></i>
            </motion.button>

            {/* Slider Content */}
            <div className="slider-content-area">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="slide-item-wrapper"
                >
                  {/* ===== FULL ORANGE BACKGROUND CONTAINER ===== */}
                  <div className="orange-full-container">
                    
                    {/* White Square Container for Product Display */}
                    <div className="white-product-square">
                      <div className="product-square-content">
                        
                        {/* Product Image or Placeholder */}
                        <div className="product-square-image-wrapper">
                          {renderProductImage()}
                        </div>
                        
                        {/* Product Info Overlay (Optional - can be removed if you want only image) */}
                        <div className="product-square-info">
                          <span className="product-square-category" style={{ color: currentProduct.color }}>
                            {currentProduct.category}
                          </span>
                          <h3 className="product-square-name">
                            {currentProduct.name}
                          </h3>
                        </div>
                        
                        {/* Version Badge */}
                        <div className="product-square-badge">
                          <span>v2.0</span>
                        </div>
                        
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="orange-glow"></div>
                    <div className="orange-ring ring-1"></div>
                    <div className="orange-ring ring-2"></div>
                    
                    {/* Floating Decorative Dots */}
                    <div className="decorative-dot dot-1"></div>
                    <div className="decorative-dot dot-2"></div>
                    <div className="decorative-dot dot-3"></div>
                    <div className="decorative-dot dot-4"></div>
                    
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Navigation */}
            <div className="slider-dots-container">
              {products.map((_, index) => (
                <motion.button
                  key={index}
                  className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    background: index === currentIndex ? currentProduct.color : '#e0e0e0'
                  }}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <motion.div 
          className="slider-progress-showcase"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="progress-bar-showcase">
            <motion.div 
              className="progress-fill-showcase"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentIndex + 1) / products.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              style={{ background: `linear-gradient(90deg, ${currentProduct.color}, #F39C12)` }}
            ></motion.div>
          </div>
          <span className="progress-text-showcase">
            {currentIndex + 1} / {products.length}
          </span>
        </motion.div>
      </Container>

      {/* Background Decoration */}
      <div className="products-background-showcase">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>
    </motion.section>
  );
};

export default ProductSection;