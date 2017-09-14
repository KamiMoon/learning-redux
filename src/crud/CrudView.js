import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskDisplay from './TaskDisplay';
import TaskToAdd from './TaskToAdd';
import { addTask, deleteTask, updateTask, getTasks } from './redux/crudActions';

class CrudView extends Component {

    componentDidMount() {
        this.props.getTasks();
    }

    render() {

        return (
            <div className="container">
                <p>Current Tasks Board</p>
                <p>Simple CRUD using the MERN stack. Refresh the page. It is saved to the server running Node.js and MongoDB on Heroku.
                    UI is ReactJS.</p>
                <ul>
                    <li><a href="https://github.com/KamiMoon/angular_full/blob/master/client/app/crud/crud.controller.js">AngularJS client</a>            using <a href="https://github.com/KamiMoon/angular_full/blob/master/client/app/task/task.service.js">$resource</a>
                    </li>
                    <li><a href="https://github.com/KamiMoon/angular_full/blob/master/server/api/task/task.controller.js">Node.js contoller using Express</a></li>
                    <li><a href="https://github.com/KamiMoon/angular_full/blob/master/server/api/task/task.model.js">MongoDB using Mongoose</a></li>
                </ul>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Worked (hrs)</th>
                            <th>Estimated (hrs)</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.crud.tasks.map((task, index) => {
                            return (
                                <TaskDisplay key={task.name} task={task}
                                    deleteTask={this.props.deleteTask}
                                    saveTask={this.props.updateTask}
                                />
                            );
                        })}
                        <TaskToAdd addTask={this.props.addTask} />
                    </tbody>
                </table>
            </div>
        );
    }
}

CrudView = connect(
    state => ({crud: state.crud}),
    {addTask, deleteTask, updateTask, getTasks}
)(CrudView)

export default CrudView;