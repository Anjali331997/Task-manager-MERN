import React from 'react'
import './Dashboard.css'
import AddTaskbutton from '../../components/addTaskButton/AddTaskbutton'
import Header from '../../components/Header/Header'
import { CgMenuGridR } from "react-icons/cg";
import { GrGroup } from "react-icons/gr";
import { MdIncompleteCircle } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";


const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='dashboard-container'>

        <div className='sidebar-container'>
          <div>
            <CgMenuGridR />
            All Tasks</div>
          <div>
            <GrGroup />
            Group Task</div>
          <div>
            <MdIncompleteCircle />
            Pending</div>
          <div>
            <GrCompliance />
            Completed</div>
        </div>

        <div className='main-container'>
          <div className='main-container-top'>
            <AddTaskbutton />
          </div>
          <div className='task-item-display'>
            {/* <TaskItemGrid/> */}
          </div>
        </div>


      </div>
    </>
  )
}

export default Dashboard