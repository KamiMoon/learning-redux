import React from 'react';
import { Link } from 'react-router-dom';

export default function PostKeywords(props) {
    const keywords = props.keywords;
    return (
        <li className="tags" property="keywords">
            <span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span>

            {keywords.map((keyword, index) => {
                return (
                    <Link key={index} className={'btn btn-default btn-sm keywords' + (props.searchParams['keywords.text'] === keyword.text ? ' active' : '')} to={`/blogKeyword/${keyword.text}`}>{keyword.text}</Link>
                )
            })}
        </li>
    );
}
