import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPages";
import WorldPage from "./pages/WorldPage";

function App() {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("japan");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });
  const [allCountriesData, setAllCountriesData] = useState([]);

  useEffect(() => {
    const getCountryData = () => {
      setLoading(true);
      fetch(
        `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCountryData({
            date: data[data.length - 1].Date,
            newConfirmed:
              data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
            totalConfirmed: data[data.length - 1].Confirmed,
            newRecovered:
              data[data.length - 1].Recovered - data[data.length - 2].Recovered,
            totalRecovered: data[data.length - 1].Recovered,
          });
          setLoading(false);
        })
        .catch((err) =>
          alert(
            "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
          )
        );
    };
    getCountryData();
  }, [country]);
  useEffect(() => {
    fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
      .then((res) => res.json())
      .then((data) => setAllCountriesData(data.Countries))
      .catch((err) =>
        alert(
          "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
        )
      );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TopPage
              countriesJson={countriesJson}
              setCountry={setCountry}
              countryData={countryData}
              loading={loading}
            ></TopPage>
          }
        ></Route>
        <Route
          path="/world"
          element={<WorldPage allCountriesData={allCountriesData}></WorldPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
