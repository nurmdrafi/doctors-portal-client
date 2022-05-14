const PrimaryButton = ({ children, ...props }) => {
  return (
    <button
      disabled={props.disabled}
      className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] hover:from-[#0FCFEC] hover:to-[#19D3AE] my-6"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
