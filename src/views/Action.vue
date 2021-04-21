<template>
  <div class="container">
    <ul
     v-for="action in actions" 
     :key="action.id"
    >
      <li class="media">
        <img :src="action.image_url" class="mr-3" alt="">
        
        <div class="media-body">
            <h4 class="mt-0 mb-1">{{action.title}}</h4>
            <h6>{{action.description}}</h6>
            <h6>Ganti Kantong Plastik dengan Tas Belanja</h6>
            <p>
                Beberapa waktu lalu pemerintah telah menetapkan kantong plastik berbayar di sejumlah pusat perbelanjaan dan minimarket. 
                Hal ini bertujuan untuk mengurangi penggunaan kantong plastik sekali pakai. 
                Namun pada kenyataanya masih banyak konsumen yang justru rela membayar lebih untuk kantong plastik karena mereka tidak membawa tas belanja sendiri. 
                Padahal plastik sekali pakai itu butuh ratusan tahun untuk terurai jika tidak didaur ulang. 
                Jadi lebih baik gunakan kantung belanja yang terbuat dari kain atau biasa disebut reusable bag yang bisa dipakai berulang kali
                dan juga kekuatan untuk mengangkut barangnya sudah pasti lebih baik daripada kantung plastik sekali pakai yang tipis dan mudah robek.
            </p>
            <h6>Daur Ulang Sampah</h6>
            <p>
                Untuk para wanita yang gemar menggunakan skincare pasti banyak sekali botol kaca atau plastik kosong bekas skincare yang sudah habis. 
                Baiknya jangan langsung buang kemasannya, karena masih bisa didaur ulang dengan cara menjadikan botol itu sebagai vas bunga atau berbagai wadah untuk keperluan kamu dirumah. 
                Percantik sedikit dengan pernak-pernik lucu jadi deh barang yang lebih bermanfaat daripada langsung dibuang dan berakhir di TPA.
            </p>
            <h6>Jadikan Sampah Organik Menjadi Pupuk Kompos Alami</h6>
            <p>
                Selama berada dirumah saja pastinya konsumsi jajan diluar menjadi berkurang. 
                Sisi positifnya, sampah plastik sekali pakai dari kemasan jajan yang kita konsumsi pastinya berkurang karena kita lebih banyak konsumsi makanan rumahan yang dimasak sendiri. 
                Tapi tetap saja aka nada sampah yang kita hasilkan yaitu sampah organik dari sayur atau buah yang kita makan. 
                Daripada sampah organik itu dibiarkan membusuk lebih baik dijadikan pupuk kompos yang bisa kamu buat sendiri dirumah. 
                Banyak informasi tutorial membuat kompos di internet salah satunya di website zerowaste.id atau zerowasteadvanture.com yang mengajarkan beberapa teknik membuat kompos yang sederhana menggunakan motode takakura atau yang lainnya.
            </p>
            <h6>Ganti Tissue dan Kapas dengan Kain Pembersih</h6>
            <p>
                Penggunaan tissue dan kapas sekali pakai pasti tidak luput dari penggunaan barang sekali pakai dan menambah jumlah sampah yang kita hasilkan setiap harinya. 
                Karena kebiasaan orang menggunakan tissue dan kapas untuk membersihkan sesuatu mulai dari membersihkan make up di muka hingga tissue sebagai lap tangan atau barang-barang yang kotor. 
                Walaupun tissue dan kapas lebih mudah terurai dibandingkan sampah plastik, namun alangkah baiknya kita kurangi penggunaan barang sekali pakai dan mengganti dengan barang yang bisa kita pakai berulang kali.
            </p>
            <h6>Bijak Memilah Sampah</h6>
            <p>
                Selama ini kita memang diajarkan untuk membuang sampah di tempat sampah. 
                Namun jadinya semua jenis sampah di tempat sampah jadi satu dan tidak terorganisir dengan baik. 
                Seharusnya untuk skala rumah tangga sampah juga harus dipilah berdasarkan jenisnya agar lebih mudah untuk didaur ulang. 
                Misalnya sampah kertas, kardus dan botol disisihkan tersendiri untuk nantinya dapat dikirim ke tempat khusus daur ulang sampah sehingga tidak berakhir di TPA. 
                Untuk sampah organik bisa dijadikan kompos.
            </p>
        </div>
    </ul>
  </div>
</template>

<script>
export default {
 name: 'Action',
 computed: {
    actions() {
      // console.log(this.$store.state.articles, "computed")
      return this.$store.state.actions
    }
  },
created() {
    this.$store.dispatch('fetchActions')
  }
}
</script>

<style scoped>
 img {
    width: 400px;
    height: auto;
  }
</style>