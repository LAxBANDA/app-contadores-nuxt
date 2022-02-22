<template>
  <div class="filtrar-contadores">
    <span class="material-icons">
      filter_alt
    </span>
    <select name="order-by" v-model.lazy="operacionSelected">
      <option
        v-for="item in operaciones"
        :key="`operacion-${item.id}`"
        :value="item.id"
        v-html="item.id"
        :selected="item.id === operacionSelected"
      />
    </select>
    <input type="number" min="0" max="20" v-model.number="valueSelected" :disabled="!operacionSelected">
    <button @click="nuevoFiltro" :disabled="valueSelected > 20 || valueSelected < 0 || $store.state.contadores.length < 2">agregar</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    operacionSelected: '>',
    valueSelected: 0
  }),
  computed:{
    ...mapState({
      operaciones: state => state.filtros.operaciones,
      filtros: state => state.filtros.filtros,
    }),
  },
  methods: {
    nuevoFiltro(){
      this.$store.dispatch('filtros/agregarFiltro', { id: this.operacionSelected, value: this.valueSelected });
      this.valueSelected = 0;
      this.operacionSelected = '>';
    }
  },
  mounted(){
    this.$store.dispatch('filtros/fetchFiltros');
  }
}
</script>

<style scoped>
.filtrar-contadores{
  display: flex;
  justify-content: flex-end;
  column-gap: 4px;
  color: white;
}

input,select{
  border: 0;
  vertical-align: super;
}
button{
  padding:4px
}
</style>