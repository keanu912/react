import React from "react";
import './TodoInput.css' ;

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
       
    }
  /*
 * onKeyPress: 事件监听器
 * submit: 事件处理函数
 * defalutValue: 为input元素设置默认初始值,该值只能用一次
 */

    render(){
    	/*return <input type="text" value={this.props.content}/>*/
    	/*return <input type="text" defaultValue={this.props.content} */
    	return <input type="text" value={this.props.content}
    		className="TodoInput"
    		onChange={this.changeTitle.bind(this)}
    		onKeyPress={this.submit.bind(this)} />
    }

/*
 * this.props.onSubmit是对TodoApp的addTodo方法的引用,调用TodoApp的addTodo方法
 * e.target.value = ''; 将输入框清空
 */ 
    submit(e){
    	if(e.key == 'Enter'){
    		/*this.pros.onSubmit.call();*/
    		this.props.onSubmit(e);
    	}
    }

    changeTitle(e){
    	this.props.onChange(e);
    }


  }

  export default TodoInput;