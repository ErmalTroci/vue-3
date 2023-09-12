<script setup>
import team from "@/team.json";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
</script>

<template>
  <team-header :team="team" />

  <div class="place-self-center flex flex-col gap-y-3">
    <team-members :team="team" />
  </div>

  <team-footer :team="team" />
</template>