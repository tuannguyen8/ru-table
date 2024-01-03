import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
//import dataset from './dataset.json'

function App() {
	return (
		<div className="App">
			{/* {
        dataset.map(data =>{
          return(
            <div> {data.product} {data.repeat}</div>
          )
          
        })
      } */}

			<MainContainer />
		</div>
	);
}

export default App;
