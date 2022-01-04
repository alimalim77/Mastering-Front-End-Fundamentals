
import './App.css';
import Users from './users'; 
import React, { Component } from "react";
/*import footer from "./footer"; */
	
class App extends Component {
  constructor(props){
	super(props);
		
	// Set initial state
	this.state = {users_data :[], loading : true   };
  

	this.updateState = this.updateState.bind(this);
  }
    
  updateState(){
      // document.getElementById("main").style.display='flex';
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,  loading: false})
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
      <nav>
          <div className="box">
            <div className="navbar">
            <div className="headername">
            React Web App 
            </div>
            <div className="buttonclass">
            <button onClick={this.updateState}>Get Users</button>
            </div>
            </div>
          </div>
        </nav>
        <div className="userbox">
         <Users loading={this.state.loading} users={this.state.users_data}/>
         </div>
         
         
    </>
    )
  }
}
	
export default App;