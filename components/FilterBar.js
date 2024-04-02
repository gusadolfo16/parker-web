import { useState } from "react";

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState([]); // Array to store selected filters

  const handleFilterClick = (e) => {
    const newFilters = [...filters]; // Avoid mutating state directly
    if (e.target.checked) {
      newFilters.push(e.target.value);
    } else {
      newFilters.filter(filter => filter !== e.target.value);
    }
    setFilters(newFilters);
    onFilterChange(newFilters); // Call callback to notify about filter changes
  };

  return (
    <div className="filter-bar">
      <h3>Filters</h3>
      <ul>
        {/* Replace with your actual filter options */}
        <li>
          <input type="checkbox" id="filter1" value="category1" onChange={handleFilterClick} />
          <label htmlFor="filter1">Category 1</label>
        </li>
        <li>
          <input type="checkbox" id="filter2" value="category2" onChange={handleFilterClick} />
          <label htmlFor="filter2">Category 2</label>
        </li>
        {/* ... Add more filter options as needed */}
      </ul>
    </div>
  );
};

export default FilterBar;
