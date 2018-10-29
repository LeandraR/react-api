import React, { Component } from 'react';
import './API.css';
import StudentCard from '../StudentCard'

class API extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            students: [],
            input: "",
            newStudents:[]
        }
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
        this.handleSearch(event)
    }

    handleSearch = (event) => {
        let newStudents = this.state.students;
        newStudents = this.state.students.filter((item) => {
            return (
                item.firstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
                item.lastName.toLowerCase().includes(event.target.value.toLowerCase())
            )
        });
        console.log(newStudents);
        this.setState({
            newStudents: newStudents
        })
    }


    componentDidMount(){
        fetch(`https://www.hatchways.io/api/assessment/students`)
            .then(res => res.json())
            .then(data =>
                this.setState({
                    students: data.students,
                    newStudents: data.students
                    })
                )
            .catch(error => console.log(error))
    }

    render() {
        return (
            <main className="API__main">
                <input className="API__search" type="text" placeholder="Search by name" onChange={this.handleChange}/>

                <StudentCard student={this.state.newStudents} />
            </main>
        );
    }
}

export default API;

