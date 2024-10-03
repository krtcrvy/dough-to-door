import { Link } from "react-router-dom";

import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="flex items-center justify-between border-stone-200 border-b bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Dough to Door
      </Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
