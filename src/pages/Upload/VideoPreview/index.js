function VideoPreview({ data }) {
   console.log(data)
   return (
      <div>
         <div>
            <video src={data} />
         </div>
      </div>
   )
}

export default VideoPreview
