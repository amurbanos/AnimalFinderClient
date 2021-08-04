<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <a href="/">Animal FINDER</a>
        </q-toolbar-title>
        <div>
          <a href="javascript: void(0)" @click="loginPrompt = true" v-if="!logged">
            Entrar
          </a>
          <a href="javascript: void(0)" @click="signupPrompt = true" v-if="!logged">
            Cadastrar
          </a>
          <a href="#/account" v-if="logged">
            Minha conta
          </a>
          <a href="javascript: void(0)" v-if="logged" class="exit--link"  @click="doLogout()" >
            Sair
          </a>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <!--Login-->
  <q-dialog v-model="loginPrompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Faca o login</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="user.email"  placeholder="Digite o seu email" autofocus @keyup.enter="doLogin()" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="user.password" type="password" placeholder="Senha" autofocus @keyup.enter="doLogin()" />
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn flat label="Entrar" @click="doLogin()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--Login-->
  <q-dialog v-model="signupPrompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Faca o seu cadastro</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="user.email"  placeholder="Digite o seu email" autofocus @keyup.enter="prompt = false" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="user.password" type="password" placeholder="Senha" autofocus @keyup.enter="prompt = false" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="user.password" type="phone" placeholder="Repetir Senha" autofocus @keyup.enter="prompt = false" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="user.phone" type="phone" placeholder="Telefone" autofocus @keyup.enter="prompt = false" />
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn flat label="Cadastrar" @click="doLogin()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'

const axios = require('axios').default
const apiUrl = 'http://172.17.0.2:3000'
import { Notify } from 'quasar'

export default defineComponent({
  name: 'MainLayout',
  components: {},

  data () {
    return {
      data: {},
      user: {
        email: null,
        password: null,
        phone: null
      },
      loginPrompt: false,
      logged: false,
      signupPrompt: false
    }
  },

  mounted () {
    const loggedData = window.localStorage.getItem('token')
    if (loggedData) {
      this.logged = true
    } else {
      this.logged = false
    }
  },

  methods: {
    doLogin () {
      const data = JSON.stringify({ user: this.user })
      axios.post(apiUrl + '/api/v1/users/login', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.data = response.data
        if (this.data.token == null) {
          Notify.create(
            {
              type: 'negative',
              message: 'Usuario ou senha invalidos'
            }
          )
        } else {
          window.location.href = '#/account?login=success'
          this.loginPrompt = false
          this.logged = true
          window.localStorage.setItem('token', this.data.token)
        }
      })
    },
    doLogout () {
      window.localStorage.clear('token')
      this.logged = false
      window.location.href = '#/'
    }
  }
})
</script>
