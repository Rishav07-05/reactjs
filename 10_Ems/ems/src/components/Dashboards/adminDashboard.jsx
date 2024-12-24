import React from 'react';
import Header from '../../others/header';
import CreateTask from '../../others/createTask';

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-6 '>
      <Header />
      <CreateTask/>
    </div>
  );
};

export default AdminDashboard;
