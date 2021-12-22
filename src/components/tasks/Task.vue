<template>
  <!-- id: id -> the id is available due to props -->
  <!-- property updates: -> contain the updates that will be send -->
  <!-- in this case completed set to the oposite of task.completed -->
  <q-item
    @click="updateTask({id: id, updates: {completed: !task.completed}})"
    clickable
    v-ripple
    :class="!task.completed ? 'bg-cyan-1' : 'bg-green-12'"
  >
    <q-item-section
      side
      top
    >
      <q-checkbox
        :value="task.completed"
        class="no-pointer-events"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{'text-strike' : task.completed }">{{task.name}}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <!-- vue components > icon for more info -->
        <div class="column justify-center">
          <q-icon
            class="q-mr-xs"
            name="event"
            size="18px"
          />
        </div>
        <div class="column">
          <!-- class row to make it into a row, justify-end to push the label to the right end of the page -->
          <q-item-label
            class="row justify-end"
            caption
          >
            {{task.dueDate}}
          </q-item-label>
          <q-item-label
            class="row justify-end"
            caption
          >
            <small>{{task.dueTime}}</small>
          </q-item-label>
        </div>
      </div>

    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask'])
  },
}
</script>

<style>
</style>