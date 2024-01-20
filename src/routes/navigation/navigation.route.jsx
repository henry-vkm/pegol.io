import React from 'react';

import PeGol from '../../assets/PeGol.svg';
import Button from '../../components/button/button.component';

const Navigation = () => {
  return (
    <nav className="grid grid-cols-3 max-w-[1240px] w-full mx-auto justify-between">
      <div>
        <img src={PeGol} alt="PeGol" />
      </div>
      <div className="flex gap-[40px]">
        <div>Our Story</div>
        <div>Location</div>
        <div>What People Say</div>
      </div>
      <div>
        <Button buttonType="orange">View Menu</Button>
        <Button>Login</Button>
      </div>
    </nav>
  )
}

export default Navigation;