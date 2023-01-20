import { Link } from "react-router-dom";

function UserInfo() {
  return (
    <main className="wrapper">
      <div className="container">
        <h1 className="title">유저 정보 페이지입니다.</h1>
        <div className="text-box">
          <p className="text">아이디 : 유저 아이디</p>
          <p className="text">유저네임: 유저네임</p>
          <p className="text">소개 : 소개</p>
        </div>
        <Link to="/logout">로그아웃 하기</Link>
      </div>
    </main>
  );
}

export default UserInfo;
