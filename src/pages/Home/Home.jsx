import "./Home.css";
import BestSellersSection  from "../../components/BestSellersSection/BestSellersSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import InputText from "../../components/InputText/InputText";

const Home = () => {
  return (
    <>
      <SectionHeading title="Best sellers" />
      <InputText placeholderText="Search" />
      <BestSellersSection/>
      <SectionHeading title="Work with us" />
      <SectionHeading title="Customer reviews" />
    </>
  )
}

export default Home