<template>
    <div> 
        <!-- <div v-for="item in fetchedAsk" v-bind:key="item">
            {{ item.title }}        
        </div> -->

        <p v-for="item in fetchedAsk" v-bind:key="item">
            <a v-bind:href="item.url"> {{ item.title }} </a> 
            <small> {{ item.time_ago}} by {{item.user }}</small>
        </p>

    </div>
</template>

<script>
import {mapGetters} from 'vuex';
// import { mapState, mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'fetchedAsk'
        ]),
        // #3
        // ...mapGetters({
        //     fetchedAsk: 'fetchedAsk'
        // }),

        // #2
        // ...mapState({
        //     ask: state => state.ask
        // })

        // #1
        // ask() {
        //     return this.$store.state.ask;
        // }
    },
    created() { // component 생성되자마자 실행
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style scoped>

</style>