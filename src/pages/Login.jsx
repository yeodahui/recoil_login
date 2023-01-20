import { useState } from "react";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleId = (e) => {
    setUserId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
