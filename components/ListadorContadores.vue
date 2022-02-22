<template>
  <div class="listador-de-contadores">
    <template v-if="contadores.length">
      <Contador
        v-bind="contador"
        v-for="contador in contadoresFiltrados"
        :key="contador.id"
      />
    </template>
    <template v-else>
      <div class="sin-contadores">
        <h2>
          No existen contadores aún
        </h2>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      contadores: state => state.contadores,
      filtros: state => state.filtros.filtros
    }),
    contadoresFiltrados(){
      const contadores = this.contadores;
      const filtros = this.filtros;

      if(filtros && filtros.length){
        return contadores.filter(({amount: contadorAmount}) => {
          return filtros.every(({ handler: filtroHandler, value: filtroValue }) => filtroHandler(contadorAmount, filtroValue))
        });
      };

      return contadores
    }
  },
  methods: mapMutations(['SET_CONTADORES']),
  mounted(){
    this.$store.dispatch('fetchContadores')
  }
}
</script>

<style scoped>
.sin-contadores{
  text-align: center;
  color:white;
}

button.agregar-contador {
  border-radius: 10px;
  border: 0;
  align-self: flex-start;
  padding: 12px 16px;
}

.listador-de-contadores{
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 12px;
}
</style>