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
  userUpdate: async function (id, pwd, nickname, phone, profileImage) {
    const UpdateObj = {
      userEmail: id,
      password: pwd,
      userNickname: nickname,
      phone: phone,
      profileImage: profileImage,
    };
    return await axios.put("update", UpdateObj, HEADER);
  },

  // 회원정보 찾기(아이디찾기)
  findId: async function (phone) {
    const AccountInfo = {
      phone: phone,
    };
    return await axios.post("findId", AccountInfo, HEADER);
  },

  // 회원정보 찾기(비밀번호찾기)
  findPwd: async function (id, phone) {
    const AccountInfo = {
      userEmail: id,
      phone: phone,
    };
    return await axios.post("findPwd", AccountInfo, HEADER);
  },

  // ID(Email) 중복체크
  duplCheck: async function (id) {
    const idCheck = {
      userEmail: id,
    };
    return await axios.post("duplCheck", idCheck, HEADER);
  },

  // 회원탈퇴
  delete: async function (userEmail) {
    return await axios.delete(`delete/${userEmail}`, HEADER);
  },
};

export default UserApi;
