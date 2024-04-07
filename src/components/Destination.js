import Mountain1 from "../assets/2.jpg";
import Mountain2 from "../assets/3.jpg";
import Mountain3 from "../assets/4.jpg";
import Mountain4 from "../assets/5.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Make yourself prepare for tours</p>

      <DestinationData
        className="first-des"
        heading="Hotels near by me"
        text="Hotels serve as temporary homes for travelers, offering a range
                of amenities and services to ensure a comfortable and enjoyable
                stay. From budget accommodations to luxury resorts, hotels cater
                to diverse needs and preferences, providing a variety of room
                types, dining options, and recreational facilities."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Restaurants near by me"
        text="Large windows frame breathtaking views of the surrounding countryside, allowing diners to bask in the beauty of nature while indulging in a culinary journey. Whether it's a vibrant sunset casting hues of orange and pink across the horizon or a gentle snowfall blanketing the landscape in a soft white glow, each season brings its own enchanting backdrop to the dining experience."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
