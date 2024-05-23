import { useEffect } from "react";
import "./App.css";

const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 1,
};

function App({ images }) {

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries, self) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, config);

    const imgs = document.querySelectorAll('[data-src]');
    imgs.forEach((img) => observer.observe(img));

    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  const loadImages = (image) => {
    const img = new Image();
    img.src = image.dataset.src;
    img.onload = () => {
      image.src = image.dataset.src;
      image.classList.remove('lazy');
    };
  };

  return (
    <div style={galleryStyle}>
      {images.map((src, index) => (
        <img
          key={index}
          data-src={src}
          src={src}
          alt=""
          className="lazy"
          style={imageStyle}
        />
      ))}
    </div>
  );
}

const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 200px)',
  gridAutoRows: '230px',
  gap: '10px',
};

const imageStyle = {
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  transition: 'filter 0.3s',
};

export default App;
