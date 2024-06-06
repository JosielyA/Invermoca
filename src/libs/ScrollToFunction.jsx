export const scrollToSection = (elementRef) => {
  elementRef.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
