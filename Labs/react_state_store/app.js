console.table(data)

// Create calss componnt to render data to the screen
class App extends React.Component{
    //initialize your state
    state = {
        data: data,
        value: "",
        price: 0,
        description: 'Describe this item'
    };
    // creat a method to change user input
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value,

        });
    };

    // create method to submit the form
    handleFormSubmit = (e) =>{
    e.preventDefault();
   

    // add new item to our array
    const newItem = {
        name: this.state.name,
        price: this.state.price,
        description: this.state.description,
    };
    
     // add the new item to our data array
     this.setState({
        data: [newItem, ...this.state.data],
    });
    
    console.log(this.state.data);
};

//create a function to toggle thevalue of our hiring state
handleToggleHiring = () =>{
    this.setState({
        isHiring: !this.state.isHiring,
    })
}


    render(){
        const dataList = this.state.data.map((element)=>{
            return(
                <ul>
                    <li>{element.name } {element.price}</li>
                </ul>
            )
        });
        return(
            <div>
                <h1>Shopping Gal</h1>

                <h2>
                    {this.state.isHiring ? 
                        <h2>Yes we are hiring</h2> 
                        :
            
                         <h2>Sorry try again tomorrow</h2>
                         }
                        
                    
                </h2>
                <button onClick={this.handleToggleHiring}>Toggle Hiring</button>
                <form onSubmit={this.handleFormSubmit}>
                
                <label htmlFor="name"></label>
                <input 
                id="name"
                type="text" 
                value={this.state.name} 
                onChange={this.handleChange} 
                />
                <br />
                <br />

                <label htmlFor="price"></label>
                <input 
                id="price"
                type="number" 
                value={this.state.price} 
                onChange={this.handleChange} 
                />
                <br />
                <br />

                <label htmlFor="description"></label>
                <input 
                id="description"
                type="text" 
                value={this.state.description} 
                onChange={this.handleChange} 
                />
                <br />
                <br />
                <input type="submit" />
                </form>
                <div>
                    <h2>Preview our new item</h2>
                    <h3>{this.state.name}</h3>
                    
                    <h3>{this.state.price}</h3>
                   
                    <h3>{this.state.description}</h3>
                </div>
            
               
                {dataList}
            </div>
        );
    };
}

//Render component to the screen
ReactDOM.render(<App/>, document.querySelector(".container"))