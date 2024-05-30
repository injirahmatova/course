import React from 'react'
import Header from '../../Components/Header/Header';
import SectionOne from '../../Components/SectionOne/SectionOne';
import PopularPart from '../../Components/PopularPart/PopularPart';
import Register  from '../../Components/Register/Register';


const home = () => {
  return (
    <div>
         <Header/>
         <SectionOne/>
          <PopularPart/>
          <Register/>
    </div> 
  
  )
}

export default home