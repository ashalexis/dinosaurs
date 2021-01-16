<template>
  <div class="home">
    <v-container id="home">
      <v-row justify="center" align="center">
        <v-col justify="center" align="center" xs="12">
          <h1 id="emoji">🦕</h1>
        </v-col>
      </v-row>

      <v-row justify="center" align="center">
        <v-col justify="center" align="center" xs="12">
          <vue-typed-js
            class="typing"
            :strings="[
              'dinosaur',
              '恐龙',
              'dinosaurus',
              'δεινόσαυρος',
              'Dinosaurier',
              '恐竜',
              '공룡',
              'dinossauro',
              'dinosaurio',
              'ไดโนเสาร์',
              'giống khủng long',
            ]"
            :typeSpeed="100"
            :backSpeed="100"
            :loop="true"
            :backDelay="500"
            :shuffle="true"
            :smartBackspace="false"
          >
            <h1 class="typing"></h1>
          </vue-typed-js>
        </v-col>
      </v-row>

      <v-row justify="center" align="center">
        <v-col justify="center" align="center" xs="12">
          <p id="description">
            A fossil reptile of the Mesozoic era, in many species reaching an
            enormous size.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style>
.home {
  margin: 2rem;
}
.typing {
  height: 50px;
  justify-content: center;
}
</style>
