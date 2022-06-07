const helloResolvers = {
    Query: {
      hello: () => {
        return 'Hello world!'
      },
      fuck: () => {
        return 'Fuck you!'
      },
      num: ()=>{
        return 13;
      },
      books: ()=>{
        return [{
          title:"Fuck Book",
          author:{
            id:1,
            name:"Fuck Author"
          }
        }];
      },
      book: (id)=>{
        if(id == 1){
          return {
            title:"Fuck Book",
            author:{
              id:1,
              name:"Fuck Author"
            }
          };
        }else{
          return null;
        }
      },
      author:()=>{
        return {
          id:1,
          name:"Fuck Author"
        }
      }
    },
};

module.exports = helloResolvers;