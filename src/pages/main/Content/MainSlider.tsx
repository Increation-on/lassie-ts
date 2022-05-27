import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide from '../../../images/slider-1.jpg';
import { FC } from "react";
import styles from './styles/slider.module.css';

const MainSlider: FC = () => {

  function SampleNextArrow(props: any) {
    const { style, onClick } = props;
    return (
      <div
        className={styles.slick_next}
        style={{ ...style, display: "block", right: "30px", zIndex: "1000" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { style, onClick } = props;
    return (
      <div
        className={styles.slick_prev}
        style={{ ...style, display: "block", left: "15px", zIndex: "1000" }}
        onClick={onClick}
      />
    );
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    className: "index__slider slider",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };



  return (
    <Slider {...settings}>
      <div>
        <img src={slide} alt="kids" className="slider__img" />
        <div className="index__slider-title">Встречаем осень
          <br />с новой коллекцией</div>
      </div>
      <div>
        <img src={slide} alt="kids" className="slider__img" />
        <div className="index__slider-title">Встречаем осень
          <br />с новой коллекцией</div>
      </div>
      <div>
        <img src={slide} alt="kids" className="slider__img" />
        <div className="index__slider-title">Встречаем осень
          <br />с новой коллекцией</div>
      </div>
      <div>
        <img src={slide} alt="kids" className="slider__img" />
        <div className="index__slider-title">Встречаем осень
          <br />с новой коллекцией</div>
      </div>
    </Slider>
  );
}

export default MainSlider;