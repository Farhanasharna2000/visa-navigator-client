import slider1 from "../../assets/banner2.jpg";
import slider2 from "../../assets/banner1.jpg";
import slider3 from "../../assets/banner3.jpg";
import slider4 from "../../assets/banner4.png";

const Banner = () => {
  return (
    <div className="my-8 bg-black">
      <div className="carousel w-full h-[450px]">
  <div id="item1" className="carousel-item w-full bg-cover bg-center"style={{ backgroundImage: `url(${slider1})` }}>
  
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src={slider2}
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src={slider3}
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src={slider4}
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  );
};

export default Banner;
