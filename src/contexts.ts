import { Context, createContext } from 'react';
import _config from "@/app/config.json"

export const PersonaContext: Context<Persona> = createContext(_config.Persona)
