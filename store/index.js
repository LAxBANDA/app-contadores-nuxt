import Vue from 'vue';

export const state = () => ({
  contadores: [],
});

export const mutations = {
  SET_CONTADORES(state, contadoresArray){
    state.contadores = contadoresArray
  },
  AGREGAR_CONTADOR(state, contadorObj){
    state.contadores.push(contadorObj)
  },
  REMOVER_CONTADOR(state, index){
    state.contadores.splice(index, 1)
  },
  SUMAR_CONTADOR(state, index){
    const itemContador = state.contadores[index];
    Vue.set(itemContador, 'amount', itemContador.amount + 1);
  },
  RESTAR_CONTADOR(state, index){
    const itemContador = state.contadores[index];
    Vue.set(itemContador, 'amount', itemContador.amount - 1);
  },
  ORDENAR_POR_NOMBRE(state, desc){
    const contadores = state.contadores;

    if(!desc){
      state.contadores = contadores.sort((a, b) => (a.name > b.name) ? 1 : a.name < b.name ? -1 : 0);
    } else {
      state.contadores = contadores.sort((a, b) => (a.name > b.name) ? -1 : a.name < b.name ? 1 : 0);
    }
  },
  ORDENAR_POR_CANTIDAD(state, desc){
    state.contadores = state.contadores.sort((a, b) => !desc ? a.amount - b.amount : b.amount - a.amount);
  },
  SET_CONTADORES_LOCALSTORAGE(state){
    const contadores = JSON.stringify(state.contadores)
    localStorage.setItem('contadores', contadores)
  }
}

export const getters = {
  sumaTotalContadores: state => state.contadores.reduce((acc, b) => acc + b.amount, 0),
  contadoresMayores:  state => value => state.contadores.filter(({ amount }) => amount > value),
  contadoresMenores:  state => value => state.contadores.filter(({ amount }) => amount < value),
  getContadoresDesdeLocalStorage: () => {
    const contadores = localStorage.getItem('contadores')
    return contadores ? JSON.parse(contadores) : [];
  },
  getLastContadorId(state){
    const arrayIds = Array.from(state.contadores, item => item.id);
    const mostValue = Math.max(...arrayIds);
    return state.contadores.length ? mostValue + 1: 1;
  },
  findIndexContador: state => id => {
    return state.contadores.findIndex(item => item.id == id);
  }
}

export const actions = {
  fetchContadores(context){
    context.commit('SET_CONTADORES', context.getters.getContadoresDesdeLocalStorage)
  },
  agregarContador(context, nombreContador){
    
    context.commit('AGREGAR_CONTADOR', { name: nombreContador, amount: 0, id: context.getters.getLastContadorId });
    context.commit('SET_CONTADORES_LOCALSTORAGE');
  },
  removerContador(context, id){
    context.commit('REMOVER_CONTADOR', context.getters.findIndexContador(id));
    context.commit('SET_CONTADORES_LOCALSTORAGE');
  },
  sumarContador(context, id){
    context.commit('SUMAR_CONTADOR', context.getters.findIndexContador(id));
    context.commit('SET_CONTADORES_LOCALSTORAGE');
  },
  restarContador(context, id){
    context.commit('RESTAR_CONTADOR', context.getters.findIndexContador(id));
    context.commit('SET_CONTADORES_LOCALSTORAGE');
  },
}