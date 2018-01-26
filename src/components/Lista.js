import React from 'react';
import uuid from 'uuid';
import * as FontAwesome from 'react-icons/lib/fa'

function Lista(props) {
  let salong = props.salonger.map(sal => {
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
      <ul key={uuid.v4()} className="list-group list-group-flush">
        <li>12:00</li>
        <li>
          <ul>
            <li>{sal.name}</li>
            <li>
              {stars}
              <span className="votes">({sal.votes})</span>
            </li>
            <li>Rådmansgatan 46</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>320 kr</li>
            <li>
              30 min{" "}
              <FontAwesome.FaChevronRight
                onClick={() => props.onClick(sal.id)}
              />
            </li>
          </ul>
        </li>
      </ul>
    );
  });
  return (
    <div className="card lista">
      <div className="card-block">
        <FontAwesome.FaChevronLeft />
        <h1>Hår</h1>
        <FontAwesome.FaList />
      </div>
      <div className="card-block">
        <h3>Pris 250-350 kr</h3>
        <FontAwesome.FaChevronDown />
      </div>
      {salong}
    </div>
  );
}

export default Lista;