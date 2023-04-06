import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '~/components/ModalProvider'

import { UserCurrentContext } from '~/components/UserCurrentContext'

import Button from '~/components/Button'
function HandleLogicFollow({ data }) {
   const context = useContext(ModalContext)
   const contextUser = useContext(UserCurrentContext)
   const [follow, setFollow] = useState(
      () => (data.data.is_followed ? 'Unfollow' : 'Follow'),
      // contextUser.followState ? 'Unfollow' : 'Follow',
   )
   const [followState, setFollowState] = useState(data.data.is_followed)

   return (
      <>
         {followState ? (
            <Button
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
                           setFollowState(data.data.is_followed)
                           setFollow('Follow')
                        })
                  } else {
                     context.handleShowModal()
                  }
               }}
            >
               {follow}
            </Button>
         ) : (
            <Button
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
                           setFollowState(data.data.is_followed)
                           setFollow('Unfollow')
                        })
                  } else {
                     context.handleShowModal()
                  }
               }}
            >
               {follow}
            </Button>
         )}
      </>
   )
}

export default HandleLogicFollow
