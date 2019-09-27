import Vue from 'vue'
import App from './App'

new Vue({
    el: '#app',
    render(creatElement){
        return creatElement(App)
    }
})