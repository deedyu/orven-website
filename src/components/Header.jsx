import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { brand, shopNav, ui } from "../data/content.js";
import { useAuth } from "../context/AuthContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import { ListIcon, SearchIcon } from "./Icons.jsx";
import "./Header.css";

export default function Header() {
  const { user, logout } = useAuth();
  const { count } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [listOpen, setListOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const listRef = useRef(null);
  const firstItemRef = useRef(null);
  const searchInputRef = useRef(null);
  const listId = useId();
  const searchId = useId();

  useEffect(() => {
    setListOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (listOpen) firstItemRef.current?.focus();
  }, [listOpen]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!listOpen && !searchOpen) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") {
        setListOpen(false);
        setSearchOpen(false);
      }
    };
    const onPointer = (event) => {
      if (!listRef.current?.contains(event.target)) {
        setListOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [listOpen, searchOpen]);

  const onSearch = (event) => {
    event.preventDefault();
    const value = query.trim();
    navigate(value ? `/shop/all?q=${encodeURIComponent(value)}` : "/shop/all");
    setSearchOpen(false);
  };

  return (
    <header
      className="site-header"
      ref={listRef}
    >
      <div className="header-bar">
        <div className="header-left">
          <button
            type="button"
            className="icon-btn"
            aria-expanded={listOpen}
            aria-controls={listId}
            onClick={() => {
              setListOpen((value) => !value);
              setSearchOpen(false);
            }}
          >
            <ListIcon />
            <span>{ui.list}</span>
          </button>
          <nav
            id={listId}
            className={`shop-menu${listOpen ? " is-open" : ""}`}
            aria-label={ui.list}
            aria-hidden={!listOpen}
          >
            {shopNav.map((item, index) => (
              <NavLink
                key={item.id}
                ref={index === 0 ? firstItemRef : undefined}
                to={`/shop/${item.id}`}
                onClick={() => setListOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <Link className="logo" to="/">
          {brand.name}
        </Link>

        <div className="header-right">
          <div className="search-row">
            {searchOpen && (
              <form className="search-form" onSubmit={onSearch}>
                <label className="sr-only" htmlFor={searchId}>
                  {ui.search}
                </label>
                <input
                  id={searchId}
                  ref={searchInputRef}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={ui.search}
                />
                <button type="submit">{ui.searchSubmit}</button>
              </form>
            )}
            <button
              type="button"
              className="icon-btn"
              aria-expanded={searchOpen}
              aria-controls={searchId}
              onClick={() => {
                setSearchOpen((value) => !value);
                setListOpen(false);
              }}
            >
              <SearchIcon />
              <span className="sr-only">{ui.search}</span>
            </button>
          </div>

          <nav className="header-utils" aria-label="Account">
            {user ? (
              <button type="button" className="text-btn" onClick={logout}>
                {ui.logout}
              </button>
            ) : (
              <Link to="/login">{ui.login}</Link>
            )}
            <span className="cart-slot">
              <Link to="/cart">{ui.cart}</Link>
              {count > 0 && (
                <Link className="cart-count" to="/cart" aria-label={`장바구니 ${count}개`}>
                  {count}
                </Link>
              )}
            </span>
            <Link to="/help">{ui.help}</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
