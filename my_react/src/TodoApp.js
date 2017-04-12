import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import 'normalize.css';
//import 'reset.css';
//import './TodoApp.css';

class TodoApp extends React.Component { 
	constructor(props){
		super(props);
		this.state = {
			newTodo: 'test',
			todoList:[
				{id:1, title:'第一个代办'},
				{id:2, title:'第二个待办'}, 
		        {id:3, title:'第三个待办'}, 
				]
		}

	}



  render() { 
    let todos = this.state.todoList.map((item,index)=>{ 
      /*return <li>{item.title}</li> */
      return ( // 为什么这里要加个括号? 🐸 
        <li> 
          <TodoItem todo={item} /> 
        </li> 
      ) 
    })


	 return ( 
       <div className="App"> 
 
        <h1>我的待办</h1> 
        <div className="inputWrapper"> 
          {/*注意 value= 后面不要加引号，加了你试下，会错*/} 
          <input type="text" value={this.state.newTodo}/> 
         </div> 
 
        <ol> 
          {todos} 
        </ol> 
      </div>    
    ) 
   } 
 } 



export default TodoApp; 