import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Employee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    componentDidMount = () => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(response => {
                console.log(response.data.data)
                this.setState({ employees: response.data.data });
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h2>Employee List</h2>
                <table>
                    <tr>
                        <th>Employee ID</th>
                        <th>Avatar</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th></th>
                    </tr>
                
                {
                    this.state.employees.map(emp => {
                        return (
                            <tr>
                                <td>{emp.id}</td>
                                <td><img src ={emp.avatar} alt ={emp.first_name}></img></td>
                                <td>{emp.email}</td>
                                <td>{emp.first_name}</td>
                                <td>{emp.last_name}</td>
                                <td> 
                                <button onClick={() => alert(`Are you sure you want to delete ${emp.id}`)}>Delete</button></td>
                                <td><Link to={`/employeedetail/`}>Select</Link></td>
                            </tr>
                           
                        )
                    })
                }
                </table>
                
            </div>
        );
    }
}

export default Employee;