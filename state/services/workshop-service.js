import client from './client.js';

export async function getWorkshops() {
  const response = await client.from('workshops').select('*');
  return response;
}

export async function deleteWorkshop(id) {
  const response = await client
    .from('workshops')
    .delete()
    .eq('id', id)
    .single();
  return response;
}

export async function createWorkshop(workshop) {
  const response = await client.from('workshops').insert(workshop).single();
  return response;
}

export async function updateWorkshop(workshop) {
  const response = await client
    .from('workshops')
    .update(workshop)
    .eq('id', workshop.id)
    .single();
  return response;
}
