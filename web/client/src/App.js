// export default App;
import React, {Component} from "react";

import './App.css';
import UserLogin from './UserLogin';
import ChatView from './ChatView';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : null,
      usersession: null
    };
  }

  renderChatView(username, usersession){
    this.setState({ username, usersession});
  }

  renderLoginView(){
    this.setState({ 
      username : null 
    });
  }
  
  render() {
    let {username} = this.state;
    const renderView = (()=> {
      if(username === null){
        return <UserLogin renderChatView={
          (username, usersession)=>{
            this.renderChatView(username, usersession)}
          }/>
      } else{
        return <ChatView username={this.state.username} usersession={this.state.usersession} 
        renderLoginView={()=>{this.renderLoginView()}}/>
      }
    })
    return (
      <div className="App">
        <div className="App-header container">
        {renderView()}         
        </div>
      </div>
    );
  }
}


export default App;