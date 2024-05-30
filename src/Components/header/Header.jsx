import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Image src="/logo.png" alt="EquiLearn Logo" width={40} height={40} />
        <span>EQUILEARN</span>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#talent-pool">Talent Pool</a></li>
          <li><a href="#add-buddy">Add Buddy</a></li>
        </ul>
      </nav>
      <div className="user-info">
        <span>user.email@gmail.com</span>
        <Image src="/user.png" alt="User Profile" width={40} height={40} />
      </div>
    </header>
  );
};

export default Header;
