import { User } from "../../../commonTypes";
import reload from "../../../assets/reload.png";
import trash from "../../../assets/trashbin.png";
import apiCall from "../../../Api/Api";
import { Link } from "react-router-dom";
interface Props {
  user: User;
  setUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUserAdded: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserModal = ({ user, setUserModal, setIsUserAdded }: Props) => {
  console.log(user);
  console.log(user.updateId);
  const reloadInfo = () => {
    const data = {
      user_id: user.updateId,
    };
    apiCall("/noobs/friendUserBrUpdate", "post", data);
    console.log("클릭됨");
    setUserModal(false);
  };
  const deleteFr = () => {
    const data = {
      user_id: user.id,
    };
    apiCall("/noobs/friendUserBrDel", "post", data);
    console.log("클릭됨");
    setUserModal(false);
    setIsUserAdded((prev) => !prev);
  };
  return (
    <div className="flex gap-[5px] flex-col w-[180px] bg-[#F0E6D2] border-2 border-[#C8AA6E] rounded-lg absolute top-0 p-1 z-50">
      <p>
        {user.gameName} {user.tagLine}
      </p>
      <hr className="border-[#C8AA6E] text-center" />
      <Link
        to="/ProfilePage"
        className="no-underline text-black"
        state={{ user_id: user.id }}
      >
        프로필 확인하기
      </Link>
      <div className="flex flex-row items-center gap-2" onClick={reloadInfo}>
        <img src={reload} alt="reloadImg" className="w-[16px] h-[16px]" />
        <p className="text-red">전적 갱신하기</p>
      </div>
      <div className="flex flex-row items-center gap-2" onClick={deleteFr}>
        <img src={trash} alt="trashImg" className="w-[16px] h-[16px]" />
        <p className="text-red">목록에서 삭제하기</p>
      </div>
    </div>
  );
};

export default UserModal;
