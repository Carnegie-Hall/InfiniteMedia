import React from 'react';
import Header from './Header';
import Films from './Films';

function App() {

const [ movie, setMovie ] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3000/movies")
      .then(resp => resp.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div>
      <Header/>
      <Films movie={movie}/>
    </div>
  )
}

export default App;

//create db.json to store content 

//download package.json
// login component for switching login /log out 
// navbar component 
// do routing last