import React, { useEffect, useState } from 'react';
import "./ScrollToTop.css"
type Props = {
  logo: string
  size: string
}
const ScrollToTop = ({ logo, size }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      <button
        onClick={scrollToTop}
        className={isVisible ? 'o-100 br-100 bn btn' : 'o-0'}
      >
        <img src={logo} width={size} height={size} alt="icon to top" />
      </button>
    </div>
  );
}

export default ScrollToTop;
