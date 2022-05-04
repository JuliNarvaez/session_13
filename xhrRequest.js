export default function getData(URLString) {
    return new Promise(function (resolve) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', URLString);
        xhr.responseType = 'json';
        xhr.onload = function () {
            resolve(xhr.response)
        };
        xhr.send();
    })
}