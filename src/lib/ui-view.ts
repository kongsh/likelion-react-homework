export const getUIView = () => {
  const searchParams = new URLSearchParams(location.search);
  const uiView = searchParams.get("view") ?? "week1";
  return uiView;
};
