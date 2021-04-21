<template>
  <section>
    <form @submit.prevent="postSchedule" class="mx-6 px-6 mb-5">
      <b-steps
        v-model="activeStep"
        :animated="isAnimated"
        :rounded="isRounded"
        :has-navigation="hasNavigation"
        :icon-prev="prevIcon"
        :icon-next="nextIcon"
        :label-position="labelPosition"
        :mobile-mode="mobileMode"
      >
        <b-step-item step="1" label="Form" :clickable="isStepsClickable">
          <h1 class="title has-text-centered">Form Pendaftaran</h1>
          <div class="field" style="margin-right: 330px; margin-left: 330px">
            <label class="label">Poli</label>
            <div class="control has-icons-left">
              <div class="select">
                <select v-model="PoliId">
                  <option value="">Pilih Poli</option>
                  <option
                    v-for="(poli, i) in getPoli"
                    :key="i"
                    :value="poli.id"
                  >
                    {{ poli.name }}
                  </option>
                </select>
              </div>
              <span class="icon is-small is-left">
                <i class="fas fa-stethoscope"></i>
              </span>
            </div>
          </div>
          <div class="field" style="margin-right: 330px; margin-left: 330px">
            <label class="label">Tanggal Berobat</label>
            <div class="control has-icons-left">
              <input v-model="date" class="input" type="date" />
              <span class="icon is-small is-left">
                <i class="fas fa-calendar"></i>
              </span>
            </div>
          </div>
          <div class="field" style="margin-right: 330px; margin-left: 330px">
            <label class="label">Sesi</label>
            <div class="control has-icons-left">
              <div class="select">
                <select v-model="session">
                  <option value="">Pilih Sesi</option>
                  <option>Pagi</option>
                  <option>Siang</option>
                  <option>Sore</option>
                </select>
              </div>
              <span class="icon is-small is-left">
                <i class="fas fa-stethoscope"></i>
              </span>
            </div>
          </div>
          <h1 class="has-text-centered pt-1">
            Periksa kembali sebelum melanjutkan
          </h1>
        </b-step-item>

        <b-step-item step="2" label="Pembayaran" :clickable="isStepsClickable">
          <h1 class="title has-text-centered">Pembayaran</h1>
          <div class="field" style="margin-right: 330px; margin-left: 330px">
            <label class="label">Metode Pembayaran</label>
            <div class="control has-icons-left">
              <div class="select">
                <select v-model="method">
                  <option value="">Pilih Metode</option>
                  <option value="OV">OVO</option>
                  <option value="M1">Transfer Bank Mandiri</option>
                  <option value="I1">Transfer Bank BNI</option>
                  <option value="BT">Transfer Bank Permata</option>
                  <option value="B1">Transfer Bank CIMB Niaga</option>
                  <option value="A1">Transfer Bank ATM Bersama</option>
                </select>
              </div>
              <span class="icon is-small is-left">
                <i class="fas fa-credit-card"></i>
              </span>
            </div>
          </div>
          <div class="field" style="margin-right: 330px; margin-left: 330px">
            <label class="label">Total Pembarayan</label>
            <div class="control has-icons-left">
              <input class="input" type="text" value="Rp. 25.000" disabled />
              <span class="icon is-small is-left">
                <i class="fas fa-receipt"></i>
              </span>
            </div>
          </div>
          <h1 class="has-text-centered pt-1">
            Biaya di atas belum termasuk biaya obat dan tindakan lainnya
          </h1>
          <div
            class="field is-grouped is-grouped-centered pt-3"
            style="margin-bottom: 32px"
          >
            <div class="control">
              <button class="button is-link" id="submit-login">Submit</button>
            </div>
            <div class="control">
              <button
                class="button is-link is-light"
                @click.prevent="changePage('/patient')"
              >
                Cancel
              </button>
            </div>
          </div>
        </b-step-item>

        <template v-if="customNavigation" #navigation="{ previous, next }">
          <b-button
            outlined
            type="is-danger"
            icon-pack="fas"
            icon-left="backward"
            :disabled="previous.disabled"
            @click.prevent="previous.action"
          >
            Previous
          </b-button>
          <b-button
            outlined
            type="is-success"
            icon-pack="fas"
            icon-right="forward"
            :disabled="next.disabled"
            @click.prevent="next.action"
          >
            Next
          </b-button>
        </template>
      </b-steps>
    </form>
  </section>
</template>

<script>
  export default {
    name: "FormRegist",
    data() {
      return {
        PoliId: "",
        date: "",
        session: "",
        method: "",
        total: 25000,
        activeStep: 0,
        isAnimated: true,
        isRounded: true,
        isStepsClickable: false,

        hasNavigation: true,
        customNavigation: false,

        prevIcon: "chevron-left",
        nextIcon: "chevron-right",
        labelPosition: "bottom",
        mobileMode: "minimalist",
      };
    },
    methods: {
      postSchedule() {
        let data = {
          session: this.session,
          date: this.date,
          total: this.total,
          method: this.method,
          PoliId: this.PoliId,
        };
        this.$store.dispatch("postSchedule", data);
      },
    },
    computed: {
      getPoli() {
        return this.$store.state.getPoli;
      },
    },
    created() {
      this.$store.dispatch("getPoli");
    },
  };
</script>

<style></style>
