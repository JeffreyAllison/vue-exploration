import { createContext, useMemo, useReducer } from 'react';

export const WorkshopContext = createContext();
export const WorkshopDispatchContext = createContext();

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

  const stateValue = {
    workshops,
  };
  const dispatchValue = useMemo(
    () => ({
      workshopDispatch,
    }),
    [workshopDispatch]
  );

  return (
    <WorkshopContext.Provider value={stateValue}>
      <WorkshopDispatchContext.Provider value={dispatchValue}>
        {children}
      </WorkshopDispatchContext.Provider>
    </WorkshopContext.Provider>
  );
}
