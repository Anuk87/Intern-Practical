import "./App.css";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import CardCollection from "./pages/CardCollection";
import DestinationsPage from "./pages/DestinationsPage";
import ExperiencePage from "./pages/ExperiencePage";
import FirstPage from "./pages/FirstPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <FirstPage />
      <ImageSlider />
      <DestinationsPage />
      <ExperiencePage />
      <CardCollection />
      <Footer />
    </div>
  );
}

export default App;
