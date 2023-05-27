import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const Details = () => {
  const emojis = useSelector((state) => state.emojis.emojis);
  const { key } = useParams();

  return (
    <div className="details-container">
      <nav className="details-nav">
        <div className="details-arrow"><Link to="/">{'<'}</Link></div>
        <h1 className="details-h1"><Link to="/">Emojis</Link></h1>
      </nav>
      <ul className="details-list">
        <li>
          <div>Name:</div>
          <div>{emojis[key - 1].name}</div>
        </li>
        <li>
          <div>Description:</div>
          <div>{emojis[key - 1].category}</div>
        </li>
        <li>
          <div>Description:</div>
          <div>{emojis[key - 1].group}</div>
        </li>
        <li>
          <div>htmlCode:</div>
          <div>{emojis[key - 1].htmlCode[0]}</div>
        </li>
        <li>
          <div>unicode:</div>
          <div>{emojis[key - 1].unicode[0]}</div>
        </li>
      </ul>
    </div>
  );
};

export default Details;
