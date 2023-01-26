<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <v-btn color="primary" depressed :to="main">EXIT Admin</v-btn>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 관리자패널 </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <CustomSnackbar></CustomSnackbar>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CustomSnackbar from "@/components/CustomSnackbar.vue";

export default {
  name: "App",
  components: { CustomSnackbar },

  data: () => ({
    drawer: false,
    main: "/admin",
    items: [
      {
        title: "카페등록",
        icon: "mdi-view-dashboard",
        to: "/admin-page/register/cafe",
      },
      {
        title: "테마등록",
        icon: "mdi-image",
        to: "/admin-page/register/theme",
      },
    ],
  }),
};
</script>
