import './branch-section.css';

export default function BranchesSection() {
  const branches = [
    {
      name: "Delhi Branch",
      address: "1515 upper ground floor Wazir Nagar, South Extension, Kotla Mubarakpur, New Delhi, delhi, Delhi 110003",
      // mapSrc: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.1450399855466!2d77.22322037533313!3d28.569136475699427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35a1d470653%3A0x24fca5337846f7e8!2sbharat%20gold%20buyer%20%7C%20gold%20buyer%20in%20south%20extension%20delhi%20%7C%20provides%20cash%20for%20gold!5e1!3m2!1sen!2sin!4v1759190061035!5m2!1sen!2sin\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
      mapSrc: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.1450399855466!2d77.22322037533313!3d28.569136475699427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35a1d470653%3A0x24fca5337846f7e8!2sbharat%20gold%20buyer%20%7C%20gold%20buyer%20in%20south%20extension%20delhi%20%7C%20provides%20cash%20for%20gold!5e1!3m2!1sen!2sin!4v1759190061035!5m2!1sen!2sin" width="900" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    // {
    //   name: "Greater Noida Branch", 
    //   address: "Shop No. 112, 1st Floor, Mahagun Mart, Sec. 16C, Gaur City 2, Greater Noida",
    //   mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.234567!2d77.5126!3d28.5692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzA5LjEiTiA3N8KwMzAnNDUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
    // },
    // {
    //   name: "Gurgaon Branch",
    //   address: "LHS Sector 54 Chowk, Near Rapid Metro Station, Gurgaon – 122011",
    //   mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.234567!2d77.1126!3d28.4692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzA5LjEiTiA3N8KwMDYnNDUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
    // }
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
              {/* <div className="map-container">
                <div className="map-placeholder">
                  {/* <div className="map-mockup">
                    <div className="map-pin">📍</div>
                    {/* <div className="map-roads">
                      <div className="road road-1"></div>
                      <div className="road road-2"></div>
                      <div className="road road-3"></div>
                    </div>
                    <div className="map-labels">
                      <span className="location-label">{branch.name.split(' ')[0]}</span>
                    </div> 
                  </div>  
                  <div mapSrc={branch.mapSrc} width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></div>
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
              </div> */}
              <div className='embed-map'>{branch.mapSrc}</div>
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