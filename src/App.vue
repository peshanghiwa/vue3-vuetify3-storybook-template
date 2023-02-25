<script setup lang="ts">
import MyButton from "./components/MyButton.vue";
import { useTheme } from "vuetify";

const theme = useTheme();

const switchTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="my-10">
        <v-row justify="center" align="center">
          <v-col cols="auto">
            <img src="../asstes/vue.png" height="200" />
          </v-col>
          <v-col cols="auto">
            <img src="../asstes/vuetify.svg" height="200" />
          </v-col>
          <v-col cols="auto">
            <img src="../asstes/storybook.svg" height="200" />
          </v-col>
        </v-row>

        <v-card class="description pa-5 mt-10 text-center">
          <v-card-title>
            <h1>Vue 3 + Vuetify 3 + Storybook 6</h1>
          </v-card-title>
          <v-card-text>
            <p>
              This is a starter template for Vue 3 + Vuetify 3 + Storybook 6
            </p>
            <p>Run <code>npm run storybook</code> to start Storybook</p>
          </v-card-text>
          <v-card-actions>
            <MyButton
              color="primary"
              class="mx-auto"
              variant="flat"
              @click="switchTheme"
            >
              Switch theme
            </MyButton>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
