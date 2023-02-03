import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    width: 36px;
    height: 36px;
    background-color: ${props=>props.isSelected?"orange":"transparent"};
    color: ${props=>props.isSelected?"white":"black"};


    /* ######### */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Slider = () => {
  return (
    <Container>
       <ArrowBackIosNewIcon sx={{cursor: 'pointer', marginRight: '18px', fontSize: '15px'}}/> 
        {
            
        }

       <ArrowForwardIosIcon sx={{cursor: 'pointer', marginLeft: '18px', fontSize: '15px'}}/>
    </Container>
  )
}

export default Slider