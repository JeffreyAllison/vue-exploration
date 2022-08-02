import createClient from './client.js';

export async function getWorkshops() {
  const response = await createClient.from('workshops').select(`
  id,
  topic,
  participants:participants(
    id,
    workshopId:workshop_id,
    name
  )
  `);
  return response;
}

export async function deleteWorkshop(id) {
  const response = await createClient
    .from('workshops')
    .delete()
    .eq('id', id)
    .single();
  return response;
}

export async function createWorkshop(workshop) {
  const response = await createClient
    .from('workshops')
    .insert(workshop)
    .single();
  return response;
}

export async function updateWorkshop(workshop) {
  const response = await createClient
    .from('workshops')
    .update(workshop)
    .eq('id', workshop.id)
    .single();
  return response;
}
