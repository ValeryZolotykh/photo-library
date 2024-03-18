import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./favorites.scss";
import { LOCAL_STORAGE_KEY } from "../../common/constants/constants";

export default function Favorites() {
  const [favoritesPhotoUrls, setFavoritesPhotoUrls] = useState<Array<string>>(
    []
  );

  useEffect(() => {
    // Retrieve and set stored photo URLs from local storage
    const storedPhotoUrls = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storedPhotoUrls) {
      // Set the stored photo URLs as favorites
      setFavoritesPhotoUrls(JSON.parse(storedPhotoUrls));
    }
  }, []);

  const photosList = favoritesPhotoUrls?.map((photoUrl, index) => (
    <Link to={`/photos/${index}`} key={index}>
      <img
        className="favorites__item"
        src={photoUrl}
        alt="favorite_photo"
        loading="lazy"
      />
    </Link>
  ));

  return (
    <div className="favorites__wrapper">
      <div className="favorites__items">{photosList}</div>
    </div>
  );
}
