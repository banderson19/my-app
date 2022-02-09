const getClientList = () => {
    fetch('/api/clients')
      .then(response => response.json())
      .then(clientListArr => {
          console.log(clientListArr)
        // clientListArr.forEach(printPizza);
      })
      .catch(err => {
        console.log(err);
      });
  };

  getClientList();