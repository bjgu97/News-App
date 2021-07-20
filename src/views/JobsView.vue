<template>
    <div>
        <p v-for="job in this.$store.state.jobs" v-bind:key="job">
            <a v-bind:href="job.url"> {{ job.title }} </a>
            <small> {{job.time_ago}}, {{ job.domain }}</small>
        </p>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                jobs: []
            }
        },

        created() {
            this.$store.dispatch('FETCH_JOBS');
            // fetchJobsList()
            //     .then(response => this.jobs = response.data)
            //     .catch(error => console.log(error));

            // var vm = this;
            // fetchJobsList()
            //     .then(function(response) {
            //         vm.jobs = response.data;
            //     })
            //     .catch(function(error) {
            //         console.log(error);
            //     })
        }
    }
</script>

<style scoped>

</style>