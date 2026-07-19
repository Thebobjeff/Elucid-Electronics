import { Header, Footer } from "./components/index.jsx";
import { AllRoutes } from "./routes/AllRoutes.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
