import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
      spaceBetween={50}
      effect="flip"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img
          style={{ width: "100%", height: "100vh" }}
          src="https://i.ibb.co/KsYmnj1/sitting-table-with-chairs-yellow-sofa-restaurant-with-panoramic-view.jpg"
          alt=""
        />
        <div className="lg:absolute slide-title lg:top-40 left-72">
          /{" "}
          <h1
            data-aos="flip-left"
            data-aos-duration="2000"
            className="lg:text-5xl animation-duration: 2s font-bold text-orange-400"
          >
            Welcome to Our LUXARY Resturants
            <br />
            <span className="text-green-500 lg:ml-36 mt-8">
              Flavar Haven
            </span>{" "}
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="2000"
            className="lg:w-[700px] mx-auto mt-4 text-[20px] text-white font-bold"
          >
            Creating a unique dining experience by seamlessly blending culinary
            innovation with cozy ambiance in our restaurant project.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%", height: "100vh" }}
          src="https://i.ibb.co/sPpbybp/restaurant-hall-with-bright-color-sitting-furniturs-panoramic-windows.jpg"
          alt=""
        />
        <div className="lg:absolute slide-title lg:top-40 left-72">
          /{" "}
          <h1
            data-aos="flip-left"
            data-aos-duration="2000"
            className="lg:text-5xl animation-duration: 2s font-bold text-orange-400"
          >
            Welcome to Our LUXARY Resturants
            <br />
            <span className="text-green-500 lg:ml-36 mt-8">
              Flavar Haven
            </span>{" "}
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="2000"
            className="lg:w-[700px] mx-auto mt-4 text-[20px] text-white font-bold"
          >
            Creating a unique dining experience by seamlessly blending culinary
            innovation with cozy ambiance in our restaurant project.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%", height: "100vh" }}
          src="https://i.ibb.co/Gs5z2D0/tomas-martinez-1vl-Uai-EQR6k-unsplash.jpg"
          alt=""
        />
        <div className="lg:absolute slide-title lg:top-40 left-72">
          /{" "}
          <h1
            data-aos="flip-left"
            data-aos-duration="2000"
            className="lg:text-5xl animation-duration: 2s font-bold text-orange-400"
          >
            Welcome to Our LUXARY Resturants
            <br />
            <span className="text-green-500 lg:ml-36 mt-8">
              Flavar Haven
            </span>{" "}
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="2000"
            className="lg:w-[700px] mx-auto mt-4 text-[20px] text-white font-bold"
          >
            Creating a unique dining experience by seamlessly blending culinary
            innovation with cozy ambiance in our restaurant project.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%", height: "100vh" }}
          src="https://i.ibb.co/m6Sq0Bx/side-view-breakfast-table-with-red-tablecloth-fried-eggs-cheese-cheese-cucumbers-tomatoes-lettuce-co.jpg"
          alt=""
        />
        <div className="lg:absolute slide-title lg:top-40 left-72">
          /{" "}
          <h1
            data-aos="flip-left"
            data-aos-duration="2000"
            className="lg:text-5xl animation-duration: 2s font-bold text-orange-400"
          >
            Welcome to Our LUXARY Resturants
            <br />
            <span className="text-green-500 lg:ml-36 mt-8">
              Flavar Haven
            </span>{" "}
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="2000"
            className="lg:w-[700px] mx-auto mt-4 text-[20px] text-white font-bold"
          >
            Creating a unique dining experience by seamlessly blending culinary
            innovation with cozy ambiance in our restaurant project.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
