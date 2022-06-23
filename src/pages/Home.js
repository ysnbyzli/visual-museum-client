import React from "react";
import ok from "../assets/ok.png";
import time from "../assets/time.svg";

function Home() {
  return (
    <div>
      <div className="container flex mx-auto mt-12">
        <img src={ok} alt="" className="w-96 h-96" />
        <div className="py-3 pl-12">
          <h1 className="text-6xl font-bold text-blue-700">
            Zaman <br />
            <span>Çizelgesi</span>
          </h1>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            ea ad laborum in praesentium, cum quae eligendi architecto,
            consectetur perferendis minus accusamus tempore delectus, ut autem
            aliquid odio dolorem porro? Voluptatibus illo dolorem distinctio
            iusto explicabo tempore sunt consequatur rerum aperiam, iste, fuga
            saepe laboriosam laborum incidunt accusantium aspernatur ipsum
            consequuntur eos! Vel placeat velit, repudiandae recusandae
            voluptates ea doloribus. Facere possimus pariatur omnis nobis
            cupiditate totam laborum alias doloribus adipisci quidem sunt sed
            quae eligendi maxime architecto autem rerum, numquam impedit eaque?
            Quo corrupti distinctio illo dolores, deleniti rerum. Excepturi
            tempora at, veniam quidem ex cupiditate ducimus harum facilis
            itaque.
          </p>
        </div>
      </div>
      <div className="container flex items-center mx-auto">
        <div className="py-3 pr-12">
          <h1 className="text-6xl font-bold text-blue-700">
            Kronolojik <br /> Olaylar
          </h1>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            ea ad laborum in praesentium, cum quae eligendi architecto,
            consectetur perferendis minus accusamus tempore delectus, ut autem
            aliquid odio dolorem porro? Voluptatibus illo dolorem distinctio
            iusto explicabo tempore sunt consequatur rerum aperiam, iste, fuga
            saepe laboriosam laborum incidunt accusantium aspernatur ipsum
            consequuntur eos! Vel placeat velit, repudiandae recusandae
            voluptates ea doloribus. Facere possimus pariatur omnis nobis
            cupiditate totam laborum alias doloribus adipisci quidem sunt sed
            quae eligendi maxime architecto autem rerum, numquam impedit eaque?
            Quo corrupti distinctio illo dolores, deleniti rerum. Excepturi
            tempora at, veniam quidem ex cupiditate ducimus harum facilis
            itaque.
          </p>
        </div>
        <img src={time} alt="" className="w-[500px] h-[500px] object-contain" />
      </div>
    </div>
  );
}

export default Home;
