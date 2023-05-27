import styled from "styled-components";
import { FaTrash, FaBell, FaEdit } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: #fff;
  padding: px;
  width: 100%;
`;

export const NotificationIcon = styled.div`
  background-color: #ee5757;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NotificationCount = styled.span`
  background-color: #ff6b6b;
  color: #fff;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-top: 10px;
`;

export const EditIcon = styled.div`
  cursor: pointer;
  /* Estilize o ícone de edição aqui */
`;

export const Table = styled.table`
  margin-top: 30px;
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeader = styled.th`
  background-color: #ee5757;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #e58282;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TrashIcon = styled(FaTrash)`
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  max-width: 400px;
  width: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
