import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { catalog, contact, pages } from "../data/content.js";
import { useCart } from "../context/CartContext.jsx";
import Media from "../components/Media.jsx";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import "./Pages.css";

function priceAmount(price) {
  const amount = Number(String(price || "").replace(/[^\d]/g, ""));
  return Number.isFinite(amount) ? amount : 0;
}

function formatPrice(amount) {
  return `₩ ${amount.toLocaleString("ko-KR")}`;
}

function noteLine(item) {
  if (!item.pyramid) return item.notes || "";
  return [item.pyramid.top, item.pyramid.heart, item.pyramid.base]
    .join(" · ")
    .split("·")
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" | ");
}

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { add } = useCart();
  const reduce = usePrefersReducedMotion();
  const item = catalog.find((entry) => entry.id === id);
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);
  const images = item?.gallery?.length
    ? item.gallery
    : item
      ? [{ src: item.src, alt: item.alt }]
      : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    setQty(1);
    setActive(0);
  }, [id]);

  useEffect(() => {
    if (reduce || images.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [reduce, images.length, id]);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  const unit = priceAmount(item.price);
  const total = unit * qty;
  const notes = noteLine(item);
  const title = [item.name, item.product].filter(Boolean).join(" ");
  const photo = images[Math.min(active, images.length - 1)];
  const types = item.group
    ? catalog.filter((entry) => entry.group === item.group)
    : [];

  const putInCart = () => add(item, qty);

  return (
    <section className="page product wrap" aria-labelledby="product-title">
      <div className="product-thumbs" aria-label="상품 이미지">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={index === active ? "is-selected" : ""}
            aria-pressed={index === active}
            aria-label={image.alt}
            onClick={() => setActive(index)}
          >
            <Media src={image.src} alt="" placeholder={item.placeholder} fit="cover" />
          </button>
        ))}
      </div>

      <div className="product-visual" key={photo.src}>
        <Media src={photo.src} alt={photo.alt} placeholder={item.placeholder} fit="contain" priority />
      </div>

      <div className="product-copy">
        <h1 id="product-title">{title}</h1>
        {item.price && <p className="product-price">{item.price}</p>}
        {notes && <p className="product-accords">{notes}</p>}

        {item.pyramid && (
          <dl className="product-pyramid">
            <div>
              <dt>Top</dt>
              <dd>{item.pyramid.top}</dd>
            </div>
            <div>
              <dt>Middle</dt>
              <dd>{item.pyramid.heart}</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>{item.pyramid.base}</dd>
            </div>
          </dl>
        )}

        {item.description ? (
          <div className="product-family" lang="ko">
            {item.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : (
          item.family && <p className="product-family" lang="ko">{item.family}</p>
        )}

        {types.length > 1 && (
          <div className="product-types">
            <p>다른 타입 보기</p>
            <div className="product-types-row">
              {types.map((type) => (
                <Link
                  key={type.id}
                  to={`/product/${type.id}`}
                  className={type.id === item.id ? "is-selected" : ""}
                  aria-current={type.id === item.id ? "true" : undefined}
                >
                  <img src={type.src} alt="" />
                  <span>{type.typeLabel}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {item.volume && (
          <div className="product-size">
            <p>사이즈</p>
            <button type="button" className="is-selected" aria-pressed="true">
              {item.volume}
            </button>
          </div>
        )}

        <div className="product-qty">
          <p>수량</p>
          <div className="qty-step">
            <button
              type="button"
              aria-label={`${item.name} 하나 빼기`}
              disabled={qty <= 1}
              onClick={() => setQty((value) => Math.max(1, value - 1))}
            >
              −
            </button>
            <span aria-live="polite">{qty}</span>
            <button
              type="button"
              aria-label={`${item.name} 하나 담기`}
              onClick={() => setQty((value) => value + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="product-total">
          <p>총 상품금액</p>
          <p>{item.price ? formatPrice(total) : ""}</p>
        </div>

        <div className="product-actions">
          <button type="button" onClick={putInCart}>
            장바구니에 담기
          </button>
          <button
            type="button"
            className="is-buy"
            onClick={() => {
              putInCart();
              navigate("/cart");
            }}
          >
            구매하기
          </button>
        </div>

        <div className="product-folds">
          <details className="product-fold">
            <summary>
              전성분
              <span aria-hidden="true" />
            </summary>
            <p>
              {notes || item.notes || "향 구성은 준비 중입니다."}
              {" "}
              노트는 콘셉트용이며, 실제 조향 성분으로 확정된 목록이 아닙니다.
            </p>
          </details>
          <details className="product-fold">
            <summary>
              상세정보
              <span aria-hidden="true" />
            </summary>
            <p>
              {[item.product, item.volume, item.family].filter(Boolean).join(" · ")}
            </p>
            {item.notes && <p>{item.notes}</p>}
          </details>
          <details className="product-fold">
            <summary>
              주의사항
              <span aria-hidden="true" />
            </summary>
            <p>
              피부에 이상이 느껴지면 사용을 멈추고 전문가와 상의해 주세요. 이 사이트는 콘셉트 브랜드 프로젝트입니다.
            </p>
          </details>
          <details className="product-fold">
            <summary>
              배송 및 문의
              <span aria-hidden="true" />
            </summary>
            <p>{pages.helpBody}</p>
            <p>{contact.email.href.replace("mailto:", "")}</p>
          </details>
        </div>
      </div>
    </section>
  );
}
