// export function someMutation (/* state */) {
// }
import { Vue } from "vue";

export function setUserDetails(state, payload) {
  state.userDetails = payload;
}

export function addUser(state, payload) {
  //   console.log("payLoad", payload);
  state.users[payload.userId] = payload.userDetails; //vue3動態式響應
  //   Vue.set(state.userDetails, payload.userId, payload.userDetails); //vue2寫法
}

export function updateUser(state, payload) {
  //   console.log("payLoad", payload);
  Object.assign(state.users, {
    userId: payload.userId,
    userDetails: payload.userDetails,
  });
}
