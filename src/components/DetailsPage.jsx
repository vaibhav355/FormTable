import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import styled from "styled-components";
import ViewDetailsPage from "./ViewDetailsPage";

const PaperContainer = styled(Paper)`
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 50px;

  /* ################# */
  border-radius: 25px !important;
  width: 100%;
`;

const Heading = styled.span`
  font-weight: bold;
  font-family: "Roboto";
  margin-bottom: 13px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SingleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstContainer = styled.div`
  display: flex;
  align-items: center;
`;

// ###############################
// ###############################
// ###############################
// ###############################
// ###############################

const Button = styled.button`
  background-color: #f47d4b;
  border-radius: 25px;
  padding: 10px 20px 8px;
  color: white;
  font-family: "Roboto";
  font-size: 15px;
  cursor: pointer;
  outline: none;
  border: none;
`;

const Info = styled.span`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px;
  background-color: #cfd9f83b;
`;

const DetailsPage = () => {
  const [showResult, setshowResult] = useState(1);
  const [pages, setPages] = useState(0)
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        let tempData = [];
        data.map((dt) => {
          dt["showResult"] = false;
          tempData.push(dt);
        });
        // console.log(tempData);
        setDatas(tempData);
        if(data.length%4==0)
          setPages(data.length/4);
        else  
          setPages(Math.floor(data.length/4+1))
      });
  }, []);
  console.log(pages)
  const handleResult = (i) => {
    let values = [...datas];
    values[i].showResult = !values[i].showResult;
    // console.log(values);
    setDatas(values);
  };

  return (
    <>
      {datas?.map((data, i) =>
        // i < showResult * 4 && i >= (showResult - 1) * 4 ? (
          <Container >
            <PaperContainer key={data.id}>
              <MainContainer>
                <FirstContainer>
                  <span>{data.name}</span>
                </FirstContainer>

                <SingleInfo>
                  <Heading>CONTACT</Heading>
                  <Info>{data.username}</Info>
                </SingleInfo>

                <SingleInfo>
                  <Heading>CITY</Heading>
                  <Info>{data.address.street}</Info>
                </SingleInfo>

                <SingleInfo>
                  <Heading>STATE</Heading>
                  <Info>{data.address.city}</Info>
                </SingleInfo>

                <div>
                  <Button onClick={() => handleResult(i)}>
                    {!data.showResult ? "View Details" : "Hide Details"}
                  </Button>
                </div>
              </MainContainer>
              <ViewDetailsPage view={data.showResult } detailsValue={data}/>
            </PaperContainer>
          </Container>
        // ) : (
        //   <></>
        // )
      )}
    </>
  );
};

export default DetailsPage;
