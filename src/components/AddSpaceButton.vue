<template>
    <button @click="goToAddSpace" class="btn btn-primary add-space-button">
      Adicionar Novo Espaço
    </button>
  </template>
  
  <script>
  export default {
    name: 'AddSpaceButton',
    methods: {
      goToAddSpace() {
        this.$emit('go-to-add-space');
      },
    },
  };
  </script>
  
  <style scoped>
  .add-space-button {
    margin-top: 20px;
  }
  </style>