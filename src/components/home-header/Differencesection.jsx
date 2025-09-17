import React from 'react';
import './DifferenceSection.css'; // Import CSS Module

// Image URLs (make sure these are accessible)
const BACKGROUND_IMAGE_URL = "https://standardgolbuyers.in/wp-content/uploads/2025/08/34355879_sl_020622_4930_25-1-scaled.jpg";
const OLDEST_METHOD_IMG_URL = "https://standardgolbuyers.in/wp-content/uploads/2025/08/oldest-method-img.png";
const GERMAN_KARAT_METER_IMG_URL = "https://standardgolbuyers.in/wp-content/uploads/2025/08/meter-machine-img.png";

const DifferenceSection = () => {
    return (
        <section
            className="differenceSection"
            style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
        >
            <h2 className="sectionTitle">
                Why We Are Different From Other Gold Jewellery Buyer
            </h2>

            <div className="contentContainer">
                {/* Oldest Method Card */}
                <div className="card">
                    <div className="imageWrapper oldMethod">
                        <img
                            src={OLDEST_METHOD_IMG_URL}
                            alt="Oldest Method To Test The Purity"
                            className="methodImage"
                        />
                        {/* Red 'X' circle */}
                        <div className="badgeNegative"></div>
                    </div>
                    <h3 className="cardTitle">Oldest Method To Test The Purity</h3>
                    <ul className="featureList">
                        <li>
                            <span className="negativeIcon"></span> This Method Is Completely Inaccurate
                        </li>
                        <li>
                            <span className="negativeIcon"></span> Cheapest And Easily Available In The Market
                        </li>
                        <li>
                            <span className="negativeIcon"></span> Oldest Method To Test The Purity Of Gold
                        </li>
                    </ul>
                </div>

                {/* German Karat Meter Machine Card */}
                <div className="card">
                    <div className="imageWrapper germanMeter">
                        <img
                            src={GERMAN_KARAT_METER_IMG_URL}
                            alt="German Karat Meter Machine"
                            className="methodImage"
                        />
                        {/* Green checkmark circle */}
                        <div className="badgePositive"></div>
                    </div>
                    <h3 className="cardTitle">German Karat Meter Machine</h3>
                    <ul className="featureList">
                        <li>
                            <span className="positiveIcon"></span> German KARATMETER Testing Worldwide Certified Technology
                        </li>
                        <li>
                            <span className="positiveIcon"></span> Being a Non-Destructive Method, It Is Widely Used and Appreciated
                        </li>
                        <li>
                            <span className="positiveIcon"></span> Provides Exact Value Of The Purity Of The Sample In Karat & % i.e.- 22kt/91%
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DifferenceSection;