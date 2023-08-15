<script setup>

    defineProps({
        modelValue: String
    });

    let emit = defineEmits(['update:modelValue']);
    
    function onTabPress(e) {
        let textarea = e.target;
    
        // /get current position/selection
        let val = textarea.value,
            start = textarea.selectionStart,
            end = textarea.selectionEnd;

        //set textarea value to: text before caret + tab + text after carret
        textarea.value = val.substring(0, start) + "\t" + val.substring(end);

        //put carret at right position again
        textarea.selectionStart = textarea.selectionEnd = start + 1;

    }

    function update(e) {
        emit('update:modelValue', e.target.value);
    }
    
</script>

<template>
    <textarea 
        @keydown.tab.prevent="onTabPress" 
        @keyup="emit('update:modelValue', $event.target.value)"
        v-text="modelValue"    
    />
</template>