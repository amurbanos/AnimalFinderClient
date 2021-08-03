<template>
  <q-page>
    <div class="row main--row">
      <div class="col-12" >
        <h3>
          Ajude a encontrar os nossos melhores amigos
        </h3>
      </div>
      <div v-for="pet in data.pets" :key="pet.id" class="col-lg-3 col-sm-6 col-12 pet--card">
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
        <div class="q-gutter-lg">
          <q-btn color="black" label="Encontrei" class="btn--report" @click="prompt = true" />
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
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Comunicar animal encontrado</div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Estado</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Cidade</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn flat label="Confirmar" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'

const apiUrl = 'http://172.17.0.2:3000'
const axios = require('axios').default

export default defineComponent({
  name: 'PageIndex',
  components: {},
  data () {
    return {
      data: {},
      apiUrl: apiUrl,
      prompt: false
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
