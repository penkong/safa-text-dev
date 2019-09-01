<template>
  <div class="safa-data">
    <!-- label="Label" -->
    <q-field
      outlined
      :hint="helper"
      :value="text"
      bottom-slots
      stack-label
      :dense="dense"
      :rules="[
        val => !!val  || errorlabel ,
        val => val.length >= 3 || 'حداقل 3 کاراکتر'
      ]"
    >
      <!-- <date-picker v-model="datetime" type="datetime" /> -->
      <!--
          display-format="dddd jDD jMMMM jYYYY"
        format="jYYYY/jMM/jDD"
      altFormat="YYYY-MM-DD HH:mm"-->
      <date-picker
        style="margin-top: 0.3rem;"
        :min="min"
        :max="max"
        :disabled="read"
        :placeholder="label"
        @input="datetime=$event"
        color="teal"
        inputFormat="YYYY-MM-DD HH:mm"
        v-model="datetime"
        type="datetime"
        editable="false"
        inputClass="form-control my-custom-class-name"
        appendTo="body"
        autoSubmit="false"
      >
        <template v-slot:before>
          <q-icon round name="event" dense flat class="cursor-pointer" icon="event" @click.stop></q-icon>
        </template>
      </date-picker>

      <!-- <template v-slot:control>
        <div class="self-center full-width no-outline" tabindex="0">{{text}}</div>
      </template>-->

      <template v-slot:hint>Field hint</template>

      <template v-slot:append>
        <q-btn round dense flat icon="add" />
      </template>
    </q-field>
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
      read: null,
      notEditable: null,
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
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.safa-data {
}
</style>
