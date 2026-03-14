import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './VideoSection.css';

const VideoSection = () => {
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

  return (
    <motion.section 
      className="video-showcase-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <motion.div 
              className="video-content text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="section-badge mb-4" variants={itemVariants}>
                <span className="badge-pill">
                  <span className="badge-dot"></span>
                  Featured Video
                </span>
              </motion.div>

              <motion.h2 className="section-title mb-3" variants={itemVariants}>
                See <span className="highlight">Inciem</span> in Action
              </motion.h2>

              <motion.p className="section-description mb-5" variants={itemVariants}>
                Watch how our AI-powered solutions transform businesses across industries
              </motion.p>

              {/* Extra Large Orange Container with Text and Video */}
              <motion.div 
                className="orange-container-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Left Side - Text Content */}
                <div className="orange-content-left">
                  <div className="content-wrapper">
                    <span className="feature-tag">✨ FEATURED DEMO</span>
                    
                    <h3 className="orange-title">
                      AI-Powered Digital Transformation
                    </h3>
                    
                    <p className="orange-description">
                      Experience how Inciem's intelligent solutions automate workflows, 
                      enhance decision-making, and drive measurable business growth 
                      across industries.
                    </p>
                    
                    <div className="feature-list">
                      <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>85% Efficiency Gain</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>24/7 AI Support</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>10x Faster Insights</span>
                      </div>
                    </div>
                    
                    <motion.button 
                      className="learn-more-btn"
                      whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#E67E22' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More About AI Solutions
                      <i className="bi bi-arrow-right ms-2"></i>
                    </motion.button>
                  </div>
                </div>

                {/* Right Side - Video Container */}
                <div className="orange-content-right">
                  <div className="video-container">
                    <div className="white-video-box-small">
                      <div className="video-player">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/your-video-id"
                          title="Inciem AI Solutions Demo"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="video-iframe"
                        ></iframe>
                      </div>

                      <motion.div 
                        className="play-button-overlay"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="play-button">
                          <i className="bi bi-play-fill"></i>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Video Stats Below */}
                    <div className="video-mini-stats">
                      <div className="mini-stat">
                        <span className="mini-stat-value">2:45</span>
                        <span className="mini-stat-label">Duration</span>
                      </div>
                      <div className="mini-stat">
                        <span className="mini-stat-value">HD</span>
                        <span className="mini-stat-label">Quality</span>
                      </div>
                      <div className="mini-stat">
                        <span className="mini-stat-value">4K</span>
                        <span className="mini-stat-label">Available</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="orange-glow-xl"></div>
                <div className="orange-ring-xl ring-1"></div>
                <div className="orange-ring-xl ring-2"></div>
                <div className="orange-ring-xl ring-3"></div>
                
                {/* Floating Decorative Dots */}
                <div className="decorative-dot-xl dot-1"></div>
                <div className="decorative-dot-xl dot-2"></div>
                <div className="decorative-dot-xl dot-3"></div>
                <div className="decorative-dot-xl dot-4"></div>
                <div className="decorative-dot-xl dot-5"></div>
                <div className="decorative-dot-xl dot-6"></div>
              </motion.div>

              {/* Bottom Stats */}
              <motion.div className="video-stats mt-5" variants={itemVariants}>
                <Row className="g-4 justify-content-center">
                  <Col xs={6} md={3}>
                    <div className="stat-item-mini">
                      <h3 className="stat-number">500+</h3>
                      <p className="stat-label">Successful Deployments</p>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="stat-item-mini">
                      <h3 className="stat-number">50+</h3>
                      <p className="stat-label">Industry Solutions</p>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="stat-item-mini">
                      <h3 className="stat-number">24/7</h3>
                      <p className="stat-label">Expert Support</p>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="stat-item-mini">
                      <h3 className="stat-number">100%</h3>
                      <p className="stat-label">Client Satisfaction</p>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Background Decoration */}
      <div className="video-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>
    </motion.section>
  );
};

export default VideoSection;