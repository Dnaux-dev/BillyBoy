import Slider from 'react-slick';

import RightArrow from '../../../assets/Vectorarrow-front.svg'
import LeftArrow from '../../../assets/Vectorarrow-back.png'
import Wolverine from '../../../assets/Wolverine.png'
import Daredevil from '../../../assets/daredevil@2x.png'
import Batman from '../../../assets/Batman.png'
import Oroni from '../../../assets/oroni@2x.png'
import Spawn from '../../../assets/spawn@2x.png'


import './exclusive.css'

const Exclusive = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    className: "slider variable-width",
    centerMode: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: true,
    speed: 500,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
    <div className='Card_container'>
       <h2>Billyboy Exclusive</h2>
       <Slider {...settings}>
          <div className='container' style={{ width: 270 }}>
            <img src={Wolverine} />
            <a href="#">Wolverine</a>
          </div>
          <div className='container' style={{ width: 270 }}>
            <img src={Daredevil} />
            <a href="#">Daredevil</a>
          </div>
          <div className='container' style={{ width: 270 }}>
            <img src={Batman} />
            <a href="#">Batman</a>
          </div>
          <div className='container' style={{ width: 270 }}>
            <img src={Oroni} />
            <a href="#">Oroni</a>
          </div>
          <div className='container' style={{ width: 270 }}>
            <img src={Spawn} />
            <a href="#">Spawn</a>
          </div>
        </Slider>
    </div>
  )
}

export default Exclusive