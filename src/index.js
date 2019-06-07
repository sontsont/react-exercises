import React from 'react';
import ReactDOM from 'react-dom';

const divStyle = {
    color: "red",
    background: "green"
};
 function MyInfo(){
     return(<div style={divStyle}>
         <h1>Sont Sont</h1>
         <p>This is the about me page...</p>
         <ul>
             <li>Ngapali Beach</li>
             <li>Norway</li>
             <li>America</li>
         </ul>
     </div>

     );
 }
ReactDOM.render(<MyInfo/>, document.getElementById('root'));