import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

var server = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    url: server,
    type: 'GET',
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('Recastly YouTube Server: Failed to fetch video', error);
    }
  });
};

export default searchYouTube;


// readAll: function(successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// }