<template>
  <div>
    <div class="row">
    <div class="col-sm-4">
      <div class="BuddyList">
      <div v-for="(res, i) in result" :key="i" class="card">
      <!-- <img src="https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg" class="card-img-top" style="width:40%" alt="..."> -->
      <div @click.prevent="getDetails(res.User.id)" class="card-body">
        <span class="card-title">{{res.User.first_name}} {{res.User.last_name}}</span>
        <!-- <p class="card-text"></p> -->
        <!-- <a href="#" class="btn btn-primary">{{res.User.first_name}} {{res.User.last_name}}</a> -->
      </div>
      </div>
      </div>
    </div>
    <div class="col-sm-8">
        <router-view/>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Card',
    computed : {
        result() {
          return this.$store.state.search;
        },
        // buddyDetail() {
        //   return this.$store.state.buddyById;
        // }
    },
    methods : {
        searchMaterial() {
          const id = this.$route.params.id
          // console.log("idddd", id)
          this.$store.dispatch('searching', id)
        },

        getDetails(id) {
          console.log("userId", id);
          const materialId = this.$route.params.id
          this.$store.dispatch('getBuddyById', id)
          .then((data) => {
            this.$router.push(`/homepage/materials/${materialId}/buddy/${id}`)
          })
          .catch(er => {
            console.log(err)
          })
        }
    },
    created() {
      this.searchMaterial()
    }
}
</script>

<style scoped>
/* .card {
  margin-top: 40px;
  width: 12rem;
} */

.BuddyList {
    width: 100%;
    /* display: flex; */
    /* justify-content: center; */
    flex-wrap: wrap;
    padding: 1rem;
}

.card {
    width: 8rem;
    box-shadow: 5px 5px 20px #dfe6e9;
    height: 70px;
    display: flex;
    flex-direction: column;
    margin: 20px 10px;
}

.card-title {
  font-size: 0.85rem;
}

.card-body {
    flex-grow: 1;
    display: flex;
    /* flex-direction: column; */
    overflow-y: auto;
    height: 100%;
}
</style>