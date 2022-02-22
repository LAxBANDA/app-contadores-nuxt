<template>
  <div class="contador">
    <p class="contador-name">{{ name }}</p>
    <div class="contador-options">
      <ContadorAmount :id="id" :value="amount" />
      <ContadorRemove @click.native="$store.dispatch('removerContador', id)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: {
      type: String,
      default: ''
    },
    amount: {
      type: Number,
      default: 1
    }
  },
}
</script>

<style>

.contador {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: rgb(165, 214, 167);
  border-radius: 5px;
  padding: 0 12px 0 12px;
}

.contador-options{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  align-items: center;
  justify-items: flex-end;
}
</style>