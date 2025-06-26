import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import BannerImg from "../../assets/images/resources/main-slider-img-1-1.jpg";
import BannerImg2 from "../../assets/images/resources/main-slider-img-1-2.jpg";
import BannerImg3 from "../../assets/images/resources/main-slider-img-1-3.jpg";
import BannerShape1 from "../../assets/images/shapes/main-slider-shape-1.png";
import BannerShape2 from "../../assets/images/shapes/main-slider-shape-2.png";
import BannerShape3 from "../../assets/images/shapes/main-slider-star-1.png";
import BannerShape4 from "../../assets/images/shapes/main-slider-star-2.png";
import BannerShape5 from "../../assets/images/shapes/main-slider-star-3.png";


const swiperOptions: any = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    pagination: {
      el: '#main-slider-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '#main-slider__swiper-button-next',
      prevEl: '#main-slider__swiper-button-prev'
    },
    autoplay: {
      delay: 8000
    }
  }

export const Banner = () => {
  return (
    <>
    {/* banner-one */}
    <section id='th-home' className="main-slider">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="main-slider__img">
                  <img src={BannerImg} alt="" />
                </div>
                <div className="main-slider__shpae-1">
                  <img src={BannerShape1} alt="" />
                </div>
                <div className="main-slider__shpae-2">
                  <img src={BannerShape2} alt="" />
                </div>
                <div className="main-slider__start-1">
                  <img src={BannerShape3} alt="" />
                </div>
                <div className="main-slider__start-2 zoominout">
                  <img src={BannerShape4} alt="" />
                </div>
                <div className="main-slider__start-3">
                  <img src={BannerShape5} alt="" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <p className="main-slider__sub-title">PRODUCTORA Y BANQUETERIA ELITE</p>
                        <h2 className="main-slider__title">
                        UNA EXPERIENCIA DE <br />SABORES   <span> </span>
                        </h2>
                        <p className="main-slider__text">
                        Desde nuestra fundación hemos sido un referente en el servicio, ofreciendo producciones y <br /> 
                        soluciones gastronómicas de alta calidad para eventos de todo tipo y en distintas locaciones. <br/>  
                        A lo largo de estos años, nos hemos destacado por nuestra dedicación al detalle, <br/> 
                        compromiso con la excelencia y una pasión constante por innovar. 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
              <div className="main-slider__img">
                  <img src={BannerImg2} alt="" />
                </div>
                <div className="main-slider__shpae-1">
                  <img src={BannerShape1} alt="" />
                </div>
                <div className="main-slider__shpae-2">
                  <img src={BannerShape2} alt="" />
                </div>
                <div className="main-slider__start-1">
                  <img src={BannerShape3} alt="" />
                </div>
                <div className="main-slider__start-2 zoominout">
                  <img src={BannerShape4} alt="" />
                </div>
                <div className="main-slider__start-3">
                  <img src={BannerShape5} alt="" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <p className="main-slider__sub-title">PRODUCTORA Y BANQUETERIA ELITE</p>
                        <h2 className="main-slider__title">
                        UNA EXPERIENCIA DE <br />SABORES   <span> </span>
                        </h2>
                        <p className="main-slider__text">
                        En 2025, celebramos más de una década de éxito y crecimiento continuo. Hemos expandido <br /> 
                        nuestra oferta, ampliando nuestro abanico de productos y servicios mediante experiencias <br />
                        que reflejan nuestra evolución como empresa. Nuestro objetivo es hacer de cada celebración <br />
                        una ocasión inolvidable, brindando atención al detalle, perfección en cada servicio y un <br /> 
                        ambiente de calidez y cordialidad en todo momento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
              <div className="main-slider__img">
                  <img src={BannerImg3} alt="" />
                </div>
                <div className="main-slider__shpae-1">
                  <img src={BannerShape1} alt="" />
                </div>
                <div className="main-slider__shpae-2">
                  <img src={BannerShape2} alt="" />
                </div>
                <div className="main-slider__start-1">
                  <img src={BannerShape3} alt="" />
                </div>
                <div className="main-slider__start-2 zoominout">
                  <img src={BannerShape4} alt="" />
                </div>
                <div className="main-slider__start-3">
                  <img src={BannerShape5} alt="" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <p className="main-slider__sub-title">PRODUCTORA Y BANQUETERIA ELITE</p>
                        <h2 className="main-slider__title">
                        UNA EXPERIENCIA DE <br />SABORES   <span> </span>
                        </h2>
                        <p className="main-slider__text">
                        Nos sentimos orgullosos de nuestra trayectoria, de los lazos que hemos formado con <br /> 
                        grandes clientes y de la confianza que han depositado en nosotros a lo largo de los años. <br />
                        ¡En PRODUCTORA Y BANQUETERIA ELITE, estamos listos para seguir <br />creando momentos memorables! 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </div>
          </Swiper>
          <div className="swiper-pagination" id="main-slider-pagination" />

        </section>
        {/* banner-one */}
    </>
  )
}
