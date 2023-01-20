import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom } from "../atoms/AuthAtom";

function Login() {
  const URL = "https://dummyjson.com/auth/login";

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);
  const user = useRecoilValue(userAtom);

  const handleId = (e) => {
    setUserId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, {
        headers: {
          "Content-type": "application/json",
        },
        username: userId,
        password: password,
      });
      setUser(res.data);
      console.log(user);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
    setUserId("");
    setPassword("");
  };

  return (
    <main className="wrapper">
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="title login">로그인 하기</h1>
        <input
          type="text"
          id="account"
          className="input-login"
          placeholder="아이디를 입력해주세요"
          value={userId}
          onChange={handleId}
        />
        <input
          type="password"
          id="password"
          className="input-login"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit" className="btn login">
          로그인
        </button>
      </form>
    </main>
  );
}

export default Login;
