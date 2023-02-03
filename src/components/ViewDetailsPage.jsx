import { Paper } from "@mui/material";
import styled from "styled-components";
import React from "react";

const MainContainer = styled.div`
  display: flex;
`;

const FirstContainer = styled.div`
  flex: 1;
`;

const SecondContainer = styled.div`
  flex: 1;
`;

const PaperContainer = styled(Paper)`
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 20px;

  /* ################# */
  border-radius: 25px !important;
  width: 82%;
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;

const ViewDetailsPage = () => {
  return (
    <Container>
      <PaperContainer>
        <DescContainer>
          <MainHeading>Description</MainHeading>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            impedit ratione provident?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores facilis nihil laboriosam Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Minima et vero
            exercitationem assumenda? Ipsam, eos porro. Quisquam rerum debitis,
            ut neque quos distinctio.
          </Desc>
        </DescContainer>

        <MainContainer>
          <FirstContainer>
            <SingleInfo>
              <Heading>Contact Person</Heading>
              <Info>Imran Dola</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>Designation</Heading>
              <Info>Proprietor</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>Emails</Heading>
              <Info>hello@gmail.com</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>Phones</Heading>
              <Info>986759847</Info>
            </SingleInfo>
          </FirstContainer>

          <SecondContainer>
            <SingleInfo>
              <Heading>Address</Heading>
              <Info>15 kasmani Shopping Centre Unn Surat Gujarat</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>City</Heading>
              <Info>Surat</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>State</Heading>
              <Info>Gujarat</Info>
            </SingleInfo>

            <SingleInfo>
              <Heading>Country</Heading>
              <Info>India</Info>
            </SingleInfo>
          </SecondContainer>
        </MainContainer>
      </PaperContainer>
    </Container>
  );
};

export default ViewDetailsPage;
