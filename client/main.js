const app = new Vue({
    el: '#app',
    data: {
        page: 'home'
    },
    methods: {
        changePage(destinationPage) {
            this.page = destinationPage
        }
    }
})