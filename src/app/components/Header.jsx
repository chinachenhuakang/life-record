const Header = () => {
  const dataMenus = [
    {
      id: 1,
      name: 'test1',
    },
    {
      id: 2,
      name: 'test2',
    },
    {
      id: 3,
      name: 'test3',
    },
  ];
  return (
    <header className=' bg-white w-full px-6 py-2'>
      <nav className=' max-lg:hidden'>
        <ul className=' flex items-center'>
          {dataMenus.map((menu) => (
            <li key={menu.id} className=' hover:bg-cyan-400  px-6 py-2'>
              <a href='' className=" w-full h-full">{menu.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className=""></div>
    </header>
  );
};

export default Header;
