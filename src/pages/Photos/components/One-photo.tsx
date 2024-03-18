import { toast } from "react-toastify";
import "./one-photo.scss";
import { IPhotos } from "../../../common/interfaces/Photos";
import { LOCAL_STORAGE_KEY } from "../../../common/constants/constants";

export default function OnePhoto({ photoData }: { photoData: IPhotos }) {

  const addPhotoToFavorites = (url: string) => {
    // Retrieve stored photo URLs from local storage
    const storedPhotoUrls = localStorage.getItem(LOCAL_STORAGE_KEY);
    let currentFavorites: string[] = [];

    // Check if there are any stored photo URLs
    if (storedPhotoUrls) currentFavorites = JSON.parse(storedPhotoUrls);

    // Check if the provided URL is not already in favorites
    if (!currentFavorites.includes(url)) {

      //Adding the url of the new image by combining the previous photos with the new ones
      const newSelectedPhotoUrls = [...currentFavorites, url];
      
      // Update the stored photo URLs in local storage
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(newSelectedPhotoUrls)
      );
      toast.success("Photo successfully added to favorites!"); // Display success message
    } else {
      toast.warning("Photo already in favorites"); // Display warning message
    }
  };

  return (
    <div
      className="photos__items"
      onClick={() => addPhotoToFavorites(photoData.url)}
    >
      <img className="photos__item" src={photoData.url} alt="random_image" loading="lazy"/>
      <span className="photos__heart"></span>
    </div>
  );
}
