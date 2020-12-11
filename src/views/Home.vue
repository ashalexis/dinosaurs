<template>
  <div class="home">
    <h1 id="emoji">🦕</h1>
    <div id="dinosaur">
      <vue-typed-js
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
    </div>
    <p id="description">
      A fossil reptile of the Mesozoic era, in many species reaching an enormous
      size.
    </p>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#emoji {
  font-size: 60px;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 15vh;
}

#dinosaur {
  position: absolute;
  top: 30vh;
}

#description {
  position: absolute;
  top: 40vh;
}
</style>
