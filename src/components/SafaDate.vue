<template>
  <div class="safa-data">
    <q-field outlined :hint="helper" :value="text" bottom-slots stack-label :dense="dense">
      <date-picker
        v-if="m == 'e'"
        :editable="true"
        style="margin-top: 0.3rem;"
        :min="min"
        :max="max"
        :disabled="read"
        :placeholder="placeholder"
        @input="datetime=$event"
        color="teal"
        inputFormat="YYYY-MM-DD HH:mm"
        format="jYYYY - jMM - jDD  --  HH:mm"
        v-model="datetime"
        type="datetime"
        inputClass="form-control my-custom-class-name"
        appendTo="body"
        autoSubmit="false"
      ></date-picker>
      <date-picker
        v-else
        style="margin-top: 0.3rem;"
        :min="min"
        :max="max"
        :disabled="read"
        :placeholder="placeholder"
        @input="datetime=$event"
        color="teal"
        inputFormat="YYYY-MM-DD HH:mm"
        format="jYYYY - jMM - jDD  --  HH:mm"
        v-model="datetime"
        type="datetime"
        editable="false"
        inputClass="form-control my-custom-class-name"
        appendTo="body"
        autoSubmit="false"
      ></date-picker>
      <template v-slot:hint>Field hint</template>
      <template v-slot:after>
        <q-item-label
          style="margin-left: 1.5rem; font-family: 'behdad', 'Courier New', Courier, monospace;"
          header
        >{{ label }}</q-item-label>
      </template>
    </q-field>
    <br />
    <br />
    <br />
    <!-- //////////////////////////////////////////////////////////// -->
    <q-btn
      @click="show=true"
      round
      dense
      type="button"
      size="0.8rem"
      :loading="loadingGear"
      @click.prevent="simulateProgress"
      color="light-blue-13"
      text-color="white"
      icon="today"
    >
      <template v-slot:loading>
        <q-spinner-gears />
      </template>
    </q-btn>
    <q-input
      id="my-custom-editable-input"
      type="text"
      class="form-control is-editable"
      placeholder="YYYY/MM/DD"
      v-model="date"
    />
    <date-picker
      element="my-custom-editable-input"
      v-model="date"
      format="jYYYY/jMM/jDD"
      :editable="true"
      :show="show"
      @close="show=false"
    />
    <br />
    <br />
    <br />
    <!-- //////////////////////////////////////////////////////////// -->
    <q-field outlined :hint="helper" :value="text" bottom-slots stack-label :dense="dense">
      <date-picker
        v-if="m == 'e'"
        :editable="true"
        style="margin-top: 0.3rem;"
        :min="min"
        :max="max"
        :disabled="read"
        :placeholder="placeholder"
        @input="datetime=$event"
        color="teal"
        inputFormat="YYYY-MM-DD HH:mm"
        format="jYYYY - jMM - jDD  --  HH:mm"
        v-model="datetime"
        type="datetime"
        inputClass="form-control my-custom-class-name"
        appendTo="body"
        autoSubmit="false"
      ></date-picker>
      <date-picker
        v-else
        style="margin-top: 0.3rem;"
        :min="min"
        :max="max"
        :disabled="read"
        :placeholder="placeholder"
        @input="datetime=$event"
        color="teal"
        inputFormat="YYYY-MM-DD HH:mm"
        format="jYYYY - jMM - jDD  --  HH:mm"
        v-model="datetime"
        type="datetime"
        editable="false"
        inputClass="form-control my-custom-class-name"
        appendTo="body"
        autoSubmit="false"
      ></date-picker>
      <template v-slot:hint>Field hint</template>
      <template v-slot:after>
        <q-item-label
          style="margin-left: 1.5rem; font-family: 'behdad', 'Courier New', Courier, monospace;"
          header
        >{{ label }}</q-item-label>
      </template>
    </q-field>
  </div>
</template>
  <!-- <date-picker v-model="datetime" type="datetime" /> -->
      <!--
          display-format="dddd jDD jMMMM jYYYY"
        format="jYYYY/jMM/jDD"
        element="my-custom-input"
      altFormat="YYYY-MM-DD HH:mm"-->
        <!-- <q-btn >{{label}}</q-btn> -->
        <!-- <template v-slot:before>
          <q-icon round name="event" dense flat class="cursor-pointer" icon="event" @click.stop></q-icon>
        </template>-->
<!-- <template v-slot:before>
          <q-icon round name="event" dense flat class="cursor-pointer" icon="event" @click.stop></q-icon>
        </template>-->
      <!-- <template v-slot:control>
        <div class="self-center full-width no-outline" tabindex="0">{{text}}</div>
      </template>-->
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("http://cdn.font-store.ir/behdad.css");

.safa-data {
}
</style>
