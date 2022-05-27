import Header from "./UI/header/Header";
import { BrowserRouter } from "react-router-dom";
import { FC } from "react";
import Footer from "./UI/footer/Footer";
import MainPage from "./pages/main/MainPage";
import AppRouter from './router/AppRouter';



const App: FC = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <AppRouter/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

