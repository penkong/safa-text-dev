<template>
  <q-page class="flex flex-center">
    <SafaComboBox
      :m="m"
      :c="c"
      :align="align"
      :height="height"
      :width="width"
      :value="value"
      :label="label"
      :dense="dense"
      :placeholder="placeholder"
      :helper="helper"
      :items="items"
      :DtoName="DtoName"
      :Domain="Domain"
      :HideValue="HideValue"
      @inputer="checkInfo"
      @selectedVal="selectedVal"
    />
  </q-page>
</template>

<script>
import SafaComboBox from "../components/SafaComboBox";
export default {
  name: "PageIndex",
  components: {
    SafaComboBox
  },
  data() {
    return {
      m: "e",
      c: "1",
      align: "right",
      width: "150px",
      height: "100px",
      value: "",
      label: "نظرات",
      dense: true,
      placeholder: "انتخاب",
      helper: "تصحیح شود",
      items: [
        { title: "ایران", id: "1" },
        { title: "کانادا", id: "2" },
        { title: "کره شمالی", id: "3" },
        { title: "کره جنوبی", id: "4" }
      ],
      // { label: "canada", code: "ca" },
      // { label: "iran", code: "ir" },
      // { label: "north korea", code: "kr" },
      // { label: "sout korea", code: "nkr" }
      DtoName: "",
      Domain: "",
      HideValue: true
    };
  },
  methods: {
    checkInfo(val) {
      console.log(val, "i am checkInfo");
    },
    selectedVal(p) {
      console.log(p);
    }
  }
};
</script>
