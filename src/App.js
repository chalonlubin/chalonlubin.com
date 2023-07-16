import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RouteList from "./routes/RouteList";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner"

import "./sass/App.scss";

function App() {
  // TODO: useParams or useLocation to only show banner when intended

  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="flex flex-col justify-between h-screen">
        <div className="mb-2">

          <NavBar />
          <Banner message="Daniel is a boss"/>
          <button className="btn btn-daniel">Daniel is also a boss</button>
        </div>
        <RouteList />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
