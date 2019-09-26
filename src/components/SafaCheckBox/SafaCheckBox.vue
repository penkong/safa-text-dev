<template>
  <div v-if="aligned" class="righted">
    <label :for="label">{{ label }}</label>
    <input
      class="checkbox"
      type="checkbox"
      :disabled="read || notEditable"
      :checked="value"
      :name="label"
      :value="value"
      v-model="dataVal"
      @input="handleInput($event)"
    />
  </div>
  <div class="lefted" v-else>
    <input
      type="checkbox"
      :disabled="read || notEditable"
      :checked="value"
      :name="label"
      :value="value"
      @input="handleInput($event)"
    />
    <label :for="label">{{ label }}</label>
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
    color: {
      type: String,
      default: "light-blue-10"
    },
    dense: {
      type: Boolean,
      default: false
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
@import url("http://cdn.font-store.ir/behdad.css");

.righted {
  font-family: "behdad", "Courier New", "Courier", "monospace";
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  label {
    margin-right: 0.4rem;
    // background-color: red;
    padding: 1px;
  }
}
.lefted {
  font-family: "behdad", "Courier New", "Courier", "monospace";
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  label {
    margin-left: 0.4rem;
    // background-color: red;
    padding: 1px;
  }
}
input[type="checkbox"] {
  position: relative;
  cursor: pointer;
}
input[type="checkbox"]:before {
  content: "";
  display: block;
  position: absolute;
  width: 0.8rem;
  height: 0.8rem;
  top: 0;
  left: 0;
  border: 1px solid #003668;
  border-radius: 3px;
  background-color: white;
}
input[type="checkbox"]:checked:after {
  content: "";
  display: block;
  width: 5px;
  height: 12px;
  border: solid #003668;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: -1px;
  left: 5px;
}
</style>
