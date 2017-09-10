import React, { Component } from 'react';

export default class StatusSelect extends Component {
    render() {
        const statuses = ['Not Started', 'In Progress', 'Finished'];

        return (
            <select name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
                {statuses.map((status) => {
                    return <option key={status} value={status}>{status}</option>;
                })}
            </select>
        );
    }
}