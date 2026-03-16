import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './ProductSection.css';

const ProductSection = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [duplicatedProducts, setDuplicatedProducts] = useState([]);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4);

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
      image: '/images/products/celevebiz.png'
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

  // Update itemsToShow based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 968) {
        setItemsToShow(2);
      } else if (window.innerWidth <= 1200) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Duplicate products for seamless infinite scroll
  useEffect(() => {
    const duplicated = [...products, ...products, ...products, ...products];
    setDuplicatedProducts(duplicated);
  }, []);

  // Handle image error
  const handleImageError = (productId) => {
    setImageErrors(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  // Smooth scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || duplicatedProducts.length === 0) return;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        const maxScroll = (products.length * (scrollContainer.firstChild?.firstChild?.offsetWidth || 300) + 
                          (products.length - 1) * 25) * 2;
        
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, scrollSpeed, products.length, duplicatedProducts.length]);

  // Handle mouse enter/pause
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Render image or placeholder (full upper portion)
  const renderProductImage = (product) => {
    if (imageErrors[product.id]) {
      return (
        <div className="product-image-placeholder-full">
          <span className="placeholder-icon">{product.icon}</span>
        </div>
      );
    } else {
      return (
        <img 
          src={product.image}
          alt={product.name}
          className="product-card-image-full"
          onError={() => handleImageError(product.id)}
          loading="lazy"
        />
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

        {/* Smooth Scrolling Carousel */}
        <div className="smooth-carousel-container">
          {/* Scrollable Track */}
          <div 
            className="carousel-track-container"
            ref={scrollRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`carousel-track grid-${itemsToShow}-cols`}>
              {duplicatedProducts.map((product, index) => (
                <motion.div
                  key={`${product.id}-${index}`}
                  className="product-card-full-image"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                >
                  <div className="product-card-inner-full">
                    {/* Card Header with Full Image */}
                    <div className="product-card-header-full">
                      {renderProductImage(product)}
                      
                      {/* Overlay gradient for better text readability if needed */}
                      <div className="card-header-overlay"></div>
                      
                      {/* Category badge positioned on image */}
                      <div className="product-category-badge" style={{ background: product.color }}>
                        {product.category}
                      </div>
                      
                      {/* Version badge */}
                      <div className="product-version-badge">v2.0</div>
                    </div>

                    {/* Card Body */}
                    <div className="product-card-body-full">
                      <h3 className="product-card-title-full">{product.name}</h3>
                      <p className="product-card-description-full">{product.description}</p>
                      
                      {/* Learn More Button */}
                      <motion.button 
                        className="product-card-btn-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ 
                          background: `linear-gradient(135deg, ${product.color}, ${product.color}dd)`,
                          color: '#ffffff'
                        }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays for Fade Effect */}
          <div className="carousel-fade-left"></div>
          <div className="carousel-fade-right"></div>
        </div>

        {/* Progress Indicator */}
        <div className="carousel-progress">
          <div className="progress-dots">
            {products.slice(0, 8).map((_, index) => (
              <span 
                key={index} 
                className="progress-dot"
                style={{
                  background: `linear-gradient(135deg, #F39C12, #E67E22)`
                }}
              ></span>
            ))}
          </div>
          <p className="progress-text">Continuously scrolling • {products.length}+ products</p>
        </div>
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