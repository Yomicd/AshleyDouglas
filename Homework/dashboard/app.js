
const appstyle = {
    border: "black solid",
    height: "100vh",
    display: "flex",  
    margin: "auto",
    marginLeft: "0"


}
const sidePanelstyle = {
    border: "black solid",
    width: "30vw",
    flexDirection: "row",
    maxWidth:"20%",
    marginLeft: "5px",
    height: "40vh",
    // marginBottom: "0"

}
const widgetflex = {
    display: "flex",
}

const babyBoxStyle = {
    border: "red solid",
    height: "40vh",
    width:"15vw",
    flexDirection: "column",
    justifyContent: "",
    wordWrap:"break-word",
    margin: "auto",
    marginRight: "10px"
    
}
const recContainer = {
    marginLeft: "auto",
    marginRight: "5px"
}
const rectangleStyle = {
    border: "yellow solid"  ,
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    margin: "0",
    marginTop:"5px",
    alignItems: "center"
    
}
const greyinnerbox = {
    border: "grey solid",
    backgroundColor: "grey",
    margin: "0",
    padding: "1rem",
    marginBottom: "25px"

    
}

const Wrapperstyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding:" 0",
    flexFLow: "row wrap",
    margin: "auto"



}

class Wrapper extends React.Component {
    render(){
        return(
            <div style={Wrapperstyle} >
                {this.props.children}
            </div>
        )
    }
}


class SidePanel extends React.Component {
    render (){
        return(
            <div style={sidePanelstyle}>
               <h1>
                   Long box add style
               </h1>
               <h5>Dashboard</h5>
               <h5>Widget</h5>
               <h5>Reviews</h5>
               <h5>Customers</h5>
               <h5>Online Analysis</h5>
               <h5>Settings</h5>


            </div>
        )
    }
}

class BoxWidget extends React.Component {
    render (){
        return(
            <div style={widgetflex}>
            <div style={babyBoxStyle} >
                <h3>BOX 1 add style </h3>
                <h5>Reviews</h5>
                <h4>1,281</h4>
            </div>
            <div style={babyBoxStyle}>
                <h3>BOX 2 add style</h3>
                <h5>Average Rating</h5>
                <h4>4.6</h4>
            </div>
            <div style={babyBoxStyle}>
                <h3>BOX 3 add style</h3>
                <h5>Sentiment Analysis</h5>
                <h4>960</h4>
                <h4>122</h4>
                <h4>321</h4>
            </div>
           </div>
        )
    }
}


class RectangleBox extends React.Component {
    render (){
        return(

            <div style={recContainer}>
            <div style ={rectangleStyle}>
               <h1>
                   Bottom box-add style
               </h1>
               <h5>Website Visitors</h5>
               <h4>821</h4>
               <div style={greyinnerbox}>Grey Box inset style</div>


            </div>
            </div>
            
        )
    }
}





  class App extends React.Component {
    render(){
        return(
            <div style={appstyle}>
                <Wrapper>
                <SidePanel> 
                </SidePanel>
                    <BoxWidget />
                 

                <RectangleBox /> 
                 </Wrapper>  
               
             </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('main')
    
  );