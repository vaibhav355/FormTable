import { Paper } from "@mui/material";
import styled from "styled-components";
import React from "react";

const PaperContainer = styled(Paper)`
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 20px;

  /* ################# */
  border-radius: 25px !important;
  width: 96%;
  margin-top: 5%;
  display: ${props=>props.view?"block":"none"};
`;
const MainContainer = styled.div`
  display: flex;
`;

const FirstContainer = styled.div`
  flex: 1;
`;

const SecondContainer = styled.div`
  flex: 1;
`;


const Heading = styled.span`
  font-weight: bold;
  font-family: "Roboto";
  margin-bottom: 13px;
`;

const Info = styled.span`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
`;

const SingleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

// #########################################################
// #########################################################
// #########################################################
// #########################################################

const MainHeading = styled.span`
  font-weight: bold;
`;

const Desc = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const DescContainer = styled.div`
  margin-bottom: 25px;
`;

// ############################
// to Delete

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 10%;
// `;

const ViewDetailsPage = ({view, detailsValue}) => {
  return (
    
      <PaperContainer view={view}>
        <DescContainer>
          <MainHeading>Description</MainHeading>
          <Desc>
            {detailsValue?.company?.catchPhrase}, {detailsValue?.company?.bs}
          </Desc>
        </DescContainer>

        <MainContainer>
          <FirstContainer>
            <SingleInfo>
              <Heading>Contact Person</Heading>
              <Info>{detailsValue.name}</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>Designation</Heading>
              <Info>{detailsValue.company.name}</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>Emails</Heading>
              <Info>{detailsValue.email}</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>Phones</Heading>
              <Info>{detailsValue.phone}</Info>
            </SingleInfo>
          </FirstContainer>

          <SecondContainer>
            <SingleInfo>
              <Heading>Address</Heading>
              <Info>{detailsValue.address.street}, {detailsValue.address.suite}, {detailsValue.address.city}, {detailsValue.address.zipcode}</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>City</Heading>
              <Info>{detailsValue.address.street}</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>State</Heading>
              <Info>{detailsValue.address.city}</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>Country</Heading>
              <Info>{detailsValue.address.city}</Info>
            </SingleInfo>
          </SecondContainer>
        </MainContainer>
      </PaperContainer>
    
  );
};

export default ViewDetailsPage;
