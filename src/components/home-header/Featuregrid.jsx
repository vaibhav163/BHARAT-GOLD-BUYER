import React from 'react';
import './features-grid.css';

export default function FeaturesGridSection() {
  return (
    <section className="features-section">
      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-card">
          <div className="feature-icon">
            <div className="icon-circle">
              <span className="icon-symbol">⏰</span>
            </div>
          </div>
          <h3 className="feature-title">Certified & Trained Staff</h3>
          <p className="feature-description">
            All evaluations are done by professionals who have passed 
            multiple internal and industry-standard tests.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <div className="feature-icon">
            <div className="icon-circle">
              <span className="icon-symbol">🔬</span>
            </div>
          </div>
          <h3 className="feature-title">Advanced Testing Technology</h3>
          <p className="feature-description">
            We use state-of-the-art purity testing machines — completely{' '}
            <strong>non-destructive and accurate</strong>.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <div className="feature-icon">
            <div className="icon-circle">
              <span className="icon-symbol">📋</span>
            </div>
          </div>
          <h3 className="feature-title">Transparent Process</h3>
          <p className="feature-description">
            Everything from testing to pricing is explained clearly 
            before you make a decision.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="feature-card">
          <div className="feature-icon">
            <div className="icon-circle">
              <span className="icon-symbol">💳</span>
            </div>
          </div>
          <h3 className="feature-title">Instant Payments</h3>
          <p className="feature-description">
            Choose from <strong>cash</strong>, <strong>cheque</strong>, or{' '}
            <strong>bank transfer</strong> — paid instantly once you accept our offer.
          </p>
        </div>
      </div>
    </section>
  );
}