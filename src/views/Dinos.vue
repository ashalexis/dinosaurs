<template>
  <div id="dinos">
    <h1>Dinos!</h1>
    <div id="table">
      <DinoTable :dinos="dinosaurs" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DinoTable from "@/components/DinoTable.vue";

export default {
  components: {
    DinoTable,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["dinosaurs"]),
  },
};
</script>

<style>
#table {
  display: flex;
  justify-content: center;
}
</style>
