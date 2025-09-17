import React from 'react';
import './branch-section.css';

export default function BranchesSection() {
  const branches = [
    {
      name: "Ghaziabad Branch",
      address: "Shop No. 5, N-26, Ambedkar Road, Ram Nagar, Nehru Nagar III, Ghaziabad – 201001",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.234567!2d77.4126!3d28.6692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzA5LjEiTiA3N8KwMjQnNDUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
      name: "Greater Noida Branch", 
      address: "Shop No. 112, 1st Floor, Mahagun Mart, Sec. 16C, Gaur City 2, Greater Noida",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.234567!2d77.5126!3d28.5692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzA5LjEiTiA3N8KwMzAnNDUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
      name: "Gurgaon Branch",
      address: "LHS Sector 54 Chowk, Near Rapid Metro Station, Gurgaon – 122011",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.234567!2d77.1126!3d28.4692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzA5LjEiTiA3N8KwMDYnNDUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
    }
  ];

  return (
    <section className="branches-section">
      <div className="branches-container">
        {/* Left Content */}
        <div className="branches-left">
          <h2 className="branches-title">
            Our Branches<br />
            — Find Us<br />
            Across Delhi<br />
            NCR
          </h2>
          
          <p className="branches-description">
            We are strategically located across major 
            regions to make it easy for you to walk in and 
            sell your valuables:
          </p>
          
          <button className="see-more-btn">See More</button>
        </div>

        {/* Right Content - Branches Grid */}
        <div className="branches-grid">
          {branches.map((branch, index) => (
            <div key={index} className="branch-card">
              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-mockup">
                    <div className="map-pin">📍</div>
                    <div className="map-roads">
                      <div className="road road-1"></div>
                      <div className="road road-2"></div>
                      <div className="road road-3"></div>
                    </div>
                    <div className="map-labels">
                      <span className="location-label">{branch.name.split(' ')[0]}</span>
                    </div>
                  </div>
                  <div className="view-larger-map">
                    <span>🔗 View larger map</span>
                  </div>
                  <div className="google-logo">
                    <span>Google</span>
                  </div>
                  <div className="map-controls">
                    <span>Map Data | Terms | Report a map error</span>
                  </div>
                </div>
              </div>
              
              <div className="branch-info">
                <h3 className="branch-name">{branch.name}</h3>
                <p className="branch-address">{branch.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}