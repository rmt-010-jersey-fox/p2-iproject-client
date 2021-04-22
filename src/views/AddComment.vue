<template>
  <section>
    <form class="myForm">
        <input type="hidden" 
          class="form-control" 
          v-model="id"
          name="id"
        >
        <h1 style="color:white;">Add Comment</h1><br>
        <div class="form-group text-light">
          <label for="comment">Comment</label>
          <input type="comment" 
          class="form-control" 
          v-model="comment"
          >
        </div>
        <button type="button" @click.prevent="addComment" class="btn btn-dark">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
 name: 'AddComment',
 data: () => ({
        
    }),
    
}
</script>

<style>

</style>