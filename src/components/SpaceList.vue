<template>
    <div class="space-list">
      <SpaceCard
        v-for="space in filteredSpaces"
        :key="space.id"
        :space="space"
        @view-reservations="viewReservations"
        @desativar-espaco="desativarEspaco"
        @reativar-espaco="reativarEspaco"
      />
    </div>
  </template>
  
  <script>
  import SpaceCard from './SpaceCard.vue';
  
  export default {
    name: 'SpaceList',
    components: {
      SpaceCard,
    },
   props: {
      filteredSpaces: {
        type: Array,
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
  .space-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>