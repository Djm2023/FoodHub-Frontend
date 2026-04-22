import React, { useState, useRef, useEffect } from "react";

const FilterBar = ({ CategoryFilters, handleFilter }) => {
  const [active, setActive] = useState("None");
  const [sliderStyle, setSliderStyle] = useState({});
  const refs = useRef([]);

  useEffect(() => {
    const index = CategoryFilters.indexOf(active);
    const el = refs.current[index];

    if (el) {
      setSliderStyle({
        width: el.offsetWidth,
        transform: `translateX(${el.offsetLeft}px)`,
      });
    }
  }, [active, CategoryFilters]);

  return (
    <div className="flex justify-center mt-4 items-center gap-3">
      {/* Label (kept outside for correct alignment) */}
      <span className="text-sm text-gray-500">Filter</span>

      <div className="relative flex bg-white rounded-full shadow-sm p-1 overflow-hidden">
        {/* Sliding Indicator */}
        <div
          className="absolute top-1 bottom-1 bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
          style={sliderStyle}
        />

        {/* Options */}
        {CategoryFilters.map((item, index) => (
          <button
            key={item}
            ref={(el) => (refs.current[index] = el)}
            onClick={(e) => {
              e.preventDefault();
              setActive(item);
              handleFilter(item);
            }}
            className={`relative z-10 px-4 py-1 text-sm rounded-full whitespace-nowrap transition ${
              active === item ? "text-white" : "text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
