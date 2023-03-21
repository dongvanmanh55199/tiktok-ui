import * as httpRequest from '~/ultils/httpRequest'
// https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=8
export const getVideos = async (type = 'for-you', page = 1) => {
   try {
      const res = await httpRequest.get('videos', {
         params: {
            type,
            page,
         },
      })
      return res.data
   } catch (error) {
      console.log(error)
   }
}
