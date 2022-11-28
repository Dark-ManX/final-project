import styled from 'styled-components';
import { ReactComponent as PlusSvgIcon } from 'icons/VectorAddPet.svg';

export const ModalAddPetContainer = styled.div`
  width: 250px;
  overflow-y: auto;
`;

export const ModalName = styled.p`
  text-align: center;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 33px;
`;

export const CloseModal = styled.button`
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  right: 20px;
  top: 20px;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
`;

export const AddFileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const UploadImageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 208px;
  height: 208px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-top: 8px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    content: '';
    display: inline-block;
  }
`;

export const AddImageButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  background-color: inherit;
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const PlusIcon = styled(PlusSvgIcon)`
  width: 100%;
  height: 100%;
`;

export const AddFileInput = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  z-index: 999;
`;
export const AddFileLabelInput = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  margin-bottom: 20px;
`;

export const PetImage = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  object-position: center;
`;
