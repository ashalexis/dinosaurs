<template>
  <div id="create">
    <h1>Add your own dino!</h1>
    <v-form ref="form" @submit.prevent="handleSubmit" v-model="valid">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="formData.name"
              :rules="nameRules"
              label="Name of dinosaur"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="formData.type"
              :rules="typeRules"
              label="Type of dinosaur"
              required
            ></v-text-field
          ></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              v-model="formData.diet"
              :items="dietoptions"
              label="Diet"
              required
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              v-model="formData.period"
              :rules="periodRules"
              label="When was the dinosaur alive?"
              required
            ></v-textarea>
          </v-col>
        </v-row>
        <v-btn type="submit" color="success">Submit</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  inject: ["notyf"],
  data() {
    return {
      valid: true,
      formData: {
        name: "",
        diet: "",
        period: "",
        type: "",
      },
      mydinos: [],
      typeRules: [
        v => !!v || "Dinosaur type is required",
        v =>
          (v && v.length >= 2) || "Dinosaur type must be at least 2 characters",
      ],
      nameRules: [
        v => !!v || "Dinosaur name is required",
        v =>
          (v && v.length >= 2) || "Dinosaur name must be at least 2 characters",
      ],
      dietoptions: [
        { text: "carnivorous", value: "carnivorous" },
        { text: "herbivorous", value: "herbivorous" },
        { text: "omnivorous", value: "omnivorous" },
        { text: "unknown", value: "unknown" },
      ],
      periodRules: [
        v => !!v || "Dinosaur era is required",
        v =>
          (v && v.length >= 2) || "Dinosaur era must be at least 2 characters",
      ],
    };
  },
  mounted() {
    if (localStorage.getItem("mydinos")) {
      try {
        this.mydinos = JSON.parse(localStorage.getItem("mydinos"));
      } catch (e) {
        localStorage.removeItem("mydinos");
      }
    }
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.mydinos.push(this.formData);
        this.formData = {
          name: "",
          diet: "",
          period: "",
          type: "",
        };
        const payload = JSON.stringify(this.mydinos);
        localStorage.setItem("mydinos", payload);
        console.log(localStorage);

        //inform on added
        this.notyf.success(`Dino has been added!`);
      }
    },
  },
};
</script>
