<template>
  <div class="home flex-col text-primary-black space-y-20">
    <intro />
    <resume />
    <projects />
    <about />
    <contact />
  </div>
</template>

<script>
import About from '../components/homepage/about.vue';
import Contact from '../components/homepage/contact.vue';
import Intro from "../components/homepage/intro.vue";
import Philosophy from '../components/homepage/philosophy.vue';
import Projects from "../components/homepage/projects.vue";
import Resume from "../components/homepage/resume.vue";
import TrackRecord from '../components/homepage/trackRecord.vue';

export default {
  name: "Home",
  components: {
    Resume,
    Intro,
    Projects,
    About,
    TrackRecord,
    Philosophy,
    Contact,
  },
};
</script,
    Projects>
