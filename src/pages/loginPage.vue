<template>
  <q-page class="flex flex-center flex-col">
    <div class="py-10 text-3xl text-rose-400 text-">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAD5D8C_qP7csjpxhjETCIRmclhBdpO_8HrA&usqp=CAU" alt="">
    </div>

    <div class="border-2 border-blue-500 w-[350px] md:w-[600px]   rounded-lg bg-gray-50 shadow-4">

      <div class="px-10 py-3 text-lg  text-slate-700">
        <q-input class="py-2" color="rose-400" v-model="text" label="Name" />

        <q-input class="py-2" color="rose-400" v-model="password" label="Password" />
      </div>
      <div class="text-center py-12 ">
      <q-btn class="px-10 py-3 text-lg text-blue-500 hover:text-blue-600 shadow-lg shadow-blue-500/50 " outline rounded  label="login" />
    </div>
    </div>
    <div class="flex-col pt-8">
      <div class="text-xl">Yet not registered?</div>
      <div class="text-lg text-center">Go<span class="text-blue-500 text-bold cursor-pointer"> registration </span>page</div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'loginPage'
})
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>

