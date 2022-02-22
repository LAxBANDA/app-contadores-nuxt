<template>
  <div class="contador-amount">
    <button @click="restarContador(id)" type="button" class="decrese-button" :disabled="minusDisabled">
      <span class="material-icons">
        remove
      </span>
    </button>

    <input type="number" class="contador-input" style="display:none">
    <div class="contador-container">
      {{ value }}
    </div>
    <button @click="sumarContador(id)" type="button" class="increse-button" :disabled="plusDisabled">
      <span class="material-icons">
        add
      </span>
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    id: Number,
    value: {
      type: Number,
      default: 1
    }
  },
  methods: mapActions(["restarContador", "sumarContador"]),
  computed:{
    minusDisabled(){
      return !this.value
    },
    plusDisabled(){
      return this.value === 20
    }
  }
}
</script>

<style scoped>
button {
  background: white;
  border-radius: 50%;
}

.contador-amount{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 12px;
}

.contador-amount > * {
  padding: 4px;
}

.contador-container{
  font-size: 24px;
  background: white;
  text-align: center;
}
.contador-input {
  width: 14px;
}

button > .material-icons{
  color: white;
  font-weight: bold;
  vertical-align: -webkit-baseline-middle;
}

.decrese-button > .material-icons {
  color: red;
}
.increse-button > .material-icons {
  color:grey;
}

</style>