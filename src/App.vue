<script lang="ts">
import { NMessageProvider } from "naive-ui";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    NMessageProvider,
  },
});
</script>
<template>
  <n-message-provider>
    <nav>
      <router-link to="/subscriptions">Subscriptions</router-link> |
      <router-link to="/today">Today's events</router-link> |
      <router-link to="/">Browse Events</router-link> |
      <router-link to="/create">Create Event</router-link> |
      <router-link to="/myevents">My Events</router-link>
    </nav>
    <router-view />
  </n-message-provider>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
