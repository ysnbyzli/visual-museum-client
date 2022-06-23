import React from "react";
import Slider from "../../components/Person/Slider";
import TopPerson from "../../components/Person/TopPerson";

const Home = () => {
  return (
    <div className="h-full">
      <Slider />
      <div className="container flex mx-auto gap-x-16">
        <p className="w-3/4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit magni
          hic, ad laborum, aliquam, veniam dignissimos eligendi nemo cumque
          voluptates esse aut quibusdam necessitatibus provident quod itaque eos
          amet at! Repellendus error veritatis eum repellat aspernatur
          reiciendis pariatur molestias suscipit illo perferendis dolore
          voluptatum animi, laboriosam alias voluptatibus rem placeat, optio
          amet quaerat facere minima distinctio quo. Quia, assumenda. Beatae.
          Explicabo optio at obcaecati molestias nisi incidunt voluptatum
          reiciendis id in unde velit, doloribus cum, ducimus corrupti nesciunt
          necessitatibus ex eveniet neque, inventore expedita doloremque?
          Recusandae inventore repellat dolor veniam!
        </p>
        <TopPerson />
      </div>
    </div>
  );
};

export default Home;
