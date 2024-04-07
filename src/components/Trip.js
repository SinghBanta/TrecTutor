import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/6.jpg";
import Trip2 from "../assets/7.jpg";
import Trip3 from "../assets/8.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Trectutor</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Sirsa"
          text="Exploring the world's wonders, recent trips have been an odyssey of discovery, blending breathtaking landscapes with cultural immersion and personal growth. From the sun-kissed shores of tropical paradises to the snow-capped peaks of majestic mountains, each destination has offered a unique tapestry of experiences and memories."
        />
        <TripData
          image={Trip2}
          heading="Trip in Kanpur"
          text="The journey began amidst the vibrant bustle of Marrakech's bustling souks, where the air was alive with the tantalizing scent of spices and the rhythmic beat of traditional music. Wandering through labyrinthine alleyways, I found myself mesmerized by the kaleidoscope of colors and textures, haggling with local merchants over intricately woven carpets and handcrafted treasures."
        />
        <TripData
          image={Trip3}
          heading="Trip in Ambala"
          text="As the world slowly opens its doors once more, these recent trips serve as a reminder of the transformative power of travel. Each destination, a canvas upon which to paint memories and dreams, has left an indelible mark on my soul, igniting a passion for exploration that will continue to inspire me for years to come."
        />
      </div>
    </div>
  );
}

export default Trip;
