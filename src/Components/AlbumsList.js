import React from 'react'
import List from './List'
import Navbar from './Navbar'

//This component shows Navbar and list of all albums.
const AlbumsList = (props) => {
  return (
    <>
      {/* Navbar */}
      <Navbar page=" Add Album" path="/add-album" title="ALBUM-LIST" />

      <div className='albums-list'>
        {props.albums.slice().reverse().map((album) => <List album={album} key={album.id} setUpdateAlbum={props.setUpdateAlbum} deleteAlbumFromList={props.deleteAlbumFromList} />)}
      </div>
    </>
  )
}

export default AlbumsList
