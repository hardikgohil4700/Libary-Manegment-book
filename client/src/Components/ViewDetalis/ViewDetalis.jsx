import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { singledataAsync } from '../../Services/Actions/BooksAction';

const BookDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams(); 
    const { Book } = useSelector(state => state.Bookreducer);

    useEffect(() => {
        dispatch(singledataAsync(id));
    }, [dispatch, id]);

    if (!Book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-red-100 min-h-screen py-10">
            <div className="max-w-xl mx-auto text-center bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{Book.title}</h1>
                <h4 className="text-lg text-black-600 mb-2">Author: <span className="text-blue-600">{Book.author}</span></h4>
                <h4 className="text-lg text-black-600 mb-2">Genre: <span className="text-blue-600">{Book.genre}</span></h4>
                <h4 className="text-lg text-black-600 mb-2">Year: <span className="text-blue-600">{Book.year}</span></h4>
                <p className="text-gray-700 mt-4">{Book.description}</p>
            </div>
        </div>
    );  
};

export default BookDetails;
