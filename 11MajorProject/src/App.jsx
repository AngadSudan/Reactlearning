import React from 'react'

function App() {
  const variables= import.meta.env.VITE_APPWRITE_URL;
  
  return (
    <div>
      <h1> A blog with appwrite , the key is : {variables}</h1>
    </div>
  )
}

export default App