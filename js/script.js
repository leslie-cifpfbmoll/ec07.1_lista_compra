window.onload = function() {
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })
    new Vue({
        el: '#root',
        data: {
            count: 2
        }
    })
};