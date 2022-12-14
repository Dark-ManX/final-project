import { useState, useEffect } from 'react';

const CurrentWorkTime = ({ today, workSchedule }) => {
  const [workTime, setWorkTime] = useState({ from: null, to: null });

  console.log(today, workSchedule);

  useEffect(() => {
    const daysChecker = (day, arr) => {
      if (arr) {
        switch (day) {
          case 'Mon':
            setWorkTime({ from: arr[0].from, to: arr[0].to });
            break;

          case 'Tue':
            setWorkTime({ from: arr[1].from, to: arr[1].to });
            break;

          case 'Wed':
            setWorkTime({ from: arr[2].from, to: arr[2].to });
            break;

          case 'Thu':
            setWorkTime({ from: arr[3].from, to: arr[3].to });
            break;

          case 'Fri':
            setWorkTime({ from: arr[4].from, to: arr[4].to });
            break;

          case 'Sat':
            setWorkTime({ from: arr[5].from, to: arr[5].to });
            break;

          case 'Sun':
            setWorkTime({ from: arr[0].from, to: arr[0].to });
            break;

          default:
            return;
        }
      }
      return;
    };

    daysChecker(today, workSchedule);
  }, [today, workSchedule]);

  return (
    <span>
      {workSchedule && workTime.from
        ? `${workTime.from} - ${workTime.to}`
        : '-------'}
    </span>
  );
};

export default CurrentWorkTime;
