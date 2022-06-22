<script setup>
import {io} from 'socket.io-client'
// io is not working here at all
const socket = io("ws://localhost:3000/", {});
socket.on("connect", () => {
  // Won't be executed
  alert(`connect ${socket.id}`)
});

socket.on("disconnect", () => {
  console.log("disconnect");
});

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<style>

</style>