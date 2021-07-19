<template>
    <div>
        <div v-for="user in this.$store.state.news" v-bind:key="user"> {{ user.title }} </div>
    </div>
</template>

<script>
// import {fetchNewsList} from "../api/index"

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
        // var vm = this;
        // fetchNewsList()
        //     .then(function(response) {
        //         console.log(response);
        //         vm.users = response.data;
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     })
    }
}
</script>
<style>
</style>