const h3style = {
    fontSize: "20px",
    color: "purple",
    textAlign: "center"
}
const h4style = {
    color: "white",
    textAlign: "center"
}
const h5style = {
    color: "blue",
    textAlign: "center"
}

const appstyle = {
    border: "black solid",
    height: "100vh",
    display: "flex",  
    margin: "auto",
    marginLeft: "0",
    background: "rgb(238,174,202)",
    background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
    

}
const sidePanelstyle = {
    border: "black solid",
    width: "30vw",
    flexDirection: "row",
    maxWidth:"20%",
    marginLeft: "5px",
    height: "40vh",
    background: "rgba( 57, 26, 70, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter:" blur( 4px )",
    webkitBackdropFilter:" blur( 4px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
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
    marginRight: "10px",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter:" blur( 4px )",
    webkitBackdropFilter:" blur( 4px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    
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
    alignItems: "center",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter:" blur( 4px )",
    webkitBackdropFilter:" blur( 4px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    
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
    margin: "auto",
    height: "550px"
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
               <h3 style={h3style}>
                   Long box add style
               </h3>
               <h5 style={h5style}>Dashboard</h5>
               <h5 style={h5style}>Widget</h5>
               <h5 style={h5style}>Reviews</h5>
               <h5 style={h5style}>Customers</h5>
               <h5 style={h5style}>Online Analysis</h5>
               <h5 style={h5style}>Settings</h5>


            </div>
        )
    }
}

class BoxWidget extends React.Component {
    render (){
        return(
            <div style={widgetflex}>
            <div style={babyBoxStyle} >
                <h3 style={h3style}>BOX 1 add style </h3>
                <h5 style={h5style}>Reviews</h5>
                <h4>1,281</h4>
            </div>
            <div style={babyBoxStyle}>
                <h3 style={h3style}>BOX 2 add style</h3>
                <h5 style={h5style}>Average Rating</h5>
                <h4>4.6</h4>
            </div>
            <div style={babyBoxStyle}>
                <h3 style={h3style}>BOX 3 add style</h3>
                <h5 style={h5style}>Sentiment Analysis</h5>
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