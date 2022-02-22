export const state =  () => ({
  filtros: [

  ],
  operaciones: [
    {
      id: '>',
      handler: (x, y) => x > y
    },
    {
      id: '<',
      handler: (x, y) => x < y
    },
  ],
});

export const mutations = {
  SET_FILTROS: (state, filtros) => state.filtros = filtros,
  REMOVER_FILTRO(state, index){
    state.filtros.splice(index, 1)
  },
  AGREGAR_FILTRO(state, nuevoFiltro){
    state.filtros.push(nuevoFiltro);
  },
  SET_FILTROS_SESSIONSTORAGE: state => sessionStorage.setItem('filtros', JSON.stringify(state.filtros))
};

export const getters = {
  getFiltrosDesdeSessionStorage: (state) => {
    let filtros = sessionStorage.getItem('filtros')
    if(!filtros) return []

    // Agregaremos la función handler que no se guarda en localStorage
    filtros = JSON.parse(filtros).map(filtro => {
      const { handler } = state.operaciones.find(operacion => operacion.id === filtro.id);
      return {
        ...filtro,
        handler
      }
    });

    return filtros;
  },
  findIndexFiltro: state => id => {
    return state.filtros.findIndex(item => item.id == id);
  }
}

export const actions = {
  fetchFiltros(context){
    context.commit('SET_FILTROS', context.getters.getFiltrosDesdeSessionStorage)
  },
  agregarFiltro(context, { value, id }){
    const { handler } = context.state.operaciones.find(operacion => operacion.id === id);
    context.commit('AGREGAR_FILTRO', { value, id, handler })
    context.commit('SET_FILTROS_SESSIONSTORAGE')
  },
  removerFiltro(context, index){
    context.commit('REMOVER_FILTRO', index)
    context.commit('SET_FILTROS_SESSIONSTORAGE')
  }
}