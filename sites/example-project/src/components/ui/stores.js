import { dev } from '$app/environment';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Persist ShowQueries user choice
export const showQueries = writable(dev && browser && (localStorage.getItem('showQueries')!='false'));
showQueries.subscribe((value) => browser && (localStorage.setItem('showQueries',(value))));
export const pageHasQueries = writable(true);
export const routeHash = writable('');