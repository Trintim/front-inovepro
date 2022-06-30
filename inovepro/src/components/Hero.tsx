import { Slide } from 'react-slideshow-image'
import "react-slideshow-image/dist/styles.css";
import ButtonBanner from './ButtonBanner';
import ButtonNav from './ButtonNav';
import Logo from './Logo';

const slideImages = [
  {
    url: "img/slide1.png",
    Title: "Edificando ideias, construindo o Futuro",
  },
  {
    url: "img/slide2.png",
    Title: "Seja leve e releve",
  },
  {
    url: "img/slide3.png",
    Title: "Abstraia a mente quando estiver com medo",
  },
];

export default function Hero() {
  return (
    <div className="slide-container relative overflow-hidden h-screen w-full object-scale-down">
      <Slide className="">
        {slideImages.map((slideImage, index) => (
          <div
            className="each-slide before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0  before:bg-gray-800/20"
            key={index}
          >
            <div
              className="bg-cover bg-center h-screen flex justify-center items-center"
              style={{
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <div className="flex z-20">
                <div className="flex flex-col box-content w-[350px] lg:w-[650px] text-gray-200 items-center justify-center ">
                  <div className="p-2">
                    <Logo height={125} width={192} />
                  </div>
                  <div className="mx-3 mt-7 mb-7 text-3xl font-base lg:text-5xl box-content">
                    <h2 className="text-center">{slideImage.Title}</h2>
                  </div>
                  <div className="py-5">
                    <ButtonBanner>Saiba Mais</ButtonBanner>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
