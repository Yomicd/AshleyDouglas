
const appstyle = {
    border: "black solid",
    height: "300px",
    display: "flex"

}
const sidePanelstyle = {
    border: "black solid",
    height: "250px",
    width: "60px",
    flexDirection: "row"

}
const widgetflex = {
    display: "flex",
}

const babyBoxStyle = {
    border: "red solid",
    height: "50px",
    width: "50px",
    flexDirection: "column",
    justifyContent: "center",
    alignitems: "center"
}
const rectangleStyle = {
    border: "yellow solid"  ,
    width: "150px",
    height: "35px",
    flexDirection: "column",
    alignitems: "flex-end",
    position: "absolute",
    bottom:"0px"
}
const greyinnerbox = {
    border: "grey solid",
    backgroundColor: "grey"
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
            <div>
               <h1 style ={rectangleStyle}>
                   Bottom box-add style
               </h1>
               <h5>Website Visitors</h5>
               <h4>821</h4>
               <div style={greyinnerbox}>Grey Box inset style</div>


            </div>
        )
    }
}





  class App extends React.Component {
    render(){
        return(
            <div style={appstyle}>
                {/* <SidePanel />
                <BoxWidget />
                <RectangleBox /> */}
                <SidePanel> 
                </SidePanel>
                    <BoxWidget />
                    

                <RectangleBox /> 
                
               
             </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('main')
    
  );