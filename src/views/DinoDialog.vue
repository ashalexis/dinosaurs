<template>
  <div id="dino-dialog">
    <v-card>
      <v-card-title class="headline grey lighten-2">{{ name }}</v-card-title>

      <v-card-text class="card-text">
        <div class="img">
          <v-img
            :src="require(`../assets/${name}.jpg`)"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex black v-card--reveal white--text"
                style="height: 2rem;"
              >
                <p>Source: {{ imgsrc }}</p>
              </div>
            </v-expand-transition>
          </v-img>
        </div>

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
    imgsrc: String,
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style>
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
