import React from 'react'
import Header from '../../others/header'
import TaskListNumber from '../../others/taskListNumber'
import Tasklist from '../taskList/tasklist'

const EmployeeDashboard = () => {
    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header />
            <TaskListNumber />
            <Tasklist/>
        </div>
    )
}

export default EmployeeDashboard
