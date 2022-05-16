import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/footer/Footer'
import Slider from '../components/Slider'
import Mission from '../components/Mission'
import FeaturedProducts from '../components/FeaturesProducts/FeaturedProducts'
import AboutUs from '../components/AboutUs'
import CustomNav from '../components/CustomNav'
import Navbar from '../components/Navbar'
import Backtotop from '../components/Backtotop'

export default function Home() {

  return (
    <>
    <Navbar2/>
    <Navbar/>
    
    <Slider/>
    <Mission/>
    <FeaturedProducts/>
    <div style={{marginTop:'40px'}}>
      </div>
    <AboutUs/>
    <div style={{marginTop:'40px',marginBottom:'40px',textAlign:'center'}}>
    {/* <h2 style={{fontWeight:'500'}}>COMPANY OVERVIEW</h2> */}
    </div>
    <Footer/>  
    <Backtotop/>
    </>
      )
}
