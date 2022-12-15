import shortid from 'shortid';

const FriendsWork = ({ arr }) => {
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
        <li>No information</li>
      )}
    </ul>
  );
};

export default FriendsWork;
