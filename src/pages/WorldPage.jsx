import Card from "../components/Card";
import Header from "../components/Header";
import Title from "../components/Title";

const WorldPage = ({ allCountriesData }) => {
  return (
    <div className="world-page-container">
      <Header></Header>
      <Title></Title>
      <Card allCountriesData={allCountriesData}></Card>
    </div>
  );
};

export default WorldPage;
