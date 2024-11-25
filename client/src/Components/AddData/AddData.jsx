import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { AddDataPostAsync } from '../../Services/Actions/BooksAction';

const AddData = () => {
    const [forminput, setForminput] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        year: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFormInput = (e) => {
        const { name, value } = e.target;
        setForminput({ ...forminput, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddDataPostAsync(forminput));
        navigate('/view-books-data');

        setForminput({
            id: '',
        title: '',
        author: '',
        genre: '',
        year: '',
        })
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-black-700 mb-8">Library Management System</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            hidden  
            name='id' 
            value={forminput.id} 
            onChange={handleFormInput} 
          />
          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="title">
              Book Title
            </label>
            <input
              className="border-2 border-gray-300 rounded-lg w-full py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="title"
              name="title"
              value={forminput.title}
              onChange={handleFormInput}
              placeholder="Enter book title"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="author">
              Author Name
            </label>
            <input
              className="border-2 border-gray-300 rounded-lg w-full py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="author"
              name="author"
              value={forminput.author}
              onChange={handleFormInput}
              placeholder="Enter author's name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="genre">
              Genre
            </label>
            <input
              className="border-2 border-gray-300 rounded-lg w-full py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="genre"
              name="genre" 
              value={forminput.genre} 
              onChange={handleFormInput}
              placeholder="Enter book genre"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="year">
              Publication Year
            </label>
            <input
              className="border-2 border-gray-300 rounded-lg w-full py-3 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              id="year"
              name="year"
              value={forminput.year}
              onChange={handleFormInput}
              placeholder="Enter publication year"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-semibold py-3 px-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            + Add Book
          </button>
        </form>
      </div>
    </div>
    
      );
};

export default AddData;
