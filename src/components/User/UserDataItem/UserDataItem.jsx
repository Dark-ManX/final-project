import PropTypes from 'prop-types';
import edit from 'icons/edit.svg';
import {
  UserInfoList,
  UserInfoItem,
  UserInfoText,
  UserInfoBtn,
  UserInfoData,
} from './UserDataItem.styled';

export const UserDataItem = ({ user }) => {
  const { name, email, birthday, phone, city } = user;
  // console.log(user);

  return (
    <UserInfoList>
      <UserInfoItem>
        <UserInfoText>Name:</UserInfoText>
        <UserInfoData>{name}</UserInfoData>
        <UserInfoBtn>
          <img src={edit} alt="edit information about user" />
        </UserInfoBtn>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoText>Email:</UserInfoText>
        <UserInfoData>{email}</UserInfoData>
        <UserInfoBtn>
          <img src={edit} alt="edit information about user" />
        </UserInfoBtn>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoText>Birthday:</UserInfoText>
        <UserInfoData>{birthday}</UserInfoData>
        <UserInfoBtn>
          <img src={edit} alt="edit information about user" />
        </UserInfoBtn>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoText>Phone:</UserInfoText>
        <UserInfoData>{phone}</UserInfoData>
        <UserInfoBtn>
          <img src={edit} alt="edit information about user" />
        </UserInfoBtn>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoText>City:</UserInfoText>
        <UserInfoData>{city}</UserInfoData>
        <UserInfoBtn>
          <img src={edit} alt="edit information about user" />
        </UserInfoBtn>
      </UserInfoItem>
    </UserInfoList>
  );
};

UserDataItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  birthday: PropTypes.string,
  phone: PropTypes.string,
  city: PropTypes.string,
};
