import { connect } from 'react-redux';
import BlogList from './BlogList';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        blog: state.blog
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//     }
// }

const BlogContainer = withRouter(connect(
    mapStateToProps,
    null
)(BlogList));

export default BlogContainer;