import { readable, writable } from 'svelte/store'

export const dark = readable('night')
export const light = readable('winter')

export const theme = writable('')
