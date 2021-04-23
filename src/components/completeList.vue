<template>
  <tr>
    <th> {{ idx + 1 }} </th>
    <td> {{ anime.name }}</td>
    <td> {{ anime.episodes }}</td>
    <td> {{ anime.totalEpisodes }}</td>
    <td> {{ anime.status }}</td>
  </tr>
</template>

<script>
export default {
  name: 'CompleteList',
  props: ['anime', 'idx'],
  methods: {}
}
</script>

<style>
img {
  width: 100px;
  height: 120px;
}
</style>
