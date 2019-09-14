<template>
  <div class="safa-input" style="margin-top: 5rem;">
    <!-- readonly counter -->
    <div class="label-container">
      <label v-if="aligned" :for="idOfInput" class="label" :style="{ right: -c + 'rem'}">{{ label }}</label>
      <label v-else :for="idOfInput" class="left-label" :style="{ left: -c + 'rem'}">{{ label }}</label>
    </div>
    <div class="input-container">
      <!-- standout="bg-lime-1 text-{color}" -->
      <q-input
        rounded
        flat
        borderless
        :bg-color="colored"
        bottom-slots
        :readonly="read"
        :disable="notEditable"
        :id="idOfInput"
        :dense="dense"
        style="max-height: 10px;padding: 0;"
        @input="handleInput($event)"
        ref="input"
        lazy-rules
        counter
        maxlength="65"
        v-model="text"
        :value="value"
        :placeholder="placeholder"
        :type="type"
        :input-class="{ 'label-aligned': aligned }"
        :hint="helper"
        :rules="[
        val => !!val  || errorlabel ,
        val => val.length >= 3 || 'حداقل 3 کاراکتر'
      ]"
      >
        <template v-if="aligned" v-slot:prepend>
          <q-icon
            v-if="text && !read && !notEditable"
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
            v-if="text && !read && !notEditable"
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
    // rahnameee
    helper: { type: String, default: "شما اینجایی" },
    errorlabel: { type: String, default: "تصحیح شود" },
    padding: {
      type: Number,
      default: 7
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
  padding: 0;
  margin: 0;
  width: auto;
  position: relative;
  // font-size: 0.8rem;
  .label-container {
    position: relative;
    & .label {
      position: absolute;
      padding: 0 10px;
      bottom: -1.35rem;
    }
    & .left-label {
      position: absolute;
      padding: 0 4px;
      bottom: -1.35rem;
    }
  }
  .q-field--dense .q-field__control {
    height: 30px !important;
    padding: 0 3px !important;
    font-size: 1rem;
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
    left: 12px;
    top: 4px;
    .text-negative {
      background-color: red;
    }
  }
  .input-container {
    position: relative;
    margin: 0 auto;
    padding: 5px;
    margin-left: 10px;
    .label-aligned {
      text-align: right;
    }
    .q-field__control .relative-position {
      padding: 0 px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .q-field__bottom,
    .q-field__bottom--animated div {
      margin-top: 0.2rem;
    }
  }
}
// .safa-input {
//   font-family: "behdad", "Courier New", Courier, monospace;
//   padding: 0;
//   margin: 0;
//   width: auto;
//   position: relative;
//   // font-size: 0.8rem;
//   .label-container {
//     position: relative;
//     & .label {
//       position: absolute;
//       padding: 0 10px;
//       bottom: -1.35rem;
//     }
//     & .left-label {
//       position: absolute;
//       padding: 0 4px;
//       bottom: -1.35rem;
//     }
//   }
//   .q-field--dense .q-field__control {
//     height: 30px !important;
//     padding: 0 3px !important;
//     font-size: 1rem;
//   }
//   .q-field__inner {
//     min-width: 3.5rem;
//   }

//   .q-icon,
//   .material-icons {
//     margin-bottom: 0.6rem;
//     margin-left: -0.6rem;
//     position: absolute;
//     left: 0;
//     top: 4px;
//     .text-negative {
//       background-color: red;
//     }
//   }
//   .input-container {
//     position: relative;
//     margin: 0 auto;
//     padding: 5px;
//     margin-left: 10px;
//     .label-aligned {
//       text-align: right;
//     }
//     .q-field__control .relative-position {
//       padding: 0 px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//   }
// }
</style>
