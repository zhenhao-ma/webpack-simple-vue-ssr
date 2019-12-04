<template>
    <div style="margin-top: 30px">
      made by {{ author.name }}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Home",
        metaInfo: {
            title: 'Vue SSR Simple Webpack Template',
            meta: [
                { name: 'description', content: 'Home' }
            ]
        },
        computed: {
            ...mapGetters([
                'author'
            ])
        },
        // Server-side only
        // This will be called by the server renderer automatically
        serverPrefetch () {
            // return the Promise from the action
            // so that the component waits before rendering
            return this.fetchAuthor()
        },

        // Client-side only
        mounted () {
            // If we didn't already do it on the server, we fetch the users
        },
        methods: {
            fetchAuthor () {
                // return the Promise from the action
                return this.$store.dispatch('fetchAuthor')
            }
        }
    }
</script>

<style scoped>

</style>
