<template>
  <div class="row">
    <div class="container-fluid" style="display: flex; justify-content: center">
      <div class="card mb-3 p-2 w-75">
        <div class="row g-0">
          <div class="col-md-4">
            <div style="width: 300px">
              <img
                id="city"
                :src="photos"
                alt="..."
              />
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">{{vacation.city}}</h5>
              <p class="card-text" style="font-weight: bolder;">
                Start: {{convert(vacation.start_date)}}
              </p>
              <p class="card-text" style="font-weight: bolder;">
                End: {{convert(vacation.end_date)}}
              </p>
              <div style="display: flex; justify-content: space-between; width: 400px;">
                <button @click.prevent="getRecommendation" class="btn btn-primary">Vacation Spot</button>
                <button @click.prevent="details" class="btn btn-info">Details</button>
                <button @click.prevent="editVacation" class="btn btn-warning">Edit</button>
                <button @click.prevent="deleteVacation" class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { convertTime } from '../helpers/convert'
// import { mapState } from 'vuex'
export default {
  name: 'VacationCards',
  props: ['vacation'],
  methods: {
    getPhotos () {
      this.$store.dispatch('fetchPhotos', this.vacation.photo_reference)
    },
    deleteVacation () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this action!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteVacation', this.vacation.id)
              .then((_) => {
                this.$store.dispatch('fetchVacation')
              })
              .catch(err => {
                console.log(err)
              })
            Swal.fire(
              'Deleted!',
              'Product Successfully Deleted',
              'success'
            )
          }
        })
    },
    editVacation () {
      this.$router.push(`/edit-vacation/${this.vacation.id}`)
    },
    convert (value) {
      // console.log(value)
      return convertTime(value)
    },
    details () {
      this.$store.commit('getCity', this.vacation.city)
      this.$router.push(`/user-destinations/${this.vacation.id}`)
    },
    getRecommendation () {
      this.$router.push(`/place-recommendation/${this.vacation.id}`)
    }
  },
  created () {
    this.getPhotos()
  },
  computed: {
    photos () {
      return this.$store.state.photos
    }
  }
}
</script>

<style scoped>
#city {
  width: 400px;
  object-fit: cover;
  }
</style>
