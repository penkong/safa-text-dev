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
      :items="items"
      :DtoName="DtoName"
      :Domain="Domain"
      :HideValue="HideValue"
      @inputer="checkInfo"
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
      width: "200px",
      height: "50px",
      value: "",
      label: " نظرات",
      dense: false,
      placeholder: "انتخاب",
      // items: [],
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
