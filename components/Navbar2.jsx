import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
  PhoneOutlined,
  EmailOutlined,
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import router, { useRouter } from "next/router";
import Link from "next/link";
import nav from "../styles/navbar.module.css";
import axios from "axios";
//import logo from "../public/pernia.png";
import jwt_decode from "jwt-decode";

//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Navbar, Nav, } from "react-bootstrap";
import Image from "next/image";
import { NavDropdown,Form,FormControl,Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core'
import CustomNav from "./CustomNav";
//import DropdownC from './Dropdown'
const Navbar2 = () => {
  useEffect(() => {
    // alert('Finished loading');
  }, []);
  // const [blist, setBlist] = useState(false);
  // const [loggedIn, setloggedIn] = useState("");
  // const [user, setUser] = useState({
  //   first_name: "",
  // });
  // const [items, setItems] = useState([]);
  // const [cats, setCats] = useState([]);
  // const [coll, setColl] = useState([]);
  // const [show, setShow] = useState(false);

  //const { cartItems } = useSelector((state) => state.cart);
  
 

  // const removeToken = () => {
  //   console.log("hry removvee");
  //   localStorage.removeItem("token");
  //   router.push("/");
  // };
  // useEffect(() => {
  //   if(localStorage.getItem('token'))
  //   {
  //   setloggedIn(localStorage.getItem('token'))
  //  var decoded = jwt_decode(localStorage.getItem('token'));
  //  setUser(decoded.result)
  //   }
  //   else{
  //       setloggedIn('')
  //   }
  // },[])
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setloggedIn(localStorage.getItem('token'))
  //     console.log('token',localStorage.getItem('token'))
  //     //setloggedIn("");
  //     var decoded = jwt_decode(localStorage.getItem("token"));
  //     setUser(decoded.result);
  //   } else {
  //     setloggedIn("");
  //   }
  //   let list = [];
  //   axios
  //     .get(`http://localhost:8080/ecom-api/suppliers`)
  //     .then((resp) => {
  //       resp.data.data.map((it, i) => {
  //         list.push(it);
  //       });
  //       setItems(list);
  //     })
  //     .catch((err) => console.log(err));

  //   axios
  //     .get(`http://localhost:8080/ecom-api/categories`)
  //     .then((resp) => {
  //       setCats(resp.data.data);
  //     })
  //     .catch((err) => console.log(err));
  //   axios
  //     .get(`http://localhost:8080/ecom-api/collections`)
  //     .then((respo) => {
  //       setColl(respo.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const [state,setState]=useState(   {
    dropdownOpen: false
  })
  
 const  toggle=()=> 
    setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  
  return (
    <div className={nav.Container}>
      <div className={nav.Wrapper}>
        <div className={nav.Topbar}>


         <PhoneOutlined
           style={{color:'rgba(16, 103, 138, 0.933)', marginTop: "9px", marginLeft: "140px", fontWeight: "200" }}
           width="25px"
           height="25px"
        
         />
          <p
            style={{
              marginTop: "9px",
              marginLeft: "10px",
              fontWeight: "200",
            }}
          >
            +92-3315677071
          </p>

         
          <EmailOutlined 
          style={{color:'rgba(16, 103, 138, 0.933)', marginTop: "9px", marginLeft: "50px", fontWeight: "200" }}
          width="25px"
          height="25px"/>
          <p style={{ marginTop: "9px",
              marginLeft: "10px",
              fontWeight: "200",}}>
            info@mazglobal.com
          </p>
          <TextField
          style={{marginLeft:'auto',marginRight:'200px',paddingLeft:'8px', fontFamily: "'Montserrat', sans-serif"}}
          className={nav.Search}
           
         
            //label="   Enter Chance No.OEM No"
            placeholder="Enter Part No"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon style={{marginTop:'0px'}}/>
                  </IconButton>
                </InputAdornment>
              )
            }}
           />
         
        </div>

      {/* <CustomNav/> */}


     

      </div>
    </div>
  );
};

export default Navbar2;
