import React, { useEffect, useRef } from 'react';
import './3card.css'; // تأكد من إضافة ملف CSS الخاص بك
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { gsap } from 'gsap';

const ThreeDCard = () =>  {
  const loadingRef = useRef(null);
  const swiperRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    const loading = loadingRef.current;
    const swiper = swiperRef.current;

    // إعداد Swiper
    if (swiper) {
        // إعداد Swiper
        const swiperInstance = new Swiper(swiper, {
          direction: 'vertical',
          speed: 1500,
          grabCursor: true,
          mousewheel: true,
          keyboard: true,
          on: {
            init: () => {
              gsap.to(loading, {
                duration: 1,
                autoAlpha: 0,
              });
            },
          },
        });

        return () => {
            swiperInstance.destroy();
          };
        }
      else {
        console.error("Swiper element not found");
      }
    }, []);
    

  return (
    <div id="page" className="h-full bg-gradient-to-r from-transparent to-slate-200/30 bg-slate-200 text-slate-900 relative overflow-hidden select-none">
      <div ref={loadingRef} className="absolute inset-0 z-50 bg-slate-200/80 flex items-center justify-center">
        <svg className="animate-spin h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2">
            <circle className="opacity-20" cx="12" cy="12" r="11" />
            <path d="m23 12c0 6.1-4.9 11-11 11" />
          </g>
        </svg>
      </div>

      <model-viewer
        ref={carRef}
        className="absolute left-0 top-0 w-full h-full z-30 pointer-events-none"
        src="https://cdn.glitch.global/ccaf12bb-59b0-46bb-bd74-b9467ca22e3d/scene.gltf?v=1674149863924"
        exposure="1"
        shadow-intensity="3"
        camera-orbit="0deg 10deg 20%"
        camera-target="-9.5m -8m 5m"
      ></model-viewer>

      <div className="swiper w-full h-full absolute left-0 top-0 z-40">
        <div ref={swiperRef} className="swiper-wrapper">
          <section className="swiper-slide w-full h-full flex flex-col justify-end relative p-[5vw]">
            <div className="flex flex-col items-start gap-4 lg:gap-8 w-full sm:w-2/3 lg:w-1/3 3xl:w-1/4 md:text-lg">
              <h1 className="text-[clamp(26px,4vw,60px)] leading-none font-light uppercase">
                Datsun
                <br className="hidden lg:block" />
                <span className="font-bold">240K GT</span>
              </h1>
              <p>
                Introducing a Masterpiece, the combination of all Datsun’s great automotive innovations.
              </p>
              <strong className="hidden lg:block">From 30,500 €</strong>
              <div className="flex flex-wrap gap-2">
                <a href="#section-2" className="uppercase px-6 py-3 md:px-12 md:py-4 rounded-full text-xs md:text-base tracking-wider text-slate-50 bg-blue-700 hover:bg-blue-600 active:bg-blue-900 transition-colors grow text-center">
                  Learn more
                </a>
                 <a href="#" target="_blank" rel="noopener" className="uppercase px-6 py-3 md:px-12 md:py-4 rounded-full text-xs md:text-base tracking-wider bg-transparent hover:bg-slate-50/50 active:bg-white transition-colors grow text-center">
                  Contact us
                </a>
              </div>
            </div>
          </section>

          <section className="swiper-slide w-full h-full flex flex-col items-end justify-end lg:justify-center relative z-50 px-[5vw] py-[5vh]">
            <div className="flex flex-col items-start gap-5 lg:gap-8 w-full sm:w-2/3 lg:w-1/3 2xl:w-1/4 p-[2.5vw] mb-8 lg:mb-0 sm:box-content rounded-xl sm:rounded-[2vw] md:text-lg text-slate-50 bg-zinc-900/20 backdrop-blur-lg">
              <h2 className="text-[clamp(22px,3vw,36px)] leading-[110%]">
                A compact car with an exceptional power-to-weight ratio
              </h2>
              <p className="mb-10 lg:mb-7">
                In addition to all the usual Datsun free extra, the 240K gives you ultimate refinements like electric rear window defroster; adjustable tilt steering wheel.
              </p>
              <a href="#section-3" className="uppercase px-12 py-4 rounded-full text-xs md:text-base tracking-wider text-slate-50 bg-blue-700 hover:bg-blue-600 active:bg-blue-900 transition-colors absolute bottom-0 translate-y-1/2">
                Personalise
              </a>
            </div>
          </section>

          <section className="swiper-slide w-full h-full flex flex-col items-center relative px-[5vw] py-[5vh]">
            <div className="relative z-50 flex flex-col items-center gap-4 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
              <h4 className="text-[clamp(22px,3vw,36px)]">Paint</h4>
              <div className="flex gap-8">
                <button aria-label="White" data-color="#CBD5E1" className="active relative rounded-full w-[40px] h-[30px] bg-gradient-to-r from-slate-50 to-slate-500 bg-slate-200 outline-0 hover:scale-110 focus:scale-110 transition-all"></button>
                <button aria-label="Blue" data-color="#355F99" className="relative rounded-full w-[40px] h-[30px] bg-gradient-to-r from-blue-500 to-blue-900 bg-blue-700 outline-0 hover:scale-110 focus:scale-110 transition-all"></button>
                <button aria-label="Red" data-color="#923939" className="relative rounded-full w-[40px] h-[30px] bg-gradient-to-r from-red-400 to-red-800 bg-red-600 outline-0 hover:scale-110 focus:scale-110 transition-all"></button>
              </div>
            </div>
          </section>
        </div>

        <div className="swiper-pagination"></div>
      </div>

      <picture className="absolute left-0 top-1/2 w-full h-full z-0 opacity-0">
        <source srcSet="https://cdn.glitch.global/ccaf12bb-59b0-46bb-bd74-b9467ca22e3d/bg-road-3000.jpg?v=1674210862901" media="(min-width: 2000px)" />
        <source srcSet="https://cdn.glitch.global/ccaf12bb-59b0-46bb-bd74-b9467ca22e3d/bg-road-2000.jpg?v=1674210859490, https://cdn.glitch.global/ccaf12bb-59b0-46bb-bd74-b9467ca22e3d/bg-road-3000.jpg?v=1674210862901 2x" media="(min-width: 1000px)" />
        <source srcSet="https://cdn.glitch.global/ccaf12bb-59b0-46bb-bd74-b9467ca22e3d/bg-road-1000.jpg?v=1674210857284, https://cdn.glitch.global/ccaf12bb-59b0-46bb-bd74-b9467ca22e3d/bg-road-2000.jpg?v=1674210859490 2x" media="(min-width: 500px)" />
        <img className="w-full h-full object-cover"
             srcSet="https://cdn.glitch.global/ccaf12bb-59b0-46bb-bd74-b9467ca22e3d/bg-road-1000.jpg?v=1674210857284 2x"
             src="https://cdn.glitch.global/ccaf12bb-59b0-46bb-bd74-b9467ca22e3d/bg-road-500.jpg?v=1674211189312"
             alt="Landscape" />
      </picture>
    </div>
  );
};

export default ThreeDCard;