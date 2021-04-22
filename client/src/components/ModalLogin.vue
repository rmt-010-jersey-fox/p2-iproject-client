<template>
  <!-- MODAL LOGIN -->
    <div>
        <div>
                <form class="form-login" action="/action_page.php">
                    <div>
                        <label for="email">Email atau No. Handphone</label><br>
                        <input type="text" id="email" name="email" placeholder="Input email atau no. handphone ..." style="width: 100%"><br><br>
                    </div>
                    <div>
                        <label for="password">Password</label><br>
                        <input type="password" id="password" name="password" placeholder="Input Password ..." style="width: 100%"><br><br>
                    </div>
                    <div>
                        <div class="row">
                            <div class="col">
                                <input type="submit" value="Submit" class="btn btn-primary">
                            </div>
                            <div class="col">
                                <h6>Belum punya akun ? <a style="color: blue;">Daftar disini</a></h6>
                            </div>
                        </div>
                    </div>
                  </form>
            </div>
            <div class="modalfooter" style="background-color: rgb(226, 225, 225);">
                <center><p>Atau masuk dengan Google</p></center>
            <button type="button" class="btn btn-primary" style="width: 100%;">Login with Google</button>

        </div>
</template>

<script>
export default {
  name: 'ModalLogin',
  methods: {
    close () {
      this.$emit('close')
    }
  }

}
</script>

<style>

</style>
