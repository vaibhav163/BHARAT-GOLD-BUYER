import React , { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import './blog.css';
import SocialAndSearches from '../cash-against gold/SocialAndSearches';
import Footersection from '../footersection/Footer-section';
import Logo from '../../assets/logo.png';
import Toggler from '../toggler/toggler';
import aboutus from '../../assets/aboutus.png';
import { Link } from 'react-router-dom';
import Blogimage1 from './blogimage1.png';
import Blogimage2 from './blogimage2.png';
import Blogimage3 from './blogimage3.png';


const Blog = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5Q496FQM');`;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `(function(){
      document.addEventListener('click', function(e){
        if(e.target.closest('a[href^="tel:"]')){
          gtag('event', 'conversion', {'send_to': 'AW-17586452480/M5uDCKuj3occEIDw78FB'});
        }
      });
    })();`;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.innerHTML = `var x = 0;
      var myVar = setInterval(function(){
        if(x == 0){
          try{
            if(document.querySelector('[class="status-message success"]')!=null && document.querySelector('[class="status-message success"]').innerText.indexOf("Message sent successfully")!=-1){
              gtag('event', 'conversion', {'send_to': 'AW-17586452480/6JJcCNjv1IccEIDw78FB'});
              clearInterval(myVar);
              x = 1;
            }
          }catch(e){}
        }
      }, 1000);`;
    document.body.appendChild(script3);
  }, []);
  const blogPosts = [
    {
      id: 1,
      image: Blogimage1,
      alt: "Blog Image 1",
      title: "Why Choosing A Local Gold Buyer In Noida And Delhi NCR Makes All The Difference",
      description: "When it comes to selling your gold, silver, or diamonds, one thing matters as much as price — location. Choosing a local, certified gold buyer can save you time, offer better security, and help you get the maximum value for your valuables. At Standard Gold Buyer, we've created a strong local presence across Delhi NCR [...]",
      bgColor: "#F5F2EF"
    },
    {
      id: 2,
      image: Blogimage2,
      alt: "Blog Image 2  ",
      title: "Where To Sell Gold For Instant Cash In Ghaziabad & Delhi NCR – A Location-Wise Guide",
      description: "Looking for a trusted place to sell your gold, silver, or diamond items in Delhi NCR? Choosing the right location isn't just about convenience— it's about trust, safety, and getting the maximum value for your jewellery. That's why Standard Gold Buyer is the preferred destination across Delhi, Noida, Gurgaon, Ghaziabad, Faridabad, and Greater Noida. Let's explore [...]",
      bgColor: "#F5F2EF"
    },
    {
      id: 3,
      image: Blogimage3,
      alt: "Blog Image 3",
      title: "Best Gold Buyer In Delhi NCR – How To Get The Best Price For Your Gold In Delhi NCR",
      description: "How to Get the Best Price for Your Gold in Delhi NCR (Delhi | Noida | Gurgaon | Ghaziabad | Faridabad | Greater Noida) If you're planning to sell your gold and get instant cash, choosing the right gold buyer in Delhi NCR is crucial. With fluctuating gold rates and a growing number of buyers, [...]",
      bgColor: "#F5F2EF",
      // textColor: "white",
      // descriptionColor: "#F5F2EF"
    }
  ];
  return (
    <div className="header-section">
      <div className="hero-container">
        <div className="hero-background">
          <img src={aboutus} alt="we buy silver" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>

        {/* Navigation */}
        <nav className="hero-nav">
          <div className="nav-logo">
            <div className="logo-circle">
              <img src={Logo} alt="Bharat Gold Buyer Logo" className="logo-image" />
            </div>
            <div className="logo-text">
              <h1>Bharat Gold Buyer</h1>
              <h2>GOLD BUYER</h2>
            </div>
          </div>
          <Toggler />
        </nav>

        {/* Hero Title */}
        <div className="hero-content">
          <h1 className="hero-title">BLOG</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
            <h1 className="services-heading">Our Blog – Expert Advice on Gold, Silver, Diamond Selling</h1>
            <p className="services-description">Welcome to the official blog of <b>Bharat Gold Buyer</b> – your trusted source for valuable insights on selling gold, silver, diamonds, and coins in <b>Delhi NCR</b>. Whether you’re looking to understand market trends, learn how the valuation process works, or discover tips for getting the best price, we’ve got you covered.</p>
            <section className="blog-posts-section">
      <div className="blog-posts-container">
        <div className="blog-posts-grid">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="blog-post-card"
              style={{ 
                backgroundColor: post.bgColor,
                color: post.textColor || '#6B4E3D'
              }}
            >
              <div className="post-image-container">
                <img 
                  src={post.image} 
                  alt={post.alt} 
                  className="post-image"
                />
              </div>
              
              <div className="post-content">
                <h3 className="post-title" style={{ color: post.textColor || '#6B4E3D' }}>
                  {post.title}
                </h3>
                
                <p 
                  className="post-description" 
                  style={{ color: post.descriptionColor || '#666' }}
                >
                  {post.description}
                </p>
                
                <button className="learn-more-btn">
                  Learn more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
      </div>
      <Footersection />
    </div>

  );
}

export default Blog;