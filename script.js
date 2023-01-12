var firestore = firebase.firestore();
const db=firestore.collection("emailData")
let submitButton = document.getElementById("submit_button");
  
//Create Event Listener To Allow Form Submission

submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();
let emailname = document.getElementById("email_input").value;

  //Get Form Values
  firestore
    .collection("emailData")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().mailId;
        if (emailname === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      mailId: emailname
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
//   function clearForm() {
//     document.getElementById("clearFrom").reset();
//   }
//   clearForm()
});
