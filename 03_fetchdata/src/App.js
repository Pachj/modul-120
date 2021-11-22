import './App.css';
import {useEffect, useState} from "react";
import {getData} from "./dataservice";

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({results: []});

  useEffect(() => {
    /*fetch("https://hn.algolia.com/api/v1/search?query=react-fetch")
      .then((res) => res.json())
      .then((res) => {
        setData(res.hits);
          console.log(res.hits)
      },
        (error) => {
          console.log(error)
        })*/
    getData().then((res) => setData(res.hits));
  }, []);

  return (
    <div className="App">
      <ul>
        {data.map((dataset) => {
          return <li><a href={dataset.url}>{dataset.url}</a></li>
        })}
      </ul>
    </div>
  );
}

export default App;
