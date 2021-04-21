<template>
  <div>
    <div class="card bg-secondary text-white mb-3" style="max-width: 18rem;">
      <div class="card-header">{{weather.location}}'s Air Pollution</div>
      <div class="card-body">
        <h5 class="card-title">Level: <strong>{{airQ.converted.level}}</strong></h5>
        <p class="card-text">Air Quality Index (US): <strong>{{airQ.rawData.aqius}}</strong></p>
      </div>
    </div>
    <div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
      <div class="card-header">{{weather.location}}'s Weather</div>
      <div class="card-body">
        <h5 class="card-title">{{weather.weather.tp}} Celcius</h5>
        <p class="card-text">Preassure: {{weather.weather.pr}}mb, Humidity: {{weather.weather.hu}}%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AirPollution',
  props: ['airQ', 'weather']
}
</script>
