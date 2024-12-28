import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './reviews.css';

const ReviewsPage = () => {
  const [stars, setStars] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleStarClick = (starCount) => {
    setStars(starCount);
    setError(''); // Сбрасываем ошибку при выборе звезды
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (stars === 0) {
      setError('Пожалуйста, выберите количество звёзд.');
      return;
    }

    if (message.trim().length < 5) {
      setError('Отзыв должен содержать не менее 5 символов.');
      return;
    }

    alert(`Вы оставили ${stars} звёзд и сообщение: "${message}"`);
    setStars(0);
    setMessage('');
    setError('');
  };

  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="logo">
          MY<span className="starlogo">★</span> FIT
        </Link>
        <nav>
          <Link to="/reviews" className="active">ОТЗЫВЫ</Link>
          <Link to="/login" className="login">ВОЙТИ</Link>
        </nav>
      </header>

      <main className="reviews-content">
        <h1>Оставьте отзыв!</h1>
        <form className="reviews-form" onSubmit={handleSubmit}>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= stars ? 'selected' : ''}`}
                onClick={() => handleStarClick(star)}
                role="button"
                aria-label={`${star} звёзд`}
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">Отправить</button>
        </form>
      </main>
    </div>
  );
};

export default ReviewsPage;
