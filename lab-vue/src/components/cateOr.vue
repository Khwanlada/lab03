<template>
    <div class="event-cateOr">
        <span>{{ event.category }} {{ event.organizer }}</span>
        <!--<h4>{{ event.title }}</h4> -->
    </div>
</template>

<script>
    export default {
        name: 'EventCateOr',
        props: {
            event: {
                type: Object,
                required: true,
            },
        }
    }
</script>

<style scoped>
    .event-cateOr {
        padding: 20px;
        width: 250px;
        cursor: pointer;
        border: 1px solid #39495c;
        margin-bottom: 18px;
        text-align: right;
    }

    .event-cateOr:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
    }
</style>