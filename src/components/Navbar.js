import Logo from './QuickFX-logo-soft.png';

export const NavBar = () => {
  const menu = ['currency converter', 'rates table'];
  return (
    <div className="flex flex-center">
      <a href='##' className='logo'>
        <img src={Logo} alt="Quick FX"></img>
      </a>
      <div>
        <ul className="flex primary-navigation">
          {menu.map( menuItem => 
            <li key={menuItem}>
                <a href="##" className="capitalize">
                  {menuItem}
                </a>
            </li>
            )
          }
        </ul>

      </div>
    </div>
  );
}
