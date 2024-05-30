import styles from './styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <img src="/profile.png" alt="User Profile" />
        <h2>User Name</h2>
      </div>
      <div className={styles.links}>
        <button>LinkedIn</button>
        <button>GitHub</button>
        <button>LeetCode</button>
      </div>
      <div className={styles.details}>
        <label>Occupation</label>
        <select>
          <option>Student/Intern/etc</option>
        </select>
        <label>Contact</label>
        <input type="text" value="+91 999 999 9999" readOnly />
        <label>Email</label>
        <input type="email" value="user.email@gmail.com" readOnly />
      </div>
    </aside>
  );
};

export default Sidebar;
