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
            <th class="mobile-hide">Comunicado</th>
            <th class="col-lg-2" ></th>
          </tr>
          <tr v-for="tmpPet in data.pets" :key="tmpPet.id">
            <td class="mobile-hide">{{tmpPet.id}}</td>
            <td>
              <strong>{{tmpPet.name}}</strong><br />
              <label class="mobile-only">Idade: {{tmpPet.age}}</label><br />
              <strong class="mobile-only text-red" v-if="tmpPet.status == 1" >Perdido</strong>
              <strong class="mobile-only text-orange" v-if="tmpPet.status == 2" >Comunicado</strong>
              <strong class="mobile-only text-green" v-if="tmpPet.status == 3" >Encontrato</strong>
              <p class="mobile-only">Info: {{tmpPet.information}}</p>
              <p class="mobile-only">Info: {{tmpPet.city}}</p>
              <p class="mobile-only">Info: {{tmpPet.state}}</p>
            </td>
            <td class="mobile-hide">{{tmpPet.age}}</td>
            <td class="mobile-hide">
              <strong class="text-red" v-if="tmpPet.status == 1" >Perdido</strong>
              <strong class="text-orange" v-if="tmpPet.status == 2" >Comunicado</strong>
              <strong class="text-green" v-if="tmpPet.status == 3" >Encontrato</strong>
            </td>
            <td class="mobile-hide">
              {{tmpPet.found_name}} - {{tmpPet.found_phone}}
            </td>
            <td>
              <div class="q-pa-md q-gutter-sm">
                <q-btn color="blue" icon="image" @click="addPetImagePrompt = true; pet = tmpPet" v-if="tmpPet.status != 3" />
                <q-btn color="blue" icon="done" @click="foundPetPrompt = true; pet = tmpPet" v-if="tmpPet.status != 3" />
                <q-btn color="red" icon="delete" @click="deletPetPrompt = true; pet = tmpPet" />
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
        <q-file filled  v-on:change="handleFileUpload($event)" v-model="pet.src" label="Selecione foto do animal"
          accept=".jpg, image/*"/>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn flat label="Cadastrar" @click="addPetImage()" />
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
        <q-btn flat label="Confirmar" color="primary" v-close-popup @click="deletePet()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!--Confirmar animal encontrado-->
  <q-dialog v-model="foundPetPrompt" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">Confirmar animal encontrado?</span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="primary" v-close-popup />
        <q-btn flat label="Confirmar" color="primary" v-close-popup @click="foundPet()" />
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
      addPetPrompt: false,
      addPetImagePrompt: false,
      deletPetPrompt: false,
      foundPetPrompt: false
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
      }).catch(error => {
        window.localStorage.clear('token')
        if (error.response.data.errors === 'Signature verification raised') {
          window.location.href = '/?login=do'
          Notify.create(
            {
              type: 'negative',
              message: 'Faca login para Area restrita!'
            }
          )
        }
      })
    },

    deletePet () {
      axios.delete(apiUrl + '/api/v1/pets/' + this.pet.id, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token
        }
      }).then(response => {
        this.getUserData()
      })
    },

    foundPet () {
      axios.patch(apiUrl + '/api/v1/pets/found/' + this.pet.id, {}, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token
        }
      }).then(response => {
        Notify.create(
          {
            type: 'positive',
            message: 'Animal atualizado para ENCONTRADO!'
          }
        )
        this.getUserData()
      }).catch(error => {
        console.log(error)
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
    },

    handleFileUpload (event) {
      // console.log(event)
      this.pet.image = event.target.files[0]
    },

    addPetImage () {
      const data = new FormData()
      data.append('image', this.pet.image)
      axios.patch(apiUrl + '/api/v1/pets/image/' + this.pet.id, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: this.token
        }
      }).then(response => {
        Notify.create(
          {
            type: 'positive',
            message: 'Foto salva com sucesso!'
          }
        )
        this.addPetImagePrompt = false
        this.pet.src = null
      }).catch(error => {
        Notify.create(
          {
            type: 'negative',
            message: 'Erro ao salvar!'
          }
        )
        console.log(error)
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
