<template>
  <div class="container mt-5">
    <h1 class="mb-4">{{ isEditMode ? 'Editar Espaço' : 'Criar Novo Espaço' }}</h1>
    <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="nome" class="form-label">Nome:</label>
        <input
          type="text"
          id="nome"
          v-model="espaco.nome"
          class="form-control"
          required
        />
        <div class="invalid-feedback">
          Por favor, insira um nome.
        </div>
      </div>

      <div class="mb-3">
        <label for="descricao" class="form-label">Descrição:</label>
        <textarea
          id="descricao"
          v-model="espaco.descricao"
          class="form-control"
          rows="3"
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="tipoEspaco" class="form-label">Tipo de Espaço:</label>
        <input
          type="text"
          id="tipoEspaco"
          v-model="espaco.tipoEspaco"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="capacidade" class="form-label">Capacidade:</label>
        <input
          type="number"
          id="capacidade"
          v-model="espaco.capacidade"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="situacao" class="form-label">Situação:</label>
        <select
          v-model="espaco.situacao"
          class="form-select"
          id="situacao"
        >
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="recursosDisponiveis" class="form-label">Recursos Disponíveis:</label>
        <textarea
          id="recursosDisponiveis"
          v-model="espaco.recursosDisponiveis"
          class="form-control"
          rows="3"
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="localizacao" class="form-label">Localização:</label>
        <input
          type="text"
          id="localizacao"
          v-model="espaco.localizacao"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label for="notasAdicionais" class="form-label">Notas Adicionais:</label>
        <textarea
          id="notasAdicionais"
          v-model="espaco.notasAdicionais"
          class="form-control"
          rows="3"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary w-100">
        {{ isEditMode ? 'Atualizar' : 'Criar' }}
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      espaco: {
        nome: '',
        descricao: '',
        tipoEspaco: '',
        capacidade: null,
        situacao: 'ativo',
        recursosDisponiveis: '',
        localizacao: '',
        notasAdicionais: ''
      }
    };
  },
  computed: {
    isEditMode() {
      return !!this.$route.params.id; // Verifica se existe um ID na URL para saber se está em modo de edição
    }
  },
  methods: {
    fetchEspaco(id) {
      axios.get(`/espaco/${id}`)
        .then(response => {
          this.espaco = response.data;
        })
        .catch(error => console.error(error));
    },
    handleSubmit() {
      const apiCall = this.isEditMode
        ? axios.put(`/espaco/${this.$route.params.id}`, this.espaco)
        : axios.post('/espaco', this.espaco);

      apiCall
        .then(() => this.$router.push('/'))
        .catch(error => console.error(error));
    }
  },
  created() {
    if (this.isEditMode) {
      this.fetchEspaco(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
