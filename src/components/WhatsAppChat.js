import React, { useState, useEffect } from "react";
import "./WhatsAppChat.css";
import whatsappIcon from "../assets/icons8.gif";
import pop from "../assets/popup.jpg";

function WhatsAppChat() {
  const [showChat, setShowChat] = useState(false);
  const [showBubble2, setShowBubble2] = useState(false);

  useEffect(() => {
    // Auto-open after 3 seconds
    const openTimer = setTimeout(() => setShowChat(true), 3000);
    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (showChat) {
      setShowBubble2(false);
      const typingTimer = setTimeout(() => setShowBubble2(true), 2000);
      return () => clearTimeout(typingTimer);
    }
  }, [showChat]);

  return (
    <div className="whatsapp-container">
      {showChat && (
        <div className="whatsapp-box">
          {/* Header */}
          <div className="whatsapp-header">
            <img src={ pop } alt="Dr. Shankar" className="wa-avatar" />
            <div className="wa-online-dot" />
            <div className="wa-info">
              <h4>Dr. Shankar</h4>
              <span className="online">● Online</span>
            </div>
            <span className="close-btn" onClick={() => setShowChat(false)}>✕</span>
          </div>

          {/* Chat body */}
          <div className="whatsapp-body">
            <div className="wa-time"><span>1:08</span></div>
            <div className="bubble">Hi there 👋</div>
            {!showBubble2 ? (
              <div className="typing">
                <span /><span /><span />
              </div>
            ) : (
              <div className="bubble">How can I help you?</div>
            )}
          </div>

          {/* CTA */}
          <div className="whatsapp-footer">
            
            <a
              href="https://wa.me/919345243443?text=Hi%20I%20need%20physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.083.534 4.04 1.472 5.745L0 24l6.427-1.447A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.01-1.371l-.36-.213-3.818.86.875-3.727-.234-.381A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button className="whatsapp-float" onClick={() => setShowChat(!showChat)}>
        <img src={whatsappIcon} alt="whatsapp" />
        {!showChat && <div className="notif-dot" />}
      </button>
    </div>
  );
}

export default WhatsAppChat;