import { useWizard } from "react-use-wizard";

export function StepperFooter() {
  const {
    nextStep,
    previousStep,
    isLoading,
    activeStep,
    stepCount, // total count
    isLastStep,
    isFirstStep,
  } = useWizard();

  const range = Array.from({ length: stepCount }, (_, i) => i + 1);
  const steps = range.map((index) => {
    const baseStyle = "rounded-full w-2 h-2";
    return (
      <span
        key={stepCount * index}
        className={
          index - 1 === activeStep
            ? `bg-red-400 ${baseStyle}`
            : `bg-slate-300 ${baseStyle}`
        }
      ></span>
    );
  });

  const btnStyle = (shallDisable: boolean) =>
    shallDisable ? `border-none cursor-not-allowed` : ``;

  return (
    <footer>
      <div className="flex justify-center my-3 gap-3">{steps}</div>
      <div className="flex gap-3 justify-center">
        <button
          className={btnStyle(isFirstStep)}
          onClick={() => previousStep()}
          disabled={isLoading || isFirstStep}
        >
          Prev
        </button>
        {isLastStep ? (
     <></> 
        ) : (
          <button type="button" onClick={() => nextStep()} disabled={isLoading}>
            Next
          </button>
        )}
      </div>
    </footer>
  );
}
