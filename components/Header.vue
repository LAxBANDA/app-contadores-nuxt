<template>
  <nav class="has-background-primary">
    <ButtonNewContador />
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
nav {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.right{
  text-align: right;
  margin-right: 8px
}
</style>