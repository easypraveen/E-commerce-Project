import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { motion } from "framer-motion";

export const HeroSlider = () => {

  const slides = [
    {
      image:
        "https://rmsmarbles.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-10-27-at-5.07.40-PM-2-1024x768.jpeg",
      title: "Premium Italian Marble Collection",
      subtitle: "Elevate your spaces with timeless elegance and durability",
      btn1: "Shop Now",
      btn2: "Get Samples",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/055/314/214/non_2x/professional-floor-cleaning-using-buffing-machines-in-an-indoor-setting-photo.jpg",
      title: "Big Deals on Marble Tools",
      subtitle: "Upto 40% off on Cutting, Polishing & Adhesive Tools",
      btn1: "Explore Tools",
      btn2: "View Offers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "New Arrivals 2025",
      subtitle: "Latest designs & accessories for modern interiors",
      btn1: "Browse Collection",
      btn2: "Pre-Order Now",
    },
  ];


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
