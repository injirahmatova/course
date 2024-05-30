import React from 'react'
import style from '../Register/Register.module.css';

const Register = () => {
  return (
    <section className={style.fourthSection}>
 <div className={style.fourthContainer}> 
 <div className={style.rightDiv}>
    <h3 className={style.registrH3}>Register now and get a discount 50% discount until 1 January</h3>
<p className={style.registrP}>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
 <button className={style.rightBtn}>REGISTER NOW</button>
 </div>
 <div className={style.leftSection}>
<h4 >Search for your course</h4>
<form action="">
    <input type="text" placeholder='Course Name' />
</form>
<form action="">
    <input type="text"placeholder='Category' />
</form>
<form action="">
    <input type="text" placeholder='Degree'/>
</form>

<button className={style.btn}>SEARCH COURSE</button>
 </div>
      
    </div>
  
    </section>
  ) 
}

export default Register
