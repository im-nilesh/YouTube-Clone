import "./FilterBar.css";

import filterData from "../../constants/filterData";

import { useVideo } from "../../context/VideoContext";

function FilterBar() {
  const { selectedCategory, setSelectedCategory } = useVideo();

  return (
    <section className="filterbar">
      {filterData.map((filter) => (
        <button
          key={filter}
          className={`filter-chip ${
            selectedCategory === filter ? "active" : ""
          }`}
          onClick={() => {
            console.log("Clicked:", filter);
            setSelectedCategory(filter);
          }}
        >
          {filter}
        </button>
      ))}
    </section>
  );
}

export default FilterBar;
