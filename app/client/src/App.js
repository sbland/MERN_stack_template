import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const getDataFetch = async (url) => {
  const options = {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const responseData = await fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      console.error(`Something went wrong getting data from ${url}`);
      throw new Error(`Something went wrong getting data from ${url}`);
    });
  // .catch((error) => { setError(error); setIsLoading(false); });
  // .catch(() => ());
  return responseData;
};

function App() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (open) {
      setOpen(false)
      getDataFetch('server/')
        .then((dataNew) => setData(dataNew))
    }
  }, [open])

  return (
    <div className="App">
      <button
        onClick={() => setOpen(true)}>
        run
    </button>
    <p>
      Response:
      {JSON.stringify(data)}
    </p>
    </div>
  );
}

export default App;
