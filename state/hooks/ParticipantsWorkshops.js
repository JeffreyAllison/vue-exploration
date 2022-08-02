import { useContext, useEffect, useState } from 'react';
import { WorkshopContext } from '../context/WorkshopsContext';
import {
  getWorkshops,
  deleteWorkshop,
  createWorkshop,
  updateWorkshop,
} from '../services/workshop-service.js';
import { showSuccess, showError } from '../services/toaster.js';

export function useWorkshops() {
  const [error, setError] = useState(null);
  const { workshops, workshopDispatch } = useContext(WorkshopContext);

  useEffect(() => {
    if (workshops) return;
    let ignore = false;

    const fetch = async () => {
      const { data, error } = await getWorkshops();
      if (ignore) return;

      if (error) {
        setError(error);
      }
      if (data) {
        workshopDispatch({ type: 'load', payload: data });
      }
    };
    fetch();
    return () => (ignore = true);
  }, []);
  return { workshops, error };
}

function createDispatchActions(dispatch) {
  return function createAction({ service, type, success }) {
    return async (...args) => {
      const { data, error } = await service(...args);

      if (error) showError(error.message);
      if (data) {
        dispatch({ type, payload: data });
        const successMessage = success(data);
        showSuccess(successMessage);
      }
    };
  };
}

export function useWorkshopActions() {
  const { workshopDispatch } = useContext(WorkshopContext);

  const createAction = createDispatchActions(workshopDispatch);

  const add = createAction({
    service: createWorkshop,
    type: 'add',
    success: (data) => `Created ${data.topic}`,
  });

  const remove = createAction({
    service: deleteWorkshop,
    type: 'delete',
    success: (data) => `Deleted ${data.topic}`,
  });

  const update = createAction({
    service: updateWorkshop,
    type: 'update',
    success: (data) => `Updated ${data.topic}`,
  });

  return { add, remove, update };
}
