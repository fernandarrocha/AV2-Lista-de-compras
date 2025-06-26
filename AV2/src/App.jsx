import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: 32 }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
