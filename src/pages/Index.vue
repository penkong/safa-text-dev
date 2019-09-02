<template>
  <q-page class="flex flex-center">
    <SafaCommentBox
      :align="align"
      :height="height"
      :width="width"
      :m="m"
      :c="c"
      :value="value"
      :rows="rows"
      :label="label"
      :dense="dense"
      :placeholder="placeholder"
    />
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
      align: "right",
      width: "200px",
      height: "200px",
      m: "e",
      c: "8",
      placeholder: "",
      value: "بنویسید",
      rows: 10,
      label: " نظرات",
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
