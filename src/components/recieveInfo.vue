<template>
  <div>
    <input type="text" />
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
// import uidd fdfri

export default {
  name: "SafaText",
  data() {
    return {
      id: function() {
        return "S" + "_" + this.uid();
      }
    };
  },
  props: {
    padding: {
      type: Number,
      default: 7
    },
    iconsize: { type: String, default: "24px" },
    icon: { type: String, default: "none" },
    color: {
      type: String,
      default: "white"
    },
    // rahnameee
    helper: { type: String, default: "شما اینجایی" },

    errorlabel: { type: String, default: "تصحیح شود" },

    type: {
      type: String,
      default: "text",
      required: true
    },
    m: {
      // read write
      type: String,
      validator: v => ["r", "e", "ne"].includes(v),
      default: "r"
    },
    c: {
      // label
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
    label: { default: "", type: String }
  }
};
</script>

<style lang="scss" scoped>
</style>
