import { firebaseAuth, firebaseDb } from "src/boot/firebase";

export function someAction(/* context */) {}

export function registerUser({}, payload) {
  console.log("payload:", payload);
  firebaseAuth
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then((response) => {
      console.log(response);
      let userId = firebaseAuth.currentUser.uid;
      firebaseDb.ref("users/" + userId).set({
        name: payload.name,
        email: payload.email,
        online: true,
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function loginUser({}, payload) {
  firebaseAuth
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
export function logoutUser({ commit }) {
  firebaseAuth.signOut();
}

export function handleAuthStateChanged({ commit, dispatch, state }) {
  // console.log("handleAuthStateChanged");
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      let userId = firebaseAuth.currentUser.uid;
      firebaseDb.ref("users/" + userId).once("value", (snapshot) => {
        console.log("snapshot: ", snapshot);
        let userDetails = snapshot.val();
        console.log("userDetails ", userDetails);
        commit("setUserDetails", {
          name: userDetails.name,
          email: userDetails.email,
          userId: userId,
        });
      }); 
      dispatch("firebaseUpdateUser", {
        userId: userId,
        updates: {
          online: true,
        },
      });
      dispatch("firebaseGetUsers");
      this.$router.push("/");
    } else {
      // User is logged out.
      dispatch("firebaseUpdateUser", {
        userId: state.userDetails.userId,
        updates: {
          online: false,
        },
      });
      commit("setUserDetails", {});
      this.$router.replace("/auth");
    }
  });
}

export function firebaseUpdateUser({}, payload) {
  // console.log("payload: ", payload);
  firebaseDb.ref("users/" + payload.userId).update(payload.updates);
}

export function firebaseGetUsers({ commit }) {
  firebaseDb.ref("users").on("child_added", (snapshot) => {
    let userDetails = snapshot.val();
    let userId = snapshot.key;
    commit("addUser", {
      userId,
      userDetails,
    });
  });
  firebaseDb.ref("users").on("child_changed", (snapshot) => {
    let userDetails = snapshot.val();
    let userId = snapshot.key;
    commit("updateUser", {
      userId,
      userDetails,
    });
  });
}
