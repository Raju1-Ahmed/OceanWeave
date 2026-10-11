import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://oceanwave.com.bd";
const SITE_NAME = "Ocean Wave";
const SOCIAL_IMAGE = `${SITE_URL}/Assets/oceanweavlogo.png`;
const DEFAULT_DESCRIPTION =
  "Ocean Wave is a Bangladesh garment buying house and apparel sourcing partner delivering quality clothing, ethical production, and reliable global supply solutions.";

const pageDetails = {
  "/": ["Ocean Wave | Garment Buying House & Apparel Sourcing in Bangladesh", DEFAULT_DESCRIPTION, "garment buying house Bangladesh, apparel sourcing, clothing manufacturer, textile sourcing"],
  "/about": ["About Ocean Wave | Ethical Apparel Sourcing Partner", "Discover Ocean Wave's garment sourcing experience, quality standards, ethical production values, and global apparel supply capabilities.", "about Ocean Wave, ethical garment sourcing, sustainable apparel supplier"],
  "/contractPage": ["Contact Ocean Wave | Garment Sourcing & Production", "Connect with Ocean Wave for apparel sourcing, garment production, quality control, compliance, and international buying house services.", "contact garment buying house, apparel sourcing Bangladesh, garment production contact"],
  "/productionPage": ["Garment Production Services | Ocean Wave Bangladesh", "Explore Ocean Wave's garment production, textile sourcing, quality assurance, compliance, and apparel manufacturing services for global brands.", "garment production Bangladesh, apparel manufacturing, textile production services"],
  "/kids": ["Kidswear Manufacturer & Sourcing | Ocean Wave", "Source comfortable, safe, and quality kidswear from Ocean Wave's trusted Bangladesh garment manufacturing network.", "kidswear manufacturer, children's clothing supplier, kids apparel sourcing"],
  "/Womenswear": ["Womenswear Manufacturer & Sourcing | Ocean Wave", "Find dependable womenswear sourcing and garment manufacturing solutions for quality fashion collections through Ocean Wave.", "womenswear manufacturer, women's clothing supplier, womenswear sourcing"],
  "/MenWear": ["Menswear Manufacturer & Sourcing | Ocean Wave", "Source quality menswear and fashion garments through Ocean Wave's reliable apparel production and buying house network.", "menswear manufacturer, men's clothing supplier, menswear sourcing"],
  "/Sportswear": ["Sportswear Manufacturer & Sourcing | Ocean Wave", "Source performance sportswear and activewear with Ocean Wave's quality-focused garment production partners.", "sportswear manufacturer, activewear supplier, performance apparel sourcing"],
  "/DenimJacket": ["Denim Jacket Manufacturer & Sourcing | Ocean Wave", "Explore quality denim jacket sourcing and apparel manufacturing solutions from Ocean Wave for global fashion brands.", "denim jacket manufacturer, denim apparel supplier, denim sourcing Bangladesh"],
  "/CasualShirt": ["Casual Shirt Manufacturer & Sourcing | Ocean Wave", "Source quality casual shirts and everyday apparel from Ocean Wave's trusted Bangladesh garment production partners.", "casual shirt manufacturer, shirt supplier Bangladesh, casualwear sourcing"],
  "/Hoddie": ["Hoodie Manufacturer & Sourcing | Ocean Wave", "Source quality hoodies, sweatshirts, and fleece apparel through Ocean Wave's dependable garment manufacturing network.", "hoodie manufacturer, sweatshirt supplier, fleece apparel sourcing"],
  "/Nightwear": ["Nightwear Manufacturer & Sourcing | Ocean Wave", "Source comfortable, high-quality nightwear and sleepwear through Ocean Wave's apparel sourcing and production network.", "nightwear manufacturer, sleepwear supplier, nightwear sourcing Bangladesh"],
};

const SEO = () => {
  const { pathname } = useLocation();
  const [title, description, keywords] = pageDetails[pathname] || pageDetails["/"];
  const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: SOCIAL_IMAGE,
    description: DEFAULT_DESCRIPTION,
    areaServed: "Worldwide",
    industry: "Apparel and garment sourcing",
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={SOCIAL_IMAGE} />
      <meta property="og:image:alt" content="Ocean Wave garment sourcing logo" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
      <meta name="twitter:image:alt" content="Ocean Wave garment sourcing logo" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
