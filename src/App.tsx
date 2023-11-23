import PNG from './assets/rspress-icon-copy.PNG'
import png from './assets/rspress-icon.png'
import "./App.css";

function App() {

	return (
		<div className="App">

			{/*can't build when use resource end with .PNG */}
			<img src={PNG} className="logo react" alt="React logo" />
			{/* can build when use resource end with .png */}
			<img src={png} className="logo react" alt="React logo" />

		</div>
	);
}

export default App;
