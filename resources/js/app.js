import Vue from 'vue';

require('./bootstrap');
require('./plugins');

Vue.component('posts-component', require('./components/posts/posts.vue').default)

new Vue({
    el: '#app',
})