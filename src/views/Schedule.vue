<template>
    <div class="container" style="height:80vh">
        <!-- {{schedule}} -->
        <div class="card mt-5">
        <div class="card-body">
            <h5 class="card-title">My Schedule</h5>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Topic</th>
                    <th scope="col">Buddy</th>
                    <th scope="col">Time</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(sch, i) in schedule" :key="i">
                    <td>{{sch.BuddyMaterial.Material.topic}}</td>
                    <td>{{sch.BuddySchedule.User.first_name}} {{sch.BuddySchedule.User.last_name}}</td>
                    <td>{{sch.BuddySchedule.day}} {{sch.BuddySchedule.time}}</td>
                    <td>{{format_date(sch.bookingDate)}}</td>
                    <td>{{sch.status}}</td>
                    <td>
                      <button @click.prevent="cancel(sch.id)" type="button" class="btn btn-light">Cancel</button>
                      <button @click.prevent="destroy(sch.id)" type="button" class="btn btn-dark">Delete</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment' 
export default {
    name : 'Schedule',
    computed : {
        schedule() {
            return this.$store.state.schedule;
        }
    },
    methods : {
        format_date(value){
         if (value) {
           return moment(String(value)).format('YYYY/MM/DD')
          }
        },
        getSchedule() {
            this.$store.dispatch('schedule')
        },
        cancel(id) {
            this.$store.dispatch('cancelBooking', id)
            .then(()=> {
                this.getSchedule()
            })
            .catch(err => {
                console.log(err)
            })
            
        },
        destroy(id) {
            this.$store.dispatch('destroyBooking', id)
            .then(()=> {
                this.getSchedule()
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.getSchedule()
    }
}
</script>

<style>

</style>