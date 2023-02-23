import ReviewCard from "../../components/ReviewCards/ReviewCard";
import "./Home.css";
import BestSellersSection  from "../../components/BestSellersSection/BestSellersSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import InputText from "../../components/InputText/InputText";
import Voice from "../../components/Voice/Voice";
import ButtonUp from "../../components/ButtonUp/ButtonUp";
import Work from "../../components/Work/Work";

const Home = () => {
  return (
    <>
      <Voice/>
      <SectionHeading title="Best sellers" />
      <InputText placeholderText="Search" />
      <BestSellersSection/>
      <SectionHeading title="Work with us" />
      <Work />
      <SectionHeading title="Customer reviews" />
      <ButtonUp/>
      <SectionHeading title="FAQ" />
    </>
  )

}

export default Home