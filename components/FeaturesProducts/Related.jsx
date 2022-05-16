import { Carousel } from "@trendyol-js/react-carousel";
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import Link from 'next/link'
import Deals_ItemLeft from "./Deals_Item";
import ItemRight from "./ItemRight";
import { useRouter } from 'next/router';
import { DeleteOutline, Edit } from '@material-ui/icons';
import { Icon } from "@material-ui/core";
import ic from '../../styles/feature.module.css'
const Related = () => {

  useEffect(() => {
    // alert('Finished loading');
  }, []);
  const [box, setBox] = useState([
    {
      id: 1,
      text: "CV JOINT OUTER",
      price:4000,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0700480_1.webp",
    },
    {
      id: 2,
      text: "FRONT BUMPER BLACK",
      price:5000,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0703479web.webp",
    },
    {
      id: 3,
      text: "REAR BUMPER",
      price:6000,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0701324_3.webp",
    },
    {
      id: 4,
      text: "CV.JOINT",
      price:7000,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0700480_1.webp",
    },
  ]);

  const borderstyle={
    borderTop:'20px solid #F7F7F7',
  }
  return (
    <div className={ic.Container2}>
      <div
        style={{
          backgroundColor: "whitesmoke",
          marginLeft: "-30px",
          marginRight: "-30px",
          marginBottom:'20px'
        }}
      >
        
          <p className={ic.h4} style={{fontWeight:'600px',marginTop:'40px',padding:'4px'}}>Related Products</p>

          <Carousel style={{ width: "360px!important" }} show={3.5} slide={1} swiping={true} leftArrow={<Deals_ItemLeft/>} rightArrow={<ItemRight/>}>
              {box.map((it,key) => (
                <Link key={key} href="/category/[id]" as={`/category/${it.id}`}>
                  <div className={ic.imgDiv} style={{marginBottom:'60px'}}>
                  <h5 style={{ marginLeft:'10px',fontSize:'14px',fontWeight:'200' }}>{it.text}</h5>
                  <img src={it.img} height='200px' width='200px'/>
                  <p style={{ marginLeft:'20px',color:'rgba(16, 103, 138, 0.933)',fontSize:'20px' }}>{it.price} PKR</p>
                  <p style={{ marginLeft:'10px',color:'grey' }}>Incl. VAT : <strong>400 Rs</strong></p>
                  </div>
              
              </Link>
                
               
          
              ))}
          </Carousel>
     
      </div>
    </div>
  );
};
export default Related;
