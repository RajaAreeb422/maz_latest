import { Carousel } from "@trendyol-js/react-carousel";
//import Carousel from "react-bootstrap/Carousel";
import Highlight from "react-highlight";
import { useState, useEffect } from "react";
import Link from 'next/link'
import Deals_ItemLeft from "./Deals_Item";
import Deals_ItemRight from "./Deals_ItemRight";
import { useRouter } from 'next/router';
import { DeleteOutline, Edit } from '@material-ui/icons';
import { Icon } from "@material-ui/core";
import ic from '../../styles/feature.module.css'
const FeaturedProducts = () => {

  useEffect(() => {
    // alert('Finished loading');
  }, []);
  const [box, setBox] = useState([
    {
      id: 1,
      text: "CV Joint Outer",
      price:4000,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0700480_1.webp",
    },
    {
      id: 2,
      text: "Front Bumper Black",
      price:5000,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0703479web.webp",
    },
    {
      id: 3,
      text: "Rear Bumper",
      price:6000,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0701324_3.webp",
    },
    {
      id: 4,
      text: "CV.JOINT",
      price:7000,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0700480_1.webp",
    },
    {
      id: 5,
      text: "Web.C HandBrake",
      price:7000,
      img:'https://www.chanceparts.com/Uploads/pro/Wabco-Air-processing-unit-9325100090.353.1.jpg'
    },
    {
      id: 6,
      text: "Web Co Air Processing",
      price:7000,
      img:'https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0701324_3.webp'
    },
    {
      id: 7,
      text: "Solenoid",
      price:7000,
      img:'https://www.chanceparts.com/Uploads/pro/Knorr-ECAS-Solenoid-valve-K019820N50.372.1.jpg'
    },
    {
      id: 8,
      text: "Clutch",
      price:7000,
      img:'https://www.chanceparts.com/Uploads/pro/Knorr-Clutch-actuator-K013727N50K015874N50K013727N04K013727N03K013727N02.406.1.jpg'
    }
  ]);

  const borderstyle={
    borderTop:'20px solid #F7F7F7',
  }
  return (
    <div className={ic.Container}>
      <div
        style={{
          backgroundColor: "white",
          marginLeft: "-30px",
          marginRight: "-30px",
        }}
      >
        
          <p className={ic.h4} style={{marginTop:'30px',marginBottom:'20px'}}>Featured Products</p>

          <Carousel style={{ width: "360px", }} show={5} slide={1} swiping={true} leftArrow={<Deals_ItemLeft/>} rightArrow={<Deals_ItemRight/>}>
              {box.map((it,key) => (
                <Link key={key} href="/category/[id]" as={`/category/${it.id}`}>
                  <div className={ic.imgDiv}>
                  <img src={it.img} height='150px' width='150px' style={{margin:'10px',border:'0.095rem solid lightgrey'}}/>
                  {/* <p style={{ marginLeft:'20px',color:'rgba(16, 103, 138, 0.933)',fontSize:'20px' }}>{it.price} PKR</p> */}
                  <h5 style={{ marginLeft:'10px',fontSize:'16px',fontWeight:'320' }}>{it.text}</h5>
                  <p style={{ marginLeft:'10px',color:'grey' }}>Incl. VAT : <strong>400 Rs</strong></p>
                  </div>
              
              </Link>
                
               
          
              ))}
          </Carousel>
     
      </div>
    </div>
  );
};
export default FeaturedProducts;
