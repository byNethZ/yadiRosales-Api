import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requests from "../../request";

import "./counts.css";

interface Count {
  name: string;
  count: number;
}

const Counts = () => {
  const [countsCounty, setCountsCounty] = useState<Count[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(requests.fetchCounts);

    const data = await response.json();
    setCountsCounty(data.countyCounts);
  };

  const handleClick = (value: string) => {
    navigate(`/results/all/county/${value}`);
  }

  return (
    <div className="counts-container content-container">
      <h2>Top Counties</h2>
      <div className="counts-content">
        {countsCounty.map((count, index) => (
          <div onClick={ () => handleClick(count.name) } className="counts-row" key={index}>
            <p className="counts-row-name">{count.name}</p>
            <div className="counts-row-quantity">
              <p>{count.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counts;
