export const scrollIntoViewHelper = (errors) => {
  const firstError = Object.keys(errors)[0];
  let el = document.querySelector(`[name="${firstError}"]`);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};
