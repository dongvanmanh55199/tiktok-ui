import { useState, createContext } from 'react'

const ConfirmContext = createContext()

function Confirm({ children }) {
   const [isConfirm, setIsConfirm] = useState(false)
   const [isConfirmComment, setIsConfirmComment] = useState(false)
   const [type, setType] = useState('')
   const [title, setTitle] = useState('')
   const toggleConfirm = () => {
      setIsConfirm(!isConfirm)
   }
   const toggleConfirmComment = () => {
      setIsConfirmComment(!isConfirmComment)
   }
   const setDataTitle = (data) => {
      setTitle(data)
   }
   const setDataType = (data) => {
      setType(data)
   }
   const value = {
      type,
      title,
      isConfirm,
      isConfirmComment,
      toggleConfirm,
      toggleConfirmComment,
      setDataTitle,
      setDataType,
   }

   return <ConfirmContext.Provider value={value}>{children}</ConfirmContext.Provider>
}

export { Confirm, ConfirmContext }
