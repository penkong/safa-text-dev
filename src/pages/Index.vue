<template>
  <q-page class="flex flex-center">
    <SafaDropDown
      :m="m"
      :c="c"
      :align="align"
      :height="height"
      :width="width"
      :value="value"
      :label="label"
      :dense="dense"
      :placeholder="placeholder"
      :items="items"
      :DtoName="DtoName"
      :Domain="Domain"
      :HideValue="HideValue"
      @inputer="checkInfo"
    />
  </q-page>
</template>

<script>
import SafaDropDown from "../components/SafaDropDown";
export default {
  name: "PageIndex",
  components: {
    SafaDropDown
  },
  data() {
    return {
      m: "e",
      c: "5",
      align: "right",
      width: "400px",
      height: "200px",
      value: "",
      label: " نظرات",
      dense: true,
      placeholder: "را بنویسید",
      items: [],
      DtoName: "",
      Domain: "",
      HideValue: true
    };
  },
  methods: {
    checkInfo(val) {
      console.log(val);
    }
  }
};
</script>
