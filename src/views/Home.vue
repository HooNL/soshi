<template>
  <section class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Soshi />
  </section>
</template>

<script>
// @ is an alias to /src
import Soshi from '@/components/Soshi.vue'

export default {
  name: 'Home',
  components: {
    Soshi
  }
}
</script>
