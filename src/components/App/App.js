import React, { useState } from 'react';
import Btn from '../Button/Button';
import Input from '../Input/Input';
import Tables from '../Table/Table';
import './App.css';

const initialValues = {
  userName: '',
  userSurname: '',
  userSalary: ''
}

function App() {
  const [userData, setUserData] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [editableUserData, setEditableUserData] = useState({
    isEdit: false,
    userIndex: null
  });

  const handleRemoveClick = ({ index }) => {
    setUsers(users.filter((user, userIndex) => userIndex !== index));
  };

  const isFilledFields = userData.userName && userData.userSurname && userData.userSalary;

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (isFilledFields) {
      if (editableUserData.isEdit) {
        const editedData = users;
        editedData.splice(editableUserData.userIndex, 1, userData);

        setUsers(editedData);

        setEditableUserData({
          isEdit: false,
          userIndex: null
        })
      } else {
        setUsers((prevState) => [...prevState, userData]);
      }

      setUserData(initialValues)
    }
  }

  const handleCleanClick = () => {
    setUserData(initialValues);
    setEditableUserData({
      isEdit: false,
      userIndex: null
    })
  };

  const handleEditClick = ({ user, index }) => {
    setUserData(user);
    setEditableUserData({
      isEdit: true,
      userIndex: index
    })
  }

  const handleInputChange = (e, userName) => setUserData((prevState) => ({
    ...prevState,
    [userName]: e.target.value
  }))

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
          <Tables
            users={users}
            handleEditClick={handleEditClick}
            handleRemoveClick={handleRemoveClick}
          />
        </div>

        <div>
          <form onSubmit={handleSubmitUser} onReset={handleCleanClick}>
            <Input
              placeholder="имя"
              handleChange={handleInputChange}
              value={userData.userName}
              fieldName="userName"
            />

            <Input
              placeholder="фамилия"
              handleChange={handleInputChange}
              value={userData.userSurname}
              fieldName="userSurname"
            />

            <Input
              placeholder="зарплата"
              handleChange={handleInputChange}
              value={userData.userSalary}
              fieldName="userSalary"
            />

            <div className="buttons-wrapper">
              <Btn
                label="удалять"
                classNames=""
                handleClick={() => {}}
                data={null}
                type="reset"
              />

              <Btn
                label={editableUserData.isEdit ? 'изменить' : 'добавить'}
                classNames=""
                handleClick={() => {}}
                data={null}
                type="submit"
                disabled={!isFilledFields}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
