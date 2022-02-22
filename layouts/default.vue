<template>
  <div class="theme-default has-background-secondary">
    <Header />
    <Nuxt />
    <Footer />
    <Modal></Modal>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body, button {
  font-family: "Roboto";
}
html {
  height: 100%;  
}
body, #__nuxt, #__layout, .theme-default {
  margin: 0;
  min-height: 100vh;
  overflow: auto;
}

.theme-default{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button{
  cursor: pointer;
  border: 0;
  padding: 12px;
  border-radius: 5px;
}

button:hover{
  opacity: 0.7;
}

button:disabled{
  opacity: 0.3;
  cursor: default;
}

.is-primary {
  background: #4527a0;
  color: white;
}

.is-secondary {
  background: #1f1f1f;
  color: white;
}

.has-background-primary{
  background: #4527a0;
}

.has-background-secondary{
  background: #1f1f1f;
}

.text-danger{
  color: red;
}

.has-text-primary {
  color: #4527a0;
}

button.warning{
  background: red;
  color: white
}

button.sucess{
  background: green;
  color: white;
}

button > *{
  vertical-align: middle;
}

@media (max-width: 530px) {
  .is-hidden-mobile{
    display: none;
  }
  body{
    
  }
  p{
    font-size: 10px;
  }
  h1{
    font-size: 12px
  }
  h2{
    font-size: 12px
  }
  h3{
    font-size: 12px
  }
  h4{
    font-size: 12px
  }
  h5{
    font-size: 12px
  }
  h6{
    font-size: 12px
  }
  button{
    font-size: 12px
  }
}

.is-flex-responsive {
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  padding: 12px;
  row-gap: 12px;
}

@media (max-width: 530px) {
  .is-flex-responsive{
    flex-direction: column;
  }
}

</style>