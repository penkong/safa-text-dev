<template>
  <q-page class="flex flex-center">
    <SafaCheckBox
      :align="align"
      :icon="icon"
      :helper="helper"
      :m="m"
      :c="c"
      :value="value"
      :label="label"
      @checked="checkInfo"
    />
  </q-page>
</template>

<script>
import SafaCheckBox from "../components/SafaCheckBox/SafaCheckBox";
export default {
  name: "PageIndex",
  components: {
    SafaCheckBox
  },
  data() {
    return {
      align: "left",
      m: "e",
      value: "true",
      label: "سلام",
      icon: "warning",
      helper: "شما اینجایی",
      errorlabel: " الزامی",
      c: "4"
    };
  },
  methods: {
    checkInfo(val) {
      console.log(val);
    }
  }
};
</script>
