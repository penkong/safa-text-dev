<template>
  <q-page class="flex flex-center">
    <SafaQuasarText />
    <!-- <SafaText :type="type" :placeholder="placeholder" :label="label" :padding="padding" /> -->
  </q-page>
</template>

<style></style>

<script>
// import SafaText from "../components/SafaText";
import SafaQuasarText from "../components/SafaQuasarText";
export default {
  name: "PageIndex",
  components: {
    SafaQuasarText
  },
  data() {
    return {
      padding: 3,
      iconsize: "24px",
      icon: "pig",
      color: "",
      placeholder: "ورود اطلاعات",
      helper: "شما اینجایی",
      errorlabel: "تصحیح شود",
      type: "text",
      m: "r",
      c: "5",
      value: "",
      label: "نام"
    };
  }
};
</script>
