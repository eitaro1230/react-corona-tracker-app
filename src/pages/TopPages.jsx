import Header from "../components/Header";
import Results from "../components/Results";
import Selector from "../components/Selector";
import Title from "../components/Title";

const TopPage = (props) => {
  return (
    <div className="top-page-container">
      <div>
        <Header></Header>
        <Title></Title>
        <Selector
          countriesJson={props.countriesJson}
          setCountry={props.setCountry}
          getCountryData={props.getCountryData}
        ></Selector>
        <Results countryData={props.countryData}></Results>
      </div>
    </div>
  );
};

export default TopPage;
