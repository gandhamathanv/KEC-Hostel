<template>
  <div class="faq">
    <div>
      <label>{{ label }}</label>
      <input
        :type="type"
        placeholder="Type here"
        v-model="data"
        @change="emitChange(data)"
        :disabled="this.disable"
        required
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "inputField",
  props: ["label", "fieldInput", "disable", "type"],
  data() {
    return {
      data: "dtrong",
    };
  },
  methods: {
    emitChange(payload) {
      this.$emit("changeValue", { label: this.label, value: payload });
    },
  },
  mounted() {
    this.data = this.fieldInput;
  },
};
</script>
