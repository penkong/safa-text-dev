<template>
  <div class="safa-input" :style="{width: `${widthOfRow}rem`}">
    <!-- readonly counter -->
    <div v-if="!aligned" class="label-container">
      <label :for="idOfInput" class="left-label" :style="{ marginLeft: -c + 'rem'}">{{ label }}</label>
    </div>
    <div class="input-container" :style="{width: `${widthOfInput}rem`}">
      <q-input
        rounded
        flat
        borderless
        :bg-color="colored"
        :readonly="read"
        :disable="notEditable"
        :id="idOfInput"
        :dense="dense"
        style="max-height: 10px;padding: 0;"
        @input="handleInput($event)"
        ref="input"
        lazy-rules
        counter
        :maxlength="maxLength"
        v-model="text"
        :value="value"
        :placeholder="placeholder"
        :type="type"
        :input-class="{ 'label-aligned': aligned }"
        :hint="helper"
        :rules="[
        val => !!val  || errorlabel ,
        val => val.length >= `${minChar}` || 'حداقل 3 کاراکتر'
        ]"
      >
        <template v-if="aligned" v-slot:prepend>
          <q-icon
            v-if="text && !read && !notEditable"
            round
            dense
            flat
            name="cancel"
            icon="cancel"
            style=" left: 10px; position: absolute;
    top: 3px;"
            @click.stop="text = null"
            @click.prevent="reset"
          />
        </template>
        <template v-else v-slot:append>
          <q-icon
            v-if="text && !read && !notEditable"
            round
            dense
            flat
            style=" right: 5px;
    top: 0px;"
            name="cancel"
            icon="cancel"
            @click.stop="text = null"
            @click.prevent="reset"
          />
        </template>
      </q-input>
    </div>
    <div v-if="aligned" class="label-container">
      <label :for="idOfInput" class="label" :style="{ right: -c + 'rem'}">{{ label }}</label>
    </div>
  </div>
</template>

<script>
import uid from "uuid/v4";
export default {
  name: "SafaInput",
  data() {
    return {
      read: null,
      notEditable: null,
      aligned: null,
      idOfInput: null,
      text: "",
      dense: true,
      values: true
    };
  },
  props: {
    align: {
      type: String,
      required: true,
      default: "right",
      validator: v => ["right", "left"].includes(v)
    },
    minChar: {
      type: Number
    },
    m: {
      // read write
      type: String,
      validator: v => ["r", "e", "ne"].includes(v),
      default: "e"
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
    maxLength: {
      type: Number
    },
    // rahnameee
    helper: { type: String, default: "شما اینجایی" },
    errorlabel: { type: String, default: "تصحیح شود" },
    padding: {
      type: Number,
      default: 7
    },
    widthOfRow: {
      type: Number
    },
    widthOfInput: {
      type: Number
    },
    iconsize: { type: String, default: "24px" },
    icon: { type: String, default: "add" },
    colored: {
      type: String,
      default: "amber-1"
    },
    c: {
      // label
      type: String,
      required: true,
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
    this.align === "right"
      ? this.$set(this, "aligned", true)
      : this.$set(this, "aligned", false);
    switch (this.m) {
      case "r":
        return this.$set(this, "read", true);
      case "ne":
        return this.$set(this, "notEditable", true);
      default:
        return;
    }
  },
  methods: {
    reset() {
      this.$refs.input.resetValidation();
    },
    handleInput($event) {
      this.$emit("inputer", $event);
    }
  }
};
</script>

<style lang='scss'>
@import url("http://cdn.font-store.ir/behdad.css");
.safa-input {
  font-family: "behdad", "Courier New", Courier, monospace;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .label-container {
    & .label {
      padding: 0 10px;
      bottom: -1.35rem;
    }
    & .left-label {
      padding: 0 4px;
      margin: 0;
      bottom: -1.35rem;
    }
  }
  .q-field--dense .q-field__control {
    height: 30px !important;
    padding: 0 3px !important;
    font-size: 0.8rem;
  }
  .q-field__inner {
    min-width: 3.5rem;
  }

  .q-icon,
  .material-icons {
    margin-bottom: 0.6rem;
    margin-left: -0.6rem;
    position: absolute;
    cursor: pointer;
    left: 10px;
    top: 3px;
  }
  .input-container {
    margin: 0;
    padding: 5px;
    .label-aligned {
      text-align: right;
    }
    // .q-field__control .relative-position {
    //   padding: 0 px;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;

    // }
    .q-field__bottom,
    .q-field__bottom--animated div {
      margin-top: 0.2rem;
    }
  }
}
</style>
