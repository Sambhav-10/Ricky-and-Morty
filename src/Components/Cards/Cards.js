import React from "react";
import "./card.css"
const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((e) => {
      let { id, name, image, location, status } = e;

      return (
        <div key={id} className="col-4 container my-1 p-1  ">
          <div className="content shadow-none p-3 mb-5 bg-body-tertiary rounded">
            <img src={image} alt="" className="img-fluid" />
            <div>
              <h1 className="fs-4 fw-bold mb-4">{name}</h1>
              <div>
                <div className="fs-6">Last location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>

          <div className="badge text-black ">
            {(() => {
              if (status === "Dead") {
                return (
                  
                  <div className={` position-absolute badge bg-danger`}>
                  {" "}
                  {status}
                </div>
                  
                )
              } 
             else if (status ==="Alive") {
              return (
                <div className={` position-absolute badge bg-success`}>
                {" "}
                {status}
              </div>
              )
             }
             else{
              return (
                <div className={` position-absolute badge bg-secondary`}>
                {" "}
                {status}
              </div>
              )
             }
            })()}
          </div>
        </div>
      );
    });
  } else {
    display = "No Characterws Found ";
  }
  return <>{display}</>;
};

export default Cards;
