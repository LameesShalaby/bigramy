import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./Home.css";
const allImages = [
    {
      // src: img,
      alt: 'Image 1',
      category: 'Courses',
      title: "Go Care | Client's",
      cat: 'Mobile App',
      date: 'MM / YYYY',
    },
  ];

const [selectedFilter, setSelectedFilter] = useState('All');
const [filteredImages, setFilteredImages] = useState(allImages);

const handleFilterChange = (filter) => {
  setSelectedFilter(filter);
};

useEffect(() => {
  if (selectedFilter === 'All') {
    setFilteredImages(allImages);
  } else {
    setFilteredImages(
      allImages.filter((image) => image.category === selectedFilter)
    );
  }
}, [selectedFilter]);
const Home = () => {

  return (
    <section className="courses">
      <div className="container">
        <h1 className="mb-5">Courses</h1>
        <div className="filter-container">
          <Swiper
            navigation={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            centeredSlides={false}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            className="myFilteringSwiper"
          >
            <SwiperSlide>
              <button
                className="all-btn"
                onClick={() => handleFilterChange("All")}
              >
                All
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => handleFilterChange("Weight training")}
              >
                Weight training
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => handleFilterChange("Flexibility training")}
              >
                Flexibility training
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => handleFilterChange(" Cardio training")}
              >
                Cardio training
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button onClick={() => handleFilterChange(" Courses")}>
                Courses
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => handleFilterChange("Fitness Mindset")}
              >
                Fitness Mindset
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button
                onClick={() => handleFilterChange("Online Learning")}
              >
                Online Learning
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="image-container" id="imageContainer">
          {filteredImages.map((image, index) => (
            <div key={index} className="course-image">
              {/* <img src={image.src} alt={image.alt} /> */}
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home;
{/* <nav aria-label="Page navigation example">
<ul className="pagination">
  <li className="page-item">
    <a className="page-link" href="#">
      Previous
    </a>
  </li>
  <li className="page-item">
    <a className="page-link" href="#">
      1
    </a>
  </li>
  <li className="page-item">
    <a className="page-link" href="#">
      Next
    </a>
  </li>
</ul>
</nav> */}