import { Input } from './RegisterPageDetails.styled';
import { useSelector } from 'react-redux';


const RegistrationDetails = ({ formData, setFormData }) => {
  const isId = useSelector(state => state.auth.user.id);
  console.log(isId)

  return (
    <>
      <Input
        type="text"
        // onChange={e => {
        //   setFormData({
        //     ...formData,
        //     name: e.target.value,
        //   });
        // }}
        value={name}
        placeholder="Name"
      />
      <Input
        type="text"
        // onChange={e => {
        //   setFormData({
        //     ...formData,
        //     city: e.target.value,
        //   });
        // }}
        value={city}
        placeholder="City, region"
      />
      <Input
        type="tel"
        // onChange={e => {
        //   setFormData({
        //     ...formData,
        //     phone: e.target.value,
        //   });
        // }}
        value={phone}
        placeholder="Mobile phone"
      />
    </>
  );
};

export default RegistrationDetails;
