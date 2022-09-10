import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";

function GoogleMap() {
  return (
    <section id="google-map" style={{ lineHeight: 0 }}>
      <AttentionSeeker triggerOnce effect="pulse">
        <iframe
          src="https://maps.google.com/maps?q=Aliagha%20Vahid&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </AttentionSeeker>
    </section>
  );
}

export default GoogleMap;
