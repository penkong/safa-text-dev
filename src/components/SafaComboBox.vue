<template>
  <div>
    <div class="row relative-position" style="padding:7px;">
      <!-- <label v-if="label !=='none'" :class="[`col-md-${c}`,'col-xs-12' ,'safa-label']">{{label}}</label> -->
      <input
        v-if="!HideValue"
        :readonly="readOnly"
        :style="{ backgroundColor: 'red' }"
        class="safa-Combo safa-text-combo"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
      <select
        v-if="readOnly"
        disabled
        :style="{ backgroundColor: activeColor }"
        class="safa-Combo col"
        v-model="selected"
        @change="OnSelected($event.target.value)"
      >
        <option v-for="(item, index) in ci" :key="index" v-bind:value="item.Id">
          <label style="margin:2px;fontsize:12px;">{{item.Title}}</label>
        </option>
      </select>
      <select
        v-else
        :style="{ backgroundColor: activeColor }"
        class="safa-Combo col"
        v-model="selected"
        @change="OnSelected($event.target.value)"
      >
        <option v-for="(item, index) in ci" :key="index" v-bind:value="item.Id">
          <label style="margin:2px;fontsize:12px;">{{item.Title}}</label>
        </option>
      </select>
    </div>
    <dropdown :options="arrayOfObjects" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown>
  </div>
</template>

<script>
import dropdown from "vue-dropdowns";
export default {
  name: "SafaDropDown",
  data() {
    return {
      arrayOfObjects: [1, 2, 4, 5],
      object: {
        name: "Object Name"
      }
    };
  },

  components: {
    dropdown: dropdown
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
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
