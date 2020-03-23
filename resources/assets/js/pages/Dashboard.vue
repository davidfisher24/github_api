<template>
    <div class="hero is-fullheight">
        <div class="hero-head">
            <navigation class="is-transparent has-shadow"></navigation>
        </div>

        <div class="container">

            <div class="md-form mt-0">
              <input class="form-control" type="text" placeholder="Search" aria-label="Search" @keyup="search">
              Page Size:
              <select v-model="page_size" @change="requestData()">
                  <option value="10" >10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
            </div>

            <table class="table table-sm table-dark">
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
                    <button class="btn btn-primary" role="button" @click="openExternalLink(item)">View</button>
                </tr>
              </tbody>
            </table>

            <nav aria-label="" v-if="items.length > 0">
                <ul class="pagination">
                    <li class="page-item">
                        <button type="button" class="page-link" v-if="page != 1" @click="page--; requestData()"> Previous </button>
                    </li>
                    <li class="page-item">
                        <button type="button" class="page-link" v-for="pageNumber in pageOptions" @click="page = pageNumber; requestData()"> {{pageNumber}} </button>
                    </li>
                    <li class="page-item">
                        <button type="button" @click="page++; requestData()" v-if="page < pages.length" class="page-link"> Next </button>
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
                timeout: null,
                page: 0,
                page_size: "25",
                pages: 0,
                query: '',
                items: []  
            }
        },

        computed: {
            pageOptions () {
                const pages = []
                const min = Math.min(1,this.page - 1)
                alert(pageOptions)
                alert(min)
                const max = Math.max(this.page + 5, this.pages)
                alert(max)
                for(var i = min; i <= max; i++) {
                    pages.push(i)
                }
                return pages;
            }
        },

        methods: {
            search (e) {
                clearTimeout(this.timeout);
                var self = this;
                this.timeout = setTimeout(() => {
                    this.query = e.target.value
                    this.requestData()
                }, 1000);
            },

            openExternalLink (item) {
                window.open(item.url, "_blank");    
            },

            requestData () {
                const url = `/api/github?query=${this.query}&page=${this.page}&per_page=${this.page_size}`
                
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
                    })
                    .catch(err => {
                        this.isSaving = false;
                        if (!this.form.parse(err)) {
                            this.bus.$emit('srv-err', err);
                        }
                    });
            }
        }
    }
</script>
