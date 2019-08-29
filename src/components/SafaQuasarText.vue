<template>
  <div>
    <q-input
      square
      outlined
      bottom-slots
      v-model="text"
      :id="idOfInput"
      :type="type"
      :label="label"
      :color="color"
      counter
      maxlength="65"
      :dense="dense"
    >
      <template v-if="lang" v-slot:before>
        <q-icon :name="icon" />
      </template>
      <template v-else v-slot:after>
        <q-btn round dense flat :icon="icon" />
      </template>
    </q-input>
  </div>
</template>

<script>
import uid from "uuid/v4";
export default {
  name: "SafaQuasarText",
  props: {
    m: {
      // read write
      type: String,
      validator: v => ["r", "e", "ne"].includes(v),
      default: "r"
    },
    type: {
      type: String,
      default: "text",
      required: true
    },
    value: { type: String, default: "" },
    label: { default: "", type: String },
    placeholder: {
      type: String,
      default: ""
    },
    // rahnameee
    helper: { type: String, default: "شما اینجایی" },
    errorlabel: { type: String, default: "تصحیح شود" },
    padding: {
      type: Number,
      default: 7
    },
    iconsize: { type: String, default: "24px" },
    icon: { type: String, default: "add" },
    color: {
      type: String,
      default: "blue"
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
    }
  },
  data() {
    return {
      lang: false,
      idOfInput: null,
      text: "",
      ph: "",
      dense: false
    };
  },
  methods: {
    idGenerator() {
      const generatedId = "S" + "_" + uid();
      // const generatedId = this.$route.targetUid;
      return this.$set(this.data, "idOfInput", generatedId);
    }
  },
  watch: {
    idOfInput: "idGenerator"
  }
};
</script>

<style>
</style>
