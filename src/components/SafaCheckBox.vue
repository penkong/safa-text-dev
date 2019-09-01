<template>
  <div class="row relative-position" style="padding:7px;">
    <q-field
      :icon="icon"
      :label-width="c"
      class="col"
      :label="label"
      :helper="helper"
      :error-label="errorlabel"
    >
      <q-checkbox v-if="readOnly" :id="id" v-model="value" disable />
      <q-checkbox v-else :id="id" v-model="value" v-on:input="$emit('input', $event)" />
    </q-field>
  </div>
</template>

<script>
import uid from "uuid/v4";
export default {
  name: "SafaCheckBox",
  props: {
    icon: { type: String },
    helper: { type: String },
    errorlabel: { type: String },
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
    id: { default: "" }
  },
  data() {
    return {
      idOfInput: null,
      read: null,
      notEditable: null
    };
  },
  created() {
    const generatedId = "Safa" + "_" + uid();
    this.$set(this, "idOfInput", generatedId);
    switch (this.m) {
      case "r":
        return this.$set(this, "read", true);
      case "ne":
        return this.$set(this, "notEditable", true);
      default:
        return;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
