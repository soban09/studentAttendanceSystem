import React from 'react'

const TableRow = ({ student, recordUpdatedHandler, inputDate }) => {

    const checkout = async () => {
        console.log('hey');

        let date = new Date()
        const todayTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

        const newStudentDetails = {
            ...student,
            checkoutTime : todayTime
        }

        try{
            const response = await fetch(`https://student-attendance-b3eae-default-rtdb.firebaseio.com/${inputDate}/${student.key}.json`, {
                method : 'PUT',
                body : JSON.stringify(newStudentDetails)
            })

            if(!response.ok){
                throw new Error('oops cant fetch')
            }

            // const data = await response.json()
            // console.log(data);
            recordUpdatedHandler()
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <tbody>
            <tr>
                <td>{student.Name}</td>
                <td>{student.RollNo}</td>
                <td>{student.checkinTime}</td>
                <td>{student.checkoutTime}</td>
                <td>
                    {student.checkoutTime.length === 0 ? <button onClick={checkout}>checkout</button> : <p>-</p>}
                </td>
            </tr>
        </tbody>
    )
}

export default TableRow