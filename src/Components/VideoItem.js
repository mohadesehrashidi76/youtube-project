import React from 'react'
import './VideoItem.css'
const VideoItem = ({video,OnVideoSelect}) => {
  return (
      <div onClick={()=> OnVideoSelect(video)} className='video-item item'>
          
          <img alt="video.snippet.title "src={video.snippet.thumbnails.medium.url} className="ui image" />
          <div className='content'>
              <div className='header'>
              {video.snippet.title}
              </div>
          </div>
        
          
    </div>
  )
}

export default VideoItem
