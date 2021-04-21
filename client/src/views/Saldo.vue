<template>
  <div class="container" style="margin-top: 12vh">
      <div class="row">
        <h3 class="col-12">On Process to Deposit</h3>
        <div style="max-height: 40vh; overflow-y: scroll">
          <table class="table col-12 my-3 table-dark table-striped">
              <thead>
                  <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Condition</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Estimated Price</th>
                  <th scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
                  <Undeposited
                  v-for="waste in UserWastes"
                  :key="waste.id"
                  :waste="waste"
                  />
              </tbody>
          </table>
        </div>
        <div class="justify-content mb-3">
            <button type="button" @click="deposit" class="btn btn-success">Deposit</button>
        </div>
        <h3 class="col-12">Deposited History</h3>
        <div style="max-height: 70vh; overflow-y: scroll">
          <table class="table col-12 my-3 table-dark table-striped">
              <thead>
                  <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Condition</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Saldo</th>
                  <th scope="col">Date</th>
                  </tr>
              </thead>
              <tbody>
                  <Deposited
                  v-for="waste in UserWastes"
                  :key="waste.id"
                  :waste="waste"
                  />
              </tbody>
          </table>
        </div>
      </div>
  </div>
</template>

<script>
import Undeposited from '../components/Undeposited'
import Deposited from '../components/Deposited'
export default {
  name: 'Saldo',
  components: {
    Undeposited,
    Deposited
  },
  methods: {
    deposit () {
      this.$store.dispatch('deposit')
    }
  },
  created () {
    this.$store.dispatch('getUserWastes')
  },
  computed: {
    UserWastes () {
      return this.$store.state.userWastes
    }
  }

}
</script>
