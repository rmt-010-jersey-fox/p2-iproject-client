<template>
  <section id="home-page" class="container">
      <Navbar></Navbar>
    <div class="row justify-content-center mt-5 pt-5">
      <div class="col-4 mt-5">
        <div class="container border border-primary rounded">
          <form>
            <div class="form-group">
              <input
                v-model="status"
                type="email"
                class="form-control"
                style="height: 100px"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Post it!!"
              />
            </div>
            <button
              @click.prevent="home"
              type="button"
              class="btn btn-primary float-right btn-sm text-light"
            >
              Back Home
            </button>
            <button
              @click.prevent="sentim()"
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <!-- <div class="col-6 border border-primary">
        <h4>
          <b>Anonymous Timeline</b>
        </h4>
        <ul class="list-unstyled">
          <li
            class="media d-flex align-items-center bg-white rounded p-2 shadow mt-3"
          >
            <div class="media-body p-1">
              <div class="text-left">
                {{ language }}
                <h5 class="mt-0 mb-0 text-pink">xxx</h5>
              </div>
              <div class="text-left mt-2">
                <span class="text-muted">xxx</span>
              </div>
            </div>
          </li>
        </ul>
      </div> -->
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Sentim',
  components: {
    Navbar
  },
  data () {
    return {
      status: ''
    }
  },
  computed: {
    language () {
      return this.$store.state.language
    }
  },
  methods: {
    sentim () {
      const payload = {
        status: this.status
      }
      this.$store.dispatch('sentimentPost', payload)
    },
    home () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>
</style>
