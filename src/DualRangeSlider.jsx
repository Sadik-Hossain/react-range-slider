import React, { useState } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const DualRangeSlider = () => {
  const [range, setRange] = useState([100, 1200]);

  const handleChange = (values) => {
    setRange(values);
    console.log(values);
  };
  const handleUpdate = (values) => {
    // console.log(values); // logs the current value of the slider
  };
  return (
    <div className="w-1/2 mt-6 mx-auto">
      {/* 
      //* comment out strictmode to fix the error
      */}
      <Nouislider
        range={{ min: 100, max: 1200 }}
        start={range}
        connect={true}
        step={67}
        // tooltips={[true,false]}
        // tooltips={[true,true]}
        // tooltips
        tooltips={[
          { to: (value) => value + " $" },
          { to: (value) => value + " $" },
        ]}
        onChange={handleChange}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default DualRangeSlider;
