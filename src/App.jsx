import "devextreme/dist/css/dx.light.css";
import "./reset.css";
import "./App.css";
import { Header } from "./components/UI/Header/Header";
import { Navigation } from "./components/UI/Navigation/Navigation";
import { Page } from "./components/UI/Page/Page";

function App() {
  return (
    <section className="main-container">
      <Navigation />
      <div className="main-page">
        <Header />
        <Page />
      </div>
    </section>
  );
}

export default App;
