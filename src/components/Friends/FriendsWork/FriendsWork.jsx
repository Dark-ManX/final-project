import React from 'react';
import shortid from 'shortid';
import { useState, useEffect } from 'react';

const FriendsWork = ({ arr }) => {
  const [day, setDay] = useState('MN');
  const [idx, setIdx] = useState(null);

  useEffect(() => {
    const setDayName = (arr, ind) => {
      switch (ind) {
        case 1:
          setDay('TU');
          break;
        case 2:
          setDay('WE');
          break;
        case 3:
          setDay('TH');
          break;
        case 4:
          setDay('FR');
          break;
        case 5:
          setDay('SA');
          break;
        case 6:
          setDay('SU');
          break;
        default:
          console.log('object');
          return;
      }
    };

    setDayName(idx);
  }, [idx]);
  return (
    <ul>
      {arr ? (
        arr.map((el, ind) => {
          const { from, to } = el;
          return (
            <li key={shortid.generate()}>
              {from && to ? `${from} - ${to}` : 'Holiday'}
            </li>
          );
        })
      ) : (
        <li>-------</li>
      )}
    </ul>
  );
};

export default FriendsWork;
