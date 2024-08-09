<script setup>
import MainLayout from "@/layout/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <v-row class="mb-3">
      <v-col class="pt-16 pl-16 ">
        <v-card height="550" elevation="0" class="mt-9">
          <v-card-title class="font-weight-bold text-h2 pl-16 pt-16"
            >TUDLO</v-card-title
          >
          <v-card-subtitle class="ml-16"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo
            <br />
            itaque animi, blanditiis velit veniam. Animi nesciunt, ullam facere
            <br />
            delectus amet aliquid obcaecati nostrum voluptatum, deleniti maxime
            <br />
            similique quaerat maiores.</v-card-subtitle
          >
          <div class="text-start ml-16 mt-9">
            <v-btn
              rounded="xs"
              min-width="130"
              class="bg-blue-lighten-2 text-grey-lighten-5 text-capitalize"
              >Get Started</v-btn
            >
          </div>
        </v-card>
      </v-col>
      <v-col class="pt-16 pr-16">
        <v-card height="550" elevation="0" class="mt-9">
          <v-img
            :width="590"
            aspect-ratio="16/9"
            cover
            src="/teach1.png"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </MainLayout>
</template>

<style scoped>
.no-border {
  border: none !important;
}
</style>
