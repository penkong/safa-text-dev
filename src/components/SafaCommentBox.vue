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
      <textarea
        :readonly="readOnly"
        :style="{ backgroundColor: activeColor }"
        :rows="rows"
        class="col safa-textcommet"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
    </q-field>
  </div>
</template>

<script>
export default {
  name: "SafaCommentBox",
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
        return 4;
      }
    },
    label: {
      type: String,
      default: function() {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
