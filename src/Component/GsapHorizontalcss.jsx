import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "../App.css";
import styles from './style'

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger)

export default function FsapHorizontalcss() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <div className="flex flex-col justify-center items-center h-[100vh] bg-yellow-400">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <div ref={slider} className={`w-[400vw] h-[100vh] flex flex-wrap`}>
        <div className={`${styles.boxWidth}   bg-blue-500`}>
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className={` ${styles.boxWidth} bg-red-500`}>ONE</div>
        <div className={` ${styles.boxWidth} bg-orange-500`}>TWO</div>
        <div className={` ${styles.boxWidth} bg-purple-500`}>THREE</div>
      </div>
      <div className="flex h-[100vh] bg-yellow-400">Last Container</div>
    </div>
  );
}
