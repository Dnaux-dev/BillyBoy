import React from 'react'
import LibraryNav from '../LibraryNav/LibraryNav'
import '../library.css'
import BAT_1 from '../../../assets/Rectangle 1248BAT1.png'
import BAT_2 from '../../../assets/Rectangle 1249BAT2.png'
import BAT_3 from '../../../assets/Rectangle 1250BAT3.png'
const Recently = () => {
  return (
    <>
      <LibraryNav />
      <div className="main_container">
        <div className="image-box">
          <img src={BAT_1} />
          <div className="episode-box">
            <h5>BATMAN</h5>
            <p>Episode 1</p>
          </div>
        </div>
        <div className="image-box">
          <img src={BAT_2} />
          <div className="episode-box">
            <h5>BATMAN</h5>
            <p>Episode 2</p>
          </div>
        </div>
        <div className="image-box">
          <img src={BAT_3} />
          <div className="episode-box">
            <h5>BATMAN</h5>
            <p>Episode 3</p>
          </div>
        </div>
      </div>      
    </> 
    
  )
}

export default Recently