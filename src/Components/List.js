import React from 'react'
import { Link } from "react-router-dom";

//This component displays individusl cart with update and delete button
const List = (props) => {
  return (
    <div className='list my-3' >
      <h3>{props.album.title}</h3>
      <div className='button-group'>
        <Link to="/update-album"><button class="btn btn-outline-success mx-1 my-1" onClick={() => props.setUpdateAlbum(props.album)}>Update</button></Link>
        <button className="btn btn-outline-danger mx-1 my-1" onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</button>
      </div>
    </div>
  )
}

export default List
