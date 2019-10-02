import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

export class Post extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <ul className="list-group list-group-flush">
                {
                    this.props.articles.map(el => (
                        <li className="list-group-item" key={el.id}>
                            {el.title}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

// mapStateToProps runs before componentDidMount
const mapStateToProps = state => {
    if(state.remoteArticles) {
        return {
            articles: state.remoteArticles.slice(0, 10)
        }
    }
    return { articles: [] };
};

export default connect(mapStateToProps, { getData })(Post);