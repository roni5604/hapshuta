// src/App.js

import React from 'react';
import { Container, Row, Col, Ratio, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaInstagram, FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import './App.css';

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
    <Container className="app-container">
      {/* כותרת ראשית */}
      <h1 className="main-title">הפשוטע | תרגעו</h1>

      {/* תמונה ראשית עם אפקט */}
      <img
        src="/header.jpg"
        alt="תרגעו"
        className="main-image"
      />

      {/* כפתור אינסטגרם נפרד */}
      <div className="links-container">
        <SocialButton
          href="https://www.instagram.com/hapshutaofficial"
          ariaLabel="עקבו באינסטגרם"
          className="btn-instagram"
          icon={<FaInstagram size={28} />}
        />
      </div>

      {/* כותרת מעל כפתורי Spotify ו-Apple */}
      <h2 className="sub-title">האזינו לפודקאסט</h2>

      {/* כפתורי פלטפורמות האזנה */}
      <Row className="justify-content-center">
        <Col xs="auto">
          <SocialButton
            href="https://open.spotify.com/show/0UADbFpEznunwcf5yOxEe8"
            ariaLabel="האזינו בספוטיפיי"
            className="btn-spotify"
            icon={<FaSpotify size={28} />}
          />
        </Col>
        <Col xs="auto">
          <SocialButton
            href="https://podcasts.apple.com/il/podcast/תרגעו/id1639779705"
            ariaLabel="האזינו באפל מיוזיק"
            className="btn-apple"
            icon={<FaApple size={28} />}
          />
        </Col>
      </Row>

      {/* פלייליסט יוטיוב משובץ */}
      <div className="youtube-container">
        <Ratio aspectRatio="16x9">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLZPgleW4baxp-f1vP4hjsUoYn-tQLU7e3"
            title="תרגעו Podcast Playlist"
            allowFullScreen
          />
        </Ratio>
      </div>

      {/* Footer */}
      <footer className="footer-section">
        © {year} בר הפשוטע ולשיר הדס מאיר. כל הזכויות שמורות.
      </footer>
    </Container>
  );
}
