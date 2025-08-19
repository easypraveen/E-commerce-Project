import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { motion } from "framer-motion";
import { slides } from '../utils/mockData';

export const HeroSlider = () => {

  return (
    <Splide
      options={{
        type: 'loop',
        autoplay: true,
        interval: 3000,
        arrows: true,
        pagination: true,
      }}
      className="w-full h-[600px]"
    >
 {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="relative w-full h-[600px]">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                <motion.h1
                  className="text-3xl md:text-5xl font-extrabold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <button className="bg-marble-accent text-white px-6 py-3 rounded-lg shadow-soft hover:bg-marble-dark transition">
                    {slide.btn1}
                  </button>
                  <button className="bg-white text-marble-dark px-6 py-3 rounded-lg shadow-soft hover:bg-neutral-200 transition">
                    {slide.btn2}
                  </button>
                </motion.div>
              </div>
            </div>
          </SplideSlide>
        ))}
    </Splide>
  );
};
