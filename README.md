# AlbumList React Application

Welcome to the AlbumList React application! This application allows you to manage a list of albums, including operations such as viewing all albums, adding new albums, updating existing albums, and deleting albums.

## Getting Started

To get started with the AlbumList application, follow these steps:

npm install

npm start

## Features
View All Albums
The application fetches the list of albums from JSONPlaceholder and displays them.

## Add a New Album
Navigate to the 'Add Album' page, enter the required information (userId and title), and click the 'Add Album' button. The new album will be added to the list.

## Update an Album
Navigate to the 'Update Album' page, select an album from the list, modify the required information, and click the 'Update Album' button. The selected album will be updated.

## Delete an Album
On the 'Albums List' page, each album has a 'Delete' button. Clicking this button will remove the selected album from the list.

# Code Structure
The application is organized into components:

App.js: The main component that holds the state and manages the overall structure of the application.
AlbumsList.js: Displays the list of albums, allows for album deletion, and triggers the update of an album.
AddAlbum.js: Provides a form for adding a new album.
UpdateAlbum.js: Allows for updating the information of a selected album.
API Integration
The application interacts with the JSONPlaceholder API for fetching, adding, updating, and deleting albums.
