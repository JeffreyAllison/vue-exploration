import { createContext, useReducer } from 'react';

export const WorkshopContext = createContext();

function reducer(list, { type, payload }) {
  switch (type) {
    case 'load':
      return payload;
    case 'add':
      return [...list, payload];
    case 'update':
      return list.map((w) => (w.id === payload.id ? payload : w));
    case 'remove':
      return list.filter((w) => w.id !== payload.id);
    default:
      throw Error(`Unknown action ${type}`);
  }
}

export default function WorkshopProvider({ children }) {
  const [workshops, workshopDispatch] = useReducer(reducer, null);
  const [participants, participantsDispatch] = useReducer(reducer, null);

  const value = {
    workshops,
    workshopDispatch,
    participants,
    participantsDispatch,
  };

  return (
    <WorkshopContext.Provider value={value}>
      {children}
    </WorkshopContext.Provider>
  );
}
