import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import './index.css';
/*import Welcome from './Welcome'*/

ReactDOM.render( 
    <TodoApp /> ,
    document.getElementById('root')
);


/*ReactDOM.render(
  <Welcome/>,
  document.getElementById('root')
)*/

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/

/*ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);*/

/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);*/