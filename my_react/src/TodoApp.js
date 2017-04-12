import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import 'normalize.css';
import './reset.css' 
import './TodoApp.css';

class TodoApp extends React.Component { 
	constructor(props){
		super(props);
		this.state = {
			newTodo: '',
			todoList:[]
		};
		
	}



  render() { 
    /*let todos = this.state.todoList.map((item,index)=>{ */
    let todos = this.state.todoList 
      .filter((item)=> !item.deleted) 
      .map((item,index)=>{ 

      /*return <li>{item.title}</li> */
      return ( // 为什么这里要加个括号? 🐸 
        <li key={index}> 
          <TodoItem todo={item} onToggle={this.toggle.bind(this)}
          	onDelete={this.deleteItem.bind(this)}/> 
        </li> 
      ) 
    })
    console.log(todos);

	 return ( 
       <div className="App"> 
        <h1>我的待办</h1> 
        <div className="inputWrapper"> 
        	
       		<TodoInput content={this.state.newTodo}
       			onChange={this.changeTitle.bind(this)}
       			onSubmit={this.addTodo.bind(this)}/>
        </div> 
 
        <ol className="todoList"> 
          {todos} 
        </ol> 
      </div>    
    ) 
   } 






changeTitle(event){
 	this.setState({
 		newTodo:event.target.value,
 		todoList:this.state.todoList
 	});
 }


  addTodo(event){
  	//往todoList中新增数据，通过event.target.value来获取用户输入
   if(event.target.value.length > 0 && event.target.value.trim().length > 0){
   	this.state.todoList.push({
  		id:idMaker(),
  		title:event.target.value,
  		status:null,
  		deleted:false
  	});
  	//会重新调用render方法
  	this.setState({
  		newTodo:'',
  		todoList:this.state.todoList
  	});
  }
  }

//勾选框的相关操作
  toggle(e,todo){
	todo.status = todo.status === 'completed' ? '' : 'completed';
	this.setState(this.state);
}

//删除事项的操作
//这里的todo是对todilist中某项的引用，在这里修改同样会修改todoList对应的项目
deleteItem(e, todo){
	todo.deleted = true;
	this.setState(this.state);
}


}



export default TodoApp; 

let id = 0;
function idMaker(){
	id += 1;
	return id;
}
