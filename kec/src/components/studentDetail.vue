<template>
  <div>{{ this.$route.params.rollnumber }}</div>
</template>
<script>
import getDetails from "@/services/getDetails";
export default {
  data() {
    return {
      data: null,
    };
  },
  async created() {
    const { data } = await getDetails.getStudent({
      rollnumber: this.$route.params.rollnumber,
    });
    this.data = data;
  },
};
</script>
