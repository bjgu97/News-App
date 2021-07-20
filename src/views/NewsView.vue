<template>
    <div>
        <p v-for="item in this.$store.state.news" v-bind:key="item">
            <a v-bind:href="item.url"> {{ item.title }} </a> 
            <small> {{ item.time_ago}} by {{item.user }}</small>
        </p>
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