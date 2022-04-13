import React from 'react';
import {useCountdown} from '../../hooks/useCountdown.js';
import DateTimeDisplay from './TimeDisplay';
const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>It's time anon!</span>
      <p>LFG</p>
      <button className="button" ><a target="_blank" rel="noreferrer noopener" href= "https://one-eyed-bandit.gitbook.io/goat-money/">DApp</a></button>
    </div>
  );
};
const ShowCounter = ({ days, hours, minutes, seconds }) => {
  const dias = "Days" ;
  const horas = "Hours";
  const mins = "Mins";
  const secs = "Seconds";

  return (
    <div className="show-counter">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={dias} isDanger={days <= 3} />
        <p className="date-time-display">:</p>
        <DateTimeDisplay value={hours} type={horas} isDanger={false} />
        <p className="date-time-display">:</p>
        <DateTimeDisplay value={minutes} type={mins} isDanger={false} />
        <p className="date-time-display">:</p>
        <DateTimeDisplay value={seconds} type= {secs} isDanger={false} />
      </a>
    </div>
  );
};
const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
export default CountdownTimer;