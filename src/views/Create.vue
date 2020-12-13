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
      typeRules: [
        (v) => !!v || "Dinosaur type is required",
        (v) =>
          (v && v.length >= 2) || "Dinosaur type must be at least 2 characters",
      ],
      nameRules: [
        (v) => !!v || "Dinosaur name is required",
        (v) =>
          (v && v.length >= 2) || "Dinosaur name must be at least 2 characters",
      ],
      dietoptions: [
        { text: "carnivorous", value: "carnivorous" },
        { text: "herbivorous", value: "herbivorous" },
        { text: "omnivorous", value: "omnivorous" },
        { text: "unknown", value: "unknown" },
      ],
      periodRules: [
        (v) => !!v || "Dinosaur era is required",
        (v) =>
          (v && v.length >= 2) || "Dinosaur era must be at least 2 characters",
      ],
    };
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        const payload = this.formData;
        console.log(payload);
        this.$store.dispatch("addDino", payload);

        //inform on added
        this.notyf.success(`Dino has been added!`);
      }
    },
  },
};
</script>
