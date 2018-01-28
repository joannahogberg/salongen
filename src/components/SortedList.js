import React from "react";
import uuid from "uuid";
import * as FontAwesome from "react-icons/lib/fa";

function Lista(props) {
  let salonger = props.salonger.sort((a, b) => a.name.localeCompare(b.name));
  let salongList = salonger.map(sal => {
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
            <li>{sal.price}</li>
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

  return <div className="card lista">{salongList}</div>;
}

export default Lista;
