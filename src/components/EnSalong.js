import React from 'react';
import uuid from 'uuid';
import * as FontAwesome from 'react-icons/lib/fa';
import headerImg from '../utils/headerImg.png';

function EnSalong(props) {
  const salonger = props.salonger.filter(sal => sal.id === props.id);

  let salong = salonger.map(sal => {
    let fullStars = [];
    let noStars = [];
    const rating = sal.stars;
    const numStars = 5 - rating;
    for (var i = 0; i < rating; i++) {
      fullStars.push(<FontAwesome.FaStar key={uuid.v4()} />);
    }
    for (i = 0; i < numStars; i++) {
      noStars.push(<FontAwesome.FaStarO key={uuid.v4()} />);
    }
    const stars = fullStars.concat(noStars);
    return (
      <div key={uuid.v4()} className="card">
        <div className="card card-inverse">
          <img
            className="card-img"
            src={headerImg}
            alt="Card cap"
            style={{ width: "100%" }}
          />
          <div className="card-img-overlay">
            <div className="card-nav">
              <FontAwesome.FaChevronLeft onClick={props.onClick} />
              <FontAwesome.FaHeartO />
            </div>
            <div className="card-block">
            <h4 className="card-title">{sal.name}</h4>
            <p className="card-text">
            {stars}
              <span className="votes">({sal.votes})</span>
            </p>
            </div>
          </div>
        </div>
        <div className="card-block-top">
    <a href="" className="card-link">Info</a>
    <a href="" className="card-link">Schema</a>
  </div>
        <ul className="list-group list-group-flush">
        <li><FontAwesome.FaMapMarker /> <span>Rådmansgatan 46, 113 57 Stockholm</span></li>
        <li><FontAwesome.FaClockO /> <span>Öppet till 19:00 idag</span> <FontAwesome.FaChevronDown /></li>
        <li><FontAwesome.FaPhone /> <span>08-522 389 20</span></li>
        <li><FontAwesome.FaGlobe /><span className="text-lowercase"> www.{sal.name.replace(/\s/g,'').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/&/g, '-')}.se</span></li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
        </ul>   
      </div>
    );
  });
  return <div className="salong">{salong}</div>;
}

export default EnSalong;
