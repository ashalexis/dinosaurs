<template>
  <div class="about">
    <v-container>
      <v-row justify="center" align="center">
        <h1>About...</h1>
      </v-row>

      <div class="information">
        <v-row justify="center" align="center">
          <v-col justify="center" align="center">
            <h2>This website</h2>
            <p>This is a quick site about dinosaurs made in Vue.js.</p>
          </v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col justify="center" align="center">
            <h2>The developer</h2>
            <p>The developer is really enthusiastic about dinosaurs.</p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.about {
  margin-top: 2rem;
}
.information {
  margin-top: 2rem;
}
</style>
