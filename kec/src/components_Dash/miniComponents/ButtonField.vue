<template>
  <button :disabled="disable" type="{{type}}" class="save-button">Save</button>
</template>
<script>
export default {
  props: ["disable", "type"],
  name: "ButtonField",
};
</script>
