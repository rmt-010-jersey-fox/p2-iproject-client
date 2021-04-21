<template>
  <section>
    <form class="px-6 pt-6 pb-3" @submit.prevent="register">
      <!-- NAMA DEPAN, BELAKANG, TTL -->
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">Nama Depan</label>
            <div class="control">
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="text"
                  v-model="first_name"
                  placeholder="e.g John"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Nama Belakang</label>
            <div class="control">
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="text"
                  v-model="last_name"
                  placeholder="e.g Doe"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Tanggal Lahir</label>
            <div class="control">
              <div class="control has-icons-left has-icons-right">
                <input class="input" v-model="birthdate" type="date" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ALAMAT KTP TELPON GENDER-->
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">Alamat</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                v-model="address"
                placeholder="e.g Jl. Ahmad Yani"
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-house-user"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">No. KTP</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                v-model="ktp"
                placeholder="e.g 123456789"
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-address-card"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">No. Telpon</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                v-model="phone"
                placeholder="e.g 08123456789"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-phone"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Gender</label>
            <div class="control has-icons-left has-icons-right">
              <div class="select">
                <select v-model="gender">
                  <option disabled selected value="">Jenis Kelamin</option>
                  <option>Pria</option>
                  <option>Wanita</option>
                </select>
              </div>
              <span class="icon is-small is-left">
                <i class="fas fa-venus-mars"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- EMAIL PASSWORD -->
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="email"
                v-model="email"
                placeholder="example@mail.com"
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="password"
                v-model="password"
                placeholder="**********"
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <button class="button is-link">Daftar</button>
        </div>
        <div class="control">
          <button
            class="button is-link is-light"
            @click.prevent="changePage('/')"
          >
            Batal
          </button>
        </div>
      </div>
    </form>
    <h3 class="pb-3">
      <center><strong>-----ATAU-----</strong></center>
    </h3>
    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button
          v-google-signin-button="clientId"
          class="button is-info is-outlined"
        >
          <span class="icon is-small">
            <i class="fab fa-google"></i>
          </span>
          <span>Masuk dengan Google</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "FormRegister",
    data() {
      return {
        first_name: "",
        last_name: "",
        birthdate: "",
        address: "",
        ktp: "",
        phone: "",
        gender: "",
        email: "",
        password: "",
        clientId:
          "373429152688-q1p8qs00tri1d1jmhc00cujmgk4kbkv1.apps.googleusercontent.com",
      };
    },
    methods: {
      register() {
        let data = {
          first_name: this.first_name,
          last_name: this.last_name,
          birthdate: this.birthdate,
          address: this.address,
          ktp: this.ktp,
          phone: this.phone,
          gender: this.gender,
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch("register", data);
      },
      changePage(path) {
        this.$router.push(path);
      },
      OnGoogleAuthSuccess(idToken) {
        this.$store.dispatch("googleLogin", idToken);
      },
      OnGoogleAuthFail(error) {
        console.log(error);
      },
    },
  };
</script>

<style></style>
