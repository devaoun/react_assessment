import axios from "axios"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
function ListItem({ title, todoID, setAllData, status }) {

    const [isCheck, setIsCheck] = useState(status)

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`https://cc17-assessment-api.onrender.com/v1/todo/${id}?userId=7`);
            setAllData(p => p.filter(item => item.id !== id));

        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = () => {
        deleteTodo(todoID)
    }

    const updateStatus = async (id, isCheck) => {
        console.log(id)
        console.log(isCheck)
        const data = isCheck ? { status: true, title: title } : { status: false, title: title }
        console.log(data)
        try {
            await axios.patch(`https://cc17-assessment-api.onrender.com/v1/todo/${id}?userId=7`, data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleCheckbox = (event) => {
        updateStatus(todoID, event.target.checked)
        setIsCheck(!isCheck)
    }

    return (
        <>
            <li className="list_item">
                <div>
                    <input type="checkbox" className="pointer" onChange={handleCheckbox} checked={isCheck} />
                    <span>{title}</span>
                </div>
                <button className="pointer" onClick={handleDelete}>x</button>
            </li>
        </>
    )
}

export default ListItem