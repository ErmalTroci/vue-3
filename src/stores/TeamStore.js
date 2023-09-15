import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
   state:() => ({
       name: '',
       spots: 0,
       members: []
   }),

   actions: {
       async fill(){
           // may be an ajax call to get data

           let r = import('@/team.json').then(r => {

                // let data = r.default;

                // this.name = data.name;
                // this.spots = data.spots;
                // this.members = data.members;

                // or ...

               // this.$patch({
               //     name: data.name,
               //     spots: data.spots,
               //     members: data.members
               // });

                //  ... or to replace the state entirely

               this.$state = r.default;
           });
       },

       grow(spots){
           this.spots = spots;
       },
   },

    getters: {
       spotsRemaining() {
           return this.spots - this.members.length;
       }
    }
});