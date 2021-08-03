<template>
  <q-page>
    <div class="row main--row">
      <div class="col-12" >
        <h3>
          Seus animais
        </h3>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { Notify } from 'quasar'

export default defineComponent({
  name: 'PageAccount',
  components: {},

  mounted () {
    if (this.$route.query.login === 'success') {
      Notify.create(
        {
          type: 'positive',
          message: 'Logado com sucesso!!'
        }
      )
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
