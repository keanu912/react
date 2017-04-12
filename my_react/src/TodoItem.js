import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
    constructor(props){
        super(props);
       
    }


    render(){
    	/*return <div>{this.props.todo.title}</div> */
    	return (
    		 <div className="TodoItem"> 
       		 <input type="checkbox" checked={this.props.todo.status === 'completed'} 
         		 onChange={this.toggle.bind(this)}/>  
       		 <span className="title">{this.props.todo.title}</span> 
       		 <button onClick={this.deleteItem.bind(this)}>删除</button> 
       </div> 
    	);
    }

    toggle(e){
    	this.props.onToggle(e,this.props.todo);
    }

    deleteItem(e){
    	this.props.onDelete(e, this.props.todo);
    }


}

export default TodoItem;