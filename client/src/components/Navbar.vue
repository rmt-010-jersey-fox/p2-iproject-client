<template>
  <div>
      <header>
          <a href="#" class="covid">Covid-19 Details</a>
          <ul>
              <li><a href="" @click.prevent="changePage('')">Home</a></li>
              <li><a href="" @click.prevent="changePage('localCase')">Indonesian Case</a></li>
              <li><a href="" @click.prevent="changePage('globalCase')">Global Case</a></li>
              <li><a href="" @click.prevent="changePage('chat')">Chat With Stranger</a></li>
              <li><a href="" class="FAQ" @click.prevent="changePage('faq')">FAQ</a></li>
          </ul>
      </header>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    changePage (page) {
      this.$router.push('/' + page).catch(() => {})
    }
  }
}
</script>

<style scoped>
  header{
    position: relative;
    top: 0;
    left: 0;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header .covid {
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #838589;
  }

  header ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header ul li {
    list-style: none;
    margin: 20px;
    position: relative;
    left: 14em;
  }

  header ul li a{
    text-decoration: none;
    color: #2073A7;
    border-radius: 20px;
    padding: 6px 15px;
    transition: .4s;
    font-weight: 700;
  }
  header ul li a:hover{
    background: #2073A7;
    color: white;
    transition: .4s;
    font-weight: 700;
  }
  header ul li .FAQ{
    background: #2073A7;
    color: white;
  }
  header ul li .FAQ:hover{
    background: #2073A7;
    color: white;
  }
</style>
