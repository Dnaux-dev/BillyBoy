import './recent.css'
import Slider from 'react-slick'

import RightArrow from '../../../assets/Vectorarrow-front.svg'
import LeftArrow from '../../../assets/Vectorarrow-back.png'
import Mobius from '../../../assets/mobius@2x.png'
import Magneto from '../../../assets/Magneto@2x.png'
import Spawn from '../../../assets/spawn@2x.png'
import Magic from '../../../assets/Magic@2x.png'
import Nightwing from '../../../assets/nightwing@2x.png'

const Recent = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 5,
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
          dots: true
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
    <div className='Card_container cont2'>
      <h2>Recent Release</h2>
      <Slider {...settings}>
          <div className='box2' style={{ width: 270 }}>
            <img src={Mobius} />
            <a href="#">Mobius</a>
          </div>
          <div className='box2' style={{ width: 270 }}>
            <img src={Magneto} />
            <a href="#">Magneto</a>
          </div>
          <div className='box2' style={{ width: 270 }}>
            <img src={Spawn} />
            <a href="Spawn"></a>
          </div>
          <div className='box2' style={{ width: 270 }}>
            <img src={Magic} />
            <a href="#">Magic</a>
          </div>
          <div className='box2' style={{ width: 270 }}>
            <img src={Nightwing} />
            <a href="#">Nightwing</a>
          </div>
        </Slider>
    </div>
  )
}

export default Recent