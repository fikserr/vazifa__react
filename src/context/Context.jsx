import { createContext } from "react"
import { useState } from "react";
import { ru, uz} from "../language.js";

export const Context = createContext()

function ContextProvider({children}) {
    const [flag,setFlag] = useState(false)
    const [lang,setLang] = useState(ru)
    function changeLang(til) {
      til == 'ru' ? setLang(uz) : setLang(ru)
      setFlag(!flag)
    }
  return (
    <Context.Provider value={{flag,lang,changeLang}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider