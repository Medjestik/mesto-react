import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeleteCardPopup({ isOpen, onClose, onDeleteCard, currentCard, isLoading }) {

    function handleSubmit(e) {
        e.preventDefault();
        onDeleteCard(currentCard);
    }

    return (
        <PopupWithForm
        title="Вы уверены?"
        name="delete-card"
        submitText={`${isLoading ? "Удаление..." : "Да"}`}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        >
        </PopupWithForm>
    )
}

export default DeleteCardPopup;