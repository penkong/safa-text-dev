<template>
  <q-page class="flex flex-center">
    <SafaCommentBox :m="m" :c="c" :value="value" :rows="rows" :label="label" :dense="dense" />
  </q-page>
</template>

<style></style>

<script>
import SafaCommentBox from "../components/SafaCommentBox";
export default {
  name: "PageIndex",
  components: {
    SafaCommentBox
  },
  data() {
    return {
      m: "e",
      c: "12",
      value: "false",
      rows: "10",
      label: "زمان قرارداد",
      dense: true
    };
  },
  methods: {
    checkInfo(val) {
      console.log(val);
    }
  }
};
</script>
