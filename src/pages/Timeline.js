import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEventsByPersonId } from "../store/timelineSlice";

const Timeline = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(fetchEventsByPersonId(id));
  }, [id, dispatch]);

  return <div>Timeline</div>;
};

export default Timeline;
