import Image from "next/image";
import assistantVector from "@/assets/images/assistant-vector.png";
import * as styles from "./styles.css";

export const LoginPageLoading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Don't worry, <br /> we're getting everything ready for you...
        </h1>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={assistantVector}
          alt="Virtual assistant Helena waving"
          className={styles.loadingImage}
          priority
          sizes="(max-width: 1024px) 0px, 50vw"
        />
      </div>
    </div>
  );
};
