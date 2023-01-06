import React from 'react'
import { useState, useEffect } from 'react'
import { BsPlusLg } from "react-icons/bs";
import TableRow from './TableRow'

const PresentList = ({ openModal, refreshList }) => {

    let date = new Date()
    const todayDate = date.toISOString().split('T')[0]

    const [presentList, setPresentList] = useState([])
    const [recordUpdated, setRecordUpdated] = useState(false)
    const [inputDate, setInputDate] = useState(todayDate)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPresentStudents = async () => {
            setLoading(true)

            // const d = new Date()
            // const todayDate = `${d.getFullYear()}${d.getMonth()}${d.getDate()}`

            try {
                const response = await fetch(`https://student-attendance-b3eae-default-rtdb.firebaseio.com/${inputDate}.json`)

                if (!response.ok) {
                    throw new Error('Sorry unable to fetch students')
                }

                const data = await response.json()
                // console.log(data);

                const list = []
                for (const key in data) {
                    list.push({
                        key: key,
                        Name: data[key].Name,
                        RollNo: data[key].RollNo,
                        checkinTime: data[key].checkinTime,
                        checkoutTime: data[key].checkoutTime
                    })
                }
                // console.log(list);
                setPresentList(list)
            }
            catch (error) {
                console.log(error);
            }
            setLoading(false)
        }

        fetchPresentStudents()
    }, [recordUpdated, refreshList])

    const recordUpdatedHandler = () => {
        console.log('nice');
        setRecordUpdated(!recordUpdated)
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
        setRecordUpdated(!recordUpdated)
        // console.log(d);
    }

    const openModalHandler = () => {
        openModal(true)
    }

    return (
        <div className='present_list'>
            <div className="present_list_header">
                <h3 className='heading'>Add a student</h3>
                <BsPlusLg onClick={openModalHandler} className='add_icon' />
                {/* <button onClick={openModalHandler}>Add</button>  */}
                <br></br>
                <h3 className='heading'>{inputDate}</h3>
                <label htmlFor='date'>Select date</label>
                <input onChange={dateChangeHandler} id='date' type='date' />
            </div>

            <br></br>

            {loading && <p className='loading'>Loading...</p>}

            {!loading && presentList.length === 0 && 
            <div className='empty-msg-box'>
                <h3>Nothing to show here :)</h3>
            </div>}

            {!loading && presentList.length > 0 && <div className='present_list_body'><table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Check-in time</th>
                        <th>Check-out time</th>
                        <th>checkout</th>
                    </tr>
                </thead>
                {presentList.map((student, idx) => {
                    return (
                        <TableRow key={idx} student={student} recordUpdatedHandler={recordUpdatedHandler} inputDate={inputDate} />
                    )
                })}
            </table></div>}
        </div>
    )
}

export default PresentList