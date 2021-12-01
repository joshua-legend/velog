import './app.css';

function App() {
  const name = 'joshua'
  return (
      <>
        <h1>Hello</h1>
        {name && <h1>{name}</h1>}
        {
          ['😁','😋'].map(x=>(
              <h2>{x}</h2>
          ))
        }
      </>

      );
}

export default App;
