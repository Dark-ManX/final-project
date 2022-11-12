import PropTypes from 'prop-types';

export const UserDataItem = ({ user }) => {
  const { name, email, birthday, phone, city } = user;
  console.log(user);

  return (
    <ul>
      <li>
        <p>Name:{name}</p>
        <button>Edit or Done</button>
      </li>
      <li>
        <p>Email:{email}</p>
        <button>Edit or Done</button>
      </li>
      <li>
        <p>Birthday:{birthday}</p>
        <button>Edit or Done</button>
      </li>
      <li>
        <p>Phone:{phone}</p>
        <button>Edit or Done</button>
      </li>
      <li>
        <p>City:{city}</p>
        <button>Edit or Done</button>
      </li>
    </ul>
  );
};

UserDataItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    birthday: PropTypes.string,
    phone: PropTypes.string,
    city: PropTypes.string,
  }),
};
