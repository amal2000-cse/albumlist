import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const AddAlbum = (props) => {

  //Function will get all the input like userid and title then call add albumm function to add it on the album list
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <>
      <Navbar path="/" page="Home" title="Add New Album" />

      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h4>Enter New Album Details</h4>
          <div className='inp-container'>
            Enter User Id :
            <input class="form-control" id='aaform-userid-inp' type="number" />
          </div>
          <div className='inp-container'>
            Enter Album Title :
            <input class="form-control" id='aaform-title-inp' type="text" />
          </div>
          <div>
            <Link to="/"><button className="btn btn-primary mx-2 my-2" onClick={getAlbumFormData}>Add To List</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAlbum
