import { useEffect, useState } from "react";
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
    const [filterBy, setFilterBy] = useState('all')
    //// list of Todo
    const [ todoList, setTodoList ] = useState([])


    const handleShow = () => setIsShow(!isShow);
    /// fc for add new todos;


    const handleAdd = () => {
        setTodoList((prevTodo) => {
            return [ ...prevTodo, { id: todoList.length + 1 , title: newTitle, completed: false  } ]
        })
        setNewTitle('')
        handleShow()
    }

    // function for change completed of todo;
    const handleDone = (id) => {
        const currentIndex = todoList.findIndex((todo) => todo.id === id);
        todoList[currentIndex].completed = !todoList[currentIndex].completed;
        setTodoList([...todoList]);
    }

    ////
    const handleChangeText = (event) => {
        setNewTitle(event.target.value);
    }

    //// delete todo with id;
    const handleDelete = (id) => {
        const filtered = todoList.filter(todo => todo.id !== id)
        setTodoList([...filtered])
    }
    ////
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    /// edit todo with id and new Text;
    const handleEdit = (editTodo) => {
        const editList = todoList.map(todo => {
            if(todo.id === editTodo.id) {
                return { ...todo, title: editTodo.title }
            }
            return todo;
        })
        setTodoList([...editList]);
        setCurrentEdit()
    }

    /// variable for search result;
    const resultSearch = todoList.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));
    const resultFilter = filterBy === 'all'
        ? resultSearch : filterBy === 'completed'
            ? resultSearch.filter(todo => todo.completed) : filterBy === 'notCompleted'
                ? resultSearch.filter(todo => !todo.completed) : null


    // console.log(resultSearch.filter(todo => todo.selected === true));

    // любое обновление
    // useEffect(() => {

    // })
    //// Получаем список из нашего localStorage
    useEffect(() => {
        console.log('render1');
        const myLocalList = JSON.parse(localStorage.getItem('todoList')); // получение списка из хранилище
        if(myLocalList?.length !== 0) { // проверка на длину массива
            setTodoList(myLocalList);
        }

    },[]) // чтобы срабатывал один раз при фазе mounting(didMount);


    //// Записывает иземенения в localStorage;
    useEffect(() => {
        console.log('render 2');
        localStorage.setItem('todoList', JSON.stringify(todoList)) // запись
        return () => {

        }
    }, [todoList]) // отслеживаем за todoList состоянием,

    const filterTodos = ({target}) => {
        setFilterBy(target.value)
    }

    const clearTask = () => {
        setTodoList([])
        localStorage.clear()
    }



    return (
        <div className={classes.wrapper}>
            <select onChange={filterTodos}>
                <option value="all">Все</option>
                <option value="completed">Завршенные</option>
                <option value="notCompleted">Не завершенные</option>
            </select>
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
                list={resultFilter}
                handleChangeCurrent={setCurrentEdit}
                handleDone={handleDone}
                handleDelete={handleDelete}
                currentEdit={currentEdit}
                handleEdit={handleEdit}
            />
            <Button onClick={clearTask}>Clear Tasks</Button>
        </div>
    )
}


export default TodoList;