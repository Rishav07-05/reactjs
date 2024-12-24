import React from 'react';
import Header from '../../others/header';
import CreateTask from '../../others/createTask';
import AllTask from '../../others/allTask';

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-6 '>
      <Header />
        <CreateTask />
        <AllTask/>
    </div>
  );
};

export default AdminDashboard;
