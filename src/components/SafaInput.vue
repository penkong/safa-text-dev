<template>
  <div>
    <!-- readonly counter -->
    <label v-if="lang" :for="idOfInput" class="left-label">{{ label }}</label>
    <label v-else :for="idOfInput" class="label">{{ label }}</label>
    <q-input
      ref="input"
      autogrow
      lazy-rules
      outlined
      bottom-slots
      standout="bg-lime-1 text-{color}"
      counter
      maxlength="65"
      v-model="text"
      :id="idOfInput"
      :value="values"
      :type="type"
      :input-style="{
        textAlign: right,
        minHeight: '20px',
        height: '25px' ,
        padding: padding,
        display: flex,
        alignItems: center ,
        justifyContent: center
      }"
      :input-class="{ 'my-special-class': true }"
      :color="color"
      :dense="dense"
      :hint="helper"
      :rules="[
        val => !!val  || errorlabel ,
        val => val.length >= 3 || 'حداقل 3 کاراکتر'
      ]"
    >
      <template v-if="lang" v-slot:prepend>
        <q-icon
          v-if="text"
          round
          dense
          flat
          class="cursor-pointer"
          name="cancel"
          icon="cancel"
          @click.stop="text = null"
          @click.prevent="reset"
        />
      </template>
      <template v-else v-slot:append>
        <q-icon
          v-if="text"
          round
          dense
          flat
          class="cursor-pointer"
          name="cancel"
          icon="cancel"
          @click.stop="text = null"
          @click.prevent="reset"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
import uid from "uuid/v4";
export default {
  name: "SafaInput",
  data() {
    return {
      lang: false,
      idOfInput: null,
      text: "",
      dense: true
    };
  },
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
  created() {
    this.$set(this, "text", this.value);
    const generatedId = "Safa" + "_" + uid();
    this.$set(this, "idOfInput", generatedId);
  },
  methods: {
    reset() {
      this.$refs.input.resetValidation();
    }
  },
  watch: {
    idOfInput: "idGenerator"
  }
};
</script>

<style lang='scss'>
@import url("http://cdn.font-store.ir/behdad.css");
* {
  font-family: "behdad", "Courier New", Courier, monospace;
  padding: 0;
  margin: 0;
  position: relative;
}
.left-label {
  position: absolute;
  display: block;
  top: -2rem;
  left: 2px;
}
.label {
  position: absolute;
  display: block;
  top: -2rem;
  right: 2px;
}
.q-field__control .relative-position {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
