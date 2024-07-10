import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserList } from './store/userSlice';
import SignupForm from './components/SignupForm';
import UserList from './components/UserList';

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    fetch('https://didactic-disco-backend.vercel.app/api/users')
      .then((response) => response.json())
      .then((data) => dispatch(setUserList(data)))
      .catch((error) => console.error("Failed to fetch users:", error));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
