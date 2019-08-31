<template>
  <q-page class="flex flex-center">
    <SafaInput
      :m="m"
      :type="type"
      :value="value"
      :label="label"
      :placeholder="placeholder"
      :helper="helper"
      :errorlabel="errorlabel"
      :padding="padding"
      :iconsize="iconsize"
      :icon="icon"
      :color="color"
      :c="c"
    />
  </q-page>
</template>

<style></style>

<script>
import SafaInput from "../components/SafaInput";
export default {
  name: "PageIndex",
  components: {
    SafaInput
  },
  data() {
    return {
      m: "r",
      id: "43434",
      type: "text",
      value: "",
      label: "نام",
      placeholder: "ورود اطلاعات",
      helper: "شما اینجایی",
      errorlabel: " الزامی",
      padding: 5,
      iconsize: "24px",
      icon: "event",
      color: "blue",
      c: "5"
    };
  }
};
</script>
