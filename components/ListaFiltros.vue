<template>
  <div class="lista-filtros">
    <button
      type="button"
      class="filtro-item"
      v-for="(item, index) in filtros" :key="index"
    >
      contador sea {{ item.id }} a {{ item.value }}
      <button type="button" class="close-button" @click="removerFiltro(index)">
        <span class="material-icons" style="font-size:10px">
          close
        </span>
      </button>
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState('filtros', ['filtros']),
  methods: mapActions('filtros', ['removerFiltro'])
}
</script>

<style scoped>
.lista-filtros{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 6px;
}

button.filtro-item{
  border-radius: 25px;
  font-size: 12px;
  line-height: 0;
  background: white;
  color: black;
}

button.close-button{
  border-radius: 100%;
  color: red;
  font-size: 12px;
  line-height: 0;
  padding: 0;
}
</style>