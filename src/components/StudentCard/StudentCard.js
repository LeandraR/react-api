import React, { Component } from 'react';
import './StudentCard.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

class StudentCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: null
        };
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const student = this.props.student;

        return (
            <div className="StudentCard__main">
                {student.map(item => (
                    <section  key={item.id}>
                        <ExpansionPanel className="StudentCard__col">
                            <ExpansionPanelSummary >
                                <div className="studentCard">
                                    <img className="studentPhoto" src={item.pic} alt="student head shot" />
                                    <div className="studentInfo">
                                        <div className="StudentCard__row">
                                            <h1>{item.firstName} {item.lastName}</h1>
                                            <i className="fas fa-plus"></i>
                                        </div>
                                        <p>Email: {item.email}</p>
                                        <p>Company: {item.company}</p>
                                        <p>Skill: {item.skill}</p>
                                        <p>Average: {item.grades.map(item => parseInt(item)).reduce((p, c) => p + c, 0) / item.grades.length}%</p>
                                    </div>

                            </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="expanded StudentCard__col">
                                    <ul className="panel">
                                        {item.grades.map((item, index) => <li key={index}> Test{index + 1}: {item}% </li>)}
                                    </ul>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                    </section>
                ))}
            </div>

        );
    }
}

export default StudentCard;

