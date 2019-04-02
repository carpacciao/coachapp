<template>
  <v-card class="primary app" style="padding-top: 5px">
    <v-card class="pa-3">
        <v-flex xs12 justify-center class="pa-3">
          <v-layout align-center justify-center row fill-height>
            <v-avatar size="100">
              <v-img src="http://via.placeholder.com/100"></v-img>
            </v-avatar>
          </v-layout>
        </v-flex>
      <v-card-text title-primary>
        <h2 class="text-xs-center grey--text text--darken-2">Se connecter</h2>
        <small class="d-block text-xs-center">ou <router-link to="/register">créer ton compte.</router-link></small>
      </v-card-text>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field name="username" v-model="username" :rules="rules.username" required hint="" type="text" label="Pseudo"></v-text-field>
          <v-text-field name="password" v-model="password" :rules="rules.password" required hint="" type="password" label="Mot de passe"></v-text-field>
          <p class="text-xs-right">
            <v-dialog v-model="forgot" width="500">
              <template v-slot:activator="{ on }">
                <v-btn flat v-on="on" color="primary" small>mot de passe oublié ?</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Réinitialisation du mot de passe</v-card-title>
                <v-card-text>
                  WIP
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" flat @click="forgot = false">Fermer</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </p>
          <v-btn round block color="primary" :loading="loading" :disabled="!valid" @click="login()">Se connecter</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
import { rules } from '../utils.js'

export default {
  data () {
    return {
      valid: false,
      forgot: false,
      rules,
      username: '',
      password: '',
      loading: false
    }
  }
}
</script>

<style scoped>
  .app{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;

  }
</style>
