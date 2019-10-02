import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        articlesFromState: state.articles
    }
};

const ConnectedList = ({ articlesFromState }) => (
    <ul className="list-group list-group-flush">
        {
            articlesFromState.map(el => (
                <li className="list-group-item" key={el.id}>
                    {el.title}
                </li>
            ))
        }
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;