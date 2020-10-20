<template>
    <v-container>
        <form class="login" @submit.prevent="login">
            <h1>Sign in</h1>
            <label>Email</label>
            <input required v-model="email" type="email" placeholder="Имя пользователя"/>
            <label>Password</label>
            <input required v-model="password" type="password" placeholder="Пароль"/>
            <hr/>
            <button type="submit">Login</button>
        </form>
    </v-container>
</template>

<script>
    export default {
        name: "LoginForm",
        email : "",
        password : ""
    }
</script>

<style scoped>

</style>