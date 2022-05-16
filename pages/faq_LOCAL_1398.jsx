import styled from "styled-components";

import Navbar2 from "../components/Navbar2";
//import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
//import ProductItem from "../../../components/ProductItem";
import SingleProduct from "../components/SingleProduct";
import { HomeOutlined, Category } from "@material-ui/icons";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Faq = () => {
  useEffect(() => {
    // alert('Finished loading');
  }, []);
  return (
    <>
      <Navbar2 />
      <Navbar />
      <img
        src="https://www.chanceparts.com/Uploads/info/60ccb07493e7c.jpg"
        width="100%"
      />
      <Container>
      <SideBar/>
        <div style={{ margin: "70px" }}>
          <Productshow>
            <P
              style={{
                fontWeight: "300",
                fontSize: "28px",
                marginTop: "-10px",
                fontFamily:'Halvatica'
              }}
            >
              F.A.Q
            </P>

            <P style={{ fontWeight: "400" }}>
              Q1. What is your terms of packing?
            </P>
            <P style={{ marginTop: "-10px" }}>
              A: Generally, we pack our goods in neutral white boxes and brown
              cartons. If you have legally registered patent, we can pack the
              goods in your branded boxes after getting your authorization
              letters.
            </P>

            <P style={{ fontWeight: "400" }}>
              Q2. What is your terms of payment?
            </P>
            <P style={{ marginTop: "-10px" }}>
              A: T/T 30% as deposit, and 70% before delivery. We will show you
              the photos of the products and packages before you pay the
              balance.
            </P>

            <P style={{ fontWeight: "400" }}>
              Q3. What is your terms of delivery?
            </P>
            <P style={{ marginTop: "-10px" }}>A: EXW, FOB, CFR, CIF.</P>

            <P style={{ fontWeight: "400" }}>
              Q4. How about your delivery time?
            </P>
            <P style={{ marginTop: "-10px" }}>
              A: Generally, it will take 30 to 60 days after receiving your
              advance payment. The specific delivery time depends on the items
              and the quantity of your order.
            </P>
            <P style={{ fontWeight: "400" }}>
              Q5. Can you produce according to the samples?
            </P>
            <P style={{ marginTop: "-10px" }}>
              A: Yes, we can produce by your samples or technical drawings. We
              can build the molds and fixtures.
            </P>

            <P style={{ fontWeight: "400" }}>Q6. What is your sample policy?</P>
            <P style={{ marginTop: "-10px" }}>
              A: We can supply the sample if we have ready parts in stock, but
              the customers have to pay the sample cost and the courier cost.
            </P>
            <P style={{ fontWeight: "400" }}>
              Q7. Do you test all your goods before delivery?
            </P>
            <P style={{ marginTop: "-10px" }}>
              A: Yes, we have 100% test before delivery.
            </P>

            <P style={{ fontWeight: "400" }}>
              Q8: How do you make our business long-term and good relationship?
            </P>
            <P style={{ marginTop: "-10px" }}>
              1. We keep good quality and competitive price to ensure our
              customers benefit
            </P>
            <P style={{ marginTop: "-10px" }}>
              2. We respect every customer as our friend and we sincerely do
              business and make friends with them, no matter where they come
              from.
            </P>
          </Productshow>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Faq;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const P = styled.p`
  font-weight: 320;
  font-family:Montserra;
`;
const Bar = styled.div`
  display: flex;
  width: 245px;
  flex-direction: row;
  background-color: whitesmoke;
  //border-style:groove;
  border-bottom-color: whitesmoke;
  text-align: center;
`;

const FilterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const GridArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const Filter = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: column;

  //height:40px;
  // background-color:white;
`;

const FilterHome = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  //height:40px;
`;
const Images = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  //height:40px;
`;
const LeftBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;

  border-color: whitesmoke;
  border-style: ridge;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const SearchBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;
  margin-bottom: 40px;
  border-color: whitesmoke;
  border-style: ridge;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const Right = styled.div`
  margin-left: 30px;
`;

const FilterText = styled.span`
  font-size: 16px;
  padding: 8px;
  font-weight: 300;
  font-family: Montserrat;
  margin-left: 10px;
`;
const FilterHomeText = styled.span`
  font-size: 14px;
  padding: 6px;
  /* padding:20px;
  margin-top: 10px;
  margin-left:20px */
`;
const SortText = styled.span`
  font-size: 14px;
`;
const FilterTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding: 9px;
  font-family: Helvatica;
  background-color: whitesmoke;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
  padding: 20px;
  padding-top: 0px;
  width: 700px;
  margin-top: 0px;
  display: flex;

  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;
