<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-3 text-black">
        <q-toolbar-title>
          <a href="/">ANIMAL FINDER</a>
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
  <!--Cadastro-->
  <q-dialog v-model="signupPrompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Faca o seu cadastro</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="user.name"  placeholder="Digite o seu nome" autofocus @keyup.enter="validateSignup()" />
        <ul class="error--list" v-if="user.errors.hasOwnProperty('name')"  >
          <li v-for="error in user.errors.name" :key="error" >
            {{error}}
          </li>
        </ul>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="user.email"  placeholder="Digite o seu email" autofocus @keyup.enter="validateSignup()" />
        <ul class="error--list" v-if="user.errors.hasOwnProperty('email')"  >
          <li v-for="error in user.errors.email" :key="error" >
            {{error}}
          </li>
        </ul>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="user.password" type="password" placeholder="Senha" autofocus @keyup.enter="validateSignup()" />
        <ul class="error--list" v-if="user.errors.hasOwnProperty('password')"  >
          <li v-for="error in user.errors.password" :key="error" >
            {{error}}
          </li>
        </ul>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="user.password_2" type="password" placeholder="Repetir Senha" autofocus @keyup.enter="validateSignup()" />
        <ul class="error--list" v-if="user.errors.hasOwnProperty('password_2')"  >
          <li v-for="error in user.errors.password_2" :key="error" >
            {{error}}
          </li>
        </ul>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="user.phone" placeholder="Telefone"
          mask="(##) ##### - ####"
          autofocus @keyup.enter="validateSignup()"/>
        <ul class="error--list" v-if="user.errors.hasOwnProperty('phone')"  >
          <li v-for="error in user.errors.phone" :key="error" >
            {{error}}
          </li>
        </ul>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn flat label="Cadastrar" @click="validateSignup()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import { global } from '../config.js'

const axios = require('axios').default
const apiUrl = global.apiUrl
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
        password_2: null,
        phone: null,
        errors: {}
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

    /**
    *
    */
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
    },

    validateSignup () {
      const password = this.user.password
      const password2 = this.user.password_2
      if (password === password2) {
        this.doSignup()
      } else {
        this.user.errors = {}
        this.user.errors.password_2 = []
        this.user.errors.password_2[0] = 'Senhas nao coincidem'
        console.log(this.user.errors)
      }
    },

    doSignup () {
      const data = JSON.stringify({ user: this.user })
      axios.post(apiUrl + '/api/v1/users', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        Notify.create(
          {
            type: 'positive',
            message: 'Usuario cadastrado com sucesso, faca login para acessar a area restrita'
          }
        )
        this.user = {
          email: null,
          password: null,
          password_2: null,
          phone: null,
          errors: {}
        }
        this.signupPrompt = false
      }).catch(error => {
        Notify.create(
          {
            type: 'negative',
            message: 'Erro ao salvar usuario'
          }
        )
        this.user.errors = error.response.data
        console.log(this.user.errors.email)
      })
    }

  }
})
</script>

<style lang="scss">
  .error--list{
    color: red;
    padding: 0 12px;
    font-size: 12px
  }
</style>
