
export function Response({ response}: {response: string}) {
  
  return (
    <textarea className="border-[1px] border-gray-300 rounded-md p-3 m-0" defaultValue={response} rows={100} cols={100}>
    </textarea>

  );
  
}
