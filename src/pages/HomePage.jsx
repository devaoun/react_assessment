import { useEffect, useState } from "react"
import axios from "axios"
import ListItem from "../components/ListItem"

function HomePage() {
    const [allData, setAllData] = useState([])
    const [title, setTitle] = useState('')

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get('https://cc17-assessment-api.onrender.com/v1/todo?userId=7')
            setAllData(response.data.data)

        } catch (error) {
            console.log(error)
        }
    }


    // Add
    const addTodo = async () => {
        const data = { title: title }
        try {
            const response = await axios.post('https://cc17-assessment-api.onrender.com/v1/todo?userId=7', data)
            const newData = [response.data.data, ...allData];
            setAllData(newData)
        } catch (error) {
            console.log(error)
        }
    }

    const handleInput = (event) => {
        setTitle(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();
        addTodo();
        setTitle('')
    }

    return (
        <>
            <div className="homePage">
                <div className='homePage_active'>
                    <div className="homePage_head">
                        <h1>My Todo</h1>
                    </div>
                    <div className="homePage_add">new task</div>
                    <form>
                        <input onChange={handleInput} value={title} />
                        <button hidden onClick={submit}/>
                    </form>
                    <ul className="home_todoList">
                        {allData.map(item => (
                            <ListItem 
                            key={item.id} 
                            status={item.status}
                            todoID={item.id} 
                            title={item.title}
                            setAllData={setAllData}
                            />
                        ))}
                    </ul>
                    <button className="logout_button">LOG OUT</button>
                </div>
            </div>
        </>
    )
}

export default HomePage