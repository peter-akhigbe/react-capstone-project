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
      <h1>Emojis</h1>

      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul className="emoji-container">
        {filteredEmojis.map((emoji) => {
          const { id } = emoji;
          return (
            <li className="emoji" key={id}>
              <Link to={`/emoji/${id}`}>{emoji.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
