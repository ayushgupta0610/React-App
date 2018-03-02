import React from 'react';

const VideoDetail = (props) => {
  if(props.video==null){
    return <div> Loading... </div>;
  }
  console.log(props.video);
  var videoId = props.video.id.videoId;
  var url =  'https://www.youtube.com/embed/' + videoId;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
