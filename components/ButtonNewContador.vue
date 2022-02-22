<template>
  <button type="button" class="agregar-contador sucess" @click="$modal.open" :disabled="$store.state.contadores.length === 20">
    <span class="material-icons">
      add
    </span>
    <span class="is-hidden-mobile">Nuevo contador</span>
  </button>
</template>

<script>
</script>

<style scoped>
button.agregar-contador{
  display: inline-block;
  margin: 0;
  padding: 15px 32px;
  margin: 12px 6px;
}
</style>