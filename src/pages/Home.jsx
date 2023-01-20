import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/AuthAtom";

function Home() {
  const user = useRecoilValue(userAtom);

  return (
    <main className="wrapper">
      <div className="container">
        {user.token ? (
          <>
            <h2 className="title">환영합니다! 사용자님</h2>
            <Link to="/user" className="link-login">
              프로필 보기
            </Link>
          </>
        ) : (
          <>
            <h2 className="title">반갑습니다! 로그인 해주세요</h2>
            <Link to="/login" className="link-login">
              로그인 하기!
            </Link>
          </>
        )}
      </div>
    </main>
  );
}

export default Home;
