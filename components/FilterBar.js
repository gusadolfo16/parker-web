import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [filters, setFilters] = useState({}); // State for filter options

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value }); // Update filter state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(filters); // Call parent function with filter options
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add filter fields (e.g., select for tags, categories) */}
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterBar;
