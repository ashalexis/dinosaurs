<template>
  <div id="dinos">
    <h1>Dinos!</h1>
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
</style>
