import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/AuthAtom";

function UserInfo() {
  const user = useRecoilValue(userAtom);

  return (
    <main className="wrapper">
      <div className="container">
        <h1 className="title">유저 정보 페이지입니다.</h1>
        <img className="user-img" src={user.image} alt="프로필 이미지" />
        <div className="text-box">
          <p className="text">이름 : {`${user.firstName} ${user.lastName}`}</p>
          <p className="text">유저 닉네임: {user.username}</p>
          <p className="text">이메일 주소 : {user.email}</p>
        </div>
        <Link to="/logout">로그아웃 하기</Link>
      </div>
    </main>
  );
}

export default UserInfo;
