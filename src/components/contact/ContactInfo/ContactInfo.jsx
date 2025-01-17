import React from "react";
import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>İletişim Bilgileri</h2>

      <div className="info-group">
        <h3>Adres</h3>
        <p>[Şirket Adresi]</p>
      </div>

      <div className="info-group">
        <h3>Telefon</h3>
        <p>
          <a href="tel:+905442275625">+90 544 227 56 25</a>
        </p>
      </div>

      <div className="info-group">
        <h3>E-posta</h3>
        <p>
          <a href="mailto:destek@yapimalzemeleri.com">
            destek@yapimalzemeleri.com
          </a>
        </p>
      </div>

      <div className="info-group">
        <h3>Çalışma Saatleri</h3>
        <p>Pazartesi - Cumartesi: 08:00 - 18:00</p>
        <p>Pazar: Kapalı</p>
      </div>
    </div>
  );
};

export default ContactInfo;
