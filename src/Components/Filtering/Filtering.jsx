import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Filtering = ({ handleFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const changeFilter = (filter) => {
    setSelectedFilter(filter);
    handleFilterChange(filter);
  };

  return (
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
          className={`filter-btn ${selectedFilter === "All" ? "active" : ""}`}
          onClick={() => changeFilter("All")}
        >
          All
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <button onClick={() => handleFilterChange("Flexibility training")}>
          Flexibility training
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <button onClick={() => handleFilterChange("Weight training")}>
          Weight training
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <button onClick={() => handleFilterChange("Cardio training")}>
          Cardio training
        </button>
      </SwiperSlide>

      <SwiperSlide>
        <button onClick={() => handleFilterChange("Fitness Mindset")}>
          Fitness Mindset
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <button onClick={() => handleFilterChange("Online Learning")}>
          Online Learning
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <button onClick={() => handleFilterChange("Courses")}>Courses</button>
      </SwiperSlide>
    </Swiper>
  );
};

export default Filtering;
