import React from "react";
import Users from "./Components/Users";
import Form from "./Components/Form";
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {users: [
        {
            first_name: 'Alexey',
            second_name: 'Beltyukov',
            age: 18,
            happiness: true
        },
        {first_name: 'Artem',
        second_name: 'Beltyukov',
        age: 28,
        happiness: false},
        {first_name: 'Andrey',
        second_name: 'Beltyukov',
        age: 24,
        happiness: true}
    ]}
    this.addUser = this.addUser.bind(this)
}


  render(){
    return (<div className="internal4ik">
      <Users users={this.state.users}/>
      <div>
        <Form onAdd={this.addUser}/>
      </div>

    </div>)
  }
  addUser(user){
    
    const id = this.state.users.length + 1;
    this.setState({users: [...this.state.users, {id, ...user}]})
    

  }
}

export default App