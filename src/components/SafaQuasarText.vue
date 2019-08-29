<template>
  <div>
    <q-input :id="id" square outlined v-model="text" label="Square outlined">
      <template v-if="lang" v-slot:append>
        <q-icon name="place" />
      </template>
      <template v-else v-slot:prepend>
        <q-icon name="favorite" />
      </template>
      <!-- <template v-slot:hint>Field hint</template> -->
    </q-input>
  </div>
</template>

<script>
import uid from "uuid/v4";
export default {
  name: "SafaQuasarText",
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
    placeholder: {
      type: String,
      default: ""
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
  },
  data() {
    return {
      lang: true,
      idOfInput: null
    };
  },
  computed() {
    const generatedId = "S" + "_" + this.uid();

    this.$set(this, "idOfInput", this.idOfInput);
  }
};
</script>

<style>
</style>
