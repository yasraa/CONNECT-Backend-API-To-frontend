import React, { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState([]);

  const getUser = () => {
    console.log("Fetching user data");
    fetch('http://localhost:3000/api/user')
      .then(res => res.json())
      .then(json => setUser(json))
      .catch(err => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {user.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
