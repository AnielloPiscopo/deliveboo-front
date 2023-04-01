<template>
    <div class="not-found text-center">
        <img src="https://www.beevidhya.com/assets/images/no_result.gif" alt="Logo" class="img-fluid">
        <h3 class="text-center">Nessun {{ message }} trovato</h3>
    </div>
</template>
<script>

export default {
    name: 'NotFound',
    props: {
        message: {
            type: String,
            required: true,
        },
    }
}
</script>
<style lang="scss" scoped></style>