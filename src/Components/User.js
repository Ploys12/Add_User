import React from "react";

class User extends React.Component{
    render(){
        return(<div key={this.props.user.id} className="apart_user">
        <h3>Имя: {this.props.user.first_name}</h3>
        <h3>Фамилия: {this.props.user.second_name}</h3>
        <h3>Возраст: {this.props.user.age}</h3>
        <h3>Счастье: {this.props.user.happiness ? "Счастлив": "Несчастлив"}</h3>
    </div>)
    }
}
export default User