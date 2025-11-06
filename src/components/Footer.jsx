import React from 'react'
import Container from '@mui/material/Container';
import { Divider, Typography } from '@mui/material';
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareYoutube } from "react-icons/fa6";
import { Col, Row } from 'react-bootstrap';

function Footer() {
  return (
    <Container maxWidth={false} disableGutters sx={{background:'#393535ff'}}>
        <Typography variant='h4' sx={{color:'white',paddingTop:'30px',marginLeft:'40px',fontWeight:'bold'}}>STORE<span style={{marginLeft:'1050px',color:'white',
          fontSize:'30px'}}><FaFacebookF />&nbsp;&nbsp;&nbsp;&nbsp;<BsTwitterX />&nbsp;&nbsp;&nbsp;&nbsp;<FaSquareYoutube /></span></Typography>
      <hr style={{color:'white'}}/>
      <Row style={{color:'white',fontSize:'14px'}}>
        <Col style={{marginTop:'10px'}}>
      <ul type="none">
        <li style={{fontSize:'23px',fontWeight:'bold',marginBottom:'15px'}}>Games</li>
        <li style={{marginBottom:'10px'}}>Fortnite</li>
        <li style={{marginBottom:'10px'}}> Fall Guys</li>
        <li style={{marginBottom:'10px'}}>Rocket League</li>
        <li style={{marginBottom:'10px'}}>Unreal Tournament</li>
        <li style={{marginBottom:'10px'}}>Infinity Blade</li>
        <li style={{marginBottom:'10px'}}>Rocket Recall</li>
      </ul>
      </Col>
      <Col style={{marginTop:'10px'}}>
      <ul type="none">
        <li style={{fontSize:'23px',fontWeight:'bold',marginBottom:'15px'}}>Marketplaces</li>
        <li style={{marginBottom:'10px'}}>Epic Games Store</li>
        <li style={{marginBottom:'10px'}}> Fab</li>
        <li style={{marginBottom:'10px'}}>Sketchfab</li>
        <li style={{marginBottom:'10px'}}>ArtStation</li>
        <li style={{marginBottom:'10px'}}>Store Refund Policy</li>
        <li style={{marginBottom:'10px'}}>Store EULA</li>
      </ul>
      </Col>
      <Col style={{marginTop:'10px'}}>
      <ul type="none">
        <li style={{fontSize:'23px',fontWeight:'bold',marginBottom:'15px'}}>Online Services</li>
        <li style={{marginBottom:'10px'}}>Epic Online Services</li>
        <li style={{marginBottom:'10px'}}> Kids Web Services</li>
        <li style={{marginBottom:'10px'}}>Service Agreements</li>
        <li style={{marginBottom:'10px'}}>Acceptable Use Policy</li>
        <li style={{marginBottom:'10px'}}>Trust Statement</li>
        <li style={{marginBottom:'10px'}}>Subprocessor List</li>
      </ul>
      </Col>
      <Col style={{marginTop:'10px'}}>
      <ul type="none">
        <li style={{fontSize:'23px',fontWeight:'bold',marginBottom:'15px'}}>Company</li>
        <li style={{marginBottom:'10px'}}>About</li>
        <li style={{marginBottom:'10px'}}> Newsroom</li>
        <li style={{marginBottom:'10px'}}>Careers</li>
        <li style={{marginBottom:'10px'}}>Students</li>
        <li style={{marginBottom:'10px'}}>UX Research</li>
      </ul>
      </Col>
      <Col style={{marginTop:'10px'}}>
      <ul type="none">
        <li style={{fontSize:'23px',fontWeight:'bold',marginBottom:'15px'}}>Resources</li>
        <li style={{marginBottom:'10px'}}>Dev Community</li>
        <li style={{marginBottom:'10px'}}> MegaGrants</li>
        <li style={{marginBottom:'10px'}}>Support-A-Creator</li>
        <li style={{marginBottom:'10px'}}>Creator Agreement</li>
        <li style={{marginBottom:'10px'}}>Unreal Engine Branding</li>
        <li style={{marginBottom:'10px'}}>Distribut on Epic Games</li>
      </ul>
      </Col>
      </Row>
      </Container>
  )
}

export default Footer