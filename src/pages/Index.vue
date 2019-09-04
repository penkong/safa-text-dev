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
      height: "300px",
      value: "",
      label: "نظرات",
      dense: true,
      placeholder: "انتخاب",
      helper: "تصحیح شود",
      items: [
        // title , id  => will become label and code
        { label: "ایران", code: "1" },
        { label: "کانادا", code: "2" },
        { label: "کره شمالی", code: "3" },
        { label: "کره جنوبی", code: "4" }
      ],
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
      console.log(p, "i am selected val");
    }
  }
};
</script>
