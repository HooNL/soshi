<template>
  <section class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Soshi />
    <Voor />
  </section>
</template>

<script>
// @ is an alias to /src
import Soshi from '@/components/Soshi.vue'
import Voor from '@/components/Voor.vue'

export default {
  name: 'Home',
  components: {
    Soshi,
    Voor
  }
}
</script>
