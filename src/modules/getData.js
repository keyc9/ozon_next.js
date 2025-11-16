const getData = () => {
    //  fetch('http://localhost:3000/goods')
     fetch('http://test-45cff-default-rtdb.firebaseio.com/goods.json')
      .then((response) => {
        return response.json()}
    )
}

export default getData