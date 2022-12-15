import { useState } from 'react';
import Header from '../../components/header';
import styles from './myPage.module.css';

const MyPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const myPageTab = {
    0: <div>저장한 기사 페이지</div>,
    1: <div>회원 정보 페이지</div>,
  };

  const clickHandler = id => {
    setActiveTab(id);
  };

  return (
    <>
      <Header />
      <div className={styles.myPageWrap}>
        <div className={styles.myPage}>
          <h1 className={styles.title}>마이페이지</h1>
          <button
            type="button"
            className={`${activeTab === 0 ? styles.active : ''}`}
            onClick={() => clickHandler(0)}
          >
            저장한 기사
          </button>
          <button
            type="button"
            className={`${activeTab === 1 ? styles.active : ''}`}
            onClick={() => clickHandler(1)}
          >
            회원 정보
          </button>
          <div>{myPageTab[activeTab]}</div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
