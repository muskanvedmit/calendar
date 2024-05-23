// BannerSlider.js
// import React from 'react';
// import Slider from 'react-slick';
// import { motion } from 'framer-motion';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const BannerSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <Slider {...settings}>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img src="https://media.istockphoto.com/id/508459346/photo/window-of-desserts-at-a-pastry-shop.webp?b=1&s=170667a&w=0&k=20&c=jtP6i0aJZjYCw2TUTl1_LItiCupSdiwwoBk8NMIltLk=" alt="Banner 1" />
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img src="https://media.istockphoto.com/id/491517422/photo/fuba-cake.webp?b=1&s=170667a&w=0&k=20&c=R948n-u4kW_KnVihTgHszf7XEz-jJea9yQGjhs-LE8w=" alt="Banner 2" />
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img src="https://media.istockphoto.com/id/1400398000/photo/victoria-sandwich-cake-decorated-with-strawberries-blueberries-and-mint-closeup.webp?b=1&s=170667a&w=0&k=20&c=3WwbtXe8Zzlcj2qJoI0D1vMVmcn9JhxbySr8gITgORw=" alt="Banner 2" />
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img src="https://images.unsplash.com/photo-1626803775151-61d756612f97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODV8fHxlbnwwfHx8fHw%3D" alt="Banner 2" />
//       </motion.div>
//     </Slider>
//   );
// };

// export default BannerSlider;


// BannerSlider.js
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="https://media.istockphoto.com/id/508459346/photo/window-of-desserts-at-a-pastry-shop.webp?b=1&s=170667a&w=0&k=20&c=jtP6i0aJZjYCw2TUTl1_LItiCupSdiwwoBk8NMIltLk="
          alt="Banner 1"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="https://media.istockphoto.com/id/491517422/photo/fuba-cake.webp?b=1&s=170667a&w=0&k=20&c=R948n-u4kW_KnVihTgHszf7XEz-jJea9yQGjhs-LE8w="
          alt="Banner 2"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      {/* Add more banner slides as needed */}
    </Slider>
  );
};

export default BannerSlider;
