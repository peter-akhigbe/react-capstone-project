import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const Details = () => {
  const emojis = useSelector((state) => state.emojis.emojis);
  const { key } = useParams();

  return (
    <div className="details-container">
      <h1><Link to="/">Emojis</Link></h1>
      <ul className="details-list">
        <li>
          Name:
          {' '}
          {emojis[key - 1].name}
        </li>
        <li>
          Category:
          {' '}
          {emojis[key - 1].category}
        </li>
        <li>
          Group:
          {' '}
          {emojis[key - 1].group}
        </li>
        <li>
          htmlCode:
          {' '}
          {emojis[key - 1].htmlCode[0]}
        </li>
        <li>
          unicode:
          {' '}
          {emojis[key - 1].unicode[0]}
        </li>
      </ul>
    </div>
  );
};

export default Details;
