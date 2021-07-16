<template>
<h1> Event For Good</h1>
  <div class="events">
   <EventCard v-for="event in events" :key="event.id" :event="event" />
   <EventCateOr v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventCateOr from "@/components/cateOr.vue";
import EventService from "@/services/EventService.js";

// import axios fron 'axios'
export default {
  name: "EventList",
  components: {
    EventCard,EventCateOr
   //register it as a child component
  },
  data(){
    return {
      events: null
    }
  },
  created(){
      EventService.getEvents()
      .then((response) => {
        this.events = response.data
        //console.log(response.data) ดูข้อมูลใน console ของเว็บ
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
