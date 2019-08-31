<template>
  <div class="safa-data">
    <!-- <q-icon
      round
      dense
      flat
      name="today"
      class="text-orange cursor-pointer row"
      style="font-size: 2em;"
      @click.prevent
    >
      <date-picker></date-picker>
    </q-icon>
    <div class="row">
      <q-btn
        no-caps
        name="today"
        icon-right="today"
        class="cursor-pointer"
        color="teal-8"
        size="0.8rem"
      >
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-color v-model="colorFace" />
        </q-popup-proxy>
      </q-btn>
    -->
    <q-btn
      round
      dense
      size="0.8rem"
      :loading="loadingGear"
      @click.prevent="simulateProgress"
      color="light-blue-13"
      text-color="white"
      icon="today"
    >
      <template v-slot:loading>
        <q-spinner-gears />
      </template>
    </q-btn>
  </div>
</template>

<script>
// import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import uid from "uuid/v4";
export default {
  name: "SafaDate",
  components: {
    // DatePicker: VuePersianDatetimePicker
  },
  data() {
    return {
      loadingGear: false,
      idOfInput: null,
      date: "1397/02/02",
      colorFace: "#B33636",
      model: "one",
      secondModel: "one"
    };
  },
  props: {
    icon: { type: String },
    helper: { type: String },
    errorlabel: { type: String },
    type: {
      type: String,
      default: "text"
    },
    m: {
      type: String,
      validator: v => ["r", "e", "ne"].includes(v),
      default: "r"
    },
    c: {
      type: String,
      validator: v =>
        [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "auto"
        ].includes(v),
      default: "4"
    },
    value: { type: String },
    label: { default: "none", type: String },
    id: {
      default: function() {
        return "S" + "_" + this._uid;
      }
    }
  },
  created() {
    const generatedId = "Safa" + "_" + uid();
    this.$set(this, "idOfInput", generatedId);
  },
  methods: {
    simulateProgress() {
      // we set loading state
      this.loadingGear = true;
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this.loadingGear = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.safa-data {
}
</style>
