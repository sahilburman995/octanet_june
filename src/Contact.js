import React from 'react'
import { NavLink } from 'react-router-dom'
import './contact.css'

import Header from '../src/components/Header';
const Contact = () => {
  return (<>

    <Header />
    <section>
      <h2>
        This is conatct page
      </h2>
    </section><section className="hero">
      <h2 className="hero-title">Welcome to My Website</h2>
      <p className="hero-subtitle">Discover the amazing features</p>
      <a href="/" className="btn">Get Started</a>
    </section>

    <section className="features">
      <div className="feature">
        <h3 className="feature-title">Responsive Design</h3>
        <p className="feature-description">Our website is fully responsive and works great on all devices.</p>
      </div>
      <div className="feature">
        <h3 className="feature-title">Animated Effects</h3>
        <p className="feature-description">Engage your users with captivating animations and transitions.</p>
      </div>
      <div className="feature">
        <h3 className="feature-title">Easy to Customize</h3>
        <p className="feature-description">Customize and tailor your website to match your unique style and needs.</p>
      </div>
    </section>

    <footer className="footer">
      <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>


  </>
  )
}

export default Contact
