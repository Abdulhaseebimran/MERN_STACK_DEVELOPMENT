import React from 'react'
import axios from 'axios';

const UserApi = () => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=5');
    setData(response.data);
    console.log(response.data.author);
  }
  return (
    <div className="p-4">
    <button 
      onClick={getData} 
      className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 transition-all duration-300 ease-in-out rounded-lg p-3 text-white font-bold shadow-md hover:shadow-lg active:scale-90"
    >
      Get Data
    </button>
    
    <div className="p-6 mt-6 bg-gray-600 rounded-lg shadow-lg">
      {data.map((elem, index) => {
        return (
          <div key={index.id} className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out m-4">
            <img 
              src={elem.download_url} 
              alt={elem.author} 
              className="rounded-lg h-60 w-full object-cover" 
            />
            <p className="text-center text-black font-semibold mt-3">{elem.author}</p>
          </div>
        );
      })}
    </div>
  </div>  
  )
}

export default UserApi
