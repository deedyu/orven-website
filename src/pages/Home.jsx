import Hero from "../components/Hero.jsx";
import NewCollection from "../components/NewCollection.jsx";
import ProductRail from "../components/ProductRail.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <NewCollection />
      <ProductRail id="best" titleId="best-title" title="Best" tag="best" label="베스트" limit={5} />
      <ProductRail
        id="new"
        titleId="new-title"
        title="New Arrivals"
        tag="new"
        label="신상품"
        rows={2}
      />
    </>
  );
}
