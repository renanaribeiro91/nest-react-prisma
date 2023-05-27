import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBell, FaEdit } from 'react-icons/fa';
import * as S from './styles'
import { useHandleApi } from './controller';
import { User } from './interfaces';



function Home() {
  const userCount = useSelector((state: any) => state.userCount);
  const [nameFilter, setNameFilter] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [onChangeNameFilter, setOnChangeNameFilter] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleCreateUser, handleFindUsers,handleFilterByName, handleDeleteUser, handleUpdateUser, users, newUser, setNewUser } =
    useHandleApi(nameFilter);

  const handleNameFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNameFilter(value);
    setOnChangeNameFilter(value.length > 0);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAcceptedTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptedTerms(event.target.checked);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleUpdate = () => {
    handleUpdateUser(editingUser);
    handleCloseModal();
  };

  const getNotificationIcon = () => {
    if (userCount > 0) {
      return <FaBell />;
    }
    return null;
  };

  return (
    <S.Container>
      <S.Header>
        <h1 style={{ color: 'black' }}>Usuários</h1>
        <S.NotificationIcon onClick={() => setShowNotification(!showNotification)}>
          {getNotificationIcon()}
          {showNotification && <S.NotificationCount>{userCount}</S.NotificationCount>}
        </S.NotificationIcon>
      </S.Header>

      <S.Form onSubmit={handleCreateUser}>
        <S.Input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          placeholder="Nome"
          required
        />
        <S.Input
          type="date"
          name="birthdate"
          value={newUser.birthdate}
          onChange={handleInputChange}
          placeholder="Data de Nascimento"
          required
        />

        <S.Input
          type="text"
          name="document"
          value={newUser.document}
          onChange={handleInputChange}
          placeholder="CPF"
          required
        />
        <S.Input
          type="text"
          name="zipcode"
          value={newUser.zipcode}
          onChange={handleInputChange}
          placeholder="CEP"
          required
        />
        <label>
          Aceito os termos e condições:
          <input type="checkbox" checked={acceptedTerms} onChange={handleAcceptedTermsChange} />
        </label>
        <S.Button type="submit" disabled={!acceptedTerms}>
          Adicionar Usuário
        </S.Button>
      </S.Form>

      <S.Form>
        <S.Input
          type="text"
          name="nameFilter"
          value={nameFilter}
          onChange={handleNameFilterChange}
          placeholder="Filtrar por nome"
        />
        <S.Button type="button" onClick={handleFilterByName} disabled={!onChangeNameFilter}>
          Pesquisar
        </S.Button>
        <S.Button style={{ marginTop: '50px' }} type="button" onClick={handleFindUsers}>
          Buscar todos
        </S.Button>
      </S.Form>

      <S.Table>
        <thead>
          <tr>
            <S.TableHeader>Nome</S.TableHeader>
            <S.TableHeader>Data de Nascimento</S.TableHeader>
            <S.TableHeader>Documento</S.TableHeader>
            <S.TableHeader>CEP</S.TableHeader>
            <S.TableHeader>Endereço</S.TableHeader>
            <S.TableHeader>Bairro</S.TableHeader>
            <S.TableHeader>Cidade</S.TableHeader>
            <S.TableHeader>Estado</S.TableHeader>
            <S.TableHeader>Ações</S.TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User | any) => (
            <S.TableRow key={user.id}>
              <S.TableCell>{user.name}</S.TableCell>
              <S.TableCell>{user.birthdate}</S.TableCell>
              <S.TableCell>{user.document}</S.TableCell>
              <S.TableCell>{user.zipcode}</S.TableCell>
              <S.TableCell>{user.street}</S.TableCell>
              <S.TableCell>{user.neighborhood}</S.TableCell>
              <S.TableCell>{user.city}</S.TableCell>
              <S.TableCell>{user.state}</S.TableCell>
              <S.TableCell>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  <S.TrashIcon onClick={() => handleDeleteUser(user.id)} />
                  <FaEdit onClick={() => handleEditUser(user)} />
                </div>
              </S.TableCell>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>

      {isModalOpen && editingUser && (
        <S.Modal>
          <S.ModalContent>
            <h2 style={{ color: 'red' }}>Editar Usuário</h2>
            <S.Form>
              <S.Input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                placeholder="Nome"
                required
              />
              <S.Input
                type="date"
                name="birthdate"
                value={newUser.birthdate}
                onChange={handleInputChange}
                placeholder="Data de Nascimento"
                required
              />
              <S.Input
                type="text"
                name="document"
                value={newUser.document}
                onChange={handleInputChange}
                placeholder="Documento"
                required
              />
              <S.Input
                type="text"
                name="zipcode"
                value={newUser.zipcode}
                onChange={handleInputChange}
                placeholder="CEP"
                required
              />
              <S.ModalFooter>
                <S.Button type="button" onClick={handleCloseModal}>
                  Cancelar
                </S.Button>
                <S.Button type="button" onClick={handleUpdate}>
                  Atualizar
                </S.Button>
              </S.ModalFooter>
            </S.Form>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
}

export default Home;
