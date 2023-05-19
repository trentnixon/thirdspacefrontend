// File: pages/craft/[brandid]/index.js
import { BTN_LINK } from "../../../components/ui/btn";
import { useRouter } from "next/router";
import CraftShell from "../../../components/template/CraftShell";
import { H1, H2, H3, P } from "../../../components/ui/Client_type";
import { CampaignCard } from "../../../components/Pages/Craft/CampaignCards.js/card";
import { SimpleGrid } from "@mantine/core";
// Fetch all brands
async function fetchBrands() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}brands/`);
  const brands = await res.json();
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
  const { brand } = props;
  const router = useRouter();

  return (
    <CraftShell>
      <H1>Brand</H1>
      <H3>{brand.attributes.Name}</H3>
      <P>{brand.attributes.Description}</P>
      <H2>Campaigns</H2>
      <SimpleGrid cols={2} mt={15}>
        {brand.attributes.campaigns.data.map((Campaign, i) => {
          return <CampaignCard key={i} Campaign={Campaign} />;
        })}
      </SimpleGrid>
    </CraftShell>
  );
};
