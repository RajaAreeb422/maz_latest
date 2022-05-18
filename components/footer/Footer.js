import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import {
	Search,
	ShoppingCartOutlined,
	LocalShippingOutlined,
	SupervisedUserCircleOutlined,
	LockRounded,
	Phone,
	LocationCity,
	WhatsApp,
	Email
  } from "@material-ui/icons";
import Link from "next/link";
import styled from "styled-components";
const Footer = () => {
	useEffect(() => {
		// alert('Finished loading');
	  }, []);
return (

	<Box>
	<Container>
		<Row>

		<Column>
		<Image  height='250px' width='200px' src='/Maz Global Logo-02.png'/>
		</Column>	
	
		<Column>
			<Heading style={{marginLeft:'0px'}}>Feedback</Heading>
			<Input type='text' placeholder="Name"></Input>
			<Input type='email' placeholder="Email"></Input>
			<Textarea placeholder="Message"></Textarea>
            <Button>Submit</Button>
		</Column>
		<Column>
			{/* <Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink> */}

			<Heading >Contact Us</Heading>
			<FootLink href="#"><WhatsApp/>  <P>+44 (0)20 86542 7567</P></FootLink>
			<FootLink href="#"><Phone/>    <P>+44 (0)20 86542 7567</P></FootLink>
			<FootLink href="#"><Email/>     <P>customercare@mazglobal.pk</P> </FootLink>
			<FootLink ><LocationCity  /> <P> 1963 Street 63 Phase 3 Bahria Town Rawalpindi  </P></FootLink>
			
						
		</Column>
		{/* <Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<img src="./fb.svg" alt="" style={{ width: "30px",marginLeft:'20px' }} />
				<img src="./you.svg" alt="" style={{ width: "30px",marginLeft:'20px' }} />
				<img src="./insta.svg" alt="" style={{ width: "30px" ,marginLeft:'20px'}} />
				</span>
			</i>
			</FooterLink>
			
		</Column> */}

<Column style={{marginTop:'0px', marginLeft:'20px'}}>
			{/* <Heading>About Us</Heading> */}
			
			<Heading >Quick Links</Heading>
			<FootLink  ><Link href='/SellAt' as={`/SellAt`}><PP>Terms and Conditions</PP></Link></FootLink>
			<FootLink><Link href='/Connect_With_Us' as={`/Connect_With_Us`} ><PP>Connect with us</PP></Link></FootLink>
		</Column>
		</Row>
	</Container>
	
	<div style={{borderTop:'1px solid white',
				backgroundColor:'black',
				paddingBottom: "10px",
				marginBottom:'-18px',
				paddingTop: "10px"}}>
	<span style={{ color: "white",
				textAlign: "left",
				paddingBottom: "10px",
				marginLeft:'20px',
				paddingTop: "10px", }}>
		©️ 2022 MazGlobal. All Rights Reserved.
	</span>
	<span style={{ color: "white",
				float:'right',
				marginRight:'20px' }}>
		| Terms & conditions | Privacy | Cookie Disclaimers |

	</span>
	</div>
	</Box>
	
);
};
export default Footer;

const PP=styled.p` 
text-decoration:none;
cursor:pointer;
color:rgba(16, 103, 138, 0.933);
margin-top:0px;
`
const P=styled.p` 
text-decoration:none;
cursor:pointer;
color:rgba(16, 103, 138, 0.933);
margin-top:3px;
margin-left:8px ;
`
const FootLink=styled.div`
 text-decoration:none;
 padding-left:40px !important;
 padding:3px ;
 display:flex;
 flex-direction:row;
 
 color:rgba(16, 103, 138, 0.933);
`
const Input=styled.input`
 width:200px;
 padding:6px ;
 border: 0.095rem solid lightgrey;
 color:white;
 border-radius:4px;
 margin-bottom:4px;
`

 const Button=styled.button`
 width:100px;
 padding:6px ;
 border: 0.095rem solid lightgrey;
 color:white;
 border-radius:4px;
 background-color:rgba(16, 103, 138, 0.933);
`


const Textarea=styled.textarea`
  width:200px;
 padding:6px ;
 color:white;
 font-family:'Helvetica';
 border: 0.095rem solid lightgrey;
 border-radius:4px;
 margin-bottom:4px;
`

