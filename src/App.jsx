import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = React.useState({});
  const [array, setArray] = React.useState([]);
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    setArray(await res.json());
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    data.userId = 1;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    setData(await res.json());
  };

  return (
    <>
      <form className="header">
        <input type="text" name="title" onChange={handleChange} />
        <input type="text" name="body" onChange={handleChange} />
        <button
          type="button"
          onClick={(e) => {
            onSubmit(e);
          }}
        >
          Submit
        </button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        {array.map(({ title, body }) => {
          return (
            <>
              <h1>{title}</h1>
              <p>{body}</p>
            </>
          );
        })}
      </form>
    </>
  );
};

export default App;
