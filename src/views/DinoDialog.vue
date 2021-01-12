<template>
  <div id="dino-dialog">
    <v-card>
      <v-card-title class="headline grey lighten-2">{{ name }}</v-card-title>

      <v-card-text class="card-text">
        <div class="information">
          <p><strong>Type of dinosaur:</strong> {{ type }}</p>
          <p><strong>Diet:</strong> {{ diet }}</p>
          <p><strong>When it lived:</strong> {{ period }}</p>
        </div>
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
    handleClose: Function,
  },
};
</script>

<style>
.information {
  margin: 1rem;
}
</style>
