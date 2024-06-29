import s from "@/sass/layouts/functionalityOffer.module.scss";
import Image from "next/image";

// const FunctionalityOffer = () => {
//   const triangleCount = 12;

//   return (
//     <section>
//       <div className={s.container}>
//         <ul className={s.list}>
//           {Array.from({ length: triangleCount }, (_, index) => (
//             <li key={index} className={s.list__item}>
//               <button className={s.button}>
//                 <span className={s.span}>{index + 1}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default FunctionalityOffer;

// components/Wheel.js

const FunctionalityOffer = () => {
  const segmentCount = 12;

  return (
    <div className={s.wheelContainer}>
      <div className={s.wheel}>
        {Array.from({ length: segmentCount }, (_, i) => (
          <div key={i}>
            <div>
              {i !== 0 && (
                <p className={`${s.segment} ${s[`segment${i}`]}`}></p>
              )}
            </div>
            {i === 11 && <div className={s.content}>+11</div>}
          </div>
        ))}
      </div>
      <div className={s.centerCircle}>
        {Array.from({ length: 4 }, (_, i) => (
          <button
            key={i}
            className={`${s.triangleButton} 
        ${s[`triangle${i}`]}
            `}
          ></button>
        ))}
      </div>
      <div className={s.pointer}></div>
    </div>
  );
};

export default FunctionalityOffer;
