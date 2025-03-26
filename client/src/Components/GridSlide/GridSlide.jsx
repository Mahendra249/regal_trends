import React from "react";
import "./GridSlide.css";

const GridSlide = () => {
  return (
    <div className="gridSlide">
      <div className="gridslide-child child1">
        {" "}
        <img
          src={
            "https://images.pexels.com/photos/5734462/pexels-photo-5734462.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          id="img1"
          alt=""
        />
      </div>

      <div className="gridslide-child child2">
        <div className=" child-element ch1">
          <img
            src={
              "https://images.pexels.com/photos/5698847/pexels-photo-5698847.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
          />
        </div>

        <div className="child-element ch2">
          <div className="grand-child gc2">
            <img
              src={
                "https://images.pexels.com/photos/7778886/pexels-photo-7778886.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt=""
            />
          </div>
          <div className="grand-child gc3">
            <img
              src={
                "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="gridslide-child child3">
        <img
          src={
            "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt=""
        />
      </div>
    </div>
    
  );
};

export default GridSlide;
