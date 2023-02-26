import React from "react";
import Users from "./Components/Users";
import Form from "./Components/Form";
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {users: [
        { id: 1,
            first_name: 'Alexey',
            second_name: 'Beltyukov',
            age: 18,
            happiness: true
        },
        {id: 2, first_name: 'Artem',
        second_name: 'Beltyukov',
        age: 28,
        happiness: false},
        {id: 3, first_name: 'Andrey',
        second_name: 'Beltyukov',
        age: 24,
        happiness: true}
    ]}
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this);
}


  render(){
    return (<div className="internal4ik">
      <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
      <div>
        <Form onAdd={this.addUser}/>
      </div>

    </div>)
  }

  deleteUser(id){

    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    });
    console.log(this.state.users)

  }
  
  editUser(user){
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({ users: [] }, () => { this.setState({ users: [...allUsers] })})
  }
  
  addUser(user){
    
    const id = this.state.users.length + 1;
    this.setState({users: [...this.state.users, {id, ...user}]})
    console.log(user)
    

  }
}

export default App