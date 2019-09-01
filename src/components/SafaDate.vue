<template>
  <div class="safa-data">
    <q-field
      outlined
      :value="text"
      bottom-slots
      label="Label"
      class="shadow-3 bg-red"
      stack-label
      counter
      maxlength="12"
      :dense="dense"
    >
      <template v-slot:before>
        <q-icon
          round
          name="event"
          dense
          flat
          class="cursor-pointer bg-blue"
          icon="event"
          @click.stop
        >
          <!-- <date-picker v-model="datetime" type="datetime" /> -->
          <date-picker appendTo="body" :disabled="readOnly" v-model="datetime" type="datetime"></date-picker>
        </q-icon>
      </template>

      <template v-slot:control>
        <div class="self-center full-width no-outline" tabindex="0">{{text}}</div>
      </template>

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
      text: "",
      loadingGear: false,
      idOfInput: null,
      date: "",
      colorFace: "#B33636",
      model: "one",
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
  },
  computed: {
    readOnly: function() {
      if (this.m === "e") {
        return false;
      } else {
        return true;
      }
    }
  },
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
