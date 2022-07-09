import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEventsByPersonId } from "../../store/timelineSlice";
import { Chrono } from "react-chrono";
import { encodeDate } from "../../utils/date";
import MDEditor from "@uiw/react-md-editor";
import Tag from "../../components/Shared/Tag";
import { useState } from "react";
import { findById } from "../../api/request";

const Timeline = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.timeline);
  const [person, setPerson] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchEventsByPersonId(id));
      (async () => {
        try {
          const response = await findById(id);
          console.log(
            "🚀 ~ file: PersonDetail.js ~ line 27 ~ response",
            response?.data
          );
          setPerson(response?.data);
        } catch (error) {}
      })();
    }
  }, [id, dispatch]);

  const items = data.map(({ title, startDate, endDate }) => ({
    title: encodeDate(startDate) + " / " + encodeDate(endDate),
    cardTitle: title,
  }));

  return (
    <div className="container pt-3 pb-10 mx-auto">
      <article className="px-1 md:px-0">
        <div className="flex items-center ">
          <h1 className="mb-3 text-2xl font-bold">{`${person?.firstName} ${person?.lastName}`}</h1>
          <span className="pb-2 ml-3">({person?.category?.title})</span>
        </div>
        <MDEditor.Markdown
          source={person?.description}
          style={{ background: "none" }}
        />
      </article>
      {data && data.length > 0 && (
        <div>
          <h2 className="px-1 my-3 mt-10 text-2xl font-bold text-blue-700 md:px-0">
            Zaman Çizelgesi
          </h2>
          <div className="w-full md:max-w-[1200px] mx-auto">
            <Chrono
              items={items}
              enableOutline
              theme={{
                primary: "#34ace0",
                secondary: "#227093",
                titleColorActive: "#ffffff",
                cardBgColor: "#ffffff",
              }}
              fontSizes={{
                cardSubtitle: "0.85rem",
                cardText: "0.8rem",
                cardTitle: "1rem",
                title: ".8rem",
              }}
              scrollable
              slideShow
              slideItemDuration={10000}
            >
              {data.map(({ description, photos, tags }) => (
                <div>
                  <p className="text-sm">{description}</p>
                  <ul className="flex items-center gap-3 mt-5">
                    {photos?.map((photo, index) => (
                      <li key={index}>
                        <img
                          src={photo}
                          className="object-cover w-12 h-16 rounded-lg"
                          alt=""
                        />
                      </li>
                    ))}
                  </ul>
                  <ul className="flex justify-end gap-3 mt-1">
                    {tags.map(({ title, color, _id }) => (
                      <li key={_id}>
                        <Tag title={title} color={color} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Chrono>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
