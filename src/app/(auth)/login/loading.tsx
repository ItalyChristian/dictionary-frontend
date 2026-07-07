import Image from "next/image";
import { flexColumnCenter } from "@/styles/components/gridSystem.css";
import assistantVector from "@/assets/images/assistant-vector.png";
import { loadingimage } from "./styles.css";

export default function LoginLoading() {
  return (
    <div className={flexColumnCenter} style={{ minHeight: "100vh" }}>
      <h1>Don't worry, we're getting everything ready for you...</h1>
      <Image
        src={assistantVector}
        alt="Virtual assistant Helena waving"
        className={loadingimage}
        sizes="(max-width: 1024px) 0px, 50vw"
      />
    </div>
  );
}
