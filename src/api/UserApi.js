import axios from "axios";

const HEADER = { "Content-type": "application/json; charset=UTF-8" };

const UserApi = {
  //회원가입
  userReg: async function (id, pwd, nickname, phone, profileImage) {
    const userObj = {
      userEmail: id,
      password: pwd,
      userNickname: nickname,
      phone: phone,
      profileImage: profileImage,
    };
    return await axios.post("register", userObj, HEADER);
  },

  //로그인
  userLogin: async function (id, pwd) {
    const loginObj = {
      userEmail: id,
      password: pwd,
    };
    return await axios.post("login", loginObj, HEADER);
  },

  //회원정보 수정
  userUpdate: async function (
    userEmail,
    pwd,
    inputPwNow,
    nickname,
    phone,
    profileImage
  ) {
    const UpdateObj = {
      userEmail: userEmail,
      password: pwd,
      inputPwNow: inputPwNow,
      userNickname: nickname,
      phone: phone,
      profileImage: profileImage,
    };
    return await axios.put("update", UpdateObj, HEADER);
  },
};

export default UserApi;
