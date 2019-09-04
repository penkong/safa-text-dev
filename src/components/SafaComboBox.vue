<template>
  <div class="safa-combo-box row" :style="{minHeigh: height, minWidth: width }">
    <div>
      <!-- :title="selected"
      -->
      <Vselect
        :placeholder="placeholder"
        :options="items"
        :value="selected"
        @input="setSelected"
        :inputId="idOfInput"
        :disabled="read || notEditable"
        class="style-chooser"
        :style="{minWidth: width }"
      >
        <template #search="{attributes, events}">
          <input class="vs__search" :required="!selected" v-bind="attributes" v-on="events" />
        </template>
      </Vselect>
    </div>
    <div class="input-container">
      <q-input
        rounded
        flat
        borderless
        bg-color="blue-1"
        bottom-slots
        :readonly="read"
        :disable="notEditable"
        :id="idOfInput"
        :dense="dense"
        type="number"
        style="max-height: 10px;padding: 0;"
        @input="handleInput($event)"
        lazy-rules
        maxlength="12"
        :input-style="cssProps"
        v-model="inputNum"
        :rules="[
          val => val > 0 && val <= this.lastId,
        ]"
      ></q-input>
      <!-- :rules="[val => val > -1 && val <= this.lastId]" -->
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
</template>

<script>
import uid from "uuid";
import Vselect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  name: "SafaComboBox",
  data() {
    return {
      aligned: null,
      read: null,
      notEditable: null,
      idOfInput: null,
      inputNum: "",
      selected: "",
      lastId: null,
      error: false
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
    helper: {
      type: String,
      default: "تصحیح شود"
    },
    items: {
      type: Array,
      default: function() {
        return [];
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
    const lastId = this.items[this.items.length - 1].id;
    this.$set(this, "lastId", lastId);
    this.$set(this, "inputNum", this.value);
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
  computed: {
    cssProps() {
      if (this.align === "right") {
        return {
          fontSize: "0.80rem"
        };
      } else {
        return {
          float: "left",
          fontSize: "0.80rem"
        };
      }
    }
  },
  methods: {
    helperMethod() {
      this.inputNum > this.lastId && this.inputNum < 0 ? "تصحیح شود" : null;
    },
    handleInput($event) {
      // this.value = parseInt($event);
      // if (this.title === undefined) {
      //   this.title = "سلام";
      // }
      // console.log($event);
      // if (parseInt($event) <= 0 || parseInt($event) >= this.lastId) {
      //   // this.selected = "";
      //   this.title = this.lastId;
      //   this.$set(this, "selected", null);
      //   this.$set(this, "inputNum", null);
      // }
      if ($event.length) {
        this.inputNum = parseInt($event);
        const itemForSelect = this.items.filter(item => item.id === $event);
        this.selected = itemForSelect[0].title;
        this.$emit("inputer", $event);
      } else {
        this.selected = "";
      }
    },
    setSelected(val) {
      if (val) {
        this.selected = val;
        this.inputNum = val.id;
        this.$emit("selectedVal", val);
      } else {
        this.inputNum = null;
        this.selected = null;
      }
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .q-field--dense .q-field__control {
    font-family: Arial, Helvetica, sans-serif;
    color: #0070cc;
    height: 30px !important;
    padding: 0 3px !important;
    font-size: 1rem;
  }

  .q-icon,
  .material-icons {
    // margin-bottom: 0.6rem;
    // margin-left: -0.6rem;
    position: absolute;
    right: 0;
    top: 3px;
    .text-negative {
      background-color: red;
    }
  }
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
    margin-left: 6px;
  }
  .input-container {
    position: relative;
    margin: 0;
    padding: 0;
    margin-left: 5px;
    width: 70px;
    font-family: "Courier New", Courier, monospace;
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
