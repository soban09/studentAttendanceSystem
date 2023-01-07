import React from 'react'
import Modal from '../Modal/Modal'
import Header from '../components/Header'
import PresentList from '../components/PresentList'
import { useState } from 'react'
import './attendance.css'

const Attendance = () => {
    const [showModal, setShowModal] = useState(false)
    const [refreshList, setRefreshList] = useState(false)
    

    const setRefreshHandler = () => {
        setRefreshList(!refreshList)
    }

    const ModalHandler = (val) => {
        setShowModal(val)
    }

    return (
        <div id='attendance'>
            <Header openModal={ModalHandler}/>
            {showModal && <Modal setRefresh={setRefreshHandler} closeModal={ModalHandler} />}
            <PresentList  refreshList={refreshList}/>
        </div>
    )
    
}

export default Attendance