import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
class User extends React.Component{
    user = this.props.user
    render(){
        return(<div className="apart_user"><IoCloseCircleSharp className="icon deleteIcon"/>
        <IoHammerSharp className="icon editIcon"/>

        <h3>Имя: {this.user.first_name}</h3>

        <h3>Фамилия: {this.user.second_name}</h3>
        <h3>Возраст: {this.user.age}</h3>
        <h3>Счастье: {this.user.happiness ? "Счастлив": "Несчастлив"}</h3>
    </div>)
    }
}
export default User