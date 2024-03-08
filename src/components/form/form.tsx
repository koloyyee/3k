export const Form = ({ children, ...props }) => {
  return (
    <form className="flex flex-col mt-5 min-w-[70vw]" {...props} noValidate>
      {children}
    </form>
  );
};