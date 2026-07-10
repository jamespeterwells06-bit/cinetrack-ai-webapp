import { FaCcVisa, FaCcMastercard, FaCcAmex, FaApplePay, FaGooglePay } from 'react-icons/fa';

function App() {

  return (
    <>
      <div style={{ backgroundColor: '#000000', color: '#ffffff', textAlign: 'center', padding: '12px 20px', fontSize: '14px', fontWeight: 500, letterSpacing: '0.5px' }}>
          Summer Launch Event: The first 100 units are 50% off. <span style={{ color: '#ff3b30', fontWeight: 700 }}>87 claimed so far.</span>
      </div>
      <div className="nav">
          <div className="logo">CineTrack <span>AI</span></div>
          <div style={{ fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Order Now</div>
      </div>
      
      <div className="container">
          <div className="hero">
              <div className="hero-text">
                  <div className="badge">● In Stock &amp; Ready to Ship</div>
                  <h1>The Camera Crew That Fits<br/>In Your <span>Pocket.</span></h1>
                  <div style={{ color: '#ecc94b', fontSize: '16px', margin: '-10px 0 20px 0', fontWeight: 600 }}>
                      ⭐⭐⭐⭐⭐ <span style={{ color: '#a0aec0', fontWeight: 500, marginLeft: '8px' }}>4.9/5 based on 1,200+ Reviews</span>
                  </div>
                  <p>Stop asking friends to film your content. The CineTrack AI mount uses advanced motion tracking to follow your every move automatically—no apps required.</p>
                  <a href="#pricing" className="cta-btn">Get 50% Off Today</a>
                  <div className="trust">
                      <span className="stars">★★★★★</span> Trusted by 12,400+ Creators
                  </div>

              </div>
              <div className="hero-image">
                  <img src="/mount.gif" alt="Auto Tracking Mount" />
              </div>
          </div>

          <div className="features">
              <h2>Why the top 1% of creators use CineTrack.</h2>
              <div className="feature-grid">
                  <div className="feature-card">
                      <div className="feature-icon">🤖</div>
                      <h3>AI Face &amp; Body Tracking</h3>
                      <p>Built-in optical sensors lock onto your movement instantly. Walk, run, or dance—it never loses you.</p>
                  </div>
                  <div className="feature-card">
                      <div className="feature-icon">📱</div>
                      <h3>Zero Apps Required</h3>
                      <p>No Bluetooth pairing or buggy software. Just turn it on, mount your phone, and start recording directly natively.</p>
                  </div>
                  <div className="feature-card">
                      <div className="feature-icon">🔄</div>
                      <h3>360° Infinite Rotation</h3>
                      <p>The quiet motorized base spins endlessly in complete circles, giving you total freedom of movement around any room.</p>
                  </div>
              </div>
          </div>

          <div className="testimonials">
              <div className="test-grid">
                  <div className="test-card">
                      <div className="stars">★★★★★</div>
                      <p>"This completely fixed my filming anxiety. I used to hate asking my boyfriend to film my gym sets. Now I just set this up and it tracks me perfectly."</p>
                      <span className="author">Sarah M. - Verified Buyer</span>
                  </div>
                  <div className="test-card">
                      <div className="stars">★★★★★</div>
                      <p>"The fact that it doesn't need an app is the best part. I just use my native iPhone camera and it follows me around my kitchen while I film cooking videos."</p>
                      <span className="author">David L. - Verified Buyer</span>
                  </div>
                  <div className="test-card">
                      <div className="stars">★★★★★</div>
                      <p>"Worth every single penny. The motor is completely silent so it doesn't ruin my audio, and the tracking is terrifyingly fast."</p>
                      <span className="author">Jessica K. - Verified Buyer</span>
                  </div>
              </div>
          </div>

          <div id="pricing" className="pricing">
              <h2>Upgrade Your Setup Today</h2>
              <p>Lock in your 50% discount before we sell out.</p>
              <div style={{ margin: '40px auto 0', maxWidth: '900px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px' }}>
                  <img src="/cinetrack-gimbal-checkout.png" alt="CineTrack AI Order" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', borderRadius: '14px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid #1f1f1f', display: 'block', aspectRatio: '1/1', padding: '15px', boxSizing: 'border-box', background: '#13131A' }} />
                  <img src="/cinetrack-lifestyle-gesture.png" alt="CineTrack Lifestyle" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', borderRadius: '14px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid #1f1f1f', display: 'block', aspectRatio: '1/1', padding: '15px', boxSizing: 'border-box', background: '#13131A' }} />
                  <img src="/cinetrack-hardware-features.png" alt="CineTrack Hardware" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', borderRadius: '14px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid #1f1f1f', display: 'block', aspectRatio: '1/1', padding: '15px', boxSizing: 'border-box', background: '#13131A' }} />
              </div>
              <div className="pricing-grid">
                  <div className="price-card">
                      <h3 className="price-title">Single Unit</h3>
                      <div className="price"><span>$179.99</span>$89.99</div>
                      <ul>
                          <li>1x CineTrack AI Mount</li>
                          <li>1x Type-C Charging Cable</li>
                          <li>Standard Shipping</li>
                      </ul>
                      <a href="https://buy.stripe.com/eVq5kC1Gv2rMfWY5P28k800" className="cta-btn" style={{ width: '100%', padding: '15px' }}>Buy 1 Unit</a>
                      <div style={{ marginTop: '15px', textAlign: 'center' }}>
                          <div style={{ color: '#718096', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Guaranteed Safe Checkout</div>
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', color: '#CBD5E0' }}>
                              <FaCcMastercard size={32} />
                              <FaCcVisa size={32} />
                              <FaCcAmex size={32} />
                              <FaApplePay size={38} style={{ transform: 'translateY(-2px)' }} />
                              <FaGooglePay size={38} style={{ transform: 'translateY(-2px)' }} />
                          </div>
                      </div>
                  </div>
                  <div className="price-card popular">
                      <div className="popular-tag">Most Popular (Buy 2, Get 1 Free)</div>
                      <h3 className="price-title">Creator Bundle</h3>
                      <div className="price"><span>$269.97</span>$179.98</div>
                      <ul>
                          <li>3x CineTrack AI Mounts</li>
                          <li>3x Type-C Charging Cables</li>
                          <li>Priority Free Shipping</li>
                      </ul>
                      <a href="https://buy.stripe.com/8x2aEWbh55DY6mo5P28k801" className="cta-btn" style={{ width: '100%', padding: '15px' }}>Claim Bundle Deal</a>
                      <div style={{ marginTop: '15px', textAlign: 'center' }}>
                          <div style={{ color: '#718096', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Guaranteed Safe Checkout</div>
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', color: '#CBD5E0' }}>
                              <FaCcMastercard size={32} />
                              <FaCcVisa size={32} />
                              <FaCcAmex size={32} />
                              <FaApplePay size={38} style={{ transform: 'translateY(-2px)' }} />
                              <FaGooglePay size={38} style={{ transform: 'translateY(-2px)' }} />
                          </div>
                      </div>
                  </div>
                  <div className="price-card">
                      <h3 className="price-title">Family Pack</h3>
                      <div className="price"><span>$449.95</span>$269.97</div>
                      <div style={{ fontSize: '13px', color: '#a0aec0', marginBottom: '15px' }}>Buy 3, Get 2 Free</div>
                      <ul>
                          <li>5x CineTrack AI Mounts</li>
                          <li>5x Type-C Charging Cables</li>
                          <li>Priority Free Shipping</li>
                      </ul>
                      <a href="https://buy.stripe.com/8x25kCdpd3vQdOQely8k802" className="cta-btn" style={{ width: '100%', padding: '15px' }}>Claim Family Pack</a>
                      <div style={{ marginTop: '15px', textAlign: 'center' }}>
                          <div style={{ color: '#718096', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Guaranteed Safe Checkout</div>
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', color: '#CBD5E0' }}>
                              <FaCcMastercard size={32} />
                              <FaCcVisa size={32} />
                              <FaCcAmex size={32} />
                              <FaApplePay size={38} style={{ transform: 'translateY(-2px)' }} />
                              <FaGooglePay size={38} style={{ transform: 'translateY(-2px)' }} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="footer-note">
              🔒 Secure SSL Checkout via Stripe • 30-Day Money Back Guarantee<br/>
              <div style={{ marginTop: '15px' }}>
                  <a href="mailto:support@shopcinetrackai.com" style={{ color: '#5a67d8', textDecoration: 'none', fontWeight: 600 }}>support@shopcinetrackai.com</a>
              </div>
              <div style={{ marginTop: '20px', fontSize: '12px', opacity: 0.5 }}>
                  Version: 2026.07.08-v1
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
