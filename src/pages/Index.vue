<template>
  <q-page class="flex flex-center">
    <SafaDate
      :align="align"
      :m="m"
      :type="type"
      :value="value"
      :label="label"
      :icon="icon"
      :helper="helper"
      :errorlabel="errorlabel"
      :c="c"
    ></SafaDate>
  </q-page>
</template>

<style></style>

<script>
import SafaDate from "../components/SafaDate";
export default {
  name: "PageIndex",
  components: {
    SafaDate
  },
  data() {
    return {
      align: "right",
      m: "e",
      type: "text",
      value: "ورود اطلاعات",
      label: "نام",
      icon: "today",
      helper: "شما اینجایی",
      errorlabel: " الزامی",
      c: "5"
    };
  }
};
</script>
