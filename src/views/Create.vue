<template>
  <div id="create">
    <v-container>
      <v-row justify="center">
        <h1>Add your own dino!</h1>
      </v-row>

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

          <v-row justify="center">
            <v-btn type="submit" color="success">Submit</v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { uuid } from "vue-uuid";

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

  methods: {
    ...mapActions(["addDino"]),
    handleSubmit() {
      if (this.$refs.form.validate()) {
        const payload = this.formData;
        payload.id = uuid.v4();
        this.addDino(payload);

        //inform on added
        this.notyf.success(`Dino has been added!`);

        //shift to dino-directory
        this.$router.push({ path: "dinos" });
      }
    },
  },
};
</script>

<style>
#create {
  margin-top: 2rem;
}
</style>
