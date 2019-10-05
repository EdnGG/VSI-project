console.log("Hello")

//var db = firebase.firestore();

db.collection("clients")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });