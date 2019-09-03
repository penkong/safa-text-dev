<template>
  <div class="safa-combo-box">
    <div
      class="row"
      :style="{minHeigh: height, marginTop: '10px', minWidth: width }"
      style=" display: flex;
        align-items: center ;
        justify-content: center;"
    >
      <Vselect
        class="style-chooser"
        :placeholder="placeholder"
        :style="{minWidth: width }"
        :options="items"
      ></Vselect>
      <div
        style="
        margin: 0;
        padding: 0;
        margin-left: 5px;
        width: 70px;"
      >
        <q-input
          :readonly="read"
          :disable="notEditable"
          :id="idOfInput"
          :value="value"
          dense="true"
          v-model.number="model"
          type="number"
          style="max-height: 10px;padding: 0;"
          outlined
          standout="bg-lime-1 text-blue"
          @input="handleInput($event)"
          lazy-rules
          maxlength="6"
          v-model="text"
          debounce="300"
        ></q-input>
      </div>
      <label
        v-if="aligned"
        :for="idOfInput"
        class="label-container label"
        :style="{right: -c + 'rem'}"
      >{{ label }}</label>
      <label
        v-else
        :for="idOfInput"
        class="label-container left-label"
        :style="{ left: -c + 'rem'}"
      >{{ label }}</label>
    </div>
  </div>
</template>

<script>
import uid from "uuid";
import Vselect from "vue-select";
import "vue-select/dist/vue-select.css";
// Vselect.props.components.default = () => ({
//   Deselect: {
//     render: h => h("span", "❌")
//   },
//   OpenIndicator: {
//     render: h => h("span", "🔽")
//   }
// });
export default {
  name: "SafaComboBox",
  data() {
    return {
      text: "",
      read: null,
      notEditable: null,
      aligned: null
    };
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
        return [
          { label: "کانادا", code: "ca" },
          { label: "ایران", code: "ir" }
        ];
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
    handleInput($event) {
      this.$emit("inputer", $event);
    },
    rule() {
      let pattern = "[0-9]{10}";
      return pattern.includes;
    }
  }
};
</script>
<style lang="scss" >
@import url("http://cdn.font-store.ir/behdad.css");

// ////////////////////////
.safa-combo-box {
  font-family: "behdad", "Courier New", Courier, monospace;
  padding: 0;
  margin: 0;
  width: auto;
  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: "lime-1";
    border: none;
    color: #0070cc;
    direction: rtl;
    text-align: right;
  }
  .style-chooser .vs__dropdown-toggle {
    margin: 0 4px;
  }
  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #0070cc;
    color: red;
    margin-left: 6px;
  }
  .label-container {
    position: relative;
    & .label {
      position: absolute;
      padding: 0 4px;
      bottom: -2.4rem;
      margin-left: 1rem;
    }
    & .left-label {
      position: absolute;
      padding: 0 4px;
      bottom: -2.4rem;
    }
  }
}
</style>
