import { createContext } from 'react'

const Context = createContext()
function PathContext({ children }) {
   const data = {
      path: '',
      ui: null,
   }
   return <Context.Provider value={data}>{children}</Context.Provider>
}

export { PathContext, Context }
