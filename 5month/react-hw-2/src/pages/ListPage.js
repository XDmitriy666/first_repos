import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from "../components/Modal";

const ListPage = () => {
    const [items, setItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { name: e.target.name.value };
        setItems([...items, newItem]);
        setIsModalOpen(false);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h1>List of Items</h1>
            <button onClick={handleModalOpen}>Add Item</button>
            {items.map((item, index) => (
                <div key={index}>
                    <Link to={`/${index}`}>{item.name}</Link>
                </div>
            ))}
            {isModalOpen && (
                <Modal onClose={handleModalClose}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" ref={null} />
                        <button type="submit">Add</button>
                    </form>
                </Modal>
            )}
        </div>
    );
};

export default ListPage;