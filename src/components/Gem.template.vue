<template>
  <div class="p-fluid p-formgrid p-grid">
    <div class="p-col-12 p-md-6 p-lg-3">
      <!-- <img src="../assets/image/imageletter.png" alt class="email-image" /> -->
      <GemIcon :data="data" />
    </div>
    {{template.title}}
    {{template.icon}}

    <div class="p-col-12 p-md-6 p-lg-9">
      <ul class="no-bullets">
        <li
          class="panel-list"
          @click="openExp(data)"
          v-bind:class="[{ active: isActive }, { active1: isActive1 }]"
        >
          <span class="pi pi-list"></span>
          {{ data.title }}
        </li>

        <li class="panel-list" @click="openFire">
          <span class="pi pi-book"></span>
          {{ data.icon }}
        </li>

        <li class="panel-list" @click="openChrome">
          <span class="pi pi-pencil"></span>
          {{ data.topic }}
        </li>
        <li class="panel-list" @click="openSkype">
          <span class="pi pi-pencil"></span>
          File
        </li>
      </ul>
    </div>
  </div>

  <!-- <div class="p-fluid p-formgrid p-grid">
    <div class="p-col-4"></div>

    <div class="p-col-8 p-grid">
      <ul class="no-bullets p-col-6 panel-list">
        <li class="panel-list main-heading">Coffee</li>
        <li
          class="panel-list"
          @click="openExp(data)"
          v-bind:class="[{ 'active': isActive },{ 'active1': isActive1 }]"
        >
          <span class="pi pi-list"></span>
          Email Manger
        </li>

        <li class="panel-list" @click="openFire">
          <span class="pi pi-book"></span>
          Accounting
        </li>

        <li class="panel-list" @click="openChrome">
          <span class="pi pi-pencil"></span>
          Payables
        </li>
        <li class="panel-list" @click="openSkype">
          <span class="pi pi-pencil"></span>
          File
        </li>
      </ul>
      <ul class="no-bullets p-col-6 panel-list">
        <li class="panel-list main-heading">Coffee</li>
        <li
          class="panel-list"
          @click="openExp(data)"
          v-bind:class="[{ 'active': isActive },{ 'active1': isActive1 }]"
        >
          <span class="pi pi-list"></span>
          Email Manger
        </li>

        <li class="panel-list" @click="openFire">
          <span class="pi pi-book"></span>
          Accounting
        </li>

        <li class="panel-list" @click="openChrome">
          <span class="pi pi-pencil"></span>
          Payables
        </li>
        <li class="panel-list" @click="openSkype">
          <span class="pi pi-pencil"></span>
          File
        </li>
      </ul>
    </div>
  </div> -->
</template>
<script>
import GemIcon from "../components/GemIcon.vue";

export default {
  props: ["data","template"],
  components: {
    GemIcon,
  },
  data() {
    return;
  },
};
</script>
