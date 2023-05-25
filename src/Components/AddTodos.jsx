import { Component } from "react";




export class AddTodos extends Component{

    state={
        value:""
    }

    onSubmit=(e)=>{
           e.preventDefault()
           this.props.addtodo(this.state.value)
    }
      
    onChange=(e)=>{
    //   console.log(e.target.value)
      this.setState({value:e.target.value})
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                    <div className="col-9">
                        <input value={this.state.value} //binding value with input
                        onChange={this.onChange} className="form-control"type="text" />
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-success">AddTodo</button>
                    </div>
                    </div>
 
                </form>
            </div>


        )
    }
}