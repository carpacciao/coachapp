<template>
  <v-app>
    <navigation :title="$route.meta.desc" />
    <router-view/>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {Navigation}
}
</script>

<style>

</style>
