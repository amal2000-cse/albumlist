import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

//This component will update selected album with new title.
const UpdateAlbum = (props) => {
  
  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById('title-inp').value;
    let updateUserid = document.getElementById('userid-inp').value;

    if (updateTitle === '') {
      updateTitle = props.album.title;
    }
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  }

  return (
    <>
      <Navbar path="/" page="Home" title="Update Album"/>
      <div className='update-album'>
        <div className='form-container'>
          <h4>Title : {props.album.title}</h4>
          <div className='inp-container'>
            Enter New Title :
            <input class="form-control" type="text" id='title-inp'></input>
          </div>

          <h4>User Id : {props.album.userId}</h4>
          <div className='inp-container'>
            Enter New UserId :
            <input class="form-control" type="number" id='userid-inp'></input>
          </div>

          <Link to='/'><button className="btn btn-primary mx-2 my-2" type='submit' onClick={getUpdateData}>Save</button></Link>
        </div>
      </div>
    </>
  )
}

export default UpdateAlbum;
