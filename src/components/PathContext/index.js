import { createContext, useState } from 'react'

const Context = createContext()
function PathContext({ children }) {
   const [data, setData] = useState()
   const [path, setPath] = useState()
   const [ui, setUi] = useState()
   const handleSetData = (param) => {
      setData(param)
   }
   const handleSetPath = (param) => {
      setPath(param)
   }
   const handleSetUi = (param) => {
      setUi(param)
   }
   const value = {
      data,
      path,
      ui,
      handleSetData,
      handleSetPath,
      handleSetUi,
   }

   return <Context.Provider value={value}>{children}</Context.Provider>
}

export { PathContext, Context }
