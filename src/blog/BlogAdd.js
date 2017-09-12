import React, { Component } from 'react';
import BInput from '../components/BInput';


export default class BlogAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            headingQuote: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        //
    }

    componentDidMount() {
        console.log(this);
    }


    render() {

        return (
            <div className="container">
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <h3><span className="glyphicon glyphicon-globe"></span> Post Info:</h3>
                            <div className="form-horizontal">
                                <BInput name="title" minLength="4" required="true"
                                    value={this.state.title} onChange={this.handleInputChange} />
                                <BInput type="textarea" name="headingQuote" label="Post Summary" cols="5" rows="3" required="true"
                                    value={this.state.headingQuote} onChange={this.handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button type="submti" className="btn btn-success">Submit</button>
                            <br />
                            <br />
                        </div>
                    </div>
                </form>
            </div>

        );

    }
}
