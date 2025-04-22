// import React from 'react';
// import './AboutUs.css'; // Optional: for styling

import Footer from "./Footer";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2>About Lupin's Crest Luxury Real Estate</h2>
        <p className="tagline"><b><u>Where Sophistication Meets Sanctuary</u></b></p>
        
        <img src="images/logo.png" alt="" className="logo d-block w-100" height="500px"/><br />
        
        <p>
          At <strong>Lupin's Crest Luxury Real Estate</strong>, we believe your home should be a statement of elegance, comfort, and legacy. 
          Nestled at the intersection of prestige and exclusivity, our firm specializes in curating extraordinary living experiences 
          for discerning clientele.
        </p>

        <p>
          From waterfront estates to sky-high penthouses, every property in our portfolio is handpicked for its architectural brilliance, 
          unique charm, and investment value. Our team of seasoned real estate professionals offers white-glove service, guiding you 
          through every step of your luxury home journey.
        </p>

        <p>
          More than just agents — we are storytellers of spaces, visionaries of lifestyle, and custodians of refined taste.
        </p>

        <p>At Lupin's Crest Luxury Real Estate, we believe that a home is more than just a building; it's a sanctuary, a reflection of your success, and a place where memories are made. With our deep understanding of the luxury real estate market in Nairobi, combined with our extensive network and meticulous attention to detail, we are dedicated to finding you the perfect property that aligns with your unique lifestyle and aspirations.</p>
        
        <p>
            Our core values are built on trust, integrity, and discretion. We understand the importance of confidentiality and strive to provide a service that is both professional and highly personalized. Whether you are looking to buy, sell, or invest in luxury real estate, our experienced team of agents is committed to exceeding your expectations.
          </p>

        <p className="mission-quote">
          <em>“Luxury isn’t just a price point — it’s a promise. - Assane Lupin”</em>
        </p>
        <p>You can contact us via Gmail: <a href="https://gmail.com">ryanj5245@gmail.com</a> </p>
        <Footer/>
      </div>
    </section>
  );
};

export default AboutUs;
