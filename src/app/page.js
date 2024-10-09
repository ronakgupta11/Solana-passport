import FeaturesBentoGrid from "@/components/app/FeatureBentoGrid";
import  FooterPage  from "@/components/app/Footer";
import Hero from "@/components/app/Hero";
import Navbar from "@/components/app/Navbar";


export default function Home() {
  return (
    <>
<div>
  <Navbar/>
  <Hero/>
  <FeaturesBentoGrid/>
</div>
<FooterPage/>

</>

  );
}
