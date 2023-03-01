import { useState } from "react";
import {useEffect} from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from './todolist.module.css';
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";
const TodoList = () => {
    const [ isShow, setIsShow ] = useState(false);
    const [ newTitle, setNewTitle ] = useState('');
    const [ search, setSearch ] = useState('');
    const [ currentEdit, setCurrentEdit ] = useState();
    const [ list, setList ]  = useState([
        {
            id:1 , 
            title: 'coding', 
            completed: false
        },
        {
            id:2,
            title: 'eat', 
            completed: false
        },
        {
            id:3,
            title: 'sleep', 
            completed: false
        }
    ])
          
    const handleShow = () => setIsShow(!isShow);
    
    const handleAdd = () => {
        setList((prevTodo) => {
            return [ ...prevTodo, { id: list.length + 1 , title: newTitle, completed: false  } ]
        })
        setNewTitle('')
        handleShow()
    }
    const handleDone = (id) => {
    const currentIndex = list.findIndex((todo) => todo.id === id);
       list[currentIndex].completed = !list[currentIndex].completed;
       setList([...list]);
    } 
    const handleChangeText = (event) => {
        setNewTitle(event.target.value);
    }
    const handleDelete = (id) => {
        const filtered = list.filter(todo => todo.id !== id)
        setList([...filtered])
    }
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    const handleEdit = (editTodo) => {
        const editList = list.map(todo => {
            if(todo.id === editTodo.id) {
                return { ...todo, title: editTodo.title }
            }
            return todo;
        })
        setList([...editList]);
        setCurrentEdit()
    }
    const resultSearch = list.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'))
        if (data?.length !== 0){
            setList(data)
        }
    },[])
    useEffect(()=> {
        localStorage.setItem('data' , JSON.stringify(list))
    },[ list ])

    return (
        <div className={classes.wrapper}>
            <Button onClick={handleShow}>
                Добавить
            </Button>
            <Input
            placeholder={'search...'}
            onChange={handleSearch}
            value={search}
            name={'search'}
              />
            { isShow && <Modal handleShow={handleShow}>
                <p>{newTitle}</p> 
                <Input 
                placeholder={'Добавить'} 
                onChange={handleChangeText} 
                name={'add'} 
                value={newTitle}
                />
            <Button onClick={handleAdd}>
                Добавить
            </Button>
            <button onClick={handleShow}>Close</button>
            </Modal> }
            <List 
            list={resultSearch} 
            handleChangeCurrent={setCurrentEdit}
            handleDone={handleDone} 
            handleDelete={handleDelete}
            currentEdit={currentEdit}
            handleEdit={handleEdit}
            />
        </div>
    )
}


export default TodoList;