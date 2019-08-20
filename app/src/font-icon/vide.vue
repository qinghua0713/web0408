<template>

      <div class="item">
        <div class="player">
          <video-player  class="vjs-custom-skin"
                         ref="videoPlayer"
                         :options="playerOptions"
                         :playsinline="true"
                       >
          </video-player>
        </div>
      </div>
   
</template>

<script>
  // custom skin css
 // import '../src/custom-theme.css'

  export default {
    data() {
      return {
        // videojs options
        playerOptions: {
          height: '360',
      
          autoplay: false,
          muted: true,
          
          language: 'en',
          playbackRates: [0.5, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src:'https:cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
        }
      }
    },
   
  }
</script>
<style>
.video-js{
  width: 400px !important; 
  height: 300px;
  left: 0px;
  right: 0px;
  margin:  0 auto;
}
</style>
