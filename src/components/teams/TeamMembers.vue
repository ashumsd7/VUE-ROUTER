<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject:['users','teams'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: 'Test',
      
      members:[],
      

    };
  },

  created() {
    const teamId= this.$route.params.teamId;
     const selectedTeam= this.teams.find(team=>
       team.id === teamId
     )
      const members= selectedTeam.members;

//first filterting members and then team
   console.log(this.users);
    var filteredTeamMembers=[]
   for(var member in members){
     for(let user in this.users){
       if(members[member]===this.users[user].id){
         filteredTeamMembers.push(this.users[user])
       }
     }
   }

   console.log(filteredTeamMembers);
   this.members=filteredTeamMembers;
    this.teamName= selectedTeam.name;
     
       
         
     
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>