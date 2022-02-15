import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
        name: '',
        salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit} className="add-form d-flex">
                    <input minLength={3} required onChange={this.onValueChange} value={name} name='name' type="text" className="form-control new-post-label" placeholder="Как его зовут?"/>
                    <input required onChange={this.onValueChange} value={salary} name='salary' type="number" className="form-control new-post-label" placeholder="З/П в $?"/>
    
                    <button className="btn btn-outline-light" type="submit">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;