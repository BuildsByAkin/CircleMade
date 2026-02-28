import { Button } from './ui/Button';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <span className="logo-text">CircleMade</span>
        </div>
        <Button variant="secondary" size="md">Request invite</Button>
      </div>
    </header>
  );
}
