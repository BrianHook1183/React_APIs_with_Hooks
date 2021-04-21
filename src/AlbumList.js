import React, { useEffect, useState } from "react";

function AlbumList({ user = {} }) {
  const [albumList, setAlbums] = useState([]);
  let result = <p>Please click on a user name to the left</p>;

  useEffect(() => {
    const abortController = new AbortController();
    async function loadAlbums() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
          { signal: abortController.signal }
        );
        const albumsFromAPI = await response.json();
        setAlbums(albumsFromAPI);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", albumList);
        } else {
          throw error;
        }
      }
    }
    if (user.id) {
      console.log(user.id, 'loadAlbums() about to run');
      loadAlbums();
      return () => {
        abortController.abort();
      };
    }
  }, [user]);

  const renderedAlbumList = albumList.map((album) => (
    <li key={album.id}>
      {album.id} - {album.title}
    </li>
  ));

  if (albumList.length) {
    result = (
      <div>
        <h2>{user.name}'s Albums</h2>
        <ul>{renderedAlbumList}</ul>
      </div>
    );
  }
  return result;
}

export default AlbumList;
