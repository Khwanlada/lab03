<template>
    <div class="event-student">
        <span>Name: {{ event.name }} Surname: {{ event.surname }} GPA: {{ event.gpa }}</span>
    </div>
</template>

<script>
    export default {
        name: 'EventStudent',
        props: {
            event: {
                type: Object,
                required: true,
            },
        }
    }
</script>

<style scoped>
    .event-student {
        padding: 20px;
        width: 250px;
        cursor: pointer;
        border: 1px solid #39495c;
        margin-bottom: 18px;
    }

    .event-student:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
    }
</style>