import React from "react";

export default function Card({ data }) {
  console.log(data);
  return (
    <>
      <div className="cardContainer">
        <div className="card">
          <img className="cardImg" src={data.image} alt="Series pic" />
          <div className="cardInfo">
            <span className="cardCategory">{data.Category}</span>
            <h3 className="cardTitle">{data.title}</h3>
            <a className="cardButton" href={data.link}>
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
