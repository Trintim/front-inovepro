import { Slide } from 'react-slideshow-image'
import "react-slideshow-image/dist/styles.css";
import ButtonNav from './ButtonNav';

const slideImages = [
  {
    url: "img/slide1.png",
    Title: "Slide 1",
  },
  {
    url: "img/slide2.png",
    Title: "Slide 2",
  },
  {
    url: "img/slide3.png",
    Title: "Slide 3",
  },
];

export default function Hero() {
  return (
    <div className="slide-container relative overflow-hidden h-screen w-full object-scale-down">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              className="bg-cover bg-center h-screen flex justify-center items-center"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <span className="">{slideImage.Title}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
