<template>
  <footer class="is-primary">
    <div class="contadores-totales">
      {{ $store.getters.sumaTotalContadores }}
    </div>

    <div class="copyright">
      © Copyright Alekos Georgudis Eitel {{ (new Date()).getFullYear()}}
    </div>

  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

.contadores-totales{
  color: white;
  font-size: 34px;
}
footer {
  display: grid;
  grid-template-rows: 1fr;
  height: 68px;
  text-align: center;
}
.copyright{
  display: block;
  height: 24px;
  text-align: center;
  background: black;
}
</style>