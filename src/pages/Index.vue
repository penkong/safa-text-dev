<template>
  <q-page class="flex flex-center">
    <SafaQuasarText
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
import SafaQuasarText from "../components/SafaQuasarText";
export default {
  name: "PageIndex",
  components: {
    SafaQuasarText
  },
  data() {
    return {
      m: "r",
      type: "text",
      value: "",
      label: "نام",
      placeholder: "ورود اطلاعات",
      helper: "شما اینجایی",
      errorlabel: "تصحیح شود",
      padding: 3,
      iconsize: "24px",
      icon: "event",
      color: "brown",
      c: "5"
    };
  }
};
</script>
