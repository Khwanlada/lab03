<template>
  <div class="showstudent">
    <h1>Student</h1>
  </div>
  <EventStudent v-for="event in events" :key="event.id" :event="event" />
</template>

<script>
import EventStudent from "@/components/student.vue";
import studentInfo from "@/services/studentInfo.js";

export default {
  name: "ShowStudent",
  components: {
    EventStudent,
    //register it as a child component
  },
    data(){
    return {
    events: null
  }
  },
  created(){
    studentInfo.getEvents()
  .then((response) => {
  this.events = response.data
  console.log(response.data) //ดูข้อมูลใน console ของเว็บ
  })
  .catch((error) => {
   console.log(error)
  })
  }
};
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>