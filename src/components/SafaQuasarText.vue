<template>
  <div>
    <!-- readonly counter -->

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
      :input-style="{ padding: padding + 'px' , textAlign: center , marginTop: padding/2 + 'px' }"
      :input-class="{ 'my-special-class': true }"
      :id="idOfInput"
      :type="type"
      :color="color"
      :dense="dense"
      :hint="helper"
      :rules="[
        val => !!val  || errorlabel ,
        val => val.length >= 3 || 'حداقل 3 کاراکتر'
      ]"
    >
      <!-- <template v-slot:error>Please use maximum 3 characters.</template> -->
      <template v-slot:after>
        <q-btn
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
// import uid from "uuid/v4";
// const generatedId = "S" + "_" + uid();
export default {
  name: "SafaQuasarText",
  data() {
    return {
      lang: false,
      idOfInput: null,
      text: "",
      ph: "",
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
.q-field__control-container > textarea {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
