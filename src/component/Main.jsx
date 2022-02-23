import { useState } from "react"

import SignIn from './SignIn';
import Register from './Register';
import Footer from "./Footer";
import Forms from "./Forms";
import Icons from "./Icons";

const Main = () => {
    const [signinForm, setSigninForm] = useState(true)

    const toggleSigninForm = () => {
        setSigninForm(!signinForm)

    }

    return ( 
        
        <div className="main__container">
        <div className="main__box">
            <div className="main__content">
            <Icons/> 

             <Forms /> 
        <a href="/SignIn"><SignIn /></a>
          <a href="/Register"><Register /></a>

          <button onClick={toggleSigninForm}>SignIn</button>
          <button onClick={toggleSigninForm}>Register</button>

          {
              signinForm? <SignIn /> : <Register />
          }
        

            </div>
            <Footer/>
        </div> 
        </div>

             

       
     );
}
 
export default Main;