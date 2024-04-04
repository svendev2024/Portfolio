import { createContext } from 'react';
import _config from "@/app/config.json"

export const PersonaContext = createContext(_config.Persona)