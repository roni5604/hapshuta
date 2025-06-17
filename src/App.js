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

const SocialButton = ({ href, ariaLabel, className, icon }) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id={`tooltip-${ariaLabel}`}>{ariaLabel}</Tooltip>}
  >
    <Button
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`social-btn ${className}`}
    >
      {icon}
    </Button>
  </OverlayTrigger>
);

export default function App() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="app-container">
      {/* סקשן הגיבור (תמונה + אינסטגרם) */}
      <section className="hero-section text-center">
        <h1 className="main-title">הפשוטע | תרגעו</h1>
        <img
          src={headerImg}
          alt="תרגעו"
          className="main-image mb-4"
        />
        <div className="links-container">
          <SocialButton
            href="https://www.instagram.com/hapshutaofficial"
            ariaLabel="עקבו באינסטגרם"
            className="btn-instagram"
            icon={<FaInstagram size={28} />}
          />
        </div>
      </section>

      {/* קו מפריד צבעוני */}
      <div className="section-separator" />

      {/* סקשן הפודקאסט */}
      <section className="podcast-section text-center">
        <h2 className="sub-title mb-4">האזינו לפודקאסט</h2>
        <Row className="justify-content-center mb-4">
          <Col xs={6} sm={4} md={3} className="mb-3">
            <SocialButton
              href="https://open.spotify.com/show/0UADbFpEznunwcf5yOxEe8"
              ariaLabel="האזינו בספוטיפיי"
              className="btn-spotify"
              icon={<FaSpotify size={28} />}
            />
          </Col>
          <Col xs={6} sm={4} md={3} className="mb-3">
            <SocialButton
              href="https://podcasts.apple.com/il/podcast/תרגעו/id1639779705"
              ariaLabel="האזינו באפל מיוזיק"
              className="btn-apple"
              icon={<FaApple size={28} />}
            />
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

      {/* Footer */}
      <footer className="footer-section text-center">
        © {year} בר הפשוטע ולשיר הדס מאיר. כל הזכויות שמורות.
      </footer>
    </Container>
  );
}
