import React from 'react'
import './Home.css'

const Home = () => {

  return (
    <div className='container'>

      <section className="section_1">
        <div className='title'>Empowering Farmers with AI <br /> Chatbot Assistance</div>
        <div className='desc'>Welcome to our AI assistant chatbot for plant disease identification and farming assistance. Get expert advice and solutions for your farming needs.</div>

        <button className="get_started">Get Started</button>
        <button className="learn_more">Learn more</button>

      </section>

      <img className='hero_cropcare_pic' src="cropcare_hero.jpg" alt="" />

    </div>
  )
}

export default Home