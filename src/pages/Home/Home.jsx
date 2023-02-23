import "./Home.css";
import BestSellersSection from "../../components/BestSellersSection/BestSellersSection";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ButtonUp from "../../components/ButtonUp/ButtonUp";
import CustomerReviewsSection from "../../components/CustomerReviewsSection/CustomerReviewsSection";
import Faqs from "../../components/Faqs/Faqs";
import Work from "../../components/Work/Work"
import Voice from "../../components/Voice/Voice"


const Home = () => {
  return (
    <>
      <Voice/>
      <SectionHeading title="Best sellers" />
      <BestSellersSection />
      <SectionHeading title="Work with us" />
      <Work />
      <SectionHeading title="Customer reviews" />

      <SectionHeading title="FAQ" />
      <ButtonUp />
      <Faqs />
    </>
  );
};

export default Home;
