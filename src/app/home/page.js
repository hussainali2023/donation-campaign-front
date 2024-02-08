import Card_Home from "@/components/Card_Home/Card_Home";

const { default: Banner } = require("@/components/Banner/Banner");

const Home = () => {
  return (
    <>
      <Banner />
      <Card_Home />
    </>
  );
};

export default Home;
