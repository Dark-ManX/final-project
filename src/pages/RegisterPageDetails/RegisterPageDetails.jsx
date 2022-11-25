import { Input } from './RegisterPageDetails.styled';

const RegistrationDetails = ({ name, city, phone }) => {
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
