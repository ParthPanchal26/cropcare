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

      <section className="section_2">

        <div className="part_1">
          <div className='title'>Empowering Farmers with AI: Discover the Future of Farming Assistance</div>
          <div className='part_1_desc'>Our AI assistant chatbot revolutionizes farming practices by providing real-time support and accurate plant disease identification.</div>
          <li className='bullets'>Real-time plant disease identification for healthier crops</li>
          <li className='bullets'>Optimize your farming practices with AI-powered insights</li>
          <li className='bullets'>Expert farming advice at your fingertips</li>
        </div>

        <img className='plant_pic' src="plant.jpg" alt="plant.jpg" />
      </section>

    </div>
  )
}

export default Home