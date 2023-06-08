import React from 'react'
import NavbarAfterLogin from '../Navigation/NavbarAfterLogin'

import './about.css'

const About = () => {
  return (
    <>
    <NavbarAfterLogin />
    <section className='about'>
        <div className="about_title_info">
            <h3 className="about_title">Billyboy International</h3>
            <p className="info_1">
                We are a small team of passionate artists who have launched our very own comic series, and we couldn't be more excited to share it with the world. 
                Our goal is to take our comic to a global audience and become a household name in the world of Entertainment. We believe that our work has the potential to resonate with people from all walks of life, regardless of age, gender, or background.
                Our storylines are compelling, our characters are relatable, and our artwork is visually stunning.
            </p>
            <p className="info_2">
                We've poured our hearts and souls into this project, and we are confident that it will capture the imaginations of readers everywhere.
                Our team is made up of a few writers, artists, and designers who have a deep love for the world of comics. We've spent countless hours brainstorming, developing, and refining our ideas, and we're thrilled to finally share our work with the world. 
            </p>
        </div>
        <div className="mission_title_info">
            <h3 className="about_title_mission">Mission Statement</h3>
            <p className="mission_info_1">
                Our mission is to bring joy, excitement, and entertainment to our readers. We want to take them on a journey through the pages of our comic,
                introducing them to a world of adventure, intrigue, and humor. We believe that our work has the power to inspire, to uplift, and to connect people from all corners of the globe.
                So join us on this exciting journey! Explore our website, check out our latest releases, and connect with us on social media. We want to hear from you, and we're excited to see where this adventure takes us.
            </p>
            <p className="mission_info_2">
                Thank you for your support, and we can't wait to hear your feedback!
            </p>
        </div>
    </section>
    </>
  )
}

export default About