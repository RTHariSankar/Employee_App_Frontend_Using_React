import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const apiLink = 'https://jsonplaceholder.typicode.com/users';


  const ProgressBar = ({ progress }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <div className="container mt-5">
        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
    
  );
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiLink);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(intervalId);
          fetchData();
          return prevProgress;
        }
      });
    }, 20); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="mt-3 mx-3 my-3">
        {loading ? (
          <ProgressBar progress={progress} />
        ) : (
          <>
            <table className="table table-dark table-striped-columns table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">EMAIL</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, i) => (
                  <tr key={i}>
                    <th scope="row">{val.id}</th>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;