import "./App.css";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Text from "./components/text/Text";

function App() {
  return (
    <>
      <Header />
      <Text adi={" ДЗ 1"} />
      <Footer />
      <Button />
    </>
  );
}

export default App;
