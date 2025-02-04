<template>
  <div class="filters">
    <input
      v-model="filterName"
      placeholder="Filtra por data, tipo de espaco, responsavel pela reserva, situação da reserva"
      class="form-control"
    />
    <select v-model="filterType" class="form-control">
      <option value="">Todos os tipos</option>
      <option value="sala">Sala de Aula</option>
      <option value="auditorio">Auditório</option>
      <option value="laboratorio">Laboratório</option>
    </select>
    <select v-model="filterStatus" class="form-control">
      <option value="">Todas as situações</option>
      <option value="ativo">Ativo</option>
      <option value="inativo">Inativo</option>
      <option value="manutencao">Em Manutenção</option>
    </select>
    <button @click="applyFilters" class="btn btn-primary">Aplicar Filtros</button>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  data() {
    return {
      filterName: '',
      filterType: '',
      filterStatus: '',
    };
  },
  methods: {
    applyFilters() {
      this.$emit('apply-filters', {
        name: this.filterName,
        type: this.filterType,
        status: this.filterStatus,
      });
    },
  },
};
</script>

<style scoped>
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.form-control {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.btn-primary {
  background-color: #42b983;
  color: white;
}

.btn-primary:hover {
  background-color: #369f6e;
}
</style>