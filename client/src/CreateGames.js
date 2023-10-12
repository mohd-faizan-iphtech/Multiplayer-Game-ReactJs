import React from 'react'
import { useNavigate } from "react-router-dom";
export default function CreateGames() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/Game");
      }

  return (
    <div className='container p-5'>
        <div className="row" style={{ height: "" }}>

        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center hidemobile">
                <img src="image/sideimage.png" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">

<div class="card shadow p-3 ">
  <h5 class="card-header" style={{color:'#4682B4'}}>Welcome to Game world ..!</h5>
  <div class="card-body p-4">
  <div class="d-grid gap-2">

    <h5 class="card-title"> Let's Create your Game </h5>
     <button type="button" class="btn btn-success mb-4" onClick={{handleClick}}  >Create</button>
 
     <h5 class="card-title"> Play with Friends </h5>
      <button type="button" class="btn btn-success">Join Game</button>
      
      </div>
  </div>
  </div>
  </div>
</div>
</div>
  )
}
