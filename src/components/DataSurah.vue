<template>
  <tr>
    <th scope="row">{{ ayatSurah.number.inSurah }}</th>
    <td>
      <p>
        <q>
          {{ayatSurah.text.arab}}
        </q>
      </p>
      <p>{{ayatSurah.text.transliteration.en}}</p>
      <p>Artinya: {{ayatSurah.translation.id}}.</p>
    </td>
    <td>
      <audio controls>
        <source :src="ayatSurah.audio.secondary[0]" type="audio/mpeg">
      </audio>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'DataSurah',
  props: ['ayatSurah']
}
</script>

<style>

</style>
