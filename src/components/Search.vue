<template>
    <!-- <form onsubmit="event.preventDefault();" role="search">
        <label for="search">Search for stuff</label>
        <input id="search" type="search" placeholder="Search..." autofocus required />
        <button type="submit">Go</button>    
    </form> -->
    <div class="container">
        <div class="card">
            <div class="card-body">
                    Search Topic
                    <form @submit.prevent="search">
                        <div class="form-group">
                            <!-- {{materials}} -->
                            <select class="custom-select custom-select-sm" v-model="selectedTopic">
                                <option selected>Open this select menu</option>
                                <option v-for="(material, i) in materials" :key="i" v-bind:value="material.id">{{material.topic}}</option>
                            </select>
                        </div>
                        <!-- <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div> -->
                        <button type="submit" class="btn btn-primary">Search</button>
                    </form>
            </div>      
        </div>
    </div>

</template>

<script>
import axios from '../api/axios'
export default {
    name : "Search",
    data() {
        return {
            selectedTopic : 0
        }
    },
    computed : {
        materials() {
            return this.$store.state.materials
        }
    },
    methods : {
        getMaterials() {
            this.$store.dispatch('getmaterials')
        },
        search() {
            this.$router.push(`/homepage/materials/${this.selectedTopic}`).catch(()=>{})
            this.$store.dispatch('searching', this.selectedTopic)
            localStorage.setItem("materialId", this.selectedTopic)
        }
    },
    created() {
        this.getMaterials()
    }
}
</script>

<style scoped>
.card-body {
    height: 130vh;
}
.card {
    margin-top: 40px;
}
</style>