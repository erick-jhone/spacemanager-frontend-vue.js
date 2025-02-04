<template>
  <div class="home">
    <Header/>
    <Filters @apply-filters="applyFilters" />
    <AddSpaceButton @go-to-add-space="goToAddSpace" />
    <SpaceList
      :filteredSpaces="filteredSpaces"
      @view-reservations="viewReservations"
      @desativar-espaco="desativarEspaco"
      @reativar-espaco="reativarEspaco"
    />

  </div>
</template>

<script>
import Header from './components/Header.vue';
import Filters from './components/Filters.vue';
import AddSpaceButton from './components/AddSpaceButton.vue';
import SpaceList from './components/SpaceList.vue';

import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    Filters,
    SpaceList,
    AddSpaceButton,
  },
  data() {
    return {
      spaces: [],
      filterName: '',
      filterType: '',
      filterStatus: '',
      filteredSpaces: [],
    };
  },
  created() {
    this.loadSpaces();
  },
  methods: {
    async loadSpaces() {
      try {
        const response = await axios.get('/espaco');// API get espacos
        this.spaces = response.data;
        this.filteredSpaces = this.spaces;
      } catch (error) {
        console.error('Erro ao carregar espaços:', error);
      }
    },
    applyFilters(filters) {
      this.filterName = filters.name;
      this.filterType = filters.type;
      this.filterStatus = filters.status;

      this.filteredSpaces = this.spaces.filter((space) => {
        return (
          (this.filterName
            ? space.name.toLowerCase().includes(this.filterName.toLowerCase())
            : true) &&
          (this.filterType ? space.type === this.filterType : true) &&
          (this.filterStatus ? space.status === this.filterStatus : true)
        );
      });
    },
    async desativarEspaco(id) {
      try {
        await axios.put(`/${id}/desativar/desativarEspaco`); // API - desativva espaco
        this.loadSpaces(); // Recarrega a lista de espaços
      } catch (error) {
        console.error('Erro ao desativar espaço:', error);
      }
    },
    async reativarEspaco(id) {
      try {
        await axios.put(`/${id}/reativar/reativarEspaco`); // API - reativu o espaco
        this.loadSpaces(); // Recarrego a lista de espaços
      } catch (error) {
        console.error('Erro ao reativar espaço:', error);
      }
    },
    viewReservations(spaceId) {
      this.$router.push({ name: 'Reservations', params: { id: spaceId } });
    },
    goToAddSpace() {
      this.$router.push({ name: 'AddSpace' });
    },
  },
};
</script>

<style>
.home {
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>