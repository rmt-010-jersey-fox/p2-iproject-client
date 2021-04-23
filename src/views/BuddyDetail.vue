<template>
    <div>
        <div class="BuddyDetail">
        <div class="card">
        <img src="https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg" class="card-img-top" style="width:40%" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{result.User.first_name}} {{result.User.last_name}}</h5>
            <p class="card-text">
                <b>Skills : </b> {{result.skill}} <br> <br>
                <b>Schedule : </b> 
                    <ul>
                        <li v-for="(schedule, i) in result.Schedule" :key="i">
                            {{schedule.day}}  |  
                            {{schedule.time}}   |
                            {{schedule.status}}
                        </li>
                    </ul>
                <small style="color:#3F5DB9">Please be noticed that you can only book for one week ahead</small>

                <!-- <a href=""  class="btn btn-primary mt-3">Meet Buddy</a> -->
            <!-- <button @click.prevent="Booking" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Meet Buddy!
            </button> -->
            </p>

            <form @submit.prevent="Booking">
                <div class="form-group">
                    Please select schedule : 
                    <select class="custom-select custom-select-sm" v-model="selectedSchedule">
                        <option selected>Open this select menu</option>
                        <option v-for="(schedule, i) in result.Schedule" :key="i" v-bind:value="schedule.id">{{schedule.day}}, {{schedule.time}}</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Meet Buddy!</button>
            </form>

            <br><b>Portfolio: </b>
            <div v-for="(porto, i) in result.Github" :key="i" class="card" style="width: 22rem; margin-top: 10px">
            <div class="card-body">
                <h5 class="card-title">{{porto.name}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{porto.owner}}</h6>
                <p class="card-text">{{porto.description}}</p>
                <a :href="porto.link" class="card-link">See Porto</a>
            </div>
            </div>
        </div>
        </div>
        <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <Booking/>
        </div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'BuddyDetail',
    data() {
        return {
            selectedSchedule: 0
        }
    },
    computed : {
        //step 1
        result() {
            return this.$store.state.buddyById;
        }
    },
    methods : {
        //step 1
        getBuddyDetails() {
            const id = Number(this.$route.params.BuddyId)
            console.log("here" , this.$route.params)
            //biar gak kosong ketika reload
            this.$store.dispatch('getBuddyById', id)
        },
        Booking() {
            // this.$router.push('/Booking')
            let data = {
                BuddyMaterialId : localStorage.materialId,
                BuddyScheduleId : this.selectedSchedule
            }
            this.$store.dispatch('booking', data)
            this.getBuddyDetails()
        }
    },
    created() {
        //step 1
        this.getBuddyDetails()
    }
}
</script>

<style>
.BuddyDetail {
    margin-top: 40px;
}
</style>