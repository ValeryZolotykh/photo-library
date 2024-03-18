import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import "./photos.scss";
import OnePhoto from "./components/One-photo";
import { IPhotos } from "../../common/interfaces/Photos";
import { MIN_DELAY, MAX_DELAY } from "../../common/constants/constants";
import { SCROLL_THRESHOLD } from "../../common/constants/constants";

export default function Photos() {
  const [photos, setPhotos] = useState<IPhotos[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchPhotos();
    window.addEventListener("scroll", handleScroll); // Add event listener to track scrolling behavior
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup function to remove event listener when component unmounts
  }, []);

  /**
   * Loading random photos.
   */
  const fetchPhotos = async () => {
    //Indication of the start of data loading
    setLoading(true);

    // Emulate loading delay
    setTimeout(() => {
      // Generate an array of new ramson photos using faker library
      const randomPhotos = Array.from({ length: 6 }, () => ({
        url: faker.image.urlPicsumPhotos()
      }));

      // Update the photos state by combining the previous photos with the new ones
      setPhotos((prevPhotos) => [...prevPhotos, ...randomPhotos]);

      //Indicating data fetching is complete
      setLoading(false);
    }, Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY); // Calculate the delay before fetching within the specified range(200ms-300ms)
  };

  /**
   * Check if user has scrolled to the bottom of the page, then we fetch more photos to implement infinite scrolling.
   */
  const handleScroll = () => {
    /* Check if the sum of the current viewport height and the scroll position is greater than or equal to
    the total height of the document minus a gap.*/
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - SCROLL_THRESHOLD // Add a gap of 100px
    ) {
      fetchPhotos(); // Load more photos
    }
  };

  const photosList = photos.map((photo, index) => (
    <OnePhoto key={index} photoData={photo} />
  ));


  return (
    <div className="photos__wrapper">
      {photosList}
      {loading && <div className="photos__loader">Loading...</div>}
    </div>
  );
}
