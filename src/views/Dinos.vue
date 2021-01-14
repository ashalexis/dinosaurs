<template>
  <div id="dino-directory">
    <v-container>
      <v-row>
        <v-col xs="12" md="4" justify="center" align="center">
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

        <v-col xs="12" md="8">
          <div v-if="!$vuetify.breakpoint.mobile">
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
                :key="`My${row}`"
                no-gutters
                class="directoryRow"
              >
                <v-col
                  v-for="dino in myDinos.slice((row - 1) * 4, row * 4)"
                  :key="dino.name"
                >
                  <v-btn text @click="handleMyClick(dino)">
                    <u>{{ dino.name }}</u>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>

          <div v-else>
            <v-container>
              <h1>All dinosaurs</h1>
              <v-row v-for="dino in sortedDinos" :key="dino.name">
                <v-btn text @click="handleClick(dino)">
                  <u>{{ dino.name }}</u>
                </v-btn>
              </v-row>

              <h1 class="my-dinosaurs">My dinosaurs</h1>
              <v-row v-for="dino in myDinos" :key="dino.name">
                <v-btn text @click="handleMyClick(dino)">
                  <u>{{ dino.name }}</u>
                </v-btn>
              </v-row>
            </v-container>
          </div>
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

    <v-dialog v-model="myDialog" @click:outside="handleMyExit">
      <v-card>
        <v-card-title class="headline lighten-2" :class="titlecolor">{{
          contents.name
        }}</v-card-title>

        <v-card-text class="card-text">
          <div class="information">
            <p><strong>Type of dinosaur:</strong> {{ contents.type }}</p>
            <p><strong>Diet:</strong> {{ contents.diet }}</p>
            <p><strong>When it lived:</strong> {{ contents.period }}</p>
          </div>
        </v-card-text>

        <v-card-actions style="justify-content:center">
          <v-btn
            class="error"
            @click="
              handleDelete(contents.id);
              myDialog = false;
            "
            >Delete</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
//imports
import DinoDialog from "./DinoDialog";
//import MyDinoDialog from "./MyDinoDialog";
import { mapActions } from "vuex";

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
      myDialog: false,
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
        imgsrc: null,
        id: null,
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
    this.getMyDinos();
    if (this.dialog == false) {
      this.$router.push({ query: "" }).catch(() => {});
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
    titlecolor() {
      let diet = this.contents.diet;
      return diet == "herbivorous"
        ? "green"
        : diet == "carnivorous"
        ? "red"
        : "grey";
    },
  },
  methods: {
    ...mapActions(["deleteDino"]),
    handleDelete(id) {
      this.deleteDino(id);
      this.handleMyExit();
    },
    getMyDinos() {
      this.myDinos = this.$store.state.mydinosaurs;
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
    handleMyClick(dino) {
      this.myDialog = true;
      this.contents = dino;
      this.$router.push({ query: { dino: dino.name } });
    },
    handleExit() {
      this.dialog = false;
    },
    handleMyExit() {
      this.myDialog = false;
    },
  },
};
</script>

<style>
.my-dinosaurs {
  margin-top: 2rem;
}

.directoryRow {
  margin: 1rem 0;
}

.card-text {
  margin: 1rem;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.information {
  margin: 1rem;
}
</style>
