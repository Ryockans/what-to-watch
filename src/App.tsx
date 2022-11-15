import React, { useState } from 'react';

import WtwapiService from './services/wtwapi';

const api = new WtwapiService();

api.getAllMovies().then((data) => console.log(data));
api.getMovie(2).then((data) => console.log(data));
api.getPromo().then((data) => console.log(data));
api.getComments(3).then((data) => console.log(data));
api.getSimilarMovies(1).then((data) => console.log(data));

function App() {
  const [token, setToken] = useState(null);
  api
    .signIn('Oliver.conner@gmail.com', '12345678')
    .then((data) => {
      setToken(data.token);
    })
    .then(() => api);

  api.isSignedIn(token).then((data) => console.dir(data));

  api.getFavorite(token).then((data) => console.log(data));

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
