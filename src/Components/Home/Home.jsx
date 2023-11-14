import { useState } from "react";
import "./Home.css";
import Courses from "../Courses/Courses";
import Filtering from "../Filtering/Filtering";

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };
  return (
    <section className="courses">
      <div className="container">
        <h1 className="mb-5">Courses</h1>
        <div className="filter-container">
          <Filtering
            handleFilterChange={handleFilterChange}
            selectedFilter={selectedFilter}
          />
        </div>
        <Courses selectedFilter={selectedFilter} />
      </div>
    </section>
  );
};

export default Home;
