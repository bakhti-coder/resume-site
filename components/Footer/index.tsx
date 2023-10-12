import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        data-wow-delay=".1s"
      >
        <div className="bg-primary/10 py-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white">
              Ali Torabekov
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
