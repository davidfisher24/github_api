<template>
    <div class="hero is-fullheight">
        <div class="hero-head">
            <navigation class="is-transparent has-shadow"></navigation>
        </div>

        <div class="container is-fluid">

            <div class="field has-addons">
              <div class="control">
                <input class="input" type="text" placeholder="Search" aria-label="Search" v-model="query">
              </div>
              <div class="control">
                <a class="button is-info" @click="requestData()">
                  Search
                </a>
              </div>

              <span class="tag">
                  Page Size
              </span>

              <div class="control is-expanded">
                <div class="select">
                  <select v-model="page_size" @change="requestData()">
                      <option value="10" >10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                </div>
              </div>
            </div>


            <progress v-if="loading" class="progress is-large is-info" max="100">60%</progress>
            <table class="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Repo</th>
                  <th scope="col">User</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in items" :key="item.full_name">
                    <td scope="row">{{(i+1) + ((page - 1) * page_size)}}</td>
                    <td>{{item.repository}}</td>
                    <td>{{item.user}}</td>
                    <button class="button is-primary" role="button" @click="openExternalLink(item)">View</button>
                </tr>
              </tbody>
            </table>

            <nav aria-label="" v-if="items.length > 0">
                <ul class="pagination">
                    <li class="page-item">
                        <button type="button" class="button is-white" v-if="page != 1" @click="page--; requestData()"> Previous </button>
                    </li>
                    <li class="page-item">
                        <button type="button" v-bind:class="['button', (page == pageNumber) ? 'is-dark' : 'is-white']"    v-for="pageNumber in page_options" @click="page = pageNumber; requestData()" :disabled="page == pageNumber"> {{pageNumber}} </button>
                    </li>
                    <li class="page-item">
                        <button type="button" @click="page++; requestData()" v-if="pages && page < pages" class="button is-white"> Next </button>
                    </li>
                </ul>
            </nav>
        </div>


    </div>
</template>



<script>
    export default {
        data () {
            return  {
                loading: false,
                page: 1,
                page_size: "25",
                pages: 0,
                query: '',
                items: [],
                page_options: [],
            }
        },


        methods: {
            openExternalLink (item) {
                window.open(item.url, "_blank");
            },

            requestData () {
                const url = `/api/github?query=${this.query}&page=${this.page}&per_page=${this.page_size}`

                this.loading = true;

                this.$http.get(url)
                    .then(response => {
                        const {
                            items,
                            page,
                            total,
                            page_size
                        } = response.data
                        this.items = items
                        this.page = page
                        this.pages = Math.floor(total / page_size)
                        this.calculatePageOptions()
                        this.loading = false
                    })
                    .catch(err => {
                        this.isSaving = false;
                        if (!this.form.parse(err)) {
                            this.bus.$emit('srv-err', err);
                        }
                        this.loading = false
                    });
            },

            calculatePageOptions () {
                const pages = []
                const min = Math.max(1,parseInt(this.page) - 1)
                const max = Math.min(parseInt(this.page) + 5, this.pages)
                for(var i = min; i <= max; i++) {
                    pages.push(i)
                }
                this.page_options = pages;
            }
        }
    }
</script>
