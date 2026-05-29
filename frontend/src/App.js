import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Failed to connect to backend'));
  }, []);

  return (
    <div className="App">
      <h1>My First Full Stack App</h1>
      <h2>Message from Backend:</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;