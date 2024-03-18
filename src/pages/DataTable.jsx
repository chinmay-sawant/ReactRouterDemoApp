import  { useState, useEffect } from 'react';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyapi.online/api/movies');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (<>
    <div>
      <h2>Movie Table</h2>
      <table className="table table-hover table-striped ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie Name</th>
            <th>Rating</th>
            <th>Images</th>
            <th>IMDB Url</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.movie}</td>
              <td>{row.rating}</td>
              <td>{row.image}</td>
              <td><a href={row.imdb_url}>{row.imdb_url}</a></td>
              {/* Add more table cells if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
   
  );
};
export default DataTable;
