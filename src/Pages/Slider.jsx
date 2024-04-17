import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          style={{ width: "100%",height:'100vh'}}
          src="https://i.ibb.co/KsYmnj1/sitting-table-with-chairs-yellow-sofa-restaurant-with-panoramic-view.jpg"
          alt=""
        />
         <div className="lg:absolute slide-title lg:top-40 left-72">
          {" "}
          <h1
            data-aos="flip-left"
            data-aos-duration="2000"
            className="lg:text-5xl animation-duration: 2s font-bold text-orange-400"
          >
            See Our luxary Resturant Details
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
            The cozy bistro, nestled in the heart of downtown, serves exquisite French cuisine crafted with locally sourced ingredients.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
