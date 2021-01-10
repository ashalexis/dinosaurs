<template>
  <div id="dino-directory">
    <v-container>
      <v-row>
        <v-col sm="12" md="3">
          <v-text-field
            outlined
            single-line
            label="Search dinosaurs"
            append-icon="mdi-database-search"
            v-model="singlesearch"
          ></v-text-field>

          <v-menu :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text outlined v-bind="attrs" v-on="on">
                Explore dinosaurs by:
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-select
                  v-model="formData.name"
                  :items="alphabet"
                  label="Name (A-Z)"
                  prepend-inner-icon="mdi-plus"
                >
                </v-select>
              </v-list-item>

              <v-list-item>
                <v-select
                  v-model="formData.era"
                  :items="era"
                  label="When they lived"
                  prepend-inner-icon="mdi-plus"
                >
                </v-select>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col sm="12" md="9">
          <h2>All dinosaurs</h2>
          <p>Laksjfskfkajshflkashdfkhfaskjdhfaksdhf</p>
          <p></p
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}

export default {
  data() {
    return {
      singlesearch: "",
      formData: {
        name: "",
        era: "",
      },
      alphabet: [],
      era: [
        "Late Triassic",
        "Early Jurassic",
        "Mid Jurassic",
        "Late Jurassic",
        "Early Cretaceous",
        "Late Cretaceous",
      ],
    };
  },
  created() {
    this.alphabet = genCharArray("A", "Z");
  },
  mounted() {},
  computed: {
    sortedDinos() {
      return this.$store.getters.dinoSort;
    },
  },
};
</script>

<style></style>
