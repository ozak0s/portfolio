import ContactMe from "./components/ContactMe";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Work from "./components/Work";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Expertise />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
