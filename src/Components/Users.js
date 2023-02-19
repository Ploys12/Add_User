import React from "react";
import User from "./User";
class Users extends React.Component{
    
    render(){
        return (<div className="flex">{this.props.users.map((user) => (<User user={user} key={user.id}/>))}</div>)
    }
}
export default Users
