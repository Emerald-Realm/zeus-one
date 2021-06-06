<template>
  <div class="trackRecord grid-cols-2 grid gap-2">
    <div class="records border-b-2 border-primary-light shadow-md p-1 flex-col  justify-center align-middle" v-for="record in recordList" :key="record.key">
      <p class="numbers text-center text-2xl text-primary-dark  dark:text-gray-100 font-bold p-2">{{ record.number }}+</p>
      <p class="topic text-center text-xs dark:text-gray-300" >{{ record.topic }}</p>
    </div>
  </div>
</template>

  <!-- <div class="trackRecord grid-cols-2 grid gap-10 px-10 md:px-32">
    <div class="records border-b-2 border-primary-light shadow-md p-1 flex-col  justify-center align-middle" v-for="record in recordList" :key="record.key">
      <p class="numbers text-center text-2xl text-primary-dark font-bold p-2">{{ record.number }}+</p>
      <p class="topic text-center text-primary text-xs" >{{ record.topic }}</p>
    </div>
  </div> -->

<script>
import recordList from '../../assets/apis/recordList'

export default {
  name: "trackRecord",
  data() {
    return {
      recordList,
    };
  },
};
</script>

<style>
</style>