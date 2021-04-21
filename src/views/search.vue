<template>
  <div class="container">
    <h1 style="font-family: 'Bungee Inline', cursive;">
      Search your manga here!
    </h1>
    <div class="search-box">
      <input
        type="text"
        class="search-box-input"
        placeholder="What are you looking for ?"
        v-model="inputSearch"
      />
      <button class="search-box-btn" @click.prevent="searchManga">
        <i class="search-box-icon material-icons">search</i>
      </button>
    </div>
    <!-- <div
      class="input-group mb-3"
      style="justify-content: center; margin-top: 25px;"
    >
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01"
          >Languages</label
        >
      </div>
      <select class="custom-select" id="inputGroupSelect01" v-model="bahasa">
        <option selected value="EN">English</option>
        <option value="ID">Indonesian</option>
      </select>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      inputSearch: "",
     
    };
  },
  methods: {
    searchManga() {
      let payload = {
        mangaTitle: this.inputSearch,
    
      };
      this.$store.dispatch("searchManga", payload);
      this.$router.push("/searchresult");
      this.inputSearch = "";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  background: #25283d;
  font-family: roboto, Arial;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  color: black;
  font-weight: 400;
}
input,
button {
  border: none;
  background: none;
  outline: none;
}
button {
  cursor: pointer;
}
.search-box {
  display: flex;
  background: #08090a;
  border-radius: 4em;
}
.search-box-input {
  width: 0px;
  font-size: 1em;
  color: #fff;
  transition: 0.5s;
}
.search-box-btn {
  display: flex;
  border-radius: 50%;
  width: 4em;
  height: 4em;
  background: white;
  transition: 0.3s;
}
.search-box-icon {
  margin: auto;
  color: black;
}
.search-box-input::placeholder {
  color: white;
  opacity: 0.7;
}
.search-box:hover .search-box-input {
  padding-left: 2em;
  padding-right: 1em;
  width: 340px;
}
.search-box-btn:active {
  transform: scale(0.75);
}
</style>
