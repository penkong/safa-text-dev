<template>
  <div class="row relative-position" style="padding:7px;">
    <div v-if="aligned" class="q-gutter-sm">
      <q-checkbox
        :disable="read || notEditable"
        left-label
        v-model="dataVal"
        :label="label"
        true-value="yes"
        false-value="no"
        @input="handleInput($event)"
        color="blue-grey-9"
      />
    </div>
    <div v-else class="q-gutter-sm">
      <q-checkbox
        :disable="read || notEditable"
        v-model="dataVal"
        :label="label"
        true-value="yes"
        false-value="no"
        @input="handleInput($event)"
        color="blue-grey-9"
      />
    </div>
  </div>
</template>

<script>
import uid from "uuid/v4";
export default {
  name: "SafaCheckBox",
  data() {
    return {
      idOfInput: null,
      aligned: null,
      read: null,
      notEditable: null,
      dataVal: ""
    };
  },
  props: {
    align: {
      type: String,
      required: true,
      default: "right",
      validator: v => ["right", "left"].includes(v)
    },
    m: {
      type: String,
      validator: v => ["r", "e", "ne"].includes(v),
      default: "r"
    },
    value: {
      type: String,
      validator: v => ["true", "false"].includes(v),
      default: "false"
    },
    label: { default: "گزینه", type: String },
    icon: {
      type: String,
      default: "today",
      required: true
    },
    helper: { type: String, default: "شما اینجایی" },
    errorlabel: { type: String, default: "تصحیح شود" },
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
    }
  },

  created() {
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
    handleInput($event) {
      this.$emit("checked", $event);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
