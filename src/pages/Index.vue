<template>
  <q-page class="flex flex-center">
    <SafaDate></SafaDate>
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
      icon: "today",
      helper: "شما اینجایی",
      errorlabel: " الزامی",
      type: "text",
      m: "e",
      c: "5",
      value: "ورود اطلاعات",
      label: "نام",
      id: {
        default: function() {
          return "S" + "_" + this._uid;
        }
      }
    };
  }
};
</script>
