import { MuseumAPI } from ".";

/**
 *
 * Person
 *
 */

export const addPerson = (data) => MuseumAPI.post("/persons", data);

export const getAllPerson = () => MuseumAPI.get("/persons");

export const deletePerson = (id) => MuseumAPI.delete(`/persons/${id}`);

export const updatePerson = (id, data) =>
  MuseumAPI.patch(`/persons/${id}`, data);

export const findById = (id) => MuseumAPI.get(`/persons/${id}`);

/**
 *
 * Event
 *
 */

export const getEventsByPersonId = (id) =>
  MuseumAPI.get(`/events/persons/${id}`);

export const addEvent = (data) => MuseumAPI.post("/events", data);

export const deleteEvent = (id) => MuseumAPI.delete(`/events/${id}`);

export const getOneEvent = (id) => MuseumAPI.get(`/events/${id}`);

export const updateEvent = (id, data) => MuseumAPI.patch(`/events/${id}`, data);

export const getEventsByLimit = (limit) => {
  return MuseumAPI.get(`/events?limit=${limit}`);
};

/**
 *
 * Statics
 *
 */

export const getCategoriesAndCountByPerson = () => {
  return MuseumAPI.get("/statics/persons/category-count");
};
