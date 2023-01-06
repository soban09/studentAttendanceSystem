import React from 'react'
import { useState } from 'react'

const Modal = ({setRefresh, closeModal}) => {
    const [name, setName] = useState('')
    const [rollNo, setRollNo] = useState('')
    const [loading, setLoading] = useState(false)

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const rollnoChangeHandler = (event) => {
        setRollNo(event.target.value)
    }

    const submitDetails = async () => {

        setLoading(true)

        let date = new Date()
        const todayDate = date.toISOString().split('T')[0]
        const todayTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        // console.log(todayDate);

        const studentDetails = {
            Name: name,
            RollNo: rollNo,
            checkinTime: todayTime,
            checkoutTime: ''
        }

        console.log(studentDetails);

        try {
            const response = await fetch(`https://student-attendance-b3eae-default-rtdb.firebaseio.com/${todayDate}.json`, {
                method: 'POST',
                body: JSON.stringify(studentDetails)
            })

            if (!response.ok) {
                throw new Error('Sorry unable to take your attendance')
            }

            const data = await response.json()
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }

        setName('')
        setRollNo('')
        setLoading(false)
        closeModal(false)  
        setRefresh()
    }
    
    const closeModalHandler = () => { 
        closeModal(false)  
    }

    return (
        <>
            <div onClick={closeModalHandler} className='backDrop' />

            <div className='modal'>
                {!loading && <form>
                    <label htmlFor="name">Name</label>
                    <input id="name" value={name} type='text' onChange={nameChangeHandler} />
                    <label htmlFor="rollno">Roll No</label>
                    <input id="rollno" value={rollNo} type='text' onChange={rollnoChangeHandler} />
                    <button onClick={submitDetails} className='modal-btn' type="submit">Add</button>
                    {/* <button onClick={closeModalHandler} className='modal-btn' type="submit">Add</button> */}
                </form>}
            </div>
        </>
    )
}

export default Modal