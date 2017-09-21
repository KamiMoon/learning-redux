import React, { Component } from 'react';
import StatusSelect from './StatusSelect';

export default class TaskToAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      hoursWorkedOn: 0,
      estimatedHours: 0,
      status: 'Not Started'
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  addTask = () => {
    this.props.addTask(this.state);

    this.setState({
      name: '',
      hoursWorkedOn: 0,
      estimatedHours: 0,
      status: 'Not Started'
    });
  };

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            className="form-control"
            placeholder="Name"
            required
          />
        </td>
        <td>
          <input
            type="number"
            name="hoursWorkedOn"
            value={this.state.hoursWorkedOn}
            onChange={this.handleInputChange}
            className="form-control"
            placeholder="Worked (hrs)"
          />
        </td>
        <td>
          <input
            type="number"
            name="estimatedHours"
            value={this.state.estimatedHours}
            onChange={this.handleInputChange}
            className="form-control"
            placeholder="Estimated (hrs)"
          />
        </td>
        <td>
          <StatusSelect
            name="status"
            value={this.state.status}
            onChange={this.handleInputChange}
          />
        </td>
        <td>
          <button
            type="button"
            onClick={this.addTask}
            className="btn btn-primary"
          >
            Add
          </button>
        </td>
      </tr>
    );
  }
}
