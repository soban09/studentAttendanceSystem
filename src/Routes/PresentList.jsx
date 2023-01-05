import React from 'react'
import { useState, useEffect } from 'react'
import TableRow from '../components/TableRow'

const PresentList = () => {
    const [presentList, setPresentList] = useState([])
    const [recordUpdated, setRecordUpdated] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPresentStudents = async () => {
            setLoading(true)

            const d = new Date()
            const todayDate = `${d.getFullYear()}${d.getMonth()}${d.getDate()}`

            try {
                const response = await fetch(`https://student-attendance-b3eae-default-rtdb.firebaseio.com/${todayDate}.json`)

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
    }, [recordUpdated])

    const recordUpdatedHandler = () => {
        console.log('nice');
        setRecordUpdated(!recordUpdated)
    }

    return (
        <div>
            <h3>Fetch all students</h3>
            {loading && <p>Loading...</p>}
            {!loading && <table>
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
                        <TableRow key={idx} student={student} recordUpdatedHandler={recordUpdatedHandler} />
                    )
                })}
            </table>}
        </div>
    )
}

export default PresentList