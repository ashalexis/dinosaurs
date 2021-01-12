<template>
  <div id="dino-directory">
    <v-container>
      <v-row>
        <v-col sm="12" md="4">
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

        <v-col sm="12" md="8">
          <h1 style="margin-left: 2rem;">All dinosaurs</h1>
          <v-container>
            <v-row
              v-for="row in rowCount"
              :key="row"
              no-gutters
              class="directoryRow"
            >
              <v-col
                v-for="dino in sortedDinos.slice((row - 1) * 4, row * 4)"
                :key="dino.name"
              >
                <v-btn text v-bind="attrs" v-on="on" @click="handleClick(dino)">
                  <u>{{ dino.name }}</u>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" @click:outside="handleExit">
      <DinoDialog
        :name="contents.name"
        :period="contents.period"
        :type="contents.type"
        :diet="contents.diet"
      />
    </v-dialog>
  </div>
</template>

<script>
//imports
import DinoDialog from "./DinoDialog";

//functions
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
  components: {
    DinoDialog,
  },
  data() {
    return {
      dialog: false,
      singlesearch: "",
      formData: {
        name: "",
        era: "",
      },
      contents: {
        name: "",
        period: "",
        type: "",
        diet: "",
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
  updated() {
    if (this.dialog == false) {
      this.$router.push({ query: "" });
    }
  },
  mounted() {
    let dino = this.$route.query.dino;
    let chosen = this.sortedDinos.filter(e => e.name == dino);
    if (dino) {
      this.dialog = true;
      this.contents = chosen[0];
    }
  },
  computed: {
    sortedDinos() {
      return this.$store.getters.dinoSort;
    },
    rowCount() {
      return Math.floor((this.sortedDinos.length - 1) / 4) + 1;
    },
  },
  methods: {
    handleClick(dino) {
      this.dialog = true;
      this.contents = dino;
      this.$router.push({ query: { dino: dino.name } });
    },
    handleExit() {
      this.dialog = false;
    },
  },
};
</script>

<style>
.directoryRow {
  margin: 1rem 0;
}
</style>
