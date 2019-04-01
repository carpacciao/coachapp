<template>
  <v-app>
    <div class="place"></div>
    <navigation :title="$route.meta.desc" />
    <router-view/>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {Navigation},
  created () {
    this.$router.push('/auth')
  }
}
</script>

<style>
.place{
  height: 64px;
}
</style>
