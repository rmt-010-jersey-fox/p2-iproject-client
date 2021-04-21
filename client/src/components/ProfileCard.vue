<template>
  <div class=" ">
    <div class="card overflow-auto shadow-lg" style="width:100vh;height:80vh">
      <div class="card-body p-0 m-4 overflow-scroll">
        <div class="container">
          <div style="height:20vh">
            <div class="row h-100">
              <div
                class="col-3 p-0 d-flex justify-content-center align-items-center"
              >
                <img
                  :src="userProfile.avatarUrl"
                  alt=""
                  class="avatar-profile btn p-0 btn-dark"
                />
              </div>
              <div
                class="col-6 p-0 pt-1 d-flex flex-column justify-content-center"
              >
                <h4>@{{ userProfile.username }}</h4>
                <div v-if="isOwner">
                  <button
                    @click="$bvModal.show('add-modal')"
                    class="btn p-1 m-1 btn-outline-secondary"
                  >
                    Add New Cat
                  </button>
                  <b-modal id="add-modal" size="sm" hide-footer hide-header>
                    <AddCatModal @closeModal="closeModal" />
                  </b-modal>
                </div>
              </div>
            </div>
          </div>

          <div
            class="d-flex justify-content-start align-items-center flex-wrap"
          >
            <CatCard v-for="cat in cats" :key="cat.id" :cat="cat" />
          </div>
          <hr class="p-0 m-0" />
          <div>
            <div class="d-flex justify-content-evenly flex-wrap">
              <PhotoCard
                v-for="photo in getCatPhoto"
                :key="photo.id"
                :photo="photo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatCard from "../components/CatCard";
import PhotoCard from "../components/PhotoCard";
import AddCatModal from "../components/AddCatModal";
import { mapState } from "vuex";
export default {
  name: "ProfileCard",
  data() {
    return {};
  },
  components: {
    CatCard,
    PhotoCard,
    AddCatModal
  },
  computed: {
    isOwner() {
      return this.$route.params.username === localStorage.username;
    },
    ...mapState(["userProfile", "cats"]),
    getCatPhoto() {
      const photos = [];
      this.cats.forEach(el => {
        photos.push(...el.Photos);
      });
      return photos;
    }
  },
  methods: {
    fetchUser() {
      const username = this.$route.params.username;
      this.$store.dispatch("fetchUser", { username });
    },
    closeModal(modal) {
      this.$bvModal.hide(modal);
      this.fetchUser();
    }
  },
  created() {
    this.fetchUser();
  }
};
</script>

<style></style>
