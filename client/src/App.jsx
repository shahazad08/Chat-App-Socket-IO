import { BrowserRouter as Router, Routes } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => {
	return (
		<Router>
			<Routes path="/" exact component={Join} />
			<Routes path="/chat" component={Chat} />
		</Router>
	);
};

export default App;