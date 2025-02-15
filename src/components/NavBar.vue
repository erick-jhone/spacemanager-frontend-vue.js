<template>
  <div class="home">
    <!-- Cabeçalho -->
    <header class="header">
      <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/new">Novo</router-link>
    </nav>
      <h1>Bem-vindo ao Sistema de Gestão de Espaços Físicos</h1>
      <p>Gerencie salas, laboratórios e auditórios de forma eficiente.</p>
    </header>

    <!-- Filtros -->
    <div class="filters">
      <input
        v-model="filterName"
        placeholder="Buscar por nome do espaço"
        class="filter-input"
      />
      <select v-model="filterType" class="filter-select">
        <option value="">Todos os tipos</option>
        <option value="sala">Sala de Aula</option>
        <option value="auditorio">Auditório</option>
        <option value="laboratorio">Laboratório</option>
      </select>
      <select v-model="filterStatus" class="filter-select">
        <option value="">Todas as situações</option>
        <option value="ativo">Ativo</option>
        <option value="inativo">Inativo</option>
        <option value="manutencao">Em Manutenção</option>
      </select>
      <button @click="applyFilters" class="filter-button">Aplicar Filtros</button>
    </div>

    <!-- Lista de Espaços Físicos -->
    <div class="space-list">
      <div v-for="space in filteredSpaces" :key="space.id" class="space-card">
        <h2>{{ space.name }}</h2>
        <p><strong>Descrição:</strong> {{ space.description }}</p>
        <p><strong>Tipo:</strong> {{ space.type }}</p>
        <p><strong>Capacidade:</strong> {{ space.capacity }} pessoas</p>
        <p><strong>Localização:</strong> {{ space.location }}</p>
        <p><strong>Situação:</strong> {{ space.status }}</p>
        <button @click="viewReservations(space.id)" class="action-button">
          Ver Reservas
        </button>
      </div>
    </div>

    <!-- Botão para Adicionar Novo Espaço -->
    <button @click="goToAddSpace" class="add-space-button">
      Adicionar Novo Espaço
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spaces: [], // Lista de espaços físicos
      filterName: "", // Filtro por nome
      filterType: "", // Filtro por tipo de espaço
      filterStatus: "", // Filtro por situação
      filteredSpaces: [], // Lista de espaços filtrados
    };
  },
  created() {
    // Carrega os espaços físicos ao criar o componente
    this.loadSpaces();
  },
  methods: {
    loadSpaces() {
      // Exemplo de dados mockados (substitua por uma chamada à API)
      this.spaces = [
        {
          id: 1,
          name: "Sala 101",
          description: "Sala de aula com projetor",
          type: "sala",
          capacity: 30,
          location: "1º andar, sala 101",
          status: "ativo",
        },
        {
          id: 2,
          name: "Auditório Principal",
          description: "Auditório com sistema de som",
          type: "auditorio",
          capacity: 100,
          location: "Térreo",
          status: "ativo",
        },
        {
          id: 3,
          name: "Laboratório de Informática",
          description: "Laboratório com 20 computadores",
          type: "laboratorio",
          capacity: 20,
          location: "2º andar, sala 205",
          status: "manutencao",
        },
      ];
      this.filteredSpaces = this.spaces; // Exibe todos os espaços inicialmente
    },
    applyFilters() {
      // Aplica os filtros na lista de espaços
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
    viewReservations(spaceId) {
      // Navega para a página de reservas do espaço selecionado
      this.$router.push({ name: "Reservations", params: { id: spaceId } });
    },
  
      // Navega para a página de adicionar novo espaço
 goToAddSpace() {
  this.$router.push({ name: 'CreateSpace' });
}

    
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 2rem;
  color: #333;
}

.header p {
  font-size: 1rem;
  color: #666;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-input,
.filter-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.filter-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.filter-button:hover {
  background-color: #369f6e;
}

.space-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.space-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  width: 300px;
  background-color: #f9f9f9;
}

.space-card h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.space-card p {
  margin: 5px 0;
  color: #555;
}

.action-button {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.action-button:hover {
  background-color: #369f6e;
}

.add-space-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.add-space-button:hover {
  background-color: #369f6e;
}
</style>