<template>
  <tr>
    <th> {{ idx + 1 }} </th>
     <td><img :src="anime.imageURL" alt="" class="img-product" /></td>
    <td> {{ anime.name }}</td>
    <td> {{ anime.episodes }}</td>
    <td> {{ anime.totalEpisodes }}</td>
    <td> {{ anime.status }}</td>

    <td>
        <button class="btn btn-primary mr-3" @click="patchData(anime.id)">Update</button>
        <button class="btn btn-warning mr-3" @click="editData(anime.id)">Edit</button>
        <button type="button" class="btn btn-danger" @click="deleteData(anime.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'AnimeList',
  props: ['anime', 'idx'],
  methods: {
    patchData (id) {
      this.$store.dispatch('getDataPatch', id)
    },
    editData (id) {
      this.$store.dispatch('getDataById', id)
    },
    deleteData (id) {
      this.$store.dispatch('deleteData', id)
    }
  }
}
</script>

<style>
img {
  width: 100px;
  height: 120px;
}
</style>
