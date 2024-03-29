import React from "react";

const FilterBtn = ({ name, items, index }) => {
  const add  = [1,2,3,4,5]
  return (
    <>
      <div>
        <style jsx>
          {`
            .x:checked ~ label {
              background-color: #0b5ed7;
              color: white;
            }

            input[type="radio"]{
              display: none;
            }
          `}
        </style>

        <div className="form-check">
          <input
            className="form-check-input x"
            type="radio"
            name={`${name}-${index}`}
            id={`${name}-${index}`}
          />
          <label className=" btn btn-outline-primary" htmlFor={`${name}-${index}`}>
            {items}
          </label>

        </div>
       
      </div>
    
    </>
  );
};

export default FilterBtn;
