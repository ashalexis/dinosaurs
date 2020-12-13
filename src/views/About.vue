<template>
  <div id="about">
    <h1>About...</h1>
    <div class="about website">
      <h2>This website</h2>
      <p>This is a quick site about dinosaurs made in Vue.js.</p>
    </div>
    <div class="about developer">
      <h2>The developer</h2>
      <p>The developer is really enthusiastic about dinosaurs.</p>
    </div>
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
#about {
  padding: 1rem;
}

.about {
  margin: 3rem;
  padding: 0;
}
</style>
