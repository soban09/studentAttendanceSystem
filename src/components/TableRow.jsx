import React from 'react'

const TableRow = ({ student, recordUpdatedHandler }) => {

    const checkout = async () => {
        console.log('hey');

        const d = new Date()
        const todayTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

        const newStudentDetails = {
            ...student,
            checkoutTime : todayTime
        }

        try{
            const response = await fetch(`https://student-attendance-b3eae-default-rtdb.firebaseio.com/202305/${student.key}.json`, {
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
                <td>{student.key}</td>
            </tr>
        </tbody>
    )
}

export default TableRow