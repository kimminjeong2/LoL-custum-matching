import Team from "../components/Desktop/Team";
import Header from "../components/Desktop/Header";
import Menu from "../components/Desktop/Menu";
import { User } from "../commonTypes";
import ComposeButton from "../components/Desktop/ComposeButton";

interface DesktopMainPageProps {
  allUsers: User[];
  redTeam: User[];
  setRedTeam: React.Dispatch<React.SetStateAction<User[]>>;
  setBlueTeam: React.Dispatch<React.SetStateAction<User[]>>;
  blueTeam: User[];
  handleAddUser: (user: User) => void;
  handleRemoveUser: (user: User) => void;
  setIsDraftModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
  setHeaderText: React.Dispatch<React.SetStateAction<string>>;
  addedUsers: User[];
  setAddedUsers: React.Dispatch<React.SetStateAction<User[]>>;
  selectedMode: string;
  modalType: string;
  isDraftModalOpen: boolean;
  headerText: string;
  handleTeamButtonClick: () => void;
  setIsUserAdded: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: (type: string) => void;
  closeModal: () => void;
  handleDeleteUser: (userId: number) => void;
}

const DesktopMainPage: React.FC<DesktopMainPageProps> = ({
  allUsers,
  redTeam,
  setRedTeam,
  blueTeam,
  setBlueTeam,
  handleAddUser,
  handleRemoveUser,
  setIsDraftModalOpen,
  setSelectedMode,
  selectedMode,
  modalType,
  isDraftModalOpen,
  headerText,
  setHeaderText,
  addedUsers,
  setAddedUsers,
  handleTeamButtonClick,
  setIsUserAdded,
  openModal,
  closeModal,
  handleDeleteUser,
}) => {
  const handleFinishDraft = (RedTeam: User[], BlueTeam: User[]) => {
    // 상태 업데이트: 최종 팀을 메인 페이지에 반영
    setRedTeam(RedTeam);
    setBlueTeam(BlueTeam);
  };
  return (
    <div className="w-[100vw] xs:h-[100%] lg:h-[100vh]">
      <Header text={headerText} />
      <div className="lg:grid lg:grid-rows-3 lg:grid-cols-3 gap-6 lg:w-[100%] lg:h-[70%] px-[50px]">
        <Team
          redTeam={redTeam}
          blueTeam={blueTeam}
          handleRemoveUser={handleRemoveUser}
          handleAddUser={handleAddUser}
          selectedMode={selectedMode}
        />
        <Menu
          modalType={modalType}
          selectedMode={selectedMode}
          setIsDraftModalOpen={setIsDraftModalOpen}
          setSelectedMode={setSelectedMode}
          isDraftModalOpen={isDraftModalOpen}
          setHeaderText={setHeaderText}
          allUsers={allUsers}
          handleAddUser={handleAddUser}
          addedUsers={addedUsers}
          setAddedUsers={setAddedUsers}
          openModal={openModal}
          closeModal={closeModal}
          setIsUserAdded={setIsUserAdded}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <ComposeButton
        redTeam={redTeam}
        blueTeam={blueTeam}
        addedUsers={addedUsers}
        handleTeamButtonClick={handleTeamButtonClick}
        isDraftModalOpen={isDraftModalOpen}
        setIsDraftModalOpen={setIsDraftModalOpen}
        handleFinishDraft={handleFinishDraft}
      />
    </div>
  );
};

export default DesktopMainPage;
