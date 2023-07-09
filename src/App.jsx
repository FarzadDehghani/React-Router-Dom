import Header from "./components/Header";
import Footer from "./components/Footer";
import {Router} from "./Routes.jsx";
import "./main.css";

function App() {
  return (
      <div className="container">
        <Header />
        <Router />
        <Footer />
      </div>
  );
}

export default App;