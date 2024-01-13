import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from "./Components/Filters/Filter";
import Cards from "./Components/Cards/Cards";
import { useEffect, useState } from "react";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";
function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSeacrch] = useState("morty ");

  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}`;

  const [fetchData, setFetchData] = useState([]);

  const { info, results } = fetchData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api);
      let res = await data.json();

      setFetchData(res);
    })();
  }, [api]);

  return (
    <>
      <h1 className="text-center my-4">
        <span className="text-primary">Ricky</span> and Morty wiki
      </h1>
      <div className="text-center my-4">
        <Search setSeacrch={setSeacrch} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} classNam="col-4" />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
}

export default App;
