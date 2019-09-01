<template>
  <div class="safa-data">
    <q-btn
      @click="show=true"
      @click.prevent="simulateProgress"
      :loading="loadingGear"
      round
      dense
      type="button"
      size="0.8rem"
      color="light-blue-14"
      text-color="white"
      icon="today"
    >
      <template v-slot:loading>
        <q-spinner-gears />
      </template>
    </q-btn>
    <q-input
      borderless
      dense="true"
      bg-color="lime-1"
      style="display: inline-block; margin-left: 1rem; border: none; padding: 1rem;"
      id="my-custom-editable-input"
      type="text"
      class="form-control is-editable"
      placeholder
      v-model="datetime"
      :hint="helper"
    >
      <template v-slot:hint>Field hint</template>
      <template v-slot:append>
        <q-item-label
          style="font-family: 'behdad', 'Courier New', Courier, monospace;"
          header
        >{{ label }}</q-item-label>
      </template>
      <!-- <template v-slot:after></template> -->
    </q-input>
    <date-picker
      input-class="form-control form-control-lg"
      :highlight="highlight"
      locale="fa,en"
      :auto-submit="true"
      v-if="m == 'e'"
      :editable="true"
      element="my-custom-editable-input"
      @close="show=false"
      v-model="datetime"
      :show="show"
      style="border: none; padding-left: 1rem;"
      :min="min"
      :max="max"
      :disabled="read"
      :placeholder="placeholder"
      @input="datetime=$event"
      color="teal"
      inputFormat="YYYY-MM-DD HH:mm"
      format="jYYYY - jMM - jDD  --  HH:mm"
      type="datetime"
      inputClass="form-control my-custom-class-name"
      appendTo="body"
      autoSubmit="false"
    />
    <date-picker
      v-else
      :editable="false"
      element="my-custom-editable-input"
      @close="show=false"
      v-model="datetime"
      :show="show"
      style="margin-top: 0.3rem;"
      :min="min"
      :max="max"
      :disabled="read"
      :placeholder="placeholder"
      @input="datetime=$event"
      color="teal"
      inputFormat="YYYY-MM-DD HH:mm"
      format="jYYYY - jMM - jDD  --  HH:mm"
      type="datetime"
      inputClass="form-control my-custom-class-name"
      appendTo="body"
      autoSubmit="false"
    />
  </div>
</template>

<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import uid from "uuid/v4";
export default {
  name: "SafaDate",
  components: {
    DatePicker: VuePersianDatetimePicker
  },
  data() {
    return {
      date: "",
      show: false,
      read: null,
      notEditable: null,
      placeholder: "",
      text: "",
      loadingGear: false,
      idOfInput: null,
      datetime: "",
      colorFace: "#B33636",
      model: "one",
      dense: true,
      secondModel: "one"
    };
  },
  props: {
    align: {
      type: String,
      required: true,
      default: "right",
      validator: v => ["right", "left"].includes(v)
    },
    m: {
      type: String,
      validator: v => ["r", "e", "ne"].includes(v),
      default: "r"
    },
    minDate: {
      type: String,
      default: "",
      validator: () => {}
    },
    maxDate: {
      type: String,
      default: "",
      validator: () => {}
    },
    type: {
      type: String,
      default: "text"
    },
    value: { type: String },
    label: { default: "none", type: String },
    icon: {
      type: String,
      default: "today",
      required: true
    },
    helper: { type: String, default: "شما اینجایی" },
    errorlabel: { type: String, default: "تصحیح شود" },
    c: {
      type: String,
      validator: v =>
        [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "auto"
        ].includes(v),
      default: "4"
    }
  },
  created() {
    const generatedId = "Safa" + "_" + uid();
    this.$set(this, "idOfInput", generatedId);
    switch (this.m) {
      case "r":
        return this.$set(this, "read", true);
      case "ne":
        return this.$set(this, "notEditable", true);
      default:
        return;
    }
  },
  computed: {},
  methods: {
    simulateProgress() {
      // we set loading state
      this.loadingGear = true;
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this.loadingGear = false;
      }, 500);
    },
    highlight() {
      return { style: { color: "grey-3" } };
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("http://cdn.font-store.ir/behdad.css");

.safa-data {
}
</style>
