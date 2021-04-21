<template>
<div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(team, i) in teams" :key="team.id">
      <th scope="row">{{i}}</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
export default {
  name: 'History'
}
</script>

<style>

</style>
