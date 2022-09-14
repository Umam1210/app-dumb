import "bootstrap/dist/css/bootstrap.min.css";
import AddFilm from "./components/AddFilm";
import Detailprofil from "./components/Detailprofil";
import Detailfilm from "./components/Detailfilm";
import Payuser from "./components/Payuser";
import Tvseries from "./pages/Tvseries";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const client = new QueryClient();
  return (
    <div>
      <BrowserRouter>
        <UserConxtProvider>
          <QueryClientProvider client={client}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addfilm" element={<AddFilm />} />
              <Route path="/tvseries" element={<Tvseries />} />
              <Route path="/movie" element={<Movie />} />
              <Route path="/profil" element={<Detailprofil />} />
              <Route path="/pay" element={<Payuser />} />
              <Route path="/detail" element={<Detailfilm />} />
            </Routes>
          </QueryClientProvider>
        </UserConxtProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
