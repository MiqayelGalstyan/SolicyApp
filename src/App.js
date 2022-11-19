import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Header />
      <Main />
      <Footer />
    </MainLayout>
  );
};

export default App;
