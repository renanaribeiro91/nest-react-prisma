import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/user";
import {  User } from "../interfaces";
import { incrementUserCount } from '../../../store/actions/users';
import { useDispatch } from 'react-redux';

function getErrorMessage(error: any) {
  const status = error?.response?.status;

  switch (status) {
    case 400:
      return "Url inválida, favor tente novamente.";
    case 404:
      return "Nenhum usuário encontrado, favor tente novamente.";
    case 409:
      return "Usuário já registrado, favor tente novamente.";
    default:
      return "Ops! Parece que algo deu errado.";
  }
}


export const useHandleApi = (nameFilter: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User>({
    name: '',
    birthdate: '',
    document: '',
    zipcode: '',
    street: '',
    neighborhood: '',
    city: '',
    state: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleFindUsers = async () => {
    try {

      const response = await UserService.findUser();
      setUsers(response);


    } catch (error: any) {
      const errorMessage = getErrorMessage(error);

      alert(errorMessage);

      if (nameFilter && error?.response.status === 404) { // verficar essa linha
        navigate("/");
      }
    }
  };

  const handleFilterByName = async () => {
    try {

      const response = await UserService.findUserByName(nameFilter);
      setUsers(response);


    } catch (error: any) {
      const errorMessage = getErrorMessage(error);

      alert(errorMessage);

      if (nameFilter && error?.response.status === 404) {
        navigate("/");
      }
    }
  };

  async function handleCreateUser() {
    try {
      await UserService.createUser({ ...newUser, acceptedTermsAndConditions: true });
        setNewUser({
        name: '',
        birthdate: '',
        document: '',
        zipcode: '',
        street: '',
        neighborhood: '',
        city: '',
        state: '',
      });
        dispatch(incrementUserCount());
        handleFindUsers();


    } catch (err: any) {
      const errorMessage = getErrorMessage(err);

      alert(errorMessage);
    }

    // setUsers([]);
  }

  const handleUpdateUser = async (editingUser:any) => {
    try {
      if (editingUser) {

        const updatedUser = {
          ...editingUser,
          name: newUser.name,
          birthdate: newUser.birthdate,
          document: newUser.document,
          zipcode: newUser.zipcode,
        };

        await UserService.updateUser(editingUser.id, updatedUser);
        handleFindUsers();
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  const  handleDeleteUser = async (userId:any) => {
    try {
      await UserService.deleteUser(userId);

      handleFindUsers();
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return {
    handleFindUsers,
    handleFilterByName,
    handleCreateUser,
    users,
    newUser,
    setNewUser,
    handleUpdateUser,
    handleDeleteUser
  };
};
