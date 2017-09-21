import React, { Component } from 'react';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class BInput extends Component {
  render() {
    //default values

    let label = this.props.label || capitalizeFirstLetter(this.props.name);
    let type = this.props.type || 'text';

    let formClass = 'form-group';

    if (this.props.required) {
      formClass += ' required';
    }

    let input;

    if (this.props.type === 'textarea') {
      input = (
        <textarea
          value={this.props.value}
          onChange={this.props.onChange}
          className="form-control input-lg"
          id={this.props.id}
          name={this.props.name}
          minLength={this.props.minLength}
          maxLength={this.props.maxLength}
          required={this.props.required}
          placeholder={this.props.placeholder}
          rows={this.props.rows}
          cols={this.props.cols}
        />
      );
    } else {
      input = (
        <input
          type={type}
          value={this.props.value}
          onChange={this.props.onChange}
          className="form-control input-lg"
          id={this.props.id}
          name={this.props.name}
          minLength={this.props.minLength}
          maxLength={this.props.maxLength}
          required={this.props.required}
          placeholder={this.props.placeholder}
        />
      );
    }

    return (
      <div className={formClass}>
        <label className="col-lg-2 control-label" htmlFor={this.props.name}>
          {label}:
        </label>
        <div className="col-lg-10">{input}</div>
      </div>
    );
  }
}
