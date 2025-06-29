import { ArrowUp, PanelLeft, Settings2 } from "lucide-react";

const App = () => {
  return (
    <>
      <div className="flex min-h-screen w-full">
        <aside className="border-2">
          <div>
            <PanelLeft />
          </div>
          <h2>T3.chat</h2>
          <button>New Chat</button>
          <input className="border-2" type="text" />
        </aside>

        <main className="flex-1 border-2">
          <div>
            <div>
              <h2 className="text-3xl">How can I help you </h2>
            </div>

            <button className="">new chat</button>
            <div>
              <Settings2 />
            </div>

            <div>
              <ul>
                <li>Create</li>
                <li>Explore</li>
                <li>Code</li>
                <li>Learn</li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li>How does AI Work?</li>
              <li>Are black holes real</li>
              <li>How many Rs are in the word "strawberry"</li>
              <li>What is the meaning of life</li>
            </ul>
          </div>

          <div>Make sure you agree to our Terms and our Privacy Policyk</div>

          <div>
            <div>Search bar</div>
            <input type="text" />
            <ArrowUp />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
