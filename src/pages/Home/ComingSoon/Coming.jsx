import './coming.css'
import RightArrow from '../../../assets/Vectorarrow-front.svg'
import LeftArrow from '../../../assets/Vectorarrow-back.png'
import Wolverine from '../../../assets/Wolverine.png'
import Daredevil from '../../../assets/daredevil@2x.png'

import Slider from 'react-slick'

const Coming = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
      );
    
      const settings = {
        classNameName: "slider variable-width",
        incs: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              incs: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <div className='Card_container cont6'>
        <h2>Coming Soon</h2>
        <Slider {...settings}>
        <div className='box3' style={{ width: 470 }}>
          <img src={Wolverine} />
          <div className="contain">
            <h4>March 17th 2023</h4>
            <h6>Magneto</h6>
            <div class="feature">
                <p>Action <span class="dn"></span> Sci-fi <span class="dn"></span> Afro-futurism <span class="dn"></span> Superheroes</p>
            </div>
          </div>
        </div>
        <div className='box4' style={{ width: 470 }}>
          <img src={Daredevil} />
          <div className="contain">
            <h4>March 17th 2023</h4>
            <h6>Magneto</h6>
            <div class="feature">
                <p>Action <span class="dn"></span> Sci-fi <span class="dn"></span> Afro-futurism <span class="dn"></span> Superheroes</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Coming