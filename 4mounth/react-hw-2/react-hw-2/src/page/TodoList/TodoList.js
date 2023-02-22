import classes from './todoList.module.css'
import Button from "../../components/Button/Button"
import Modal from "../../components/Modal/Modal"
import { useState } from "react"
import List from "../../components/List/List"
import Input from "../../components/Input/Input"
const TodoList = () => {

    const [state, setState] = useState(false)
    const [newTask, setNewTask] = useState('Добавить')
    const [search, setSearch] = useState('Поиск')

    const handleShow = () => {
        setState(!state)
    }
    const handleNewTask = (text) => {
        setNewTask(text)
    }
    const handleSearch = (text) => {
        setSearch(text)
    }

    const links = [
        {
            id: 1,
            task: 'coding'
        },
        {
            id: 2,
            task: 'eat'
        },
        {
            id: 3,
            task: 'sleep'
        },
        {
            id: 4,
            task: 'run'
        }
    ]

    return (
        <div className={classes.wrapper}>
            <Button handleShow={handleShow}>Добавить</Button>
            <List links={links} />
            {
                state && <Modal handleShow={handleShow}>
                    <button className={classes.close} onClick={handleShow}>X</button>

                    <h2>{search}</h2>
                    <input onChange={(event) => handleSearch(event.target.value)} className={classes.input} type="text" placeholder='search' />
                    <span></span>
                    <Button>Поиск</Button>

                    <h2>{newTask}</h2>
                    <Input handleNewTask={handleNewTask} />
                    <span></span>
                    <Button>Добавить</Button>
                </Modal>
            }
        </div>
    )

}
export default TodoList