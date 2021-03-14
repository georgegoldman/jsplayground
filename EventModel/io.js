// var ajaxRequest = new XMLHttpRequest;
// ajaxRequest.open('get', url);
// ajaxRequest.send(null);
// while (ajaxRequest.readyState === XMLHttpRequest.UNSENT) {
//     console.log('hi')
// }

var ajaxRequest = new XMLHttpRequest;
ajaxRequest.open('GET', url);
ajaxRequest.send(null);
ajaxRequest.onreadystatechange = function() {
    // ...
};