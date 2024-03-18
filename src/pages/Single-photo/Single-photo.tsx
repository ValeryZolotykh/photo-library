import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./single-photo.scss";
import { toast } from "react-toastify";
import { LOCAL_STORAGE_KEY } from "../../common/constants/constants";

export default function SinglePhoto() {
  const navigate = useNavigate();
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const { id } = useParams();
  const [favoritesPhotoUrls, setFavoritesPhotoUrls] = useState<Array<string>>(
    []
  );

  useEffect(() => {
    // Retrieve stored photo URLs from local storage
    const storedPhotoUrls = localStorage.getItem(LOCAL_STORAGE_KEY);

    // If there are stored photo URLs available:
    if (storedPhotoUrls) {
      setFavoritesPhotoUrls(JSON.parse(storedPhotoUrls));
      const photos = JSON.parse(storedPhotoUrls);
      if (id) setPhotoUrl(photos[parseInt(id)]);
    }
  }, [id]);

  /**
   * Deleting photo from favorites.
   * @param urlPhotoToDelete URL of the photo to be deleted
   */
  const removePhoto = (urlPhotoToDelete: string | undefined) => {
    if (urlPhotoToDelete) {
      // Create a new array without elements that match a certain condition.
      const updatedUrls = favoritesPhotoUrls.filter(
        (photoUrl) => photoUrl !== urlPhotoToDelete
      );

      // Update the stored photo URLs in local storage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUrls));

      // Navigate to the back
      navigate("/favorites");
      toast.success("Photo successfully removed from favorites!"); // Display success message
    } else {
      toast.error("Error! Try again."); // Display error message if URL is undefined
    }
  };

  return (
    <div className="single-photo__wrapper">
      <img className="single-photo__image" src={photoUrl} alt="favorite_photo" />
      <button
        className="btn single-photo__btn"
        onClick={() => removePhoto(photoUrl)}
      >
        Remove from favorites
      </button>
    </div>
  );
}
