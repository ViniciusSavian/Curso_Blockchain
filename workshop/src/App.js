import React from "react";
import Input from "./components/Input";
function App() {
  return (
    <div className="flex min-h-screen w-full h-full items-center justify-center">
      <div className="bg-red-600 w-5/6">
        <p>
          receba!!!!!!!!
        </p>
        <p>
          para receber sua nft!!!
        </p>

        <form className="flex flex-col mt-8 p-10">
          <Input description="digite sua idade" label="vinicius" placeholder="19"type="number"/>
          <Input description="digite sua idade" label="vinicius" placeholder="vinicius@email"/>
          <Input description="digite sua idade" label="vinicius" placeholder="vinicius"/>
        </form>
      </div>
      {/* <Input/> */}
    </div>
  );
}

export default App;
