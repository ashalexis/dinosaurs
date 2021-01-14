<template>
  <div id="dino-dialog">
    <v-card>
      <v-card-title class="headline lighten-2" :class="titlecolor">{{
        name
      }}</v-card-title>

      <v-card-text class="card-text">
        <div class="information">
          <p><strong>Type of dinosaur:</strong> {{ type }}</p>
          <p><strong>Diet:</strong> {{ diet }}</p>
          <p><strong>When it lived:</strong> {{ period }}</p>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn class="error" @click="handleDelete(id)"
          >Delete (refresh page to work)</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    name: String,
    diet: String,
    period: String,
    type: String,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["deleteDino"]),
    handleDelete(id) {
      this.deleteDino(id);
    },
  },
  computed: {
    titlecolor() {
      let diet = this.diet;
      return diet == "herbivorous"
        ? "green"
        : diet == "carnivorous"
        ? "red"
        : "grey";
    },
  },
};
</script>

<style>
.card-text {
  margin: 1rem;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.information {
  margin: 1rem;
}
</style>
