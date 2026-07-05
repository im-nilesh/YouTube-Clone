import { useState } from "react";
import "./FilterBar.css";

import filterData from "../../constants/filterData";

function FilterBar() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="filterbar">
      {filterData.map((filter) => (
        <button
          key={filter}
          className={`filter-chip ${activeFilter === filter ? "active" : ""}`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </section>
  );
}

export default FilterBar;
