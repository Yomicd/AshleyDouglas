const React = require('react');
const pokemon = require('../models/pokemon');

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
class Index extends React.Component {
    render(){
        return (
            <div>
                
                <div style={myStyle}> 
                <h1>See All The Pokemon</h1>

                
                    <ul>
                       {
                           this.props.pokemon.map((pokemon, i)=>{
                               return (
                                   <li>
                                       <a href={`/pokemon/${i}`}>{capitalize(pokemon.name)}</a>{' '} I Choose You!

                                   </li>
                               )
                           })
                       }
         
                    </ul>
               

        
    
               
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


