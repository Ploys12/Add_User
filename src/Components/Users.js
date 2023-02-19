import React from "react";
import User from "./User";


class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {users: [
            {
                id: 1,
                first_name: 'Alexey',
                second_name: 'Beltiukov',
                age: 18,
                happiness: true
            },
            {
                id: 2,
                first_name: 'Andrey',
                second_name: 'Beltiukov',
                age: 25,
                happiness: true
    
            },
            {
                id: 3,
                first_name: 'Artem',
                second_name: 'Beltiukov',
                age: 28,
                happiness: false
    
            }
        ]}
    }
    render(){
        return (<div>
            {this.state.users.map((user) => (<User key={user.id} user={user}/>))}
        </div>)
    }
}
export default Users
