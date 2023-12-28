<template>
  <q-page class="flex flex-center flex-col">
    <div class="py-10 text-3xl text-rose-400 text-">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAD5D8C_qP7csjpxhjETCIRmclhBdpO_8HrA&usqp=CAU" alt="">
    </div>

    <div class="border-2 border-rose-500 w-[400px] md:w-[600] my-5 rounded-lg bg-gray-50 shadow-4">
      <div class="text-3xl text-bold text-rose-500 text-center pt-10"> Registration</div>
      <div class="px-10 py-3 text-lg  text-slate-700">
        <q-input class="py-2" color="rose-400" v-model="text" label="Name" />
        <q-input class="py-2" color="rose-400" v-model="email" label="Email" />
        <q-input class="py-2" color="rose-400" v-model="password" label="Password" />
      </div>
      <div class="text-center py-16 ">
      <q-btn class="px-10 py-3 text-lg text-rose-500 hover:text-rose-600 shadow-lg shadow-rose-500/50 " outline rounded  label="Register" />
    </div>
    </div>
    <div class="flex-col pt-8">
      <div class="text-xl">All-ready registered?</div>
      <div class="text-lg text-center">Go<span class="text-rose-500 text-bold cursor-pointer"> login </span>page</div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
