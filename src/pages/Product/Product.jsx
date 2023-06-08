import React from 'react'
import NavbarAfterLogin from '../Navigation/NavbarAfterLogin'
import './product.css'

import Twitter from '../../assets/Vectortwiiter.png'
import Instagram from '../../assets/Iconinstagram.png'
import Discord from '../../assets/Vectordiscord.png'

const Product = ({ timerDays, timerHours, timerMinutes}) => {
  return (
    <>
      <NavbarAfterLogin />
      <section class="coming_d">
        <div class="d-flex justify-content-center coming-soon" id="coming-soon">Coming soon</div>
        <div class="count countdown">
            <div class="time">
              <div class="group groupAll">
                <p id="days">{timerDays}</p>
                <span >DAYS</span>
              </div>
            </div>
            <span class="column">:</span>
            <div class="time1">
              <div class="group">
                <p id="hours">{timerHours}</p>
                <span >HOURS</span>
              </div>
            </div>
            <span class="column">:</span>
            <div class="time2">
              <div class="group">
                <p id="minutes">{timerMinutes}</p>
                <span class="min">MINUTES</span>
              </div>  
            </div>
        </div>
        <div class="d-flex justify-content-center notify">Get notified when we are close to blast off:</div>
        <input class="form-control control" type="text" placeholder="Enter your email" />
        <div class="d-flex justify-content-center">
          <div class="subscribe">
            <button type="button" class="btn btn-warning"><a href="#">Subscribe</a></button>
          </div>
        </div>
        <div class="d-flex justify-content-center questions">If you have any qustions, please contact us at:</div>
        <div class="d-flex justify-content-center info"><a href="#">Info@Billyboycomic.com</a></div>
        <div class="d-flex justify-content-center links">
          <a href="#"><img src={Twitter} alt="" /></a>
          <a href="#"><img src={Instagram} alt="" /></a>
          <a href="#"><img src={Discord} alt="" /></a>
        </div>
     </section>
    </>
  )
}

Product.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
};

export default Product