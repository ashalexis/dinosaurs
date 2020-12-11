<template>
  <div class="dinotable">
    <table>
      <tr>
        <th>Dinosaur</th>
        <th>Diet</th>
      </tr>
      <tr v-for="dino in dinos" :key="dino.name">
        <td>{{ dino.name }}</td>
        <td>{{ dino.diet }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  props: {
    dinos: Array,
  },
};
</script>
