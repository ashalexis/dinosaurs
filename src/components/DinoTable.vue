<template>
  <div class="dinotable">
    <v-simple-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Diet</th>
          <th>Learn more</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dino in dinosaurs" :key="dino.name">
          <td>{{ dino.name }}</td>
          <td>{{ dino.diet }}</td>
          <td>
            <v-btn text small color="primary" @click="handleClick(dino)"
              >Learn more</v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-dialog v-model="dialog" @click:outside="handleExit">
      <v-card>
        <v-card-title>{{ contents.name }}</v-card-title>
        <v-card-text>
          <p>
            This dinosaur was {{ contents.diet }} and lived in the
            {{ contents.period }} era.
          </p>
          <p><strong>Type:</strong> {{ contents.type }}</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  inject: ["notyf"],
  props: {
    dinosaurs: Array,
  },
  data() {
    return {
      dialog: false,
      contents: {
        name: "",
        diet: "",
        period: "",
        type: "",
      },
    };
  },
  updated() {},
  mounted() {},
  methods: {
    handleClick(dino) {
      this.dialog = true;
      this.contents = dino;
    },
    handleExit() {
      this.dialog = false;
    },
  },
};
</script>

<style>
.dinotable {
  padding: 1rem;
}
</style>
