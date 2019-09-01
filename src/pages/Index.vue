<template>
  <q-page class="flex flex-center">
    <SafaCheckBox
      :align="align"
      :icon="icon"
      :helper="helper"
      :errorlabel="errorlabel"
      :m="m"
      :c="c"
      :value="value"
      :label="label"
      @checked="checkInfo"
    />
  </q-page>
</template>

<style></style>

<script>
import SafaCheckBox from "../components/SafaCheckBox";
export default {
  name: "PageIndex",
  components: {
    SafaCheckBox
  },
  data() {
    return {
      align: "right",
      m: "e",
      value: "false",
      label: "زمان قرارداد",
      icon: "today",
      helper: "شما اینجایی",
      errorlabel: " الزامی",
      c: "5"
    };
  },
  methods: {
    checkInfo(val) {
      console.log(val);
    }
  }
};
</script>
