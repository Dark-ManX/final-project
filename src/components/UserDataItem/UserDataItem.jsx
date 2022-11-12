export const UserDataItem = ({ user }) => {
  const { name, email, birthday, phone, city } = user;

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
