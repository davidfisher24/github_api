<template>
    <nav class="navbar" role="navigation" aria-label="main navigation" id="main-navigation">
        <div class="navbar-brand">
        </div>
        <div class="navbar-menu" :class="{'is-active': isExpanded}">
            <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable" v-if="logged">
                    <a class="navbar-link is-parent-active">{{ user.name }}</a>
                    <div class="navbar-dropdown is-right is-radiusless">
                        <hr class="dropdown-divider" />
                        <a href="#" class="navbar-item" @click.prevent="doLogout">{{ $t('logout') }}</a>
                    </div>
                </div>
                <div class="navbar-item" v-else>
                    <div class="field is-grouped">
                        <div class="control">
                            <router-link class="button is-info is-outlined" to="/login">{{ $t('login') }}</router-link>
                        </div>
                        <div class="control">
                            <router-link class="button is-success is-outlined" to="/register">{{ $t('register') }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import prefs from './../lib/preferences';

    export default {
        data() {
            return {
                isExpanded: false,
                isRegistry: false,
            };
        },
        computed: {
            user() {
                return this.$store.getters.user;
            },
            logged() {
                return this.$store.getters.logged;
            }
        },
        methods: {
            doLogout() {
                this.$store.commit('logout');
                prefs.token = null;
                this.$router.push('/');
            },
        }
    }
</script>
