import React from 'react'
import { useState } from 'react'

const Attendance = () => {

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

        const d = new Date()
        const todayDate = `${d.getFullYear()}${d.getMonth()}${d.getDate()}`
        const todayTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        // console.log(todayDate);

        const studentDetails = {
            Name: name,
            RollNo: rollNo,
            checkinTime : todayTime,
            checkoutTime : ''
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
    }


    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && <form>
                <label htmlFor="name">Name</label>
                <input id="name" value={name} onChange={nameChangeHandler} />
                <label htmlFor="rollno">Roll No</label>
                <input id="rollno" value={rollNo} onChange={rollnoChangeHandler} />
                <button onClick={submitDetails}>Submit</button>
            </form>}
        </div>
    )
}

export default Attendance