import React from 'react'
import "./Login.css"
function Login() {
  return (
    <div className='outerContainer'>
      <div className='img'>
          <img className='img' src="https://th.bing.com/th/id/R.9598b485d75c30986078655d68259c62?rik=3x6QQkttq1oywg&riu=http%3a%2f%2fcdn.wccftech.com%2fwp-content%2fuploads%2f2015%2f03%2famazon.png&ehk=OGzkN%2b1S%2bUD8ajtS9FRd%2bz86pttJ8rVRYeh2d8KQpDE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
      </div>
    <form className='container' action="action/insert.php" method = "post" >
       <p className='text container_element'>Sign-in</p>
       <div className='container_element'>
        <strong>E-mail</strong><br />
        <input type="email" name='email' placeholder="Enter your Email" required/>
       </div>
       <div className='container_element'>
       <strong>Passward</strong><br />
         <input type="password" placeholder="Enter your Password" required/>
       </div>
        <button className='container_element' >
        Sign-in
        </button>
        <div className='terms container_element'>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
        </div>
        <button>
            Create your Amazon Account
        </button>
        </form>
              
    </div>

  )
}

export default Login
