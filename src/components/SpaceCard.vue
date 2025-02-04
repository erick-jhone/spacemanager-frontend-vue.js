<template>
    <div class="card space-card">
      <div class="card-body">
        <h2 class="card-title">{{ space.name }}</h2>
        <p class="card-text"><strong>Descrição:</strong> {{ space.descricao }}</p>
        <p class="card-text"><strong>Tipo:</strong> {{ space.tipoEspaco }}</p>
        <p class="card-text"><strong>Capacidade:</strong> {{ space.capacidade }} pessoas</p>
        <p class="card-text"><strong>Localização:</strong> {{ space.localizacao }}</p>
        <p class="card-text"><strong>Situação:</strong> {{ space.situacao }}</p>
        <button @click="viewReservations(space.id)" class="btn btn-success">
          Ver Reservas
        </button>
        <button @click="desativarEspaco(space.id)" class="btn btn-warning" v-if="space.status === 'ativo'">
          Desativar
        </button>
        <button @click="reativarEspaco(space.id)" class="btn btn-info" v-if="space.status === 'inativo'">
          Reativar
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpaceCard',
    props: {
      space: {
        type: Object,
        required: true,
      },
    },
    methods: {
      viewReservations(spaceId) {
        this.$emit('view-reservations', spaceId);
      },
      desativarEspaco(spaceId) {
        this.$emit('desativar-espaco', spaceId);
      },
      reativarEspaco(spaceId) {
        this.$emit('reativar-espaco', spaceId);
      },
    },
  };
  </script>
  
  <style scoped>
  .space-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    width: 300px;
    background-color: #f9f9f9;
  }
  
  .card-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  .card-text {
    margin: 5px 0;
    color: #555;
  }
  
  .btn-success {
    background-color: #28a745;
    color: white;
  }
  
  .btn-success:hover {
    background-color: #218838;
  }
  
  .btn-warning {
    background-color: #ffc107;
    color: black;
  }
  
  .btn-warning:hover {
    background-color: #e0a800;
  }
  
  .btn-info {
    background-color: #17a2b8;
    color: white;
  }
  
  .btn-info:hover {
    background-color: #138496;
  }
  </style>