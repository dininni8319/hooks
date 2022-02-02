import { 
    // useState, 
    useEffect, 
    useMemo,
    useState, 
    useCallback, 
    useContext
  } 
  from 'react';
  
  import { TodoListContext } from '../Context/todoListContext'

  
  import List from './List';
  // import placeholder from './API/placeholder';
  
  
  
  export default function Todos() {
  
    const { todoList, setTodoList } = useContext(TodoListContext);
    const [ task, setTask ] = useState('');
    // console.log(todoList);
    const [ term, setTerm ] = useState('')

    const handleCreate = () => {
      const newTodo = {
        id: Date.now(),
        task,
      }
      setTodoList([newTodo,...todoList ])
      // setTodoList(todoList.concat(newTodo))
      setTerm('');
    }
  
    const handleSearch = () => {
       setTerm(task)
    }
  
    const filteredTodoList =  useMemo(
      () => {
        return todoList.filter( el => {
          console.log('Filter...');
          return el.task.toLowerCase().includes(term.toLowerCase())
      })
    }, [term, todoList])
  
    const handleDelete = useCallback(
      (taskId) => {
        const newTodoList = todoList.filter( todo =>  todo.id !== taskId )
        // setTask(newTodoList)
        setTodoList(newTodoList)
      }, [todoList])
    // const filteredTodoList = todoList.filter( el => {
    //       console.log('Filter...');
    //       return el.task.toLowerCase().includes(term.toLocaleLowerCase())
    //   })

  
    return (
        <div className="container">
              <div className="row">
                <div className="col-12">
                   <h1 className="dispay-4 text-center text-danger mt-5">To do List</h1>
                </div>
              </div>
    
              <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-6">
                  <input 
                    type="text" 
                    className="form-control" 
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    />
                  <button className="btn btn-success w-100 my-3" onClick={handleCreate}>
                      Aggiungi una task
                  </button>
                  <button className="btn btn-info w-100 my-3" onClick={handleSearch}>
                      Cerca task
                  </button>
                </div>
                <div className="col-12 col-md-6">
                     <List  initialTodos={filteredTodoList} handleDelete={handleDelete}/>
                </div>
              </div>
        </div>
    );
  }
  
  