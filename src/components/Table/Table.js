import React from 'react';
import Btn from '../Button/Button';
import Table from 'react-bootstrap/Table'
import './Table.css';

const Tables = ({ 
   users,
   handleEditClick,
   handleRemoveClick,
   data
 }) => {
   return (
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Имя</th>
      <th>Фамилия</th>
      <th>Зарплата</th>
      <th>Действия</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user, index) => (
               <tr>
                  <td>{index + 1}</td>
                  <td>{user.userName}</td>
                  <td>{user.userSurname}</td>
                  <td>{user.userSalary}</td>
                  <td>{data.data}</td>
                  <td>
                     <div>
                        <Btn
                           label="ред"
                           classNames="edit-ection"
                           handleClick={handleEditClick}
                           data={({ index, user })}
                           type="button"
                        />

                        <Btn
                           label="удалить"
                           classNames="remove-action"
                           handleClick={handleRemoveClick}
                           data={({ index })}
                           type="button"
                        />
                     </div>
                  </td>
               </tr>
            ))}
         </tbody>
</Table>
   )
}

export default Tables;