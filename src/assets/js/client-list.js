const getClient = (id) => {
    fetch(`/api/clients/${id}`)
      .then(response =>  {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
  };

  export default getClient;
