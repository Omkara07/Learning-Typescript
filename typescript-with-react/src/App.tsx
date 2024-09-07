import './App.css'

function App() {

  return (
    <>
      <Todo todo={{title:"todo1",description:"",isDone: false}} />
      <Todo todo={{title:"todo1",description:"",isDone: false}} />
      <Todo todo={{title:"todo1",description:"",isDone: false}} />
      <Todo todo={{title:"todo1",description:"",isDone: false}} />
    </>
  )
}

interface TodoType {
  title: string,
  description: string
  isDone: boolean
}

interface TodoInput{
  todo : TodoType
}

function Todo ({todo}:TodoInput):JSX.Element{
  return(
    <div>
      <h2>{todo.title}</h2>
      <h2>{todo.description}</h2>
      <h2>{`${todo.isDone?"Completed" : "Due"}`}</h2>
    </div>
  )
}


export default App
