<template>
  <div>
    <div
      class="row relative-position"
      :style="{minHeigh: height, marginTop: '10px' }"
      style=" display: flex;
        align-items: center ;
        justify-content: center;"
    >
      <Vselect :style="{minWidth: width }" :options="items"></Vselect>
      <div
        class="sls"
        style="
        margin: 0;
        padding: 0;
        margin-left: 5px;
        width: 60px;"
      >
        <q-input
          :readonly="read"
          :disable="notEditable"
          :id="idOfInput"
          :value="value"
          dense="false"
          v-model.number="model"
          type="text"
          filled
          style="max-height: 10px"
          outlined
          @input="handleInput($event)"
          lazy-rules
          v-model="text"
        ></q-input>
      </div>
    </div>
  </div>
</template>

<script>
import Vselect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  name: "SafaComboBox",
  data() {
    return {};
  },

  components: {
    Vselect
  },
  props: {
    m: {
      type: String,
      validator: v => ["r", "e", "ne"].includes(v),
      default: function() {
        return "r";
      }
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
      default: function() {
        return "4";
      }
    },
    align: {
      type: String,
      default: "right",
      validator: v => ["right", "left"].includes(v)
    },
    height: {
      type: String,
      default: "200px",
      required: true
    },
    width: {
      type: String,
      default: "200px",
      required: true
    },
    value: {
      type: String
    },
    label: {
      type: String,
      default: function() {
        return "none";
      }
    },
    dense: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    items: {
      type: Array,
      default: function() {
        return [{ label: "Canada", code: "ca" }, { label: "Iran", code: "ir" }];
      }
    },
    // come from db => go to serveice
    DtoName: {
      type: String,
      default: function() {
        return "";
      }
    },
    // data provider =? go to serveice sql mongo post gress
    Domain: {
      type: String,
      default: function() {
        return "";
      }
    },
    HideValue: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  methods: {
    handleInput($event) {
      this.$emit("inputer", $event);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
