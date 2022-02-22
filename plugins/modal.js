export default (context, inject) => {
  inject('modal', {
    open () {
      window.$nuxt.$emit('modalOpen')
    },
    close(){
      window.$nuxt.$emit('modalClose')
    }
  })
}