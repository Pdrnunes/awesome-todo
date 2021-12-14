<template>
  <!-- view="lHh Lpr lFf" -> this is where i can change the  -->
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <!-- style & identity > positioning for learning more about built-in vue classes -->
        <q-toolbar-title class="absolute-center">
          Awesome-Todo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
        <!-- <q-route-tab
          to="/settings"
          icon="settings"
          label="Settings"
        /> -->
      </q-tabs>
    </q-footer>

    <!-- :breakpoint -> defines at what screen width the sidenav bar vanishes -->
    <!-- :width -> defines the size of the buttons in the sidenav -->
    <!-- content-class -> sets the colour of the sidenav | Style & identity > color pallete for colour codes -->
    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      :breakpoint="767"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>
          Navigation
        </q-item-label>
        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- commented because it will be replaced with v-for directive -->
        <!-- <q-item
          to="/settings"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        },
        {
          label: 'About',
          icon: 'info',
          to: '/about'
        }
      ]
    }
  }
}
</script>
<style>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
.q-drawer .q-router-link--exact-active {
  color: white !important;
}
</style>