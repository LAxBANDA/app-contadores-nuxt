<template>
  <div class="modal-mask" v-if="modal" @click="$modal.close" @keyup.esc="$modal.close">
    <div class="modal-container" @click.stop>
      <div class="modal-header is-primary">
          Agrega un nuevo contador
        <button @click="$modal.close" type="button" class="close-modal-button">
          <span class="material-icons">
            close
          </span>
        </button>
      </div>
      <div class="modal-body is-flex-responsive is-primary">
        <div class="input-container">
          <input ref="contador-title" type="text" maxlength="20" v-model="contadorText" required @keyup.enter="agregarNuevoContador" placeholder="Titulo para tu contador">
          <div v-show="errors" class="text-danger">El contador debe llevar una descripción</div>
        </div>
        <div class="actions">
          <button type="button" class="warning" @click="$modal.close">
            <span class="material-icons">
              close
            </span>
            Cancelar
          </button>
          <button type="button" class="sucess" @click="agregarNuevoContador" :disabled="!contadorText">
            <span class="material-icons">
              add
            </span>
            <span>
              Agregar nuevo
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    modal: false,
    contadorText: '',
    errors: false,
  }),
  created() {
    this.$nuxt.$on('modalOpen', () => {
      this.modal = true;

      this.$nextTick(() => this.$refs['contador-title'].focus()); // just watch out with going too fast !!!
    });

    this.$nuxt.$on('modalClose', () => {
      this.modal = false;
      this.contadorText = '';
      this.errors = false;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off('modalOpen');
    this.$nuxt.$off('modalClose');
  },
  watch:{
    contadorText(){
      this.errors = false
    }
  },
  methods: {
    agregarNuevoContador(){
      if(this.contadorText){
        this.$store.dispatch('agregarContador', this.contadorText);
        this.$modal.close();
      } else {
        this.errors = true;
      }
    }
  }
}
</script>

<style>

button.close-modal-button{
  background: transparent;
  color: white;
  position: sticky;
  top: 50%;
  left: 100%
}

.modal-container{
  display: block;
  margin: 5%; 
}

.modal-header {
  padding: 6px;
  border-radius: 5px 5px 0 0;
}

.modal-body {
  justify-content: space-between;
}

.modal-mask {
  z-index: 3333; /* Sit on top */
  padding-top: 10%; /* Location of the box */
  height: 100%;
  width: 100%; 
  left: 0;
  top: 0;
  position: fixed;
  overflow: auto; 
  background: rgba(0,0,0,0.8);
  transition: ease all 1.0s;
}

.actions {
  align-self: center;
}

.input-container {
  flex-grow: 1;
  align-self: center
}

.input-container > input {
  width: 100%;
  padding: 12px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>