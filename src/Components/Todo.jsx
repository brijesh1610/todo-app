import { Component } from "react";




export class Todo extends Component{
    onDelete=()=>{
       this.props.onDelete(this.props.todo.id)
    }
      handleDone=()=>{
        this.props.handleDone(this.props.todo.id)
      }
    render(){
        return(
 <div style={{marginBottom:5}}className="container">
    <div className="row">
        <div className="col-md-1">
               {this.props.index}
        </div>
        <div className="col-md-1">
            <input type="checkbox" checked={this.props.todo.isDone} onClick={this.handleDone} />
            </div>
            <div className="col-md-6" style={{textDecoration:this.props.todo.isDone?"line-through":''}}>
                {this.props.todo.value}
            </div>
            <div className="col-md-4">
                <button className="btn btn-danger" onClick={this.onDelete}>Delete</button>
            </div>
    </div>
 </div>

        )
    }
}