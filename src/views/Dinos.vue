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
            @click:append="handleSearch"
            @keydown.enter="handleSearch"
          ></v-text-field>
          <v-btn class="primary" to="/create">Add my own dinosaur!</v-btn>
        </v-col>

        <v-col sm="12" md="8">
          <v-container>
            <h1 style="margin-left: 1rem;">All dinosaurs</h1>
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
                <v-btn text @click="handleClick(dino)">
                  <u>{{ dino.name }}</u>
                </v-btn>
              </v-col>
            </v-row>

            <h1 style="margin-left: 1rem; color: #158078">My dinosaurs</h1>
            <v-row
              v-for="row in rowCount"
              :key="row"
              no-gutters
              class="directoryRow"
            >
              <v-col
                v-for="dino in myDinos.slice((row - 1) * 4, row * 4)"
                :key="dino.name"
              >
                <v-btn text @click="handleClick(dino)">
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
        :imgsrc="contents.imgsrc"
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
  inject: ["notyf"],
  components: {
    DinoDialog,
  },
  data() {
    return {
      dialog: false,
      myDinos: [],
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
        imgsrc: "",
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
    this.getMyDinos();
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
    getMyDinos() {
      if (localStorage.getItem("mydinos")) {
        this.myDinos = JSON.parse(localStorage.getItem("mydinos"));
      }
    },
    handleSearch() {
      let dino = this.sortedDinos.filter(
        e => e.name.toLowerCase() == this.singlesearch.toLowerCase()
      );
      if (dino.length !== 0) {
        console.log(dino);
        this.dialog = true;
        this.contents = dino[0];
        this.$router.push({ query: { dino: dino.name } });
      } else {
        this.notyf.error("This dinosaur doesn't exist!");
      }
    },
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
