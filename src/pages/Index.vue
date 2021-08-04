<template>
  <q-page>
    <div class="row main--row">
      <div class="col-12" >
        <h3>
          Perdidos
        </h3>
      </div>
      <div v-for="pet in data.pets" :key="pet.id" class="col-lg-3 col-sm-4 col-12 pet--card">
        <div class="text-center" >
          <img :src="apiUrl + pet.image_url">
        </div>
        <div>
          Nome: {{ pet.name }}
        </div>
        <div>
          Idade: {{ pet.age }}
        </div>
        <div>
          Descricao: {{ pet.age }}
        </div>
        <div>
          <q-btn color="black" label="Encontrei" class="btn--report" @click="promptPetFound = true; petFound = pet" />
        </div>
      </div>
    </div>
    <!-- Paginacao -->
    <div class="row">
      <div class="pagination text-center col-12">
        <a href="javascript: void(0)" @click="getPage(1)" >&laquo;</a>
        <a href="javascript: void(0)" v-for="index in data.total_pages" :key="index" @click="getPage(index)" >{{index}}</a>
        <a href="javascript: void(0)" @click="getPage(data.total_pages)" >&raquo;</a>
      </div>
    </div>
  </q-page>
  <!--Notificar-->
  <q-dialog v-model="promptPetFound" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Digite seu telefona para contato</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="petFound.information" placeholder="Digite o seu telefone para contato"
          mask="(##) ##### - ####"
          autofocus @keyup.enter="validatePetFound()" class="text-center" />
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn flat label="Comunicar" @click="validatePetFound()"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import { global } from '../config.js'
import { Notify } from 'quasar'

const apiUrl = global.apiUrl
const axios = require('axios').default

export default defineComponent({
  name: 'PageIndex',
  components: {},
  data () {
    return {
      data: {},
      apiUrl: apiUrl,
      promptPetFound: false,
      petFound: {}
    }
  },
  mounted () {
    this.getPage(1)
  },
  methods: {

    getPage (page) {
      axios
        .get(apiUrl + '/api/v1/pets?' + 'page=' + page)
        .then(response => (this.data = response.data))
    },

    validatePetFound () {
      if (this.petFound.information) {
        this.setPetFound()
      } else {
        Notify.create(
          {
            type: 'negative',
            message: 'Digite o telefone'
          }
        )
      }
    },

    setPetFound () {
      const data = JSON.stringify({ pet: this.petFound })
      axios.patch(apiUrl + '/api/v1/pets/' + this.petFound.id, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token
        }
      }).then(response => {
        Notify.create(
          {
            type: 'positive',
            message: 'Notificado com sucesso, aguarde o contato!'
          }
        )
        this.getPage(1)
        this.promptPetFound = false
      }).catch(error => {
        Notify.create(
          {
            type: 'negative',
            message: 'Nao foi possivel notificar'
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

</style>
