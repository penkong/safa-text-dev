<template>
  <div class="safa-commentrow relative-position" style="padding:7px;">
    <div class="label-container">
      <label v-if="aligned" :for="idOfInput" class="label" :style="{ right: -c + 'rem'}">{{ label }}</label>
      <label v-else :for="idOfInput" class="left-label" :style="{ left: -c + 'rem'}">{{ label }}</label>
    </div>
    <div class="input-container">
      <q-input
        :readonly="read"
        :disable="notEditable"
        :id="idOfInput"
        ref="input"
        autogrow
        lazy-rules
        outlined
        bottom-slots
        standout="bg-lime-1"
        counter
        maxlength="1200"
        v-model="text"
        :value="value"
        :placeholder="placeholder"
        type="textarea"
        :input-style="cssProps"
      ></q-input>
    </div>
  </div>
</template>

<script>
import uid from "uuid/v4";
export default {
  name: "SafaCommentBox",
  data() {
    return {
      read: null,
      notEditable: null,
      aligned: null,
      text: "",
      dense: true,
      idOfInput: null
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "سیب"
    },
    align: {
      type: String,
      validator: v => ["right", "left"].includes(v),
      default: function() {
        return "right";
      }
    },
    height: {
      type: String,
      default: "200px"
    },
    width: {
      type: String,
      default: "200px"
    },
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
      default: "4"
    },
    value: {
      type: String,
      default: function() {
        return "";
      }
    },
    rows: {
      type: Number,
      default: function() {
        return 6;
      }
    },
    label: {
      type: String,
      default: function() {
        return "";
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
  computed: {
    cssProps() {
      if (this.align === "right") {
        return {
          textAlign: "right",
          minHeight: this.height,
          minWidth: this.width,
          padding: "padding",
          fontSize: "0.85rem",
          fontFamily: '"behdad", "Courier New", Courier, monospace'
        };
      } else {
        return {
          textAlign: "left",
          minHeight: this.height,
          minWidth: this.width,
          padding: "padding",
          fontSize: "0.85rem",
          fontFamily: '"behdad", "Courier New", Courier, monospace'
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("http://cdn.font-store.ir/behdad.css");
.safa-comment {
  padding: 0;
  margin: 0;
  font-family: "behdad", "Courier New", Courier, monospace;
  margin: 0;
  .label-container {
    position: relative;
    & .label {
      position: absolute;
      padding: 0 4px;
      bottom: -2rem;
    }
    & .left-label {
      position: absolute;
      padding: 0 4px;
      bottom: -2rem;
    }
  }
  .input-container {
    .label-aligned {
      text-align: right;
    }
    .q-field__control .relative-position {
      padding: 0 px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
