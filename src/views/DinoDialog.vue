<template>
  <div id="dino-dialog">
    <v-card>
      <v-card-title class="headline grey lighten-2">{{ name }}</v-card-title>

      <v-card-text class="card-text">
        <p><strong>Type of dinosaur:</strong> {{ type }}</p>
        <p><strong>Diet:</strong> {{ diet }}</p>
        <p><strong>When it lived:</strong> {{ period }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    diet: String,
    period: String,
    type: String,
  },
  computed: {
    src() {
      let lowercaseName = name.toLowerCase();
      return `https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/${lowercaseName}.jpg`;
    },
  },
};
</script>

<style>
.card-text {
  margin: 1rem;
}
</style>
