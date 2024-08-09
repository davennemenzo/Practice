<script setup></script>

<template>
  <nav class=" p-2 shadow-md h-100">
    <div class="container mx-auto flex  items-center justify-between">
      <div class="text-3xl font-semibold pa-3 ml-3 flex  ">
        <a href="#" class="text-teal-500  font-bold"
          ><span class="text-emerald-500 text-3xl hover:text-gray-600 font-bold"
            >T</span
          >udlo</a
        >
      </div>
      
      <div class="flex gap-4">
        
        <router-link to="/services" class=" text-lg">Services</router-link>
        <router-link to="/about" class=" text-lg">About</router-link>
        <router-link to="/contact" class=" text-lg">Contact</router-link>
      </div>

      <div class="flex gap-4">
        <router-link to="/signup" class=" text-lg">Signup</router-link>
        <router-link to="/login"><v-btn
              rounded="xs"
              min-width="130"
              class="bg-blue-lighten-2 text-grey-lighten-5 text-capitalize"
              >Login</v-btn
            ></router-link>
        
      </div>
    </div>
  </nav>
</template>
