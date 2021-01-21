 function dataCall (docRef, collectionArr,setData){
    docRef
    .get()
    .then((result) => {
      return result.docs.forEach((doc) => {
        collectionArr.push(doc.data());
      });
    })
    .then(() => {
      console.log('array', collectionArr);
      return setData(collectionArr);
    })
    .catch((error) => console.log(error));
  }
  function collectionCall (docRef, collectionArr,setData){
    docRef
    .get()
    .then((doc) => { collectionArr.push(doc.data())  
    })
    .then(() => {
      console.log('array', collectionArr);
      return setData(collectionArr);
    })
    .catch((error) => console.log(error));
  }





module.exports = {dataCall, collectionCall}; 