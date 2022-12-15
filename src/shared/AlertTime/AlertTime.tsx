import React, { useEffect, useState } from "react";

import "./alertime.css";

interface Props {
  time: string | undefined;
  status: string | null | undefined;
}

const AlertTime = ({ time, status }: Props) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    if (status === "Active" && time !== undefined ) setDate(new Date(time));
  }, [time, status]);

  if (
    date &&
    date.getDate() === currentDate.getDate() &&
    date.getMonth() + 1 === currentDate.getMonth() + 1
  ) {
    return (
      <div className="alert-time-container">
        <h4>New on site today</h4>
      </div>
    );
  }

  if (
    date &&
    date.getMonth() + 1 === currentDate.getMonth() + 1 &&
    currentDate.getDate() - date.getDate()  === 1
  ) {
    return (
      <div className="alert-time-container">
        <h4>New on site {currentDate.getDate() - date.getDate()} day ago</h4>
      </div>
    );
  }

  if (
    date &&
    date.getMonth() + 1 === currentDate.getMonth() + 1 &&
    currentDate.getDate() - date.getDate()  < 5
  ) {
    return (
      <div className="alert-time-container">
        <h4>New on site {currentDate.getDate() - date.getDate()} days ago</h4>
      </div>
    );
  }

  return null;
};

export default AlertTime;
