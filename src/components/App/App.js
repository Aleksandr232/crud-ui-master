import React, { useState } from 'react';
import axios from 'axios';
import Btn from '../Button/Button';
import Input from '../Input/Input';
import Tables from '../Table/Table';
import './App.css';

const initialValues = {
  userName: '',
  userSurname: '',
  userSalary: ''
}

/* const api = {
  key: "af3904bcfb9954b533100c6413793863",
  base: "https://api.openweathermap.org/data/2.5/"
} */

function App() {
  
  const [userData, setUserData] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [editableUserData, setEditableUserData] = useState({
    isEdit: false,
    userIndex: null
  });
  const [datas, setData] = useState({});

  const clickData=()=>{ 
    fetch(`http://localhost:3000/GET/api/records`)

    /*  .then(response => response.json()) */
    .then(result => {
      console.log(result);
      
    });
  }
    
  

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
            datas={datas}
            users={users}
            handleEditClick={handleEditClick}
            handleRemoveClick={handleRemoveClick}
          />
        </div>

        <div>
          <form onSubmit={handleSubmitUser} onReset={handleCleanClick}>
            <Input
              placeholder="??????"
              handleChange={handleInputChange}
              value={userData.userName}
              fieldName="userName"
            />

            <Input
              placeholder="??????????????"
              handleChange={handleInputChange}
              value={userData.userSurname}
              fieldName="userSurname"
            />

            <Input
              placeholder="????????????????"
              handleChange={handleInputChange}
              value={userData.userSalary}
              fieldName="userSalary"
            />

            <div className="buttons-wrapper">
              <Btn
                label="??????????????"
                classNames=""
                handleClick={() => {}}
                data={null}
                type="reset"
              />

              <Btn
                label={editableUserData.isEdit ? '????????????????' : '????????????????'}
                classNames=""
                handleClick={() => {}}
                data={null}
                type="submit"
                disabled={!isFilledFields}
              />
              <Btn
              label='????????????????'
              classNames=""
              handleClick={clickData}
               /* data={datas}  */
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
