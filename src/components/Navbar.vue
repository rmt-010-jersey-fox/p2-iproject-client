<template>
  <nav id="navbar" class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a id="nav-home" class="navbar-brand" href="#"><i class="far fa-angry"></i> 8Hag</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a id="nav-add" class="nav-link" href="#"><i class="far fa-plus-square"></i> Add Meme</a>
                </li>
            </ul>
            <span id="navbar-user" class="navbar-text mr-3">
                <i class="far fa-user"></i> Hai {{ user }}
            </span>
            <button id="btn-login" class="btn btn-outline-primary my-2 my-sm-0 mr-1" onclick="login()"><i
                    class="fas fa-sign-out-alt"></i> Login</button>
            <button id="btn-logout" class="btn btn-outline-danger my-2 my-sm-0 mr-1" onclick="logout()"><i
                    class="fas fa-sign-out-alt"></i> Logout</button>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>