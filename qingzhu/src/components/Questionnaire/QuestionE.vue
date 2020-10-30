<template>
  <div class="question">
    <p>5、介绍一下你自己？</p>
    <el-input type="textarea" v-model="introduce" placeholder="介绍一下你吧" :rows="10"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduce: "",
    };
  },
  created() {
    let len = this.introduce.length;
    let flag = 0;
    if (len >= 100) {
      flag = 1;
    }
    this.$emit("fun", flag);
  },
  watch: {
    introduce(val) {
      let len = this.introduce.length;
      let flag = 0;
      if (len >= 100) {
        flag = 1;
      }
      this.$emit("fun", flag);
    },
  },
  methods: {
    reset() {
      this.introduce = "";
    },
  },
};
</script>

<style>
</style>