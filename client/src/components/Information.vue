<template>
    <div class="col-lg-4 mb-4">
        <div class="card">
            <img :src="imgLink" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">{{ information.source }}</h5>
                <p class="card-text">{{ information.abstract }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imgLink: `https://www.nytimes.com/${this.information.multimedia[0].url}`
        }
    },
    props: ['information']
}
</script>

<style>

</style>