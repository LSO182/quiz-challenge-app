import { useState, useEffect } from "react";

export default function QuestionTimer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, timeOut]);

  useEffect(() => {
    const inverval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(inverval);
    };
  }, []);

  return (
    <progress id="question-time" max={timeOut} value={remainingTime}></progress>
  );
}
