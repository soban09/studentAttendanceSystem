import React from 'react'
import Modal from '../Modal/Modal'
import Header from '../components/Header'
import PresentList from '../components/PresentList'
import { useState } from 'react'

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
        <div>
            <Header/>
            {showModal && <Modal setRefresh={setRefreshHandler} closeModal={ModalHandler} />}
            <PresentList openModal={ModalHandler} refreshList={refreshList}/>
        </div>
    )
    
}

export default Attendance