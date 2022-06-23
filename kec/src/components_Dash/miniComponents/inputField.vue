<template>
  <div class="faq">
    <div>
      <label>{{ label }}</label>
      <input
        type="text"
        placeholder="Type here"
        v-model="value"
        @change="emitChange(value)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "inputField",
  props: ["label", "fieldInput"],
  data() {
    return {
      value: this.fieldInput,
    };
  },
  methods: {
    emitChange(payload) {
      this.$emit("changeValue", this.label, payload);
    },
  },
};
</script>
