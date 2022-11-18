import React, { useState, useEffect } from 'react';
import {
  Input,
  Title,
  Container,
  Form,
  RegisterBtn,
  BackBtn,
  P,
  Span,
  ImageContainer,
  Section,
} from './RegisterPageDetails.styled';

import { useSelector } from 'react-redux';

const RegistrationDetails = ({ formData, setFormData }) => {
  return (
    <>
      <Input
        type="text"
        onChange={e => {
          setFormData({
            ...formData,
            name: e.target.value,
          });
        }}
        // name="name"
        value={formData.name}
        placeholder="Name"
        // onChange={handleChange}
      />
      <Input
        type="text"
        onChange={e => {
          setFormData({
            ...formData,
            city: e.target.value,
          });
        }}
        // name="city"
        value={formData.city}
        placeholder="City, region"
        // onChange={handleChange}
      />
      <Input
        type="tel"
        onChange={e => {
          setFormData({
            ...formData,
            phone: e.target.value,
          });
        }}
        // name="phone"
        value={formData.phone}
        placeholder="Mobile phone"
        // onChange={handleChange}
      />

      {/* <P>
        Already have an account?
        <Link to={`/login`} state={{ from: location }}>
          <Span>Login </Span>
        </Link>
      </P> */}
    </>
  );
};

export default RegistrationDetails;
