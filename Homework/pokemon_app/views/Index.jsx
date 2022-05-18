const React = require('react');
const pokemon = require('../models/pokemon');

// function capitalize(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
class Index extends React.Component {
    render(){
        return (
            <div>
                <h1>See All The Pokemon</h1>
                <div style={myStyle}> 
      
      
      
      
      <h1>My First React Component!</h1>
               
            </div>
            </div>
        )
    }
}
const myStyle ={
    color: '#ffc0cb',
    backgroundColor: '#ff0003',
};


module.exports = Index


