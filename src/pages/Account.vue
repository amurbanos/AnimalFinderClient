<template>
  <q-page>
    <div class="row main--row">
      <div class="col-12" >
        <h3>
          Seu animais cadastrados
        </h3>
      </div>
      <div class="col-12">
        <table class="pets--table ">
          <tr>
            <th class="mobile-hide">Codigo</th>
            <th>Nome</th>
            <th class="mobile-hide">Idade</th>
            <th class="mobile-hide">Status</th>
            <th class="mobile-hide">Informacoes</th>
            <th class="col-lg-2" ></th>
          </tr>
          <tr v-for="pet in data.pets" :key="pet.id">
            <td class="mobile-hide">{{pet.id}}</td>
            <td>
              {{pet.name}}<br />
              <strong class="mobile-only text-red" v-if="pet.status == 1" >Perdido</strong>
              <strong class="mobile-only text-orange" v-if="pet.status == 2" >Comunicado</strong>
              <strong class="mobile-only text-green" v-if="pet.status == 3" >Encontrato</strong>
            </td>
            <td class="mobile-hide">{{pet.age}}</td>
            <td class="mobile-hide">
              <strong class="text-red" v-if="pet.status == 1" >Perdido</strong>
              <strong class="text-orange" v-if="pet.status == 2" >Comunicado</strong>
              <strong class="text-green" v-if="pet.status == 3" >Encontrato</strong>
            </td>
            <td class="mobile-hide">{{pet.information}}</td>
            <td>
              <div class="q-pa-md q-gutter-sm">
                <q-btn color="blue" icon="done" />
                <q-btn color="blue" icon="image" />
                <q-btn color="red" icon="delete" @click="deletPetPrompt = true; petDeleteId = pet.id" />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <q-btn color="green" icon="add" class="bet--add--pet" @click="addPetPrompt = true"  />
  </q-page>
  <!--Cadastro-->
  <q-dialog v-model="addPetPrompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Cadastrar animal desaparecido</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="pet.name"  placeholder="Digite o nome do animal" autofocus @keyup.enter="addPet()" />
        <ul class="error--list" v-if="pet.errors.hasOwnProperty('name')"  >
          <li v-for="error in pet.errors.name" :key="error" >
            {{error}}
          </li>
        </ul>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="pet.age" type="number"  placeholder="Idade do animal" autofocus @keyup.enter="addPet()" />
        <ul class="error--list" v-if="pet.errors.hasOwnProperty('age')"  >
          <li v-for="error in pet.errors.age" :key="error" >
            {{error}}
          </li>
        </ul>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="pet.state"
          placeholder="Estado em que desapareceu (ex: Sao Paulo)" autofocus @keyup.enter="addPet()" />
        <ul class="error--list" v-if="pet.errors.hasOwnProperty('state')"  >
          <li v-for="error in pet.errors.state" :key="error" >
            {{error}}
          </li>
        </ul>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="pet.city"
          placeholder="Cidade em que desapareceu (ex: Santos)" autofocus @keyup.enter="addPet()" />
        <ul class="error--list" v-if="pet.errors.hasOwnProperty('city')"  >
          <li v-for="error in pet.errors.city" :key="error" >
            {{error}}
          </li>
        </ul>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="pet.information"
          placeholder="Digite aqui outros informacoes relevantes" autofocus @keyup.enter="addPet()" />
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn flat label="Cadastrar" @click="addPet()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--Foto-->
  <q-dialog v-model="addPetImagePrompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Cadastrar foto do animal</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="pet.name"  placeholder="Digite o nome do animal" autofocus @keyup.enter="addPet()" />
        <ul class="error--list" v-if="pet.errors.hasOwnProperty('name')"  >
          <li v-for="error in pet.errors.name" :key="error" >
            {{error}}
          </li>
        </ul>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="pet.information"
          placeholder="Digite aqui outros informacoes relevantes" autofocus @keyup.enter="addPet()" />
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn flat label="Cadastrar" @click="addPet()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--Confirmar remover animal-->
  <q-dialog v-model="deletPetPrompt" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">Confirmar excluir animal?</span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="primary" v-close-popup />
        <q-btn flat label="Confirmar" color="primary" v-close-popup @click="deletePet(pet.id)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import { Notify } from 'quasar'

import { global } from '../config.js'

const axios = require('axios').default
const apiUrl = global.apiUrl

export default defineComponent({
  name: 'PageAccount',
  components: {},

  data () {
    return {
      token: null,
      apiUrl: apiUrl,
      data: {},
      pet: {
        name: null,
        age: 0,
        state: null,
        city: null,
        information: null,
        errors: {}
      },
      petDeleteId: null,
      addPetPrompt: false,
      addPetImagePrompt: false,
      deletPetPrompt: false
    }
  },

  mounted () {
    // exibe mensagem login bem sucedido
    if (this.$route.query.login === 'success') {
      Notify.create(
        {
          type: 'positive',
          message: 'Logado com sucesso!!'
        }
      )
    }
    // checa se esta logado
    this.token = window.localStorage.getItem('token')
    if (!this.token) {
      window.location.href = '#/?login=do'
      Notify.create(
        {
          type: 'negative',
          message: 'Faca login para Area restrita!'
        }
      )
    } else {
      this.getUserData()
    }
  },

  methods: {

    getUserData () {
      axios.get(apiUrl + '/api/v1/users', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token
        }
      }).then(response => {
        this.data = response.data
      })
    },

    deletePet () {
      axios.delete(apiUrl + '/api/v1/pets/' + this.petDeleteId, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token
        }
      }).then(response => {
        this.getUserData()
      })
    },

    addPet () {
      const data = JSON.stringify({ pet: this.pet })
      axios.post(apiUrl + '/api/v1/pets', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token
        }
      }).then(response => {
        Notify.create(
          {
            type: 'positive',
            message: 'Pet cadastrado com sucesso'
          }
        )
        this.addPetPrompt = false
        this.getUserData()
      }).catch(error => {
        Notify.create(
          {
            type: 'negative',
            message: 'Erro ao salvar pet'
          }
        )
        this.pet.errors = error.response.data
      })
    }
  }

})
</script>

<style lang="scss">
  .main--row{
    margin: 50px
  }

  .btn--report{
    width: 98%;
    margin: 0;
  }

  .pet--card{
    padding: 10px
  }

  .pets--table {
    border-collapse: collapse;
    width: 100%;
  }

  .pets--table td, .pets--table th {
    padding: 0 8px;
    border: 1px solid #ccc;
    text-align: center;
  }
  .pets--table tr:hover {background-color: #ccc;}
  .pets--table th {
    padding-top: 2px;
    padding-bottom: 2px;
    text-align: left;
    background-color: #333;
    color: white;
  }

  .bet--add--pet{
    position: fixed;
    right:    50px;
    bottom:   50px;
  }

</style>
