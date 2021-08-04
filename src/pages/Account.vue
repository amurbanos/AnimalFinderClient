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
            <th>Codigo</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Status</th>
            <th class="col-lg-2" ></th>
          </tr>
          <tr v-for="pet in data.pets" :key="pet.id">
            <td>{{pet.id}}</td>
            <td>{{pet.name}}</td>
            <td>{{pet.age}}</td>
            <td>Estudante</td>
            <td>
              <div class="q-pa-md q-gutter-sm">
                <q-btn color="blue" icon="done" />
                <q-btn color="blue" icon="edit" />
                <q-btn color="red" icon="delete" />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { Notify } from 'quasar'

const axios = require('axios').default
const apiUrl = 'http://172.17.0.2:3000'

export default defineComponent({
  name: 'PageAccount',
  components: {},

  data () {
    return {
      token: null,
      apiUrl: apiUrl,
      data: {}
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
    padding: 8px;
    border: 1px solid #ccc;
    text-align: center;
  }
  .pets--table tr:hover {background-color: #ccc;}
  .pets--table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #333;
    color: white;
  }

</style>
