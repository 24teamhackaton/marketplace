import "./Home.css";
import BestSellersSection from "../../components/BestSellersSection/BestSellersSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import InputText from "../../components/InputText/InputText";
import ButtonUp from "../../components/ButtonUp/ButtonUp";
import CustomerReviewsSection from "../../components/CustomerReviewsSection/CustomerReviewsSection";
import Faqs from "../../components/Faqs/Faqs";

const Home = () => {
  return (
    <>
      <SectionHeading title="Best sellers" />
      <InputText placeholderText="Search" />
      <BestSellersSection />
      <SectionHeading title="Work with us" />

      <SectionHeading title="Customer reviews" />
      <CustomerReviewsSection />
      <SectionHeading title="FAQ" />
      <ButtonUp />
      <Faqs />
    </>
  );
};

export default Home;
