<template>
  <div id="index">
    <OrdenarPor />
    <FiltrarContadores />
    <ListaFiltros />
    <ListadorContadores />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head: () => ({
    title: "Aplicación de contadores"
  }),
  template: "default"
}
</script>

<style scoped>
#index {

  margin-top: 58px;
}
#index > *{
  padding: 30px 40px;
}
</style>