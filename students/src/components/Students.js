import React, { Component } from 'react';
import axios from 'axios';
class Students extends Component {

    state = {
        students: []
    }

    apiGet = () => {
        fetch("https://api.hatchways.io/assessment/students")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
           
          });
      };

    render() {
       return (
           <ul>
               <li>{this.state.students}</li>
           </ul>
        )
    };
}


export { Students };  