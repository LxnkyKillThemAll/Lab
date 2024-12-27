import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './reviews.css';

const ReviewsPage = () => {
  const [stars, setStars] = useState(0);
  const [message, setMessage] = useState('');

  const handleStarClick = (starCount) => {
    setStars(starCount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вы оставили ${stars} звёзд и сообщение: "${message}"`);
    setStars(0);
    setMessage('');
  };

  return (
    <div className="reviews-page">
      <header className="header">
        <Link to="/" className="logo">
          MY <span className="star">★</span> FIT
        </Link>
        <nav>
          <Link to="/reviews" className="active">Отзывы</Link>
          <Link to="/login">Войти</Link>
        </nav>
      </header>

      <main className="reviews-content">
        <h1>Отзывы</h1>
        <p>Мы ценим ваше мнение! Оставьте отзыв и оцените нас.</p>
        <form className="reviews-form" onSubmit={handleSubmit}>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= stars ? 'selected' : ''}`}
                onClick={() => handleStarClick(star)}
                role="button"
              >
                ★
              </span>
            ))}
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Напишите ваш отзыв..."
            rows="4"
          ></textarea>
          <button type="submit" className="submit-button">Отправить</button>
        </form>
      </main>

      <footer className="footer">
        <p>&copy; 2023 MY FIT. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default ReviewsPage;
