import {
  ArrowUp,
  ChevronDown,
  Code,
  Globe,
  GraduationCap,
  LogIn,
  Newspaper,
  PanelLeft,
  Paperclip,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react";

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

        <main className="bg-chat-background mt-3 flex flex-1 flex-col items-center justify-between rounded-tl-xl p-4">
          <div className="left-0 flex w-full items-center justify-end">
            <Settings2 size={19} />
          </div>

          <div className="flex w-full max-w-4xl flex-1 flex-col items-start justify-center gap-5 px-28">
            <div>
              <h2 className="text-3xl font-bold text-primary-foreground">
                How can I help you?
              </h2>
            </div>

            <div>
              <div className="flex items-center justify-start gap-4">
                <div className="flex items-center justify-center gap-2 rounded-3xl border border-solid border-secondary-foreground/10 bg-secondary/30 px-5 py-2 text-sm text-primary-foreground">
                  <Sparkles size={15} />
                  <span className="text-sm">Create</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-3xl border border-solid border-secondary-foreground/10 bg-secondary/30 px-5 py-2 text-sm text-primary-foreground">
                  <Newspaper size={15} />
                  <span className="text-sm">Explore</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-3xl border border-solid border-secondary-foreground/10 bg-secondary/30 px-5 py-2 text-sm text-primary-foreground">
                  <Code size={15} />
                  <span className="text-sm">Code</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-3xl border border-solid border-secondary-foreground/10 bg-secondary/30 px-5 py-2 text-sm text-primary-foreground">
                  <GraduationCap size={15} />
                  <span className="text-sm">Learn</span>
                </div>
              </div>
            </div>
            <div className="text-md w-full space-y-4 font-light">
              <div className="border-border border-b-[1px] p-2">
                How does AI Work?
              </div>
              <div className="border-border border-b-[1px] p-2">
                Are black holes real?
              </div>
              <div className="border-border border-b-[1px] p-2">
                How many Rs are in the word "strawberry"?
              </div>
              <div className="border-border border-b-[1px] p-2">
                What is the meaning of life?
              </div>
            </div>
          </div>

          <div className="border-border bg-chat-background w-full max-w-3xl rounded-xl border-2 px-3 pb-2 pt-4 shadow-xl">
            <textarea
              rows={3}
              className="w-full resize-none border-none bg-transparent text-sm outline-none"
              placeholder="Type your message here..."
            />
            <div className="flex w-full items-center justify-between">
              <div className="flex w-full items-center justify-start gap-3">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm tracking-tighter">
                    Gemini 2.5 Flash
                  </span>
                  <ChevronDown size={10} />
                </div>

                <div className="flex items-center justify-center gap-2 rounded-3xl border border-solid border-secondary-foreground/10 bg-secondary/30 px-2 py-1 text-primary-foreground">
                  <Globe size={16} />
                  <span className="text-sm">Search</span>
                </div>
                <div className="flex items-center justify-center rounded-3xl border border-solid border-secondary-foreground/10 bg-secondary/30 px-2 py-2">
                  <Paperclip size={16} />
                </div>
              </div>

              <div className="rounded-lg bg-primary/20 px-2 py-2 text-foreground/40">
                <ArrowUp size={18} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
