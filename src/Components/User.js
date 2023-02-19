import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component{
    user = this.props.user;
    render(){
        return (<div className="apart_user" id="aparter"><IoCloseCircleSharp className="icon deleter" title="Удалить"/>
        <IoHammerSharp className="icon editer" title="Редактировать"/>
            
        <h3>Имя: {this.user.first_name}</h3>
        <h3>Фамилия: {this.user.second_name}</h3>
        <h3>Возраст: {this.user.age}</h3>
        <h3>Счастье: {this.user.happiness ? "Счастлив": "Несчастлив"}</h3>
    </div>)
    }
}
export default User