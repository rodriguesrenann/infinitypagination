<template>
    <div class="posts">
        <div class="post" v-for="post in posts.data" :key="post.id">
            <h2>{{post.title}}</h2>
            <hr>
            <p>{{post.description}}</p>
        </div>
        <div v-observe-visibility="visibilityChanged">...</div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    
    created() {
        this.fetchPosts()
    },

    data() {
        return {
            posts: {
                data: [],
                meta: {
                    current_page : 1,
                    last_page: 1
                }
            },
            page: 1
        };
    },

    methods: {
        fetchPosts () {
            axios.get(`/api/posts?page=${this.page}`).then(response => {
                this.posts.data.push(...response.data.data)
            }).catch(response => {
                console.log(response)
            })
        },

        visibilityChanged (isVisible) {
            if(isVisible) {
                this.page++
                this.fetchPosts()
            }
        }
    }
};
</script>