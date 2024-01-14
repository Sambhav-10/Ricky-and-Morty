import React from "react";
import FilterBtn from "../FilterBtn";

const Species = () => {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Popybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
               className="accordion-button collapsed"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#collapseTwo"
               aria-expanded="false"
               aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {species.map((items, index) => {
            return <FilterBtn index={index} items={items} name={"status"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Species;
