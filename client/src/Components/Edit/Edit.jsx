

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateRecordAsync } from '../../Services/Actions/BooksAction';



const Edit = () => {

    const {Books} = useSelector(state => state.Bookreducer)

    const {id} = useParams();

    const [updateinput, setUpdateinput] = useState({Books})


 

    let navigate = useNavigate();



    const handleFormInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setUpdateinput({ ...updateinput, [name]: value });

    }


    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateRecordAsync(updateinput)); 
        navigate('/view-books-data');
    };  
    

    useEffect(() => {
        if (Books.length > 0) {
            const bookToEdit = Books.find(book => book.id === id);
            setUpdateinput(bookToEdit);
        }
    }, [Books, id]);
    
    
    

  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-10 rounded-lg shadow-xl max-w-md w-full">
    <h2 className="text-3xl font-bold text-center text-black-800 mb-8">Book Details</h2>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        hidden  
        name='id' 
        value={updateinput.id} 
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
          value={updateinput.title}
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
          value={updateinput.author}
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
          value={updateinput.genre} 
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
          value={updateinput.year}
          onChange={handleFormInput}
          placeholder="Enter publication year"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-semibold py-3 px-5 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Update Book
      </button>
    </form>
  </div>
</div>

  );
};

export default Edit;