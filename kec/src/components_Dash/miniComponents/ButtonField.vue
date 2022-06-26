<template>
  <button :disabled="disable" class="save-button">Save</button>
</template>
<script>
export default {
  props: ["disable"],
  name: "ButtonField",
};
</script>
