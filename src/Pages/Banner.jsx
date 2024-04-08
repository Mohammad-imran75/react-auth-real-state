import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-[1280px] h-[600px]">
        <img
          src="https://i.ibb.co/1bg6Gq8/restaurant-table-with-two-couches-near-window.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-[1280px] h-[600px]">
        <img
          src="https://i.ibb.co/Gs5z2D0/tomas-martinez-1vl-Uai-EQR6k-unsplash.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-[1280px] h-[600px]">
        <img
          src="https://i.ibb.co/sPpbybp/restaurant-hall-with-bright-color-sitting-furniturs-panoramic-windows.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative ">
        <img
          src="https://i.ibb.co/KsYmnj1/sitting-table-with-chairs-yellow-sofa-restaurant-with-panoramic-view.jpg"
          className="w-[1280px] h-[600px]"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
