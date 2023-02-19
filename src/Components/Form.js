import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            first_name: "",
            second_name: "",
            age: "",
            happiness: false
        }
    }
    render(){
        return(<form className="add_user">
            <input placeholder="Имя" onChange={(el) => this.setState({first_name: el.target.value})}></input>
            <br></br>
            <input placeholder="Фамилия" onChange={(el) => this.setState({second_name: el.target.value})}></input>
            <br></br>
            <input placeholder="Возраст" onChange={(el) => this.setState({age: el.target.value})}></input>
            <br></br>
            <label  htmlFor="isHappy">Счастливы?</label>
            <input type="checkbox" id="isHappy" onChange={(el) => this.setState({happiness: el.target.checked})}></input>
            <br></br>
            <button id="add" onClick={() => this.props.onAdd({
                first_name: this.state.first_name,
                second_name: this.state.second_name,
                age: this.state.age,
                happiness: this.state.happiness ? "Счастлив": "Несчастлив"
            })} type="button">Добавить</button>
        </form>)
    }
}
export default Form