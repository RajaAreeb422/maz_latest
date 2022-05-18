import { useEffect, useState ,useContext} from "react";
//import { useSelector } from "react-redux";

import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
   Phone,
   Email
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
//import nav from "../styles/navbar.module.css";
import axios from "axios";

import { menuItems } from "./menuItems";
import Menu from "./Menu";
import Carosel from "./Carosel";
import nav from "../styles/navbar.module.css";
const Navbar = () => {
  const [cat,setCat]=useState([]);
  useEffect(() => {
    let list=[];
    let list1=[]
    axios.get(`https://mazglobal.co.uk/maz-api/categories`)
    .then(res => {
      console.log('maz',res.data.data)
      
      res.data.data.map(lt=>{
        if(lt.parent==null)
        {
        list1.push({
          id:lt.id,
          title:lt.name,
          
        })
      }
      else{
        console.log('list1',list1)
        list1.map(lop=>{
          // lop={
          //   id:lop.id,
          //   title:lop.title,
          //   submenu:[]
          // }
          console.log('loop',lop)
          if(lop.id==lt.parent)
          {
            console.log('loop2',lop)
            
            lop.submenu.push({
              id:lt.id,
              title:lt.name
            })
          }
        })
         
        }
        // list.push({
        //   id:lt.id,
        //   title:lt.name
        // })
      
      })
      setCat(list1)
      console.log("list",list1)
    }).catch(err=>console.log(err))
    menuItems.map(it=>{
      if(it.title=='Products')
      {
        it.submenu=list1
      }
    })
  
    // alert('Finished loading');
  }, []);
  const depthLevel = 0;
 return (
   <>
   
  <nav style={{display:'flex',flexDirection:'row',height:'105px'}} className={nav.stick}>
  <Link href="/" as={`/`}>
       <div style={{marginLeft:'160px',marginTop:'-6px'}}>
        <Image style={{cursor:'pointer'}}  height='120px' width='180px' src='/Maz Global Logo-02.png'/>
        </div>
        </Link>
   <ul className="menus" style={{marginLeft:'auto'}}>
    
    {menuItems.map((menu, index) => (
      <>
     
     <Menu className={nav.list} items={menu} depthLevel={depthLevel}/>
     </>
    ))}
   </ul>
  </nav>
  </>
 );
};

export default Navbar;         
         
          {/* <div className={nav.MeniItems}>
            <div className={nav.StyledLink} href="/">
              <p>
                
                <Link href="/" as={`/`}>
                  <img
                    src="/pernia.png"
                    style={{ marginLeft: "600px", marginTop: "10px" }}
                    className={nav.Logo}
                    width={100}
                  />
                </Link>
              </p>
            </div>
          </div> */}

         
       

       

        {/* <div className={nav.Right}>
        

          <Link href="/cart" as={`/cart`}>
            <div className={nav.Link}>
              <div className={nav.StyledLink}>
                <div className={nav.icons}>
                  <div className={nav.SearchContainer}>
                    <input type="text" placeholder="Search Product" />
                    <div
                      className={nav.Search}
                      style={{ color: "gray", fontSize: 18 }}
                    />
                  </div>
                  <LocalShippingOutlined
                    color="action"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      fontSize: "38px",
                      marginRight: "20px",
                    }}
                  />
                  {cartItems.length > -1 && (
                    <Badge badgeContent={cartItems.length} color="primary">
                      <ShoppingCartOutlined
                        color="action"
                        style={{
                          cursor: "pointer",
                          color: "black",
                          fontSize: "38px",
                          marginRight: "20px",
                        }}
                      />
                    </Badge>
                  )}
                </div>
            
              </div>
            </div>
          </Link>









          {loggedIn != "" ? (

               <NavDropdown
                style={{ marginLeft: "10px" }}
                id="nav-dropdown-dark-example"
                title={<Avatar
                  alt={user.first_name}
                  src="/static/images/avatar/1.jpg"
                />}
                menuVariant="light"
                >
                  
                  <Link href="userProfile/profile" >
                    <NavDropdown.Item href="userProfile/profile">
                      Account
                    </NavDropdown.Item>
                  </Link>
                
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" >
                  <p onClick={removeToken}>Logout</p>
                </NavDropdown.Item>
                </NavDropdown>
            
          ) : (
           
            <NavDropdown
                style={{ marginLeft: "10px" }}
                id="nav-dropdown-dark-example"
                title={<Person/>}
                menuVariant="light"
                >
                  
                  <Link href="/account/login" >
                    <NavDropdown.Item href="/account/login">
                      Login
                    </NavDropdown.Item>
                  </Link>
                  <Link href="/account/register" >
                    <NavDropdown.Item href="/account/register">
                      Register
                    </NavDropdown.Item>
                  </Link>
                
                <NavDropdown.Divider />
                
                </NavDropdown>

          )}
          <>
 
          </>
         
        </div> */}
      
     
{/* 
      <Navbar
        variant="dark"
        bg="dark"
        expand="lg"
        style={{ marginTop: "-60px" }}
      >
        <Container fluid>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav style={{ marginLeft: "auto", marginRight: "auto" }}>
              <NavDropdown
                style={{ marginLeft: "10px" }}
                id="nav-dropdown-dark-example"
                title="NewIn"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
{/* 
              <NavDropdown
                style={{ marginLeft: "10px" }}
                id="nav-dropdown-dark-example"
                title="Brands"
                menuVariant="dark"
              >
                {items.map((cl) => (
                  <Link href="/brand/[id]" as={`/brand/${cl.id}`}>
                    <NavDropdown.Item href="category/${cl.id}">
                      {cl.name}
                    </NavDropdown.Item>
                  </Link>
                ))}
              </NavDropdown> */}

              {/* {cats.map((cItem) => (
                <NavDropdown
                  style={{ marginLeft: "10px" }}
                  id="nav-dropdown-dark-example"
                  title={cItem.name}
                  menuVariant="dark"
                >
                  {coll.map((cl) =>
                    cl.category_id == cItem.id ? (
                      <Link href="/category/[id]" as={`/category/${cl.id}`}>
                        <NavDropdown.Item href="category/${cl.id}">
                          {cl.name}
                        </NavDropdown.Item>
                      </Link>
                    ) : (
                      ""
                    )
                  )}
                </NavDropdown>
              ))} */}
    //       
  
