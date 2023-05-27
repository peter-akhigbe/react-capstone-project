import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEmojis } from '../redux/emojis/emojiSlice';

const Home = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const emojis = useSelector((state) => state.emojis.emojis);

  useEffect(() => {
    dispatch(fetchEmojis());
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmojis = emojis.filter((emoji) => emoji.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));

  return (
    <div className="home-container">
      <h1>
        <Link to="/">Emojis</Link>
      </h1>

      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="image-container">
        {null}
      </div>

      <div className="box">
        <ul className="emoji-container-1">
          {filteredEmojis.map((emoji) => {
            const { id } = emoji;
            return (
              <>
                {id <= 50 ? (
                  <li key={id}>
                    <Link to={`/emoji/${id}`}>
                      <div className="emoji">{emoji.name}</div>
                    </Link>
                  </li>
                ) : null}
              </>
            );
          })}
        </ul>

        <ul className="emoji-container-2">
          {filteredEmojis.map((emoji) => {
            const { id } = emoji;
            return (
              <>
                {id >= 51 ? (
                  <li key={id}>
                    <Link to={`/emoji/${id}`}>
                      <div className="emoji">{emoji.name}</div>
                    </Link>
                  </li>
                ) : null}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
