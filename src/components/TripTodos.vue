<template>
      <div class="two">
        <div class="d-flex justify-content-end px-3 pt-1">
          <i class="mdi mdi-star-outline pr-1 star"></i
          ><i class="mdi mdi-dots-horizontal dot"></i>
        </div>
        <div class="px-3">
          <div class="round">
            <img
              src="https://img.icons8.com/cute-clipart/64/000000/doctor-male.png"
              width="23"
              class="imgfix"
            />
          </div>
        </div>
        <div class="px-3 pt-3">
          <h3 class="name">{{ todos.title }}</h3>
          <p class="quote2">
            {{ todos.description }}
          </p>
        </div>
        <div class="d-flex justify-content-start px-3 align-items-center">
          <i class="mdi mdi-view-comfy task"></i>
          <span class="quote2 pl-2">Task: todos in your trip</span>
        </div>
        <div
          class="d-flex justify-content-between px-3 align-items-center pb-3"
        >
          <div class="d-flex justify-content-end">
            <img
              src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-musical-notes.png"
              width="20"
              class="img1"
            />
            <img
              src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png"
              width="20"
              class="img2"
            />
            <img
              src="https://img.icons8.com/bubbles/50/000000/short-hair-girl-question-mark.png"
              width="20"
              class="img3"
            />
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: ['todos']
}
</script>

<style>

</style>
