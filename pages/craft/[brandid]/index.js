// File: pages/craft/[brandid]/index.js
import { BTN_LINK } from "../../../components/ui/btn";
import { useRouter } from "next/router";

// Fetch all brands
async function fetchBrands() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}brands/`
  );
  const brands = await res.json();
  console.log("brands");
  console.log(brands.data);
  return brands.data;
}

// Fetch a specific brand
async function fetchBrand(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}brands/${id}`
  );
  const brand = await res.json();

  return brand.data;
}

const BrandIndex = ({ brand }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <BrandInfo brand={brand} />;
};

export default BrandIndex;

export async function getStaticPaths() {
  const brands = await fetchBrands();

  const paths = brands.map((brand) => ({
    params: { brandid: brand.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const brand = await fetchBrand(params.brandid);

  return { props: { brand }, revalidate: 10 };
}

const BrandInfo = (props) => {
  const {} = props;
  const router = useRouter();
  console.log(router.query.brandid);
  console.log(props.brand.attributes.campaigns.data);
  return (
    <>
      <h1>Brand</h1>
      <h3>{props.brand.attributes.Name}</h3>

      {props.brand.attributes.campaigns.data.map((Campaign, i) => {
        return (
          <div key={i}>
            <BTN_LINK
              HREF={`/craft/${router.query.brandid}/${Campaign.id}`}
              LABEL={`View`}
            />
            {Campaign.attributes.Name}
          </div>
        );
      })}
    </>
  );
};
