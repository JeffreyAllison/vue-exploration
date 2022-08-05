import client from './client.js';

export function getUser() {
  return client.auth.user();
}

export async function signUp(creds) {
  return await client.auth.signUp(creds);
}

export async function signIn(creds) {
  return await client.auth.signIn(creds);
}

export async function signOut() {
  return await client.auth.signOut();
}

export function onAuthChange(handleAuthChange) {
  return client.auth.onAuthStateChange(handleAuthChange);
}
