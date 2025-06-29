import { ArrowUp, LogIn, PanelLeft, Search, Settings2 } from "lucide-react";

const App = () => {
  return (
    <>
      <div className="flex min-h-screen w-full bg-gradient-to-br from-background to-black text-white">
        <div className="flex w-full max-w-[250px] flex-col items-center justify-between px-4 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <div>
                <PanelLeft size={17} />
              </div>
              <div className="flex-1">
                <h2 className="text-center text-lg font-semibold">T3.chat</h2>
              </div>
            </div>

            <button className="w-full rounded-lg bg-primary/20 px-3 py-2 text-sm hover:bg-primary/50">
              New Chat
            </button>

            <div className="border-border relative flex w-full items-center justify-start border-b-[1px] p-2">
              <Search className="absolute" size={15} />
              <input
                className="w-full border-none bg-transparent pl-6 text-sm font-semibold text-foreground outline-none"
                placeholder="Search your threads"
                type="text"
              />
            </div>
          </div>
          <div className="hover:bg-/40 mb-3 flex w-full items-center justify-start gap-4 rounded-lg px-3 py-4">
            <LogIn size={16} />
            <div className="text-sm text-foreground">LogIn</div>
          </div>
        </div>

        <main className="bg-chat-background mt-3 flex-1 rounded-tl-xl p-4">
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
