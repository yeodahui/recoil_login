import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { userAtom } from "../atoms/AuthAtom";

function Logout() {
  const navigate = useNavigate();
  const resetAtom = useResetRecoilState(userAtom);

  function logOut() {
    localStorage.removeItem("testToken");
    resetAtom();
    navigate("/");
  }

  return (
    <main className="wrapper">
      <div className="container">
        <h1 className="title login">로그아웃 하실래요?</h1>
        <button className="btn logout" onClick={logOut}>
          로그아웃
        </button>
      </div>
    </main>
  );
}

export default Logout;
