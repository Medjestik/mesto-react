import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick, onLikeClick, onCardDelete }) {

    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (`place__delete-button ${isOwn ? '' : 'place__delete-button_disabled'}`);

    const isLiked = card.likes.some((like) => like._id === currentUser._id);
    const cardLikeButtonClassName = (`place__like-button ${isLiked ? 'place__like-button-active' : '' }`);

    function handleClick() {
        onCardClick(card.name, card.link);
    }

    function handleLikeClick() {
        onLikeClick(card);
        console.log(likesCaption)
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }
    
    const likes = card.likes.map(like => {
        return like.name;
    })
    let likesCaption = '';
    if (likes.length > 0) {
        likesCaption = (`Нравится: ${likes.join(', ')}`)
    } else {
        likesCaption = 'Эту фотографию пока никто не оценил 😔'
    }
    
        
    return (
        <li className="card place__card">
            <Link to={`/card/${card._id}`}><img className="place__img" src={card.link} alt={card.name} onClick={handleClick}/></Link>
            <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button" />
            <div className="place__info">
                <p className="place__caption">{card.name}</p>
                <div className="place__likes-container">
                    <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" />
                    <p className="place__like-caption">{likesCaption}</p>
                    <p className="place__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
  }
  
  export default Card;