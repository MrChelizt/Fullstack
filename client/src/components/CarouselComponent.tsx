import Carousel from "react-material-ui-carousel";

import Photo1 from "../assets/photo-1.jpg";
import Photo2 from "../assets/photo-2.jpg";
import Photo3 from "../assets/photo-3.jpg";
import Photo4 from "../assets/photo-4.jpg";

export default function CarouselComponent() {
  const photoArray = [
    { id: 1, img: Photo1, desc: "photo-1" },
    { id: 2, img: Photo2, desc: "photo-2" },
    { id: 3, img: Photo3, desc: "photo-3" },
    { id: 4, img: Photo4, desc: "photo-4" },
  ];

  const mappedArray = photoArray.map((item) => (
    <img key={item.id} src={item.img} alt={item.desc} />
  ));

  return (
    <div>
      <Carousel sx={{ width: "100vw", height: "80vh", marginBottom: 2 }}>
        {mappedArray}
      </Carousel>
    </div>
  );
}
