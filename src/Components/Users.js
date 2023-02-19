import React from "react";
import User from "./User";


class Users extends React.Component{
    users = [
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
    ]
    render(){
        return (<div>
            {this.users.map((user) => (<div key={user.id} className="apart_user">
                <h3>Имя: {user.first_name}</h3>
                <h3>Фамилия: {user.second_name}</h3>
                <h3>Возраст: {user.age}</h3>
                <h3>Счастье: {user.happiness ? "Счастлив": "Несчастлив"}</h3>
            </div>))}
        </div>)
    }
}
export default Users