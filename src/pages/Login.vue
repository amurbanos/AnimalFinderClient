<template>
  <q-page>
    <div class="row main--row">
      <div class="col-12" >
        <h3>
          Faca login ou cadastre-se
        </h3>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageLogin',
  components: {},

  mounted () {}
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
