<template>
  <div class="ordenar-por">
    Ordenar por: 
    <select name="order-by" v-model="keyOrder">
      <option
        v-for="item in options"
        :key="`option-${item.key}`"
        :value="item.key"
        v-html="item.showName"
        :selected="item === keyOrder"
      />
    </select>
    <select name="order-direction" v-model="direction">
      <option
        v-for="item in directions"
        :key="`direction-${item}`"
        :value="item"
        v-html="item"
        :selected="item === direction"
      />
    </select>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    keyOrder: 'name',
    options: [{key: 'name', showName: 'Nombre' }, {key: 'contador', showName: 'Contador'}],
    direction: 'Ascendente',
    directions: ['Ascendente', 'Descendente'],
  }),
  methods: mapMutations(['ORDENAR_POR_CANTIDAD', 'ORDENAR_POR_NOMBRE']),
  watch:{
    keyOrder:{
      handler: function keyOrder(newValue, oldValue) {
        if(newValue === 'name'){
          this.ORDENAR_POR_NOMBRE(this.direction === 'Descendente')
          } else {
          this.ORDENAR_POR_CANTIDAD(this.direction === 'Descendente')
        }
      },
      immediate: true
    },
    direction:{
      handler: function keyOrder(newValue, oldValue) {
        if(this.keyOrder === 'name'){
          this.ORDENAR_POR_NOMBRE(newValue === 'Descendente')
          } else {
          this.ORDENAR_POR_CANTIDAD(newValue === 'Descendente')
        }
      },
      immediate: true
    },
  }
}
</script>

<style scoped>
.ordenar-por {
  display: flex;
  justify-content: flex-end;
  column-gap: 4px;
  color: white;
}

</style>