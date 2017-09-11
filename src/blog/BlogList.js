import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { query } from './redux/blogActions';

class BlogList extends Component {

    loadData() {
        this.props.query();
    }

    componentDidMount() {
        this.loadData();
    }


    render() {

        return (
            <div id="blog-container" className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Link to="/blog/add/1" className="btn btn-default btn-lg" role="button">Add Post</Link>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => {

    console.log(state);

    return {
        blogQueryResult: state.blogQueryResult
    }
}
const mapDispatchToProps = dispatch => {
    return {
        query: () => {
            dispatch(query())
        }
    }
}

BlogList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogList));

export default BlogList;