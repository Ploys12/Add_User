import React from "react";
import Form from "./Form";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false
             
        }
    }


    user = this.props.user;
    render(){
        return (<div className="apart_user" id="aparter">
            <IoCloseCircleSharp className="icon deleter" title="Удалить"
         onClick={() => this.props.onDelete(this.user.id)}/>

        <IoHammerSharp className="icon editer"
         title="Редактировать" onClick={() => this.setState({editForm: !this.state.editForm})}/>
            
        <h3>Имя: {this.user.first_name}</h3>
        <h3>Фамилия: {this.user.second_name}</h3>
        <h3>Возраст: {this.user.age}</h3>
        <h3>Счастье: {this.user.happiness === true ? "Счастлив": "Несчастлив"}</h3>

        {this.state.editForm && <Form user={this.user} onAdd={this.props.onEdit}/>}
    </div>)
    }
}
export default User