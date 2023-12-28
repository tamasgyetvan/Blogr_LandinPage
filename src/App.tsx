import { Header } from "./components/Header/Header";
import "../src/scss/style.scss";
import { Hero } from "./components/Hero/Hero";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero></Hero>
      </main>
    </>
  );
}

export default App;
