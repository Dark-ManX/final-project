import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('user/fetchRequest');
export const fetchContactsSuccess = createAction('user/fetchSuccess');
export const fetchContactsError = createAction('user/fetchError');

export const addContactRequest = createAction('user/addPetRequest');
export const addContactSuccess = createAction('user/addPetSuccess');
export const addContactError = createAction('user/addPetError');

export const deleteContactRequest = createAction('user/deletePetRequest');
export const deleteContactSuccess = createAction('user/deletePetSuccess');
export const deleteContactError = createAction('user/deletePetError');

export const editContactRequest = createAction('phone/editContactRequest');
export const editContactSuccess = createAction('phone/editContactSuccess');
export const editContactError = createAction('phone/editContactError');
