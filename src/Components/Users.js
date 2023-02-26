import React from "react";
import User from "./User";
class Users extends React.Component{
    
    render(){
        return (<div className="flex"

         onDelete={this.props.onDelete}>{this.props.users.map((user) => (<User onEdit={this.props.onEdit}
             onDelete={this.props.onDelete}
             user={user} key={user.id}/>))}</div>)
    }
}
export default Users
