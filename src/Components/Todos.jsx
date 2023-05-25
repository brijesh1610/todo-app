import { Component } from "react";
import { AddTodos } from "./AddTodos";
import { Todo } from "./Todo";



export class Todos extends Component{
    state={
        todos:localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]
    }
    addNewTodo=(todovalue)=>{
        let todos=this.state.todos
        todos.push({
            id:new Date().getTime(),
            value:todovalue,
            isDone:false
        })
       this.updateState(todos)
    }

    updateState=(todos)=>{
        this.setState({
            todos
        })
        localStorage.setItem("todos",JSON.stringify(todos))

    }
    onDelete=(todoId)=>{
      let todos=this.state.todos.filter(item=>item.id!==todoId);

      this.updateState(todos)
     
    }
    handleDone=(todoId)=>{
        let todos=this.state.todos;
        todos.map(item=>{
            if(item.id===todoId){
                item.isDone=!item.isDone
            }
            return item
        })
        this.updateState(todos)


    }
    render(){
        return(
            <div>
                <h1>Todos</h1>
                {this.state.todos.length===0?<h1>no todos available</h1>:
                this.state.todos.map((item,index)=>{return <Todo key={index} todo={item} index={index+1}
                onDelete={this.onDelete} handleDone={this.handleDone}/>})}
                <AddTodos addtodo={this.addNewTodo}/>
            </div>

        )
    }
}