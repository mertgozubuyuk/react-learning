import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const BASE_URL = "http://localhost:3001";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
  };

  const getUserByID = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    //Post : veri okumak için kullanılır
    const response = await axios.post(`${BASE_URL}/users`, newUser);
  };

  const updateUser = async (userId, updateUser) => {
    //Put : veri güncellemek için kullanılır
    await axios.put(`${BASE_URL}/users/${userId}`, updateUser);
  };

  const deleteUserById = async (userId) => {
    await axios.delete(`${BASE_URL}/users/${userId}`);
  };

  useEffect(() => {
    getAllUsers();
    getUserByID(2);
    // deleteUserById("hCQifccg4h0")
  }, []);

  // useEffect(() => {
  //   const newUSer = {
  //     username: "bilal",
  //     password: "zz",
  //   };

  //   createUser(newUSer);
  // }, []);

  // useEffect(() => {
  //   updateUser("hCQifccg4h0", {
  //     username: "bilal",
  //     password: "xyz",
  //   });
  // }, []);

  return <></>;
}

export default App;
