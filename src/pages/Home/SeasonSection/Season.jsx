import './season.css'
import fire from '../../../assets/Groupfire.png' 
import girl from '../../../assets/youtube@2x.png'
import Billy from '../../../assets/BillyBoy@2x.png'
import Play from '../../../assets/Layer_1play.png'
import dots from '../../../assets/Glyphdots.png'
import youtube from '../../../assets/Frameyoutube.png'

const Season = () => {
  return (
    <section className="season_container">
        <div className="Card_container cont4">
            <div className="group">
                <h2>This Season</h2>
                <img src={fire} />
            </div>
            <div className="season_details d-flex flex-row">
                <h4>7TH MARCH - 30TH APRIL 2023</h4>
                <a href="#">SUBSCRIBE</a>
            </div>
            <div className="season_img">
                <div className="inline">
                    <div className="first">
                        <img src={Billy} class="img-fluid" alt="Responsive image" />
                        <p>This Season 2023...</p>
                    </div> 
                </div>
                <div className="inline_2 ">
                        <img src={Play} class="img-fluid" alt="Responsive image" />
                        <img src={dots} class="img-fluid" alt="Responsive image" />
                </div>
                <div className="inline_3">
                        <a href="#">
                            <img src={youtube} class="img-fluid" alt="Responsive image" />
                        </a>
                </div>
                <img src={girl} class="img-fluid base" alt="Responsive image" />
               
            </div>
        </div>
    </section>
  )
}

export default Season