
import React from 'react'
import style from '../PopularPart/PopularPart.module.css'
import imageSix from '../../assets/image/course_1.jpg'
import imageSeven from '../../assets/image/course_2.jpg'
import imageEight from '../../assets/image/course_3.jpg'
import imageNine from '../../assets/image/author.jpg'
import imageTen from '../../assets/image/author.jpg'
import imageEleven from '../../assets/image/author.jpg'

const PopularPartComponent = () => {
  return (  
    <section className={style.sectionThird}> 
   
<div className={style.popular}>
     <div className={style.line}></div>
    <h3 className={style.cours}>Popular Courses</h3>
</div>
<div className={style.containerThird}>
    <div className={style.photos}>
        <div className={style.div}>
<img className={style.img} src={imageSix} alt="imageSix"/>
   <p className={style.text}>A complete guide to design</p>
   <span className={style.spane}>Adobe Guide, Layes, Smart Objects etc...</span>
        </div>
   
   <div className={style.photoDiv}>
    <img  className={style.imageAuthor}src={imageNine} alt="imageNine" />
    <p className={style.authorP}>Michael Smith,</p>
    <span className={style.authorSpan}>Author</span>

    <div className={style.payment}>
        <span className={style.pay}> $29</span>
    </div>
   </div>
    </div>

    <div className={style.photos}>
        <div className={style.div}>
             <img className={style.img} src={imageSeven} alt="imageSeven" />
        <p className={style.text} >Beginners guide to HTML</p>
        <span className={style.spane}>Adobe Guide, Layes, Smart Objects etc...</span>
        </div>
       
        <div className={style.photoDiv}>
    <img className={style.imageAuthor} src={imageTen} alt="imageTen" />
    <p className={style.authorP}>Michael Smith,</p>
    <span className={style.authorSpan}>Author</span>
    <div className={style.payment}>
        <span className={style.pay}> $29</span>
    </div>
   </div>
    </div>

    <div className={style.photos}>
        <div className={style.div}>
              <img className={style.img} src={imageEight} alt="imageEight" />
        <p className={style.text}>Advanced Photoshop</p>
        <span className={style.spane}> Adobe Guide, Layes, Smart Objects etc...</span>
        </div>
      
       
       <div className={style.photoDiv}>
    <img className={style.imageAuthor} src={imageEleven} alt="imageEleven" />
    <p className={style.authorP}>Michael Smith,</p>
    <span className={style.authorSpan}>Author</span>

    <div className={style.payment}>
        <span className={style.pay}>$29</span>
    </div>
   </div>
    </div>

</div>
    </section>
 
  )
}

export default PopularPartComponent
