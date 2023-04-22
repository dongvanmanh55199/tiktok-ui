import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '~/components/ModalProvider'

import { UserCurrentContext } from '~/components/UserCurrentContext'

import Button from '~/components/Button'
function HandleLogicFollow({ data }) {
   const context = useContext(ModalContext)
   const contextUser = useContext(UserCurrentContext)

   return (
      <>
         {data.data.is_followed ? (
            <Button
               className="btn-min-width"
               outline
               style={{ minWidth: '208px' }}
               onClick={() => {
                  if (contextUser.userCurrent) {
                     fetch(
                        `https://tiktok.fullstack.edu.vn/api/users/${data.data.id}/unfollow`,
                        {
                           method: 'POST',
                           headers: {
                              Accept: 'application/json',
                              Authorization:
                                 'Bearer ' + contextUser?.dataUser?.meta?.token,
                           },
                        },
                     )
                        .then((res) => res.json())
                        .then((data) => {
                           contextUser.handleRefreshApiFollow()
                        })
                  } else {
                     context.handleShowModal()
                  }
               }}
            >
               Unfollow
            </Button>
         ) : (
            <Button
               className="btn-min-width"
               primary
               style={{ minWidth: '208px' }}
               onClick={() => {
                  if (contextUser.userCurrent) {
                     fetch(
                        `https://tiktok.fullstack.edu.vn/api/users/${data.data.id}/follow`,
                        {
                           method: 'POST',
                           headers: {
                              Accept: 'application/json',
                              Authorization:
                                 'Bearer ' + contextUser?.dataUser?.meta?.token,
                           },
                        },
                     )
                        .then((res) => res.json())
                        .then((data) => {
                           contextUser.handleRefreshApiFollow()
                        })
                  } else {
                     context.handleShowModal()
                  }
               }}
            >
               Follow
            </Button>
         )}
      </>
   )
}

export default HandleLogicFollow
