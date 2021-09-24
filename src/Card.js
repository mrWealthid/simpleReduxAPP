import React from "react";
import image from "./Rectangle.png";

const Card = () => {
  return (
    <div className="card">
      <p className="card_title">Company Break</p>

      <img src={image} alt="rect" />
      <div className="schedule">
        <div className="date">
          <p className="schedule_title">Date</p>
          <p>1st Sep - 5th Sep</p>
        </div>

        <div className="date">
          <p className="schedule_title">Time</p>
          <p>1st Sep - 5th Sep</p>
        </div>
      </div>
      <div className="event_desc">
        <h5>Description</h5>
        <p>
          Sapien, mattis tempor mauris nibh facilisi bibendum orci, diam. Est
          rutrum porttitor volutpat vitae donec sit. In neque facilisis tortor
          id pretium feugiat ipsum egestas. Molestie cursus urna eu vel cursus
          et feugiat. Quis elementum, blandit cursus turpis consequat.......
        </p>
      </div>

      <div className="reminder">
        <select className="reminder-dropdown">
          <option value="0">Set Reminder</option>
          <option>Audi</option>
          <option>BMW</option>
          <option>Citroen</option>
          <option>Ford</option>
        </select>
      </div>
    </div>
  );
};

export default Card;
