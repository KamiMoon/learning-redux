import React, { Component } from 'react';
import StatusSelect from './StatusSelect';

export default class TaskDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = { ...props.task };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <tr>
        <td>{this.state.name}</td>
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
            onClick={() => this.props.saveTask(this.state)}
            className="btn btn-success"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => this.props.deleteTask(this.state)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
