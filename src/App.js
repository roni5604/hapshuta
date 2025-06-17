// src/App.js

import React from 'react';
import {
  Container,
  Row,
  Col,
  Ratio,
  Button,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import {
  FaInstagram,
  FaSpotify,
  FaApple
} from 'react-icons/fa';
import './App.css';
import headerImg from './header.jpg';
import ticketImg from './livePodcastImage.jpg';

const SocialButton = ({ href, ariaLabel, className, icon, children }) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id={ariaLabel}>{ariaLabel}</Tooltip>}
  >
    <Button
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-btn ${className}`}
      aria-label={ariaLabel}
    >
      {icon}
      {children && <span className="btn-text">{children}</span>}
    </Button>
  </OverlayTrigger>
);

export default function App() {
  const year = new Date().getFullYear();

  // נתוני האירוע
  const events = [
    {
      id: 1,
      title: 'כרטיסים לפודקאסט לייב',
      location: 'בית החייל, תל אביב',
      date: '06/07/2025',
      time: '20:30',
      img: ticketImg,
      link:
        'https://www.goshow.co.il/show/19498/50397?fbclid=PAQ0xDSwK-Me1leHRuA2FlbQIxMQABp7ftOADCtJxGWpsXJo2SuyXIzafdIfUUcwThh0YRfHfa9GMYcGzuJBjpAd1B_aem_XOUFX_F21dGR19qDavE0Tw'
    }
  ];

  return (
    <Container fluid className="app-container">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1 className="main-title">הפשוטע | תרגעו</h1>
        <img src={headerImg} alt="תרגעו" className="main-image mb-4" />
        <div className="links-container">
          <SocialButton
            href="https://www.instagram.com/hapshutaofficial"
            ariaLabel="עקבו באינסטגרם"
            className="btn-instagram"
            icon={<FaInstagram size={28} />}
          />
        </div>
      </section>

      <div className="section-separator" />

      {/* Podcast Section */}
      <section className="podcast-section text-center">
        <h2 className="sub-title mb-4">האזינו לפודקאסט</h2>
        <Row className="justify-content-center mb-4">
          <Col xs={12} sm={6} md={3} className="mb-3">
            <SocialButton
              href="https://open.spotify.com/show/0UADbFpEznunwcf5yOxEe8"
              ariaLabel="האזינו בספוטיפיי"
              className="btn-spotify"
              icon={<FaSpotify size={28} />}
            >
              ספוטיפיי
            </SocialButton>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3">
            <SocialButton
              href="https://podcasts.apple.com/il/podcast/תרגעו/id1639779705"
              ariaLabel="האזינו באפל מיוזיק"
              className="btn-apple"
              icon={<FaApple size={28} />}
            >
              Apple Podcasts
            </SocialButton>
          </Col>
        </Row>
        <div className="youtube-container mb-4">
          <Ratio aspectRatio="16x9">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLZPgleW4baxp-f1vP4hjsUoYn-tQLU7e3"
              title="תרגעו Podcast Playlist"
              allowFullScreen
            />
          </Ratio>
        </div>
      </section>

      {/* Live Event Section */}
      <section className="live-section">
        <h2 className="live-title text-center">כרטיסים לפודקאסט לייב</h2>
        <div className="live-panel">
          {/* 1. Location */}
          <div className="live-info-item">
            <div className="event-place"><strong>בית החייל</strong></div>
            <div className="event-city"><small>תל אביב</small></div>
          </div>

          {/* 2. Date & Time */}
          <div className="live-info-item">
            <div className="event-date"><strong>06/07/2025</strong></div>
            <div className="event-time"><small>20:30</small></div>
          </div>

          {/* 3. Image */}
          <img src={ticketImg} alt="Live Podcast" className="live-img" />

          {/* 4. Buy button */}
          <Button
            as="a"
            href={events[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-btn"
          >
            קנה כרטיסים
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section text-center">
        © {year} בר הפשוטע ולשיר הדס מאיר. כל הזכויות שמורות.
      </footer>
    </Container>
  );
}
