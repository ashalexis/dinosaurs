<template>
  <div id="dinos">
    <div id="dinos-header">
      <h1>Dinos!</h1>
      <v-spacer />
      <v-btn to="/create" color="success">Add a dino!</v-btn>
    </div>
    <DinoTable :dinosaurs="sortedDinos" />
  </div>
</template>

<script>
import DinoTable from "@/components/DinoTable.vue";

export default {
  components: {
    DinoTable,
  },
  data() {
    return {};
  },
  computed: {
    sortedDinos() {
      return this.$store.getters.dinoSort;
    },
  },
};
</script>

<style>
#dinos {
  padding: 1rem;
}

#dinos-header {
  display: flex;
}
</style>
