import React from 'react';
import ReactDOM from 'react-dom';

function MyApp(){
    return(
        <ul>
            <li>List one</li>
            <li>List two</li>
            <li>List three</li>
        </ul>
    );
}
 
ReactDOM.render(<MyApp/>, document.getElementById('root'));