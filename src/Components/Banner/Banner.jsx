import slider1 from "../../assets/banner2.jpg";
import slider2 from "../../assets/banner1.jpg";
import slider3 from "../../assets/banner3.jpg";
import slider4 from "../../assets/banner4.png";

const Banner = () => {
  return (
    <div className="carousel w-full object-cover py-8">
      <div
        id="slide1"
        className="carousel-item relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${slider1})` }}
      >
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={slider2}
          className="w-full h-[480px]"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={slider3}
          className="w-full h-[480px]"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={slider4}
          className="w-full h-[480px]"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

      <style >{`

        @keyframes slideAnimation {
          0% {
            transform: translateX(0%);
          }
          25% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(-200%);
          }
          75% {
            transform: translateX(-300%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .carousel {
          display: flex;
          overflow: hidden;
          width: 100%;
        }

        .carousel-item {
          flex: 0 0 100%;
          transition: transform 1s ease-in-out;
        }

        .carousel > div {
          animation: slideAnimation 25s infinite; 
        }
      `}</style>
    </div>
  );
};

export default Banner;
