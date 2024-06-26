import FunctionalityOffer from "@/components/FunctionalityOffer";
import WhyUs from "@/components/WhyUs";
import s from "@/sass/layouts/home.module.scss";

export default function Home() {
  return (
    <section>
      <div className={`${s.container}  `}>
        <WhyUs />
        <FunctionalityOffer />
      </div>
    </section>
  );
}
